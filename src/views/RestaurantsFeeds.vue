
<script>
import NavTabs from "./../components/NavTabs.vue";
import NewestRestaurants from "./../components/NewestRestaurants.vue";
import NewestComments from "./../components/NewestComments.vue";

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "William Larkin DVM",
            "tel": "275.597.3899 x544",
            "address": "80945 Windler Highway",
            "opening_hours": "08:00",
            "description": "nobis",
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
            }
        },
        {
            "id": 2,
            "name": "Corrine O'Kon",
            "tel": "713.594.2006",
            "address": "22769 Erika Pike",
            "opening_hours": "08:00",
            "description": "Deleniti ullam est ut et molestiae. Omnis corporis dolorum sit officiis enim quasi. Quia reiciendis officiis tenetur. Itaque necessitatibus itaque eaque voluptas voluptas ut omnis sequi.",
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
            }
        },
        {
            "id": 3,
            "name": "Ariane Jacobs",
            "tel": "343.114.9111 x82478",
            "address": "2315 Oma Locks",
            "opening_hours": "08:00",
            "description": "Soluta et esse in dolor. Cumque deserunt eveniet quidem veniam velit similique voluptatum dignissimos. Itaque repudiandae recusandae consequatur non eius qui cumque.",
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
            }
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
            }
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
            }
        },
        {
            "id": 6,
            "name": "Emilio Lesch",
            "tel": "768-024-1407",
            "address": "02646 Wyatt Estates",
            "opening_hours": "08:00",
            "description": "Facilis fugiat accusantium ullam quis voluptate aspernatur odit in.\nNisi accusantium occaecati suscipit optio voluptatem assumenda aut mollitia.\nQuisquam nihil voluptatem laudantium.\nNostrum nulla minus.",
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
            }
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
            }
        },
        {
            "id": 8,
            "name": "Russ Walsh",
            "tel": "1-934-176-5394 x2374",
            "address": "84509 Kertzmann Trafficway",
            "opening_hours": "08:00",
            "description": "Eos est suscipit est magni mollitia doloribus minus.",
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
            }
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
            }
        },
        {
            "id": 10,
            "name": "Mona Dibbert",
            "tel": "290.212.9360 x51136",
            "address": "909 Cassandre Ranch",
            "opening_hours": "08:00",
            "description": "Aliquam ut et voluptatum aut.\nPraesentium alias nihil suscipit.\nNon optio vel repellendus velit.\nNihil rerum sed quisquam optio culpa.\nVoluptas dolore libero aliquid omnis veniam sit ut ut.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 8,
            "text": "Quod omnis impedit ipsum quos dicta iure quibusdam.",
            "UserId": 1,
            "RestaurantId": 8,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 8,
                "name": "Russ Walsh",
                "tel": "1-934-176-5394 x2374",
                "address": "84509 Kertzmann Trafficway",
                "opening_hours": "08:00",
                "description": "Eos est suscipit est magni mollitia doloribus minus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.518372220948336",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 29,
            "text": "Dolorem magni et ipsam voluptatem ea enim sit.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 29,
                "name": "Kody Smith",
                "tel": "(612) 072-9487 x8666",
                "address": "018 Rau Lock",
                "opening_hours": "08:00",
                "description": "Et ut asperiores qui qui possimus et impedit.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.5566065723992",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 53,
            "text": "Odio quos quia deserunt dicta ut.",
            "UserId": 1,
            "RestaurantId": 3,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 3,
                "name": "Ariane Jacobs",
                "tel": "343.114.9111 x82478",
                "address": "2315 Oma Locks",
                "opening_hours": "08:00",
                "description": "Soluta et esse in dolor. Cumque deserunt eveniet quidem veniam velit similique voluptatum dignissimos. Itaque repudiandae recusandae consequatur non eius qui cumque.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.880631616194094",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 85,
            "text": "Omnis maxime nesciunt sed.",
            "UserId": 1,
            "RestaurantId": 35,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 35,
                "name": "Dr. Cyrus Lockman",
                "tel": "264.517.8228 x212",
                "address": "146 Dusty Landing",
                "opening_hours": "08:00",
                "description": "Saepe dolorum dolores voluptas. Alias debitis consequatur ratione nemo recusandae aut non. Et harum eum dolorem quis veniam officiis. Molestiae repellendus qui iste dolorem qui. Provident quam rerum a est eum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.358308594832703",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 109,
            "text": "Repudiandae sunt culpa qui id sunt recusandae aliquid voluptas ipsum.",
            "UserId": 1,
            "RestaurantId": 9,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 127,
            "text": "Reprehenderit dolores nihil sed qui nam.",
            "UserId": 1,
            "RestaurantId": 27,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$jHKoX4reZsTkaKGvUMkKOedk0NkK5d6cJMns2XTLLSRPaL2c2kTee",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 27,
                "name": "Demetrius Orn",
                "tel": "(652) 151-3512 x36838",
                "address": "109 Kellie Valley",
                "opening_hours": "08:00",
                "description": "Illum animi libero ut maxime.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.34920580653427",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 7,
            "text": "Asperiores molestiae doloremque iure id delectus laborum.",
            "UserId": 2,
            "RestaurantId": 7,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QoWqIIvJjN9k2junMMeHPuC2HXgCd0SB4QSBDl7YBLXJOLEh3PDTK",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 24,
            "text": "Reiciendis qui nulla quia.",
            "UserId": 2,
            "RestaurantId": 24,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QoWqIIvJjN9k2junMMeHPuC2HXgCd0SB4QSBDl7YBLXJOLEh3PDTK",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 24,
                "name": "Judah Bins",
                "tel": "472-256-6210 x3992",
                "address": "85360 Jerry Plaza",
                "opening_hours": "08:00",
                "description": "Omnis nulla occaecati fugit odio. Doloremque et expedita ut. Consequatur delectus corrupti explicabo nihil sunt sit. Maxime natus est reiciendis quaerat. Vel est doloremque adipisci facilis. Perferendis molestiae optio dicta iure repellendus facilis officiis.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.135554683705585",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 44,
            "text": "Voluptates harum vel.",
            "UserId": 2,
            "RestaurantId": 44,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QoWqIIvJjN9k2junMMeHPuC2HXgCd0SB4QSBDl7YBLXJOLEh3PDTK",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 64,
            "text": "Veniam totam a repudiandae odio.",
            "UserId": 2,
            "RestaurantId": 14,
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QoWqIIvJjN9k2junMMeHPuC2HXgCd0SB4QSBDl7YBLXJOLEh3PDTK",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z"
            },
            "Restaurant": {
                "id": 14,
                "name": "Wallace Carter I",
                "tel": "(178) 373-1204",
                "address": "6981 Wintheiser Ports",
                "opening_hours": "08:00",
                "description": "Asperiores libero quae corporis.\nConsectetur sint nihil necessitatibus et voluptas exercitationem officia et deleniti.\nVoluptatem repellat rem veniam cumque nam quisquam qui ut in.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.79050816688853",
                "viewCounts": 0,
                "createdAt": "2022-03-09T19:19:25.000Z",
                "updatedAt": "2022-03-09T19:19:25.000Z",
                "CategoryId": 1
            }
        }
    ]
}

export default {
    name: 'RestaurantsFeeds',
    components:{
        NavTabs,
        NewestRestaurants,
        NewestComments,
    },
    data(){
        return{
            restaurants: [],
            comments: [],
        }
    },
    methods: {
        fetchseeds(){
            this.restaurants = dummyData.restaurants
            this.comments = dummyData.comments.filter(item => item.Restaurant && item.text)
        },
    },
    created(){
        this.fetchseeds()
    },
}
</script>

<template>
    <div class="container py-5">
        <NavTabs />
        <h1 class="mt-5">
        最新動態
        </h1>
        <hr>
        <div class="row">
        <div class="col-md-6">
            <h3>最新餐廳</h3>
            <!-- 最新餐廳 NewestRestaurants -->
            <NewestRestaurants :restaurants="restaurants" />

        </div>
        <div class="col-md-6">
            <!-- 最新評論 NewestComments-->
            <h3>最新評論</h3>
            <NewestComments :comments="comments"/>
        </div>
        </div>
  </div>
</template>


<style>

</style>