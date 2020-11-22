<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="false"
    router
  >
    <el-submenu index="container">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item
          index="container-1"
          :route="{ path: '/container/content/1' }"
          >选项1</el-menu-item
        >
        <el-menu-item
          index="container-2"
          :route="{ path: '/container/content/2' }"
          >选项2</el-menu-item
        >
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item
          index="container-3"
          :route="{ path: '/container/content/3' }"
          >选项3</el-menu-item
        >
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1" :route="{ path: '/container/content/4' }"
          >选项1</el-menu-item
        >
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <el-button slot="title" type="text" @click="test">导航二</el-button>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <el-menu-item index="3-1-1" :route="{ path: '/' }"
        >xx</el-menu-item
      >
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    test(){}
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 280px;
  height: 100%;
}
.el-menu-vertical-demo {
  height: 100%;
}
</style>