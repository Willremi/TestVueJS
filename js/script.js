var app = new Vue({
el: '#app',
data: {
message: 'Salut ceci est un test sur vueJS'
}
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
  }
})
