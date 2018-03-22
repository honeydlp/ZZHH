<template>
  <div class="login">
    <div class="container">
      <div class="top">
        <div class="header"><span class="title">VUE</span></div>
        <p class="desc">vue后台管理vue后台管理vue后台管理vue后台管理</p>
      </div>
      <div class="main">
        <Form label-position="top">
          <FormItem label="手机号" prop="phone">
            <Input v-model="auth.phone" type="text" placeholder="请输入手机号"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input v-model="auth.password" type="password" placeholder="请输入密码"></Input>
          </FormItem>
          <FormItem>
            <Button @click="this.login" type="primary" long>登录</Button>
          </FormItem>
        </Form>
        <div class="group">
          <div class="place">
            <span>当前位置：</span><span>{{ location }}</span>
          </div>
          <div class="forgetPassword">
            188888888888,123456
          </div>
        </div>
      </div>
    </div>
    <div class="footer">Copyright 2018</div>
  </div>
</template>

<script>
import * as authServices from '@/services/login'
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      location: '',
      auth: {
        phone: '',
        password: '',
        location: {}
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  mounted () {
    this.getUserIp()
    const $this = this
    document.onkeydown = function (e) {
      if (e.keyCode === 13) {
        $this.login()
      }
    }
  },
  methods: {
    getUserIp () {
      authServices.getIp().then((res) => {
        if (res.data) {
          this.auth.location = res.data
          if (res.data.isIntranetIP) {
            this.location = '公司内网'
          } else {
            this.location = res.data.city
          }
        }
      }).catch(() => {
        this.$Message.error('获取IP失败')
      })
    },
    login () {
      this.$store.dispatch('login', this.auth).then(() => {
        window.location.href = '/dashboard'
      }).catch((err) => {
        this.$Message.error(err.message)
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100%;
    background-size: 100%;
    padding: 110px 0 144px 0;
    position: relative;
    background: #f3f3f3;
  }
  .footer {
    font-size: 14px;
    width: 100%;
    position: fixed;
    bottom:50px;
    text-align: center;
  }
  .group {
    display: flex;
  }
  .place {
    flex: 1;
    text-align: left;
  }
  .forgetPassword {
    flex: 1;
    text-align: right;
  }
  .main {
    width: 368px;
    margin: 0 auto;
  }
  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 24px;
    margin-bottom: 50px;
  }
  .title {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.85);
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
  }
  .top {
    text-align: center;
  }
  .header {
    height: 44px;
    line-height: 44px;
  }
  .logo {
    height: 44px;
    vertical-align: -22px;
    margin-right: 16px;
  }
  .login {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
