<template>
  <div class="warp">
    <!-- tabcontainer -->
    <!--<div>{{phoneId}}</div>-->
      <img src="../assets/1.png" alt="" class="bannerIndex" :style="{width:'100%',height:'100%'}">
      <div @click="goVote">点击开始</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        height: '',
        phoneId: ''
      }
    },
    created() {
      this.height = document.documentElement.clientHeight + 'px'
      this.phoneId = navigator.userAgent
      console.log(this.phoneId)
      this.generateUUID()
      console.log(this.generateUUID())
      this.getQueryString('uid')
      console.log(this.gunid())
      // alert(document.documentElement.clientHeight)
    },
    watch: {
    },
    methods: {
      goVote () {
        this.$router.push({ path: '/explain' })
      },
      generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
      },
      getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
      },
      gunid() {
        function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .warp{
    width: 100%;
    height: 100%;
  }
  .bannerIndex{
    /*width: 100%;*/
    /*height: 100%;*/
  }
</style>
