<?php
namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name'        => 'Product 1',
            'description' => 'This is a sample product.',
            'price'       => 19.99,
            'image_url'   => 'https://example.com/image1.jpg',
        ]);

        Product::create([
            'name'        => 'Product 2',
            'description' => 'Another sample product.',
            'price'       => 29.99,
            'image_url'   => 'https://example.com/image2.jpg',
        ]);
    }
}