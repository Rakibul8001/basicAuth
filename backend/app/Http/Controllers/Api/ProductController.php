<?php

namespace App\Http\Controllers\Api;

use App\Models\Api\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();

        return response()->json([
            'result' => 'success',
            'products' => $products
        ]);
    }

    public function store(Request $request){
        try{
            $product = Product::create($request->all());

            return response()->json([
                'result' => 'success',
                'product' => $product
            ]);

        }catch (\Exception $e){
            return response()->json([
                'result' => 'false',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show($id){
        $product = Product::find($id);

        return response()->json([
            'result' => 'success',
            'product' => $product
        ]);
    }

    public function update(Request $request,$id){
        try{
            $product = Product::findOrFail($id);

            $product->name = $request->name;
            $product->save();

            return response()->json([
                'result' => 'success',
                'product' => $product
            ]);

        }catch (\Exception $e){
            return response()->json([
                'result' => 'false',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function delete($id){
        try{
            $product = Product::findOrFail($id);
            $product->delete();

            return response()->json([
                'result' => 'successfully deleted'
            ]);

        }catch (\Exception $e){
            return response()->json([
                'result' => 'false',
                'error' => $e->getMessage(),
            ]);
        }
    }
}
