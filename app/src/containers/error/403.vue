<template>
  <div class="error404">
    <Card style="width:700px;">
      <div class="card-title">
        4<span class="lock"><Icon type="android-lock"></Icon></span><span class="bolt"><Icon type="ios-bolt"></Icon></span>
      </div>
      <p class="error-message">{{this.$router.currentRoute.query.message}}</p>
      <div class="error-btn">
        <Button @click="backHome" style="width: 200px;" type="text">返回登录页</Button>
        <Button @click="backBefore" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</Button>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'error403',
  mounted () {
  },
  methods: {
    backHome () {
      this.$router.push({
        path: '/'
      })
    },
    backBefore () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.error404 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -350px;
  margin-top: -350px;
}
.card-title {
  text-align: center;
  font-size: 240px;
  font-weight: 700;
  color: #2d8cf0;
  height: 260px;
  line-height: 260px;
  margin-top: 40px;
}
.card-title .lock {
  display: inline-block;
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 20px solid #ed3f14;
  color: #ed3f14;
  margin-right: 10px;
}
.card-title .lock i {
  display: inline-block;
  font-size: 120px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bolt {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 190px;
  border-radius: 50%;
  margin-right: 10px;
}
.bolt i {
  display: inline-block;
  font-size: 190px;
  position: absolute;
  left: 20px;
  transform: translate(-50%,-60%);
  transform-origin: center bottom;
   animation: error403 2.8s ease 0s infinite;
}
@keyframes error403 {
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-20deg);
  }
  45% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  55% {
    transform: rotate(-15deg);
  }
  60% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.error-message {
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 12px;
  color: #dddde2;
}
.error-btn {
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
}
</style>


