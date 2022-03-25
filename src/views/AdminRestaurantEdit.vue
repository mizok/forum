<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

const dummyData = {
    "restaurant": {
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
    }
}
export default {
    name: 'AdminRestaurantEdit',
    components: {
        AdminRestaurantForm
    },
    data(){
        return{
            restaurant: {
                "id": -1,
                "name": '',
                "tel": '',
                "address": '',
                "opening_hours": '',
                "description": '',
                "image": '',
                "CategoryId": '',
            }
        }
    },

    created(){
        const { id } = this.$route.params
        this.fetchRest(id)
    },
    methods: {
        fetchRest(restaurantId){
            console.log('restaurantId', restaurantId);
            const {restaurant } = dummyData
            const {id, name, tel, address, opening_hours, description,image,CategoryId } = restaurant
            this.restaurant = {
                ...this.restaurant,
                id,
                name,
                tel,
                address,
                opening_hours,
                description,
                image,
                CategoryId
            }
        },
        handleAfterSubmit (formData) {
            // 透過 API 將表單資料送到伺服器
            for (let [name, value] of formData.entries()) {
                console.log(name + ': ' + value)
            }
        },
    },
}
</script>

<template>
    <div class="container py-5">
        <AdminRestaurantForm 
            @after-submit="handleAfterSubmit"
            :initial-restaurant="restaurant"
        />
  </div>
</template>


<style>

</style>