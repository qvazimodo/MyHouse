<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class UserProfileController extends Controller
{
    public function index(): View
    {
        $user = Auth::user()->name;
        return view('user.user_profile')->with('user', $user);
    }
}
