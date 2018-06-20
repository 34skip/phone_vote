<template>
  <div class="warp" :style="{width:'100%',height:height}">
    <div class="goBtnSty" @click="goVote">点击开始</div>
  </div>
</template>

<script>
  export default {
    name: 'explain',
    data () {
      return {
        height: '',
        phoneId: ''
      }
    },
    created() {
      this.height = document.documentElement.clientHeight + 'px'
      // this.phoneId = navigator.userAgent
      // console.log(this.phoneId)
      // this.generateUUID()
      // console.log(this.generateUUID())
      // this.getQueryString('uid')
      // console.log(this.gunid())
      // alert(document.documentElement.clientHeight)
    },
    watch: {
    },
    methods: {
      goVote () {
        this.$router.push({ path: '/vote' })
      }
    }
  }
</script>

<style scoped>
  .warp{
    /*width: 100%;*/
    /*height: 100%;*/
    background: url(../assets/vote2.png) no-repeat center center/100% 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .goBtnSty{
    width: 100px;
    color: #542608;
    position: absolute;
    top: 56%;
    left: 50%;
    margin-left: -50px;
    font-weight: bold;
    text-align: center;
  }
  .bannerIndex{
  }
</style>
