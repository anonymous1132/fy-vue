<template>
  <el-container>
    <el-aside width="auto"
      ><Menu :active="$store.getters.editableTabsValue"></Menu
    ></el-aside>
    <el-main>
      <div class="main">
        <tab-component></tab-component>
        <keep-alive>
          <div class="content-wrap">
            <router-view />
          </div>
        </keep-alive>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Menu from "../components/framework/menu/FyMenu";
import TabComponent from "./TabComponents";
export default {
  components: { Menu, TabComponent },
};
</script>

<style  scoped>
.el-container {
  height: calc(100% - 60px);
}

.content-wrap {
  background-color: white;
  height: calc(100% - 60px);
}

.main {
  height: 100%;
}
</style>
