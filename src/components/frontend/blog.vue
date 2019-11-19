<template>
  <div class="detail">
    <div class="article" v-for="(item,index) in blogList" :key="index">
      <router-link  :to="{path: '../article/'+item._id}" class="news-article"  >
        <div class="vertical-aligner">
          <div class="image">
            <img :src='item.image' alt="" >
          </div>
          <div class="desc">
            <hgroup>
              <h3>{{item.time | DateTransform}}</h3>
              <h4>{{item.title}}</h4>
            </hgroup>
            <p class="description">
              {{item.summary}}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog",
  data() {
    return {
      blogList: []
    };
  },
  methods: {},
  mounted() {
    let _this = this;
    const loading = this.$loading({
      lock: true
    });
    let getContent = function() {
      return new Promise((resolve, reject) => {
        _this.$http.get("/api/account/getContent").then(response => {
          _this.blogList = response.data;
          loading.close();
          // if (response.data.length % 6 || response.data.length == 0) {
          //   resolve(6 - (response.data.length % 6));
          // } else {
          //   reject();
          // }
        });
      });
    };
    getContent().then(() => {
      loading.close();
    });
  }
};
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.detail .article {
  width: 600px;
  height: 300px;
}
.news-article {
}
.vertical-aligner {
  margin: 10px;
  background-color: #ffffff;
}
.vertical-aligner .image {
  width: 100%;
  display: flex;
  justify-content: center;
}
.vertical-aligner .image img{
    width: 100%;
    height: 125px;
}
.vertical-aligner .desc {
}
.vertical-aligner .description {
}
.vertical-aligner .link {
}
</style>
