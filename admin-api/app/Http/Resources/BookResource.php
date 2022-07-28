<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'book_name' => $this->book_name,
            'book_author' => $this->book_author,
            'book_date' => $this->book_date,
            'book_number' => $this->book_number,
            'book_summary' => $this->book_summary,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
