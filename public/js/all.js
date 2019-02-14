"use strict";

Vue.component('cardRepoTheme', {
  props: ['prop', 'urlitem'],
  template: '#cardRepo'
});
var app = new Vue({
  el: '#app',
  data: {
    // https://gitlab.com/api/v4/users/userid/projects
    gitlabUrl: 'gitlab.com/api/v4/users/',
    userName: 'hsiangfeng',
    api: 'projects',
    page: '6',
    authorUrl: 'https://gitlab.com/',
    data: [],
    urlAll: ''
  },
  computed: {
    getrepo: function getrepo() {
      var _this = this;

      var googleCORS = 'https://script.google.com/macros/s/AKfycbxybXJPnk9oV-VOf5vMAkPKoOmYn-OZ9OXeWO3khPyluXQo6ps/exec?url=';
      var str = "".concat(this.gitlabUrl, "/").concat(this.userName, "/").concat(this.api, "?per_page=").concat(this.page);
      this.urlAll = str;
      window.fetch(googleCORS + str, {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (item) {
        _this.data = item;
      }).catch(function (error) {
        window.alert('目前出現錯誤：' + error);
      });
      console.log(googleCORS + str);
    }
  }
}); // const imgBg1 = document.getElementById('bg1-img')
// const imgBg2 = document.getElementById('bg2-img')
// function autoBg1 () {
//   if (imgBg1.style.opacity === '1') {
//     imgBg1.style.opacity = '0'
//     imgBg2.style.opacity = '1'
//   } else if (imgBg1.style.display === '0') {
//     imgBg1.style.opacity = '1'
//     imgBg2.style.opacity = '0'
//   }
//    console.log(window.getComputedStyle(imgBg1).getPropertyPriority('display'))
//   setTimeout(autoBg2, 5000)
// }
// function autoBg2() {
//   if (imgBg2.style.opacity === '0') {
//     imgBg1.style.opacity = '0'
//     imgBg2.style.opacity = '1'
//   } else if (imgBg2.style.opacity === '1') {
//     imgBg1.style.opacity = '1'
//     imgBg2.style.opacity = '0'
//   }
//   setTimeout(autoBg1, 5000)
// }
// setTimeout(autoBg1, 5000)
//# sourceMappingURL=all.js.map
