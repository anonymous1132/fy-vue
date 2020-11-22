<template>
  <el-menu-item :index="menuObj.index" v-if="!isSubMenu">
    <i v-if="menuObj.icon" :class="menuObj.icon"></i>
    <span slot="title">{{menuObj.title}}</span>
  </el-menu-item>
  <el-submenu :index="index" v-else>
    <template slot="title">
      <i v-if="menuObj.icon" :class="menuObj.icon"></i>
      <span slot="title">{{menuObj.title}}</span>
    </template>
    <menu-item
      v-for="(item, idx) in menuObj.children"
      :key="index + '-' + idx"
      :menuObj="item"
      :index="index + '-' + idx"
    ></menu-item>
  </el-submenu>
</template>

<script>

export default {
  name:"MenuItem",
  props: {
    menuObj: {
      type: Object,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isSubMenu() {
      return !this.menuObj.index;//this.menuObj.children && this.menuObj.children.length > 0;
    },
  },
};
</script>

<style>
</style>