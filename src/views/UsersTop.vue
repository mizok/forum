
<script>
import NavTabs from "./../components/NavTabs.vue";

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$aycl7.Xre/XGFVzZ7PPppepyDBALSkZ86bKO1NFYrYRPdmqwaOL6W",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-03-21T04:23:38.000Z",
            "updatedAt": "2022-03-21T04:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$ykKlcpn.yMHFHdVYFoB3HuN1xIO2gybivcgMv/mLkl.5D2Qg4/mr.",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-03-21T04:23:38.000Z",
            "updatedAt": "2022-03-21T04:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$oosr0qPKkuChRHmE0AgHqey0y3F1WdRupeCDTPssIMpuv/SmfZxeO",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-03-21T04:23:38.000Z",
            "updatedAt": "2022-03-21T04:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
export default {
    name: 'users-top',
    components:{
        NavTabs,
    },
    data(){
      return{
        users: [],
      }
    },
    methods: {
      fetchUsersTop(){
        this.users = dummyData.users
        // console.log(...this.users)
      },
      follow(){
        this.users = {
          ...this.users,
          isFollowed:true
        }
      },
      unfollow(){
        this.users = {
          ...this.users,
          isFollowed:false
        }
      },
    },
    created(){
      this.fetchUsersTop()
    }
}
</script>

<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link to="/">
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
    </div>
  </div>
</template>


<style>

</style>