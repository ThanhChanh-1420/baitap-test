<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';
    protected $fillable = [
        'book_code',
        'book_name',
        'book_author',
        'book_date',
        'book_number',
        'book_summary',
    ];
}
