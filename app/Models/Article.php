<?php


namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Article extends Model
{
    // Mass assigned
    protected $fillable = ['title', 'slug', 'description_short', 'description', 'image', 'image_show', 'meta_title', 'meta_description', 'meta_keyword', 'published', 'created_by', 'modified_by'];

    // Mutators
    public function setSlugAttribute($value) {
        $this->attributes['slug'] = Str::slug( mb_substr($this->title, 0, 40) . "-" . \Carbon\Carbon::now()->format('dmyHi'), '-');
    }

    // Polymorphic relation with categories
    public function categories()
    {
        return $this->morphToMany('App\Models\Category', 'categoryable');
    }
}
