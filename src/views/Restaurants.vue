<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills.vue";
import RestaurantsCard from "./../components/RestaurantsCard.vue";
import RestaurantPagination from "./../components/RestaurantPagination.vue";

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "木木便當",
            "tel": "275.597.3899 x544",
            "address": "500 彰化市建國北路120號",
            "opening_hours": "08:00",
            "description": "各種素食美味料理唷~以木頭裝潢的溫暖風格，素食的變化讓人可以開心吃素",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.44538201517165",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Dos Tacos",
            "tel": "03 831 1733",
            "address": "花蓮市復興街92號",
            "opening_hours": "上午11:30-下午2:00 晚上6:00-9:00",
            "description": "我們有鐵板法士達,墨西哥捲, 墨西哥小食塔可餅, 獨創炸冰淇淋吃過的人都讚不絕口！寬敞的空間, 熱情洋溢的拉丁美洲音樂, 店內絡繹不絕的外國遊客, 讓您用餐時刻就像身處於國外渡假！Dos Tacos期待您的光臨！",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.40144439073134",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Ariane Jacobs",
            "tel": "343.114.9111 x82478",
            "address": "2315 Oma Locks",
            "opening_hours": "08:00",
            "description": "Soluta et esse in dolor. Cumque deserunt eveniet q",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.880631616194094",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Lois Feest",
            "tel": "(225) 860-5697",
            "address": "06169 Klein Causeway",
            "opening_hours": "08:00",
            "description": "Impedit tenetur reiciendis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.18829438396634",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Chance Jakubowski",
            "tel": "928.396.7036",
            "address": "848 Luciano Oval",
            "opening_hours": "08:00",
            "description": "Quo commodi quisquam. Vel et aut tempore quisquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.66985270693508",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Emilio Lesch",
            "tel": "768-024-1407",
            "address": "02646 Wyatt Estates",
            "opening_hours": "08:00",
            "description": "Facilis fugiat accusantium ullam quis voluptate as",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.7002456004003843",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Nelda Kovacek",
            "tel": "691.963.3307",
            "address": "470 Effertz Islands",
            "opening_hours": "08:00",
            "description": "et delectus temporibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.9411582497746",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Russ Walsh",
            "tel": "1-934-176-5394 x2374",
            "address": "84509 Kertzmann Trafficway",
            "opening_hours": "08:00",
            "description": "Eos est suscipit est magni mollitia doloribus minu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.518372220948336",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Magdalen Kreiger",
            "tel": "1-260-559-0243",
            "address": "35682 Grady Glen",
            "opening_hours": "08:00",
            "description": "aut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.46806999034407",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Mona Dibbert",
            "tel": "290.212.9360 x51136",
            "address": "909 Cassandre Ranch",
            "opening_hours": "08:00",
            "description": "Aliquam ut et voluptatum aut.\nPraesentium alias ni",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.01737666844907",
            "viewCounts": 0,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
    name: 'Restaurants',
    components:{
        NavTabs,
        RestaurantsCard,
        NavPills: RestaurantsNavPills,
        Pagination: RestaurantPagination,
    },
    data(){
        return{
            restaurants: [],
            categories: [],
            categoryId: -1,
            currentPage: 1,
            totalPage: [],
            previousPage: -1,
            nextPage: -1
        }
    },
    methods:{
        fetchRestaurants(){
            const {        
                restaurants,
                categories,
                categoryId,
                page,
                totalPage,
                prev,
                next } = dummyData
            this.restaurants = restaurants
            this.categories= categories
            this.categoryId = categoryId
            this.currentPage = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next
        },
    },
    created(){
        this.fetchRestaurants()
    }
}
</script>

<template>
    <div class="container py-5">
        <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
        <NavPills :categories="categories" />

    <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantsCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
        />
    </div>
        <!-- 分頁標籤 RestaurantPagination -->
        <Pagination 
         :current-page="currentPage"
         :total-page="totalPage"        
         :previous-page="previousPage"
         :next-page="nextPage"
         :categoryId="categoryId"   
        />
    </div>

</template>


<style>

</style>