<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "木木便當",
        "tel": "275.597.3899 x544",
        "address": "500 彰化市建國北路120號",
        "opening_hours": "08:00",
        "description": "各種素食美味料理唷~以木頭裝潢的溫暖風格，素食的變化讓人可以開心吃素",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.44538201517165",
        "viewCounts": 1,
        "createdAt": "2022-03-09T19:19:25.000Z",
        "updatedAt": "2022-03-21T11:57:54.357Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-03-09T19:19:25.000Z",
            "updatedAt": "2022-03-09T19:19:25.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
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
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
    name: 'Restaurant',
    components: {
        RestaurantDetail,
        RestaurantComments,
        CreateComment,
    },
    data(){
        return{
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                image: '',
                openingHours: '',
                tel: '',
                address: '',
                description: '',
                isFavorited: false,
                isLiked: false
            },
            currentUser: dummyUser.currentUser,
            restaurantComments: [],
        }
    },
    methods: {
        fetchRestaurant (restaurantId) {
            // console.log('fetchRestaurant id: ', restaurantId)
            const { restaurant, isFavorited, isLiked } = dummyData
            const {
            id, 
            name, 
            Category,  
            image, 
            opening_hours,     
            tel, 
            address, 
            description, 
            Comments,
            } = restaurant

            this.restaurant = {
                id,
                name,   
                categoryName: Category.name,
                image,
                openingHours: opening_hours,
                tel,
                address,
                description,
                isFavorited,
                isLiked,
            },
            this.restaurantComments = Comments
        },
        afterDeleteComment (commentId) {
            // 以 filter 保留未被選擇的 comment.id
            this.restaurantComments = this.restaurantComments.filter(
                comment => comment.id !== commentId
            )
        },
        afterCreateComment(payload){
            console.log('payload', payload );
            const { commentId, restaurantId, text } = payload
            this.restaurantComments.push({      // ln109的data
                id: commentId,
                restaurantId: restaurantId,
                User: {
                    id: this.currentUser.id,
                    name: this.currentUser.name
                },
                text,
                createdAt: new Date()
            })
        },
    },

    created(){
        const { id: restaurantId } = this.$route.params
        // console.log(this.$route.params);
        this.fetchRestaurant(restaurantId)
    },
}
</script>

<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
  
</template>


<style>

</style>