<script>

const DummyData = {
    "restaurant": {
        "id": 1,
        "name": "Dos Tacos",
        "tel": "03 831 1733",
        "address": "花蓮市復興街92號",
        "opening_hours": "08:00",
        "description": "我們有鐵板法士達,墨西哥捲, 墨西哥小食塔可餅, 獨創炸冰淇淋吃過的人都讚不絕口！寬敞的空間, 熱情洋溢的拉丁美洲音樂, 店內絡繹不絕的外國遊客, 讓您用餐時刻就像身處於國外渡假！Dos Tacos期待您的光臨！",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.44538201517165",
        "viewCounts": 1,
        "createdAt": "2022-03-09T19:19:25.000Z",
        "updatedAt": "2022-03-21T11:57:54.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "墨西哥料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Eum atque aspernatur accusamus earum quod.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$c3jNiAVhNgR1/9yADnE3EeegE0zywnmwjm7TBFPtBWoLY71ndlHNK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-09T19:19:25.000Z",
                    "updatedAt": "2022-03-09T19:19:25.000Z"
                }
            },
            {
                "id": 51,
                "text": "Maiores eaque nisi.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$c3jNiAVhNgR1/9yADnE3EeegE0zywnmwjm7TBFPtBWoLY71ndlHNK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-09T19:19:25.000Z",
                    "updatedAt": "2022-03-09T19:19:25.000Z"
                }
            },
            {
                "id": 101,
                "text": "Consequatur adipisci dolores ad fuga nihil ratione.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$c3jNiAVhNgR1/9yADnE3EeegE0zywnmwjm7TBFPtBWoLY71ndlHNK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-03-09T19:19:25.000Z",
                    "updatedAt": "2022-03-09T19:19:25.000Z"
                }
            }
        ]
    }
}

export default {
    name: 'RestaurantDashboard',
    data(){
        return{
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                commentsLength: 0,
                viewCounts: 0
            },
            isLoading: true
        }
    },
    methods:{
        fetchRest(){
            const { id, name, tel, address, viewCounts, Category, Comments } = DummyData.restaurant
            this.restaurant = {
                ...this.restaurant,
                id,
                name,
                tel,
                address,
                categoryName:  Category ? Category.name : '未分類',
                commentsLength: Comments.length,
                viewCounts
            }
        },
    },
    created(){
        this.fetchRest()
    }
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
      <li>電話： {{ restaurant.tel }} </li>
      <li>地址： {{ restaurant.address }} </li>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
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
    .badge{
        color: #555;
    }
</style>