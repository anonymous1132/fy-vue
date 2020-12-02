<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="false"
    router
    :default-active="active"
  >
    <FyMenuItem
      v-for="(item, idx) in menus"
      :key="idx"
      :index="idx + ''"
      :menuObj="item"
    ></FyMenuItem>
  </el-menu>
</template>

<script>
import FyMenuItem from "./FyMenuItem";
export default {
  components: { FyMenuItem },
  props: {
    active: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menus: [
        {
          title: "导航一",
          children: [
            { title: "选项一", index: "/home" },
            { title: "选项二", index: "/content/1" },
          ],
        },
        { title: "导航二", index: "/content/2" },
        { title: "导航三", children: [
           { title: "关于", index: "/about" },
        ] },
      ],
    };
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