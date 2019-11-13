<template>
  <div class="detail">
    <div
      class="article"
      v-for="(item) in blogList"
    >
      <router-link
        v-if="item._id != 'CNBlog'"
        :to="{path: '../article/'+item._id}"
        class="news-article"
      >
        <div class="vertical-aligner">
          <div class="image">
            <img
              :src='item.image'
              alt=""
            >
          </div>
          <div class="desc">
            <hgroup>
              <h3>{{item.time | DateTransform}}</h3>
              <h4>{{item.title}}</h4>
            </hgroup>
            <p class="description">
              {{item.summary}}
            </p>
            <!-- <p class="link">Read More</p> -->
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
    // getContent().then(length => {
    //     _this.$http.get("/api/getCNBlog").then(response => {
    //       loading.close();
    //       let CNBlogList = response.data.data.feed.entry;
    //       for (let i = 0; i < length; i++) {
    //         _this.blogList.push({
    //           _id: "CNBlog",
    //           title: CNBlogList[i].title[0]._,
    //           author: CNBlogList[i].author[0].name[0],
    //           summary: CNBlogList[i].summary[0]._,
    //           link: CNBlogList[i].link[0].$.href,
    //           time: CNBlogList[i].updated[0]
    //         });
    //       }
    //     });
    //   },
    //   () => {
    //     loading.close();
    //   }
    // );
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
.vertical-aligner .desc {
}
.vertical-aligner .description {
}
.vertical-aligner .link {
}
</style>
