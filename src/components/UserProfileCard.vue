
<script>
export default {
    name: 'UserProfileCard'

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
              <h5 class="card-title">Daisy</h5>
              <p class="card-text">soniahsiao16@gmail.com</p>
              <ul class="list-unstyled list-inline">
                <li><strong>36</strong> 已評論餐廳</li>
                <li><strong>0</strong> 收藏的餐廳</li>
                <li><strong>0</strong> followings 追蹤者</li>
                <li><strong>2</strong> followers 粉絲</li>
              </ul>
              <p></p>
              <form
                action="/following/3?_method=DELETE"
                method="POST"
                style="display: contents"
              >
                <button type="submit" class="btn btn-danger">取消追蹤</button>
              </form>
              <p></p>
            </div>
          </div>
        </div>
    </div>

</template>


<style>

</style>