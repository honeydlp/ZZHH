<template>
  <div class="layout">
    <Row type="flex">
      <Col span="4" class="layout-menu-left">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <div class="layout-logo">
          <div class="logo"></div>
        </div>
        <Submenu name="1">
          <template slot="title"><Icon type="ios-analytics"></Icon> 仪表盘</template>
          <MenuItem class="item menu--item" name="1-1"><router-link class="item-link" to="/dashboard">仪表盘</router-link></MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title"><Icon type="ios-analytics"></Icon> 这就是个菜单</template>
          <MenuItem class="item menu--item" name="2-1"><router-link class="item-link" to="">这就是个子菜单</router-link></MenuItem>
        </Submenu>
      </Menu>
      </Col>
      <Col span="20">
        <!-- header -->
        <div class="layout-header">
          <div class="header-right">
            <Menu mode="horizontal">
              <MenuItem name="1">
                <router-link to="">
                  <div>
                    <Badge :count="22">
                      <Icon color="#000" type="ios-bell-outline" size="26"></Icon>
                    </Badge>
                  </div>
                </router-link>
              </MenuItem>
              <Submenu name="2">
                  <template slot="title">
                    <span class="avatar">11</span>
                    <span>{{currentUser.username || currentUser.phone}} </span>
                  </template>
                  <MenuItem name="2-1">
                  <div @click="logout">退出</div>
                  </MenuItem>
              </Submenu>
            </Menu>

          </div>
        </div>
        <!-- 面包屑 -->
        <div class="breadcrumb">
          
        </div>
        <div ref="layoutContent" class="layout-content">
          <div class="layout-content-main">
            <!-- 内容 -->
            <slot />
          </div>
        </div>
        <div ref="layoutCopyRight" class="layout-copy-right">VUE</div>
      </Col>
    </Row>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  mounted () {
    this.setMinHeight()
    const that = this
    window.onresize = function () {
      that.setMinHeight()
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then((data) => {
        if (data) {
          this.$router.push({
            path: '/auth/login'
          })
        }
      }).catch((err) => {
        this.$Message.error(err.message)
      })
    },
    setMinHeight () {
      let winHeight = null
      // 获取窗口高度
      if (window.innerHeight) {
        winHeight = window.innerHeight
      } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight
      }
      const layoutCopyRight = this.$refs.layoutCopyRight
      const layoutContent = this.$refs.layoutContent
      let layoutContentOffsetTop = layoutContent.offsetTop
      let h = winHeight - layoutContentOffsetTop - layoutCopyRight.offsetHeight - 15
      layoutContent.style.minHeight = `${h}px`
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-to{
  transform:translate(0,-100%);
}
.message{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:rgba(255, 255, 255, 1);
  z-index: 8888;
}


.layout-img{
  width: 45px;
}
.avatar{
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #fde3cf;
  border-radius: 50%;
  display: inline-block;
  color: #f56a00;
}
.logout{
  display: none;
  position: absolute;
  top: 60px;
  left: 30px;;
  z-index: 9999;
}
.ico{
  margin-right: 12px;
  margin-left: 16px;
}
.ivu-menu .item{
  padding: 0;
}
.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
  padding-left: 42px;
}
.item-link{
  display: block;
  padding: 14px 24px 14px 8px;
  color: #ffffff;
}
.header-list {
  position: relative;
  color: #000;
  line-height: 60px;
  text-align: center;
}
.header-list a {
  display: block;
  width: 55px;
  height: 100%;
}
.header-right {
  float: right;
  height: 100%;
  display: flex;
}
.layout {
  background: #f5f7f9;
  position: relative;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  margin-top: 62px;
  min-height: 800px;
  position: relative;
  min-width: 700px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy-right {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo {
  cursor: pointer;
  width: 90%;
  height: 45px;
  line-height: 45px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
  padding-right:30px ;
}
.layout-logo>div{
  display: inline-block;
}
.text{
  float: right;
  height: 100%;
  line-height: 45px;
  color:#ffffff;
  font-weight: bold;
}
.breadcrumb {
  margin: 10px 15px 0;
}
</style>
