<template>
  <div class="app-wrap">
    <!-- 此处放置el-tabs代码 -->
    <div class="template-tabs">
      <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :name="item.name"
          :label="item.title"
          :closable="!item.fixed"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComponent",
  data() {
    return {
      editableTabsValue: this.$store.getters.editableTabsValue,
    };
  },
  methods: {
    //点击移除tab
    removeTab(targetName) {
      if (targetName === "/home") return;
      let tabs;
      tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        // 设置当前激活的路由
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1];
            let preTab = tabs[index - 1];

            if (nextTab) {
              this.editableTabsValue = nextTab.name;
            } else if (preTab) {
              this.editableTabsValue = preTab.name;
            } else {
              this.editableTabsValue = "/home";
            }
          }
        });
      }

      let tab1;
      tab1 = tabs.filter((tab) => tab.name !== targetName);

      this.$store.commit("addTab", tab1);
      /*
      this.$store.commit("setTabName", activeName);

      this.$router.push({ path: activeName });
      */
    },
    addTab(to) {
      this.editableTabsValue = to.path;
      let tabs = JSON.parse(JSON.stringify(this.editableTabs));
      if (!tabs.find((f) => f.name === to.path)) {
        //if (!to.meta.label) return;
        let data = {
          title: to.meta.label,
          name: to.path,
        };
        tabs.push(data);
        this.$store.commit("addTab", tabs);
      }
    },
  },
  computed: {
    //存放所有tab的数组
    editableTabs() {
      let tabs;
      let data = this.$store.getters.editableTabs;
      tabs = typeof data === "string" ? JSON.parse(data) : data;
      return tabs;
    },
  },
  watch: {
    editableTabsValue(val) {
      this.$store.commit("setTabName", val);
      if (this.$route.path !== val) this.$router.push({ path: val });
    },
    $route: function (to) {
     // console.log(to)
      this.addTab(to);
    },
  },
  mounted() {
    // console.log(this.$route)
   // this.addTab(this.$route);
  },
};
</script>

<style scoped>
.template-tabs {
  background-color: white;
}
</style>