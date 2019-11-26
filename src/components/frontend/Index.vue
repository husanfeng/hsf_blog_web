<template>
  <div id="pjax" class="fn__flex-1">
    <header class="header header--index">
      <div class="wrapper header__title">
        <h1 class="header__h1 fn__flex-inline">
          <img src="../../assets/touxiang.png" />
          <a href rel="start" class="header__title">风 的 博 客</a>
        </h1>
        <h2 class="header__h2">成功的人前千方百计，失败的人千难万险</h2>
      </div>
      <nav class="wrapper header__nav fn__clear">
        <a href rel="start">首页</a>
        <a
          class="fn__flex-inline"
          href="https://github.com/husanfeng/hsf_blog"
          target="_Blank"
          rel="section"
        >
          <img src="../../assets/about.png" /> 关于
        </a>
        <a
          class="fn__flex-inline"
          href="https://github.com/husanfeng/hsf_blog"
          target="_Blank"
          rel="section"
        >
          <img src="../../assets/github.png" /> 我的开源
        </a>
        <!-- <a class="fn__flex-inline" href="https://hacpai.com" target="_blank" rel="section">
          <img src="https://static.hacpai.com/images/favicon.png" /> 黑客派
        </a>
        <a class="fn__flex-inline" href="https://b3log.org" target="_blank" rel="section">
          <img src="https://static.b3log.org/images/brand/b3log-32.png" /> B3log
        </a>

        <a href="https://88250.b3log.org/search">搜索</a>-->

        <!-- <div class="fn__right">
          <a
            href="https://hacpai.com/member/88250"
            title="https://hacpai.com/member/88250"
            class="user__site"
            target="_blank"
            rel="noopener nofollow"
          >
            <svg viewBox="0 0 32 32" width="100%" height="100%">
              <path
                fill="#d23f31"
                style="fill: var(--color1, #d23f31)"
                d="M5.787 17.226h17.033l5.954 9.528c0.47 0.752 0.003 1.361-1.042 1.361h-15.141z"
              />
              <path
                d="M10.74 3.927h17.033c1.045 0 1.512 0.609 1.042 1.361l-5.954 9.528h-19.872l6.379-10.209c0.235-0.376 0.849-0.681 1.372-0.681z"
              />
              <path d="M2.953 17.226h2.839l6.804 10.889h-1.892c-0.523 0-1.137-0.305-1.372-0.681z" />
            </svg>
          </a>

          <a
            href="https://github.com/88250"
            title="https://github.com/88250"
            class="user__site"
            target="_blank"
            rel="noopener nofollow"
          >
            <svg viewBox="0 0 32 32" width="100%" height="100%">
              <path
                d="M16 0.331c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
              />
            </svg>
          </a>

          <a rel="alternate" href="https://88250.b3log.org/rss.xml">RSS</a>

          <a rel="alternate" href="https://88250.b3log.org/start">开始使用</a>
        </div>-->
      </nav>
    </header>
    <div class="wrapper">
      <div class="articles">
        <article
          class="item"
          v-for="(item,index) in blogList"
          :key="index"
          @click="toArticle(item._id)"
        >
          <!-- <router-link :to="{path: '../article/'+item._id}"class="news-article"
          >-->
          <span class="item__cover" :style="{backgroundImage:`url(${item.image})`}"></span>
          <div class="item__main">
            <!-- <span   class="item__tag"  >{{item.cat}}</span> -->
            <h2 class="item__title">
              <span rel="bookmark">{{item.title}}</span>
            </h2>
            <span class="item__abstract">{{item.summary}}</span>
            <div class="div_bottom">
              <!-- <span aria-label="88250"  class="vditor-tooltipped vditor-tooltipped__n item__avatar"> -->
              <!-- <img :src="item.image" alt /> -->
              <span class="item__tag">{{item.cat}}</span>
              <!-- </span> -->
              <span class="item__meta">42 评论</span>
            </div>
          </div>
          <!-- </router-link> -->
        </article>
      </div>
    </div>
  </div>
