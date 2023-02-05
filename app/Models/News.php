<?php


namespace App\Models;


class News
{
    private $news = [
        1 => [
            'id' => 1,
            'title' => 'Новость 1',
            'text' => 'а у нас новость одна и она очень хорошая',
            'isPrivate' => true,
        ],
        2 => [
            'id' => 2,
            'title' => 'Новость 2',
            'text' => 'а тут плохая новость',
            'isPrivate' => false,
        ],
        3 => [
            'id' => 3,
            'title' => 'Новость 3',
            'text' => 'Еще одна новость',
            'isPrivate' => true,
        ],
    ];

    public function getNews()
    {
        return $this->news;
    }

    public function getNewsId($id)
    {
        if (array_key_exists($id, $this->getNews())) {
            return $this->getNews()[$id];
        }

        return null;
    }
}
