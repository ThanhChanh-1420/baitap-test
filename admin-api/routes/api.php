<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookManagementController;
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

Route::get('book', [BookManagementController::class, 'index']); 
Route::get('book-paginate', [BookManagementController::class, 'indexPaginate']);
Route::post('/add-book', [BookManagementController::class, 'store']);
Route::get('/get-book/{id}', [BookManagementController::class, 'show']);
Route::put('/update-book/{id}', [BookManagementController::class, 'update']);
Route::delete('delete-book/{id}', [BookManagementController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
