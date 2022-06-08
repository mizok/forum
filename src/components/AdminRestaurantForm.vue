<script>
const dummyData = {
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
    ]
}
export default {
    name: 'AdminRestaurantForm',
    props:{
        initialRestaurant:{
            type: Object,
            default: () => {
                return{
                    "name": '',
                    "CategoryId": '',
                    "tel": '',
                    "address": '',
                    "description": '',
                    "image": '',
                    "opening_hours": '',
                }
            }
        }
    },
    data(){
        return{
            restaurant: {
                ...this.initialRestaurant
            },
            categories: []
        }
    },
    methods:{
        fetchCategories(){
            this.categories = dummyData.categories
        },
        handleFileChange(e){
            // console.log(e.target.files);
            const { files } = e.target

            if (files.length === 0) {
                // 使用者沒有選擇上傳的檔案
                this.restaurant.image = ''
            } else {
                // 否則產生預覽圖
                const imageURL = window.URL.createObjectURL(files[0])
                this.restaurant.image = imageURL
            }
        },
        handleSubmit(e){
            const form = e.target  // <form></form>
            // console.log(form);
            const formData = new FormData(form)
            // for (let [name, value] of formData.entries()) {
            //     console.log(name + ': ' + value)
            // }
            this.$emit('after-submit', formData)
        },
    },
    created(){
        this.fetchCategories()
    }

}
</script>

<template>
    <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">姓名</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">餐廳類別</label>
      <select
        id="categoryId"
        v-model="restaurant.CategoryId"
        class="form-control"
        name="CategoryId"
        required
      >
        <option
          selected
          disabled
        >
          --請選擇--
        </option>

        <option 
          v-for="category in categories"
          :key="category.id"
          :value="category.id">
            {{ category.name }}
        </option>

      </select>
    </div>



    <div class="form-group">
      <label for="tel">電話</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">地址</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">營業時間</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">簡介</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="400"
        height="400"
      >
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>


<style>

</style>