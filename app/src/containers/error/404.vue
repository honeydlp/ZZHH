<template>
  <div class="error404">
    <Card style="width:700px;">
      <div class="card-title">
        4<span><Icon type="ios-navigate-outline"></Icon></span>4
      </div>
      <p class="error-message">YOU  LOOK  LOST</p>
      <div class="error-btn">
        <Button @click="backHome" style="width: 200px;" type="text">返回首页</Button>
        <Button @click="backBefore" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</Button>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'error404',
  methods: {
    backHome () {
      this.$router.push({
        path: '/dashboard'
      })
    },
    backBefore () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.error404{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -350px;
  margin-top: -350px;  
}
.card-title{
  text-align: center;
  font-size: 240px;
  font-weight: 700;
  color: #2d8cf0;
  height: 260px;
  line-height: 260px;
  margin-top: 40px;
}
.card-title span{
  display: inline-block;
  color: #19be6b;
  font-size: 230px;
  animation: error404animation 3s ease 0s infinite alternate;
}
@keyframes error404animation {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-60deg);
  }
  40% {
    transform: rotate(-10deg);
  }

  60% {
    transform: rotate(50deg);
  }

  80% {
    
    transform: rotate(-20deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
.error-message{
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 12px;
  color: #dddde2;
}
.error-btn{
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
}
</style>


