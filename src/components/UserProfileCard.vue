
<script>
export default {
    name: 'UserProfileCard',
    props:{
      initialUser:{
        type:Object,
        required: true,
      },
      initialIsFollowed:{
        type: Boolean,
        required: true,
      }
    },
    data(){
      return{
        user: this.initialUser,
        isFollowed: this.initialIsFollowed
      }
    },
    methods:{
      addFollowing(){
        this.user = {
          ...this.user,
          isFollowed: true
        }
      },
      deleteFollowing(){
        this.user = {
          ...this.user,
          isFollowed: false
        }
      },
    },

}
</script>

<template>
    <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://upload.cc/i1/2022/03/30/8ujg9A.jpg"
           
              height="350px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> {{user.name}} </h5>
              <p class="card-text">{{user.email}}</p>
              <ul class="list-unstyled list-inline">
                <li><strong> {{user.Comments.length}} </strong> 已評論餐廳</li>
                <li><strong> {{user.FavoritedRestaurants.length}} </strong> 收藏的餐廳</li>
                <li><strong> {{user.Followings.length}} </strong> followings 追蹤者</li>
                <li><strong> {{user.Followers.length}} </strong> followers 粉絲</li>
              </ul>
              <p></p>
              <form
                action="/following/3?_method=DELETE"
                method="POST"
                style="display: contents"
              >
                <button 
                  type="button" 
                  class="btn btn-danger"
                  v-if="isFollowed"
                  @click.stop.prevent="deleteFollowing"
                >取消追蹤
                </button>
                <button 
                  type="button" 
                  class="btn btn-primary"
                  v-else
                  @click.stop.prevent="addFollowing"
                >追蹤
                </button>
              </form>
              <p></p>
            </div>
          </div>
        </div>
    </div>

</template>


<style>

</style>