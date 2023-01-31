<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Seeder;

class EmployeeAdminstratorSeeder extends Seeder
{
    private array $admintstrationPositions = ['директор', 'бухгалтер', 'мастер', 'мастер', 'мастер'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->admintstrationPositions as $position) {
            $employee=new Employee();
            $user = User::factory()->make(['is_admin' => true])->save();
            $employee->user()->associate($user);
            $employee['held_position'] = $position;

            $employee->save();
        }
    }
}
