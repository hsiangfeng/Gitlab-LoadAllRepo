Vue.component('cardRepoTheme', {
  props: ['prop', 'urlitem'],
  template: '#cardRepo'
})

new Vue({
  el: '#app',
  data: {
    //https://gitlab.com/api/v4/users/userid/projects
    gitlabUrl: 'gitlab.com/api/v4/users/',
    userName: 'hsiangfeng',
    api: 'projects',
    page: '6',
    authorUrl: 'https://gitlab.com/',
    data: []
  },
  computed: {
    getrepo() {
      let googleCORS = 'https://script.google.com/macros/s/AKfycbxybXJPnk9oV-VOf5vMAkPKoOmYn-OZ9OXeWO3khPyluXQo6ps/exec?url='
      let str = `${this.gitlabUrl}/${this.userName}/${this.api}?per_page=${this.page}`
      window.fetch(googleCORS + str, { method: 'get' })
        .then(response => {
          return response.json()
        })
        .then(item => {
          this.data = item
        })
        .catch(error => {
          window.alert('目前出現錯誤：' + error)
        })
      console.log(googleCORS + str)
    }
  }
})

const imgBg1 = document.getElementById('bg1-img')
const imgBg2 = document.getElementById('bg2-img')
function autoBg1() {
  if (imgBg1.style.opacity === '1') {
    imgBg1.style.opacity = '0'
    imgBg2.style.opacity = '1'
  } else if (imgBg1.style.display === '0') {
    imgBg1.style.opacity = '1'
    imgBg2.style.opacity = '0'
  }
  //console.log(window.getComputedStyle(imgBg1).getPropertyPriority('display'))
  setTimeout(autoBg2, 5000)
}
function autoBg2() {
  if (imgBg2.style.opacity === '0') {
    imgBg1.style.opacity = '0'
    imgBg2.style.opacity = '1'

  } else if (imgBg2.style.opacity === '1') {
    imgBg1.style.opacity = '1'
    imgBg2.style.opacity = '0'
  }
  setTimeout(autoBg1, 5000)
}
setTimeout(autoBg1, 5000)

window.onresize = function () {
  imgBg1.style.height = window.innerHeight + 'px'
  imgBg2.style.height = window.innerHeight + 'px'
}