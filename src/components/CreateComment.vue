<script>
import  { v4 as uuidv4 } from "uuid";
export default {
    name:'CreateComment',
    props:{
        restaurantId: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            text: ''
        }
    },
    methods:{
        handleSubmit(){
            console.log('form submit',this.text);
            // TODO: 向 API 發送 POST 請求
            // 伺服器新增 Comment 成功後...
            this.$emit('after-create-comment',{  //發送一個事件，後面可以帶一個參數
                commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
                restaurantId: this.restaurantId,
                text: this.text
            })

            this.text =''  // 將表單內的資料清空
        },
    }

}
</script>

<template>
    <form @submit.enter.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>


<style>

</style>