<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BookManagementController extends Controller
{
    public function indexPaginate()
    {
        $books = Book::paginate(3);
        // return $this->sendResponse(BookResource::collection($books), 'Index Book Successful');
        return response()->json([
            'status' => 200,
            'books' => $books
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();
        // return $this->sendResponse(BookResource::collection($books), 'Index Book Successful');
        return response()->json([
            'status' => 200,
            'books' => $books
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $books = new Book();
        $books->book_code = 'MH-' . $request->input('book_code');
        $books->book_name = $request->input('book_name');
        $books->book_author = $request->input('book_author');
        $books->book_date = $request->input('book_date');
        $books->book_number = $request->input('book_number');
        $books->book_summary = $request->input('book_summary');
        $books->save();

        return response()->json([
            'status' => 200,
            'message' => 'Book Added Successfullyt'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $books = Book::find($id);
        return response()->json([
            'status' => 200,
            'books' => $books
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $books = Book::findOrFail($id);
        $books->book_code = 'MH-' .$request->input('book_code');
        $books->book_name = $request->input('book_name');
        $books->book_author = $request->input('book_author');
        $books->book_date = $request->input('book_date');
        $books->book_number = $request->input('book_number');
        $books->book_summary = $request->input('book_summary');
        $books->update();

        return response()->json([
            'status' => 200,
            'message' => 'Book Updated Successfullyt'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $books = Book::find($id);
        $books->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Book Delete Successfullyt',
        ]);
    }
}
