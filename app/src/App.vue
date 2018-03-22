<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="layout">
      <router-view name="content"></router-view>
    </router-view>
  </div>
</template>
<script>
// 开发环境需要手动添加，生产由 node 注入
window.__INITIALSTORE__ = '{"user":{"id":1,"username":"superadmin","password":null,"phone":"18888888888","avtar":null,"role":"super_admin","createDate":"2017-11-01 16:07","note":"超级管理员"}}'
export default {
  name: 'app'
}
</script>
