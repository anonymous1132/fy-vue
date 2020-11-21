<template>
  <el-container>
    <el-aside width="auto"><Menu></Menu></el-aside>
    <el-main>
      <div>
        <tab-component></tab-component>
        <keep-alive>
          <div style="background-color: white">
            <router-view />
          </div>
        </keep-alive>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Menu from "./Menu";
import TabComponent from "./TabComponents"
export default {
  components: { Menu,TabComponent },
};
</script>

<style  scoped>
.el-container {
  height: calc(100% - 60px);
}
</style>
