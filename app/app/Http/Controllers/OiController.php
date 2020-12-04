<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OiController extends Controller
{
    public function index(){
        return view('frontend.index');
    }
}
