
<script>
import NavTabs from "./../components/NavTabs.vue";
import Tops from "./../components/Tops.vue";

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
        Tops,
    },
    data(){
      return{
        users: [],
      }
    },
    methods: {
      fetchUsersTop(){
        const { users } = dummyData
        this.users = dummyData.users
        // console.log(...this.users)
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
      <Tops 
       :initial-tops="users"
       v-for="user in users" 
       :key="user.id"
      />
    </div>

  </div>
</template>


<style>

</style>