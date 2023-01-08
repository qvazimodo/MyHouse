<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index(): View
    {
        //Получаем всех пользователей, исключая текущего, чтобы случайно не лишить его прав администратора
        $users = User::query()->where('id', '!=', Auth::id())->orderBy('updated_at', 'DESC')->paginate(5);
        return view('admin.users', ['users' => $users]);
    }

    public function toggleAdminRights(User $user)
    {
        if ($user->id != Auth::id()) {
            $user->is_admin = !$user->is_admin;
            $user->save();
            return redirect(route('admin.users.index'))
                ->with('success', $user->is_admin ? "Права администратора предоставлены успешно!" : "Права администратора удалены успешно!");
        }
        return redirect(route('admin.users.index'))
            ->with('error', "Нельзя лишать активного пользователя прав администратора!");
    }

    public function create()
    {
        $user = new User();
        return view('admin.users.create')->with('user', $user);
    }

    public function store(Request $request, User $user)
    {
        $validated = $this->validate($request, $this->getRules($user->id));
        $user->fill($validated);
        //хэшируем пароль перед внесением в БД
        $user->password = Hash::make($validated['password']);
        //Преобразуем чекбокс в Boolean
        $user->is_admin = isset($validated['is_admin']);

        if ($user->save()) {
            return redirect()->route('admin.users.index')->with('success', 'Пользователь добавлен успешно!');
        }
        return redirect()->route('admin.users.index')->with('error', 'При добавлении пользователя произошла ошибка!');
    }

    public function edit(User $user)
    {
        return view('admin.users.create')->with('user', $user);
    }

    public function update(Request $request, User $user)
    {
        $validated = $this->validate($request, $this->getRules($user->id));
        $user->fill($validated);
        $user->password = Hash::make($validated['password']);
        $user->is_admin = isset($validated['is_admin']) ? 1 : 0;
        if ($user->save()) {
            return redirect()->route('admin.users.index')->with('success', 'Данные пользователя изменены успешно!');
        }
        return redirect()->route('admin.users.index')->with('error', 'При сохранении изменённых пользователя произошла ошибка!');
    }

    public function destroy(User $user)
    {
        $userName = $user->name;
        if ($user->delete()) {
            return redirect(route('admin.users.index'))
                ->with("success", "Пользователь " . $userName . " удалён успешно!");
        }
    }

    /**Возвращает массив правил валидации
     * @return string[]
     */
    private function getRules($userId): array
    {
        return [
            'name' => 'min:5|max:50|required|unique:users,name,'.$userId,
            'email' => 'required|email|unique:users,email,'.$userId,
            'password' => 'required|min:3|max:20',
            'is_admin' => 'sometimes:in:1'
        ];
    }
}
