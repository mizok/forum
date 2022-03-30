<script>
export default {
    props:{
        initialTop:{
            type: Object,
            required: true,
        }  
    },
    data(){
        return{
          user: this.initialTop
        }
    },
    methods: {
      follow(){
        this.user = {
          ...this.user,
          isFollowed:true
        }
      },
      unfollow(){
        this.user = {
          ...this.user,
          isFollowed:false
        }
      },
    },      
}
</script>

<template>
      <!-- <div class="row text-center"> -->
      <div class="col-3">
        <router-link  :to="{ name:'user', params:{id: user.id} }">
          <img
            src="http://via.placeholder.com/300x300?text=No+Image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數： {{user.FollowerCount}} </span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="unfollow"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="follow"
          >
            追蹤
          </button>
        </p>
      </div>
    <!-- </div> -->
</template>

<style scoped>
  .badge{
    background-color: #d3d3d3;
  }
</style>