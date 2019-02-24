Vue.component('cardRepoTheme', {
  props: ['prop', 'urlitem'],
  template: '#cardRepo'
})

const app = new Vue({
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
    initRepo () {
      let localUserName = JSON.parse(window.localStorage.getItem('gitLabName')) || []
      if (localUserName !== []) {
        this.userName = localUserName
      }
      this.ajaxRepo()
    },
    ajaxRepo () {
      let str = `${this.gitlabUrl}/${this.userName}/${this.api}?per_page=${this.page}`
      this.urlAll = str
      window.fetch(this.googleCORS + str, { method: 'get' })
        .then(response => {
          return response.json()
        })
        .then(item => {
          this.data = item
        })
        .catch(error => {
          window.alert('目前出現錯誤：' + error)
        })
      console.log(this.googleCORS + str)
    },
    addRepo () {
      const vm = this
      window.localStorage.setItem('gitLabName', JSON.stringify(vm.userName))
      window.alert(`已將目前 ${vm.userName} 對象加入關注。`)
    }
  },
  created () {
    this.initRepo()
  }
})
