<template>
  <div id="app">
    <el-container><el-header>head</el-header></el-container>
    <el-container class="main-container">
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
  </div>
</template>
<script>
import Menu from "./components/framework/menu/FyMenu";
import TabComponent from "./components/TabComponents";
export default {
  components: { Menu, TabComponent },
};
</script>
<style>
body {
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  overflow: auto;
  color: #333333;
  background: rgba(242, 242, 242, 1);
  position: absolute;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-container.main-container{
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


