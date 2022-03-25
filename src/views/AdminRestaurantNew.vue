<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

export default {
    components:{
        AdminRestaurantForm,
    },
    name: 'AdminRestaurantNew',
    methods:{

        handleAfterSubmit(formData){
            // 透過 API 將表單資料送到伺服器
            for (let [name, value] of formData.entries()) {
            console.log(name + ': ' + value)
            }
        },
    },
    created(){

    }

}
</script>

<template>
   <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit"/>
  </div>
</template>

<style>

</style>