</template>

<style>
.div_bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}
.articles .item__cover {
  -webkit-box-flex: 1;
  /* flex: 1; */
  height: auto;
}
.articles .item__meta {
  color: #738a94;
}
.articles .item__avatar img {
  height: 32px;
  width: 32px;
}
img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  height: auto;
  -ms-interpolation-mode: bicubic;
  overflow: hidden;
  font-size: 12px;
}
.articles .item__avatar {
  margin-top: 10px;
  float: left;
}

.vditor-tooltipped {
  position: relative;
  cursor: pointer;
}
.articles .item__abstract {
  line-height: 24px;
  color: #15171a;
  -webkit-box-flex: 1;
  flex: 1;
}
.articles .item__title > a {
  color: #15171a;
  font-size: 18px;
  line-height: 24px;
}

a {
  color: #26a8ed;
}
a {
  outline: 0;
  text-decoration: none;
}
.articles .item__title {
  margin-bottom: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
dl,
dd,
p {
  margin: 0;
}
user agent stylesheet h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.articles .item__tag {
  display: inline-block;
  margin-bottom: 4px;
  color: #738a94;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  /* text-transform: uppercase; */
}
.articles .item__main {
  padding: 15px 25px;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex: 1;
}
.articles .item {
  -webkit-box-flex: 1;
  flex: 1 1 300px;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background-color: #fff;
}
/* element.style {
		background-image: url(https://img.hacpai.com/bing/20171214.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100);
} */
.articles .item__cover {
  background-size: cover;
  background-position: center center;
  height: 200px;
}
a {
  color: #26a8ed;
}
a {
  outline: 0;
  text-decoration: none;
}
.articles {
  top: -70px;
  position: relative;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
.header__nav svg {
  margin-top: 5px;
}
svg {
  fill: currentColor;
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  width: 14px;
  height: 14px;
}
.header__nav img {
  height: 14px;
  width: 14px;
  margin-right: 5px;
}

img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  height: auto;
  -ms-interpolation-mode: bicubic;
  overflow: hidden;
  font-size: 12px;
}
.fn__right {
  float: right;
}
.fn__clear:after {
  clear: both;
}
.fn__clear:before,
.fn__clear:after {
  display: table;
  content: "";
}
.wrapper {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 10px;
}
.header__title {
  position: relative;
  text-align: center;
}
.header__h1 {
  font-size: 30px;
  padding-top: 140px;
  font-weight: normal;
}
.header__h1 img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.header__h1 a {
  color: #fff;
}
.fn__flex-inline {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}
.header__h2 {
  font-size: 20px;
  font-weight: 300;
  margin: 5px 0 70px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
}
.header__nav {
  position: relative;
}
.header__nav a {
  font-size: 13px;
  float: left;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 20px 90px 0;
}

.fn__flex-inline {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
}
.fn__clear {
}
.fn__clear:before,
.fn__clear:after {
  display: table;
  content: "";
}
.fn__flex- {
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 1px;
}
.header {
  color: #fff;
  position: relative;
}
.header--index {
}
.header--index:before {
  content: "";
  height: 395px;
  position: absolute;
  /* background: url(../images/header-bg.jpg) no-repeat center center; */
  background-color: black;
  width: 100%;
  top: 0;
  background-size: cover;
  -webkit-filter: brightness(48%);
  filter: brightness(48%);
}
</style>


<script>
export default {
  name: "Index",
  data() {
    return {
      blogList: []
    };
  },
  methods: {
    toArticle(id) {
      this.$router.push({
        //核心语句
        path: "../article/" + id //跳转的路径
        // query:{           //路由传参时push和query搭配使用 ，作用时传递参数
        //   id:this.id ,
        // }
      });
    }
  },
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
        });
      });
    };
    getContent().then(() => {
      loading.close();
    });
  }
};
</script>
</script>