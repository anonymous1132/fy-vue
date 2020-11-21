<template>
  <div class="app-wrap">
    <!-- 此处放置el-tabs代码 -->
    <div class="template-tabs">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-click="tabClick"
        @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TabComponent",
    data(){
      return{
      }
    },
    methods: {
     //点击切换tab
      tabClick(tab){
        let path = tab.name;
        this.$store.commit('setTabName', path);
        this.$router.push({path: path});
      },
      //点击移除tab
      removeTab(targetName){
        if(targetName === "/home"){
          return;
        }
        let tabs;
        tabs = typeof this.editableTabs ==='string'? JSON.parse(this.editableTabs):this.editableTabs;

        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          // 设置当前激活的路由
          tabs.forEach((tab,index) =>{
            if(tab.name === targetName){
              let nextTab = tabs[index +1];
              let preTab = tabs[index -1];

              if(nextTab){
                activeName = nextTab.name;
              }else if(preTab){
                activeName = preTab.name;
              }else {
                activeName = "/container/home";
              }
            }
          });
        }

        let tab1;
        tab1 = tabs.filter(tab => tab.name !== targetName);

        this.$store.commit('addTab', tab1);
        this.$store.commit('setTabName', activeName);

        this.$router.push({path: activeName});
      }
    },
    computed: {
    //存放所有tab的数组 
      editableTabs() {
        let tabs;
         
        let data = this.$store.getters.editableTabs;
       
        tabs = typeof data === 'string'? JSON.parse(data):data;
        return tabs;
      },
      //当前tab 初始默认为首页(/home)
      editableTabsValue() {
          console.log(this.$store)
        return this.$store.getters.editableTabsValue;
      }
    },
    watch: {
      //监听路由的变化来实现添加或切换tab
      '$route':function (to) {
        let flag = false;
        let tabs = this.editableTabs;
        let route = this.editableTabsValue;
        for (let i = 0;i < tabs.length;i++) {
          if (tabs[i].name === to.path) {
            flag = true;
            //设置当前tab为当前路由
            this.$store.commit('setTabName', to.path);
            break;
          }
        }
        if (!flag) {
          let data = {
            title: to.meta.label,
            name: to.path,
          };
          tabs.push(data);
          route = to.path;
          //设置tab数组
          this.$store.commit('addTab', tabs);
          this.$store.commit('setTabName', route);
        }
      }
    },
  }
</script>

<style scoped>
  .template-tabs {
    background-color: white;
  }
</style>