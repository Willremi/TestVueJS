// Vue.filter('capitalize', function (value, prefix, suffix) {
//   return prefix + value.toUpperCase() + suffix
// })

// Vue.filter('reverse', function (value) {
//   return value.split('').reverse().join('')
// })
let capitalize = function (value, prefix, suffix) {
  return prefix + value.toUpperCase() + suffix
}
let app = new Vue({
  el: '#app',
  filters: { capitalize }, 
  data: {
    message: 'Bonsoir les amis'
  }
})
