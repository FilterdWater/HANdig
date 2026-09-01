<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('about_apps', 'about-apps')->name('about_apps');
    Route::inertia('about_study', 'about-study')->name('about_study');
    Route::inertia('floor_plan', 'floor-plan')->name('floor_plan');
    Route::inertia('help_lines', 'help-lines')->name('help_lines');
    Route::inertia('student_life', 'student-life')->name('student_life');
});

require __DIR__.'/settings.php';
