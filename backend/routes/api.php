<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Registration
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function () {
    // Route::get('/test',function(){
    //     return response()->json("Testing Pass",200);
    // });
    Route::get('/products',[ProductController::class,'index']);
    Route::post('/product/create',[ProductController::class,'store']);
    Route::get('/product/{id}',[ProductController::class,'show']);
    Route::post('/product/edit/{id}',[ProductController::class,'update']);
    Route::post('/product/delete/{id}',[ProductController::class,'delete']);
});

