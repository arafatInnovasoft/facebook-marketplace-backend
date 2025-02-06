<?php
namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    public function singleProduct($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }
}