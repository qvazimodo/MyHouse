<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Orchestra\Parser\Xml\Facade as XmlParser;

class NewsCreateController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        $xml = XmlParser::load('https://lenta.ru/rss');

        $data = $xml->parse([
            'title' => ['uses' => 'channel.title'],
            'link' => ['uses' => 'channel.link'],
            'description' => ['uses' => 'channel.description'],
            'image' => ['uses' => 'channel.image.url'],
            'news' => ['uses' => 'channel.item[title,link,guid,description,pubDate,enclosure::url,category]'],
        ]);


        foreach ($data['news'] as $news) {

            News::query()->firstOrCreate(
                ['title' => $news['title']],
                [
                    'content' => $news['description'],
                    'link' => $news['link'],
                    'image' => $news['enclosure::url'],
                    //'created_at' => $news['pubDate'],
                    //'updated_at' => $news['pubDate'],


                ]
            );
        };
    }
}
