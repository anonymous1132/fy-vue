import { Auth } from './auth';

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    editableTabsValue:Auth.getEditableTabsValue() || '/container/home',
    /*tab数组*/
    editableTabs:Auth.getEditableTabs() || [{title:'首页',name:'/container/home'}],
  },
  /** 计算属性 */
  getters: {
    editableTabsValue: state => state.editableTabsValue,
    editableTabs: state => state.editableTabs,
  },
  /** 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    //退出登录时注销tab
    ACCOUNT_LOGOUT_FAILURE(state) {
      state.editableTabsValue = '/container/home';
      state.editableTabs = [{ title: '首页', name: '/container/home' }];
      //其他代码
      Auth.removeEditableTabs();
      Auth.removeEditableTabsValue()
    },
    //设置当前tab数组
    addTab(state, data) {
      state.editableTabs = data;
      Auth.setEditableTabs(data);
    },
    //设置当前tab
    setTabName(state, data) {
      state.editableTabsValue = data;
      Auth.setEditableTabsValue(data);
    }
  },
  /** Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 */
  actions: {

  }
})