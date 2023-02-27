<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //Register
    public function register(Request $request){
        try {
            $user = User::create([
                'name'=>$request->input('name'),
                'email'=>$request->input('email'),
                'password'=>Hash::make($request->input('password'))
            ]);
    
            $token = $user->createToken('access_token')->plainTextToken;
    
            return response()->json([
                'message'=>'User registration successful !',
                'user'=>$user,
                'token'=>$token
            ],200);
        } catch (\Exception $e) {
            return response()->json([
                'error'=>$e->getMessage(),
                'message'=>'Something went wrong for user registration, Try again !'
            ]);
        }

    }
    //Login
    public function login(Request $request){
        try {
            $user = User::where('email','=', $request->input('email'))->firstOrFail();

            if(Hash::check($request->input('password'), $user->password)){
                $token = $user->createToken('access_token')->plainTextToken;
    
                return response()->json([
                    'message'=>'User login successful !',
                    'user'=>$user,
                    'token'=>$token
                ],200);
            }

            return response()->json([
                'message'=>'Something went wrong, try again !'
            ]);
    

        } catch (\Exception $e) {
            return response()->json([
                'error'=>$e->getMessage(),
                'message'=>'Something went wrong for user login, Try again !'
            ]);
        }

    }
}
