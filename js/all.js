"use strict";

/* global Vue */
Vue.component('cardRepoTheme', {
  props: ['prop', 'urlitem'],
  template: '#cardRepo'
});
var app = new Vue({
  el: '#app',
  data: {
    // https://gitlab.com/api/v4/users/userid/projects
    gitlabUrl: 'gitlab.com/api/v4/users',
    userName: 'hsiangfeng',
    api: 'projects',
    page: '6',
    authorUrl: 'https://gitlab.com/',
    googleCORS: 'https://script.google.com/macros/s/AKfycbxybXJPnk9oV-VOf5vMAkPKoOmYn-OZ9OXeWO3khPyluXQo6ps/exec?url=',
    data: [],
    urlAll: ''
  },
  methods: {
    initRepo: function initRepo() {
      var localUserName = JSON.parse(window.localStorage.getItem('gitLabName')) || [];

      if (localUserName !== []) {
        this.userName = localUserName;
      }

      this.ajaxRepo();
    },
    ajaxRepo: function ajaxRepo() {
      var _this = this;

      var str = "".concat(this.gitlabUrl, "/").concat(this.userName, "/").concat(this.api, "?per_page=").concat(this.page);
      this.urlAll = str;
      window.fetch(this.googleCORS + str, {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (item) {
        _this.data = item;
      }).catch(function (error) {
        window.alert("\u76EE\u524D\u51FA\u73FE\u932F\u8AA4\uFF1A".concat(error));
      });
      console.log(this.googleCORS + str);
    },
    addRepo: function addRepo() {
      var vm = this;
      window.localStorage.setItem('gitLabName', JSON.stringify(vm.userName));
      window.alert("\u5DF2\u5C07\u76EE\u524D ".concat(vm.userName, " \u5C0D\u8C61\u52A0\u5165\u95DC\u6CE8\u3002"));
    }
  },
  created: function created() {
    this.initRepo();
  }
});
//# sourceMappingURL=all.js.map
