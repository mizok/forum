<script>

const DummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Dos Tacos",
            "tel": "03 831 1733",
            "address": "花蓮市復興街92號",
            "opening_hours": "上午11:30-下午2:00 晚上6:00-9:00",
            "description": "我們有鐵板法士達,墨西哥捲, 墨西哥小食塔可餅, 獨創炸冰淇淋吃過的人都讚不絕口！寬敞的空間, 熱情洋溢的拉丁美洲音樂, 店內絡繹不絕的外國遊客, 讓您用餐時刻就像身處於國外渡假！Dos Tacos期待您的光臨！",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.83124761215071",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Ms. Scot Ernser",
            "tel": "574-724-1951 x575",
            "address": "23454 Jaycee Path",
            "opening_hours": "08:00",
            "description": "ea veritatis et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.005283348979184",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Jacey Heaney",
            "tel": "177.265.0924 x38305",
            "address": "47107 Kutch Lake",
            "opening_hours": "08:00",
            "description": "Sed repellat in vel qui quas consequatur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.15570782259603",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Jodie Ward MD",
            "tel": "(522) 209-6011 x45394",
            "address": "75864 Powlowski Via",
            "opening_hours": "08:00",
            "description": "Et id ducimus sint quos ut et quod quam. Perspicia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.3520352390874",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Hazel Vandervort",
            "tel": "(187) 412-8585",
            "address": "694 Kovacek Track",
            "opening_hours": "08:00",
            "description": "error modi saepe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.45639889374405",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Mariana Bauch PhD",
            "tel": "(869) 713-0275",
            "address": "26966 Wilkinson Common",
            "opening_hours": "08:00",
            "description": "Veniam quia corrupti dolorem ut ad sapiente tempor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.082761846235482",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Mattie Glover",
            "tel": "814.752.4296 x420",
            "address": "082 Stracke Divide",
            "opening_hours": "08:00",
            "description": "possimus ratione consequatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.8178074931887",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Miss Willie McClure",
            "tel": "1-012-413-4042",
            "address": "057 Samantha Mountain",
            "opening_hours": "08:00",
            "description": "Perferendis exercitationem quo odio ut odio. Ex om",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.93678733974781",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Ms. Abel Senger",
            "tel": "218.280.8348",
            "address": "3705 Beier Manors",
            "opening_hours": "08:00",
            "description": "Quidem voluptatum sint reiciendis explicabo ad qua",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.17320064389546",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Berneice Thompson",
            "tel": "882.940.3144 x64934",
            "address": "092 Waelchi Radial",
            "opening_hours": "08:00",
            "description": "Laudantium id iure fugiat quos. Velit error cupidi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.87968782809877",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
    name: 'RestaurantDashboard',
    data(){
        return{

        }
    },
    

}
</script>

<template>
    <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} }</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} }</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>


<style>

</style>