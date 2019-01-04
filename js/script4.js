// Vue.directive('salut', {
//   bind: function (el, binding, vnode) {
//     el.value = binding.value
//     console.log('bind')
//   },
//   update: function (el, binding, vnode, oldvnode) {
//     console.log('update')
//   }
// })
let salut = function (el, binding) {
    el.value = binding.value
    console.log('bind')
}

let app = new Vue({
  el: '#app',
  data: {
    success: false,
    message: ''
  },
  methods : {
    demo: function () {
      console.log('Salut')
    }
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    message : 'Rémi'
  },
  methods : {
    demo: function () {
      console.log('Salut')
    }
  }
})
let app3 = new Vue({
  el: '#app-3',
  directives: {
    salut
  },
  data: {
    message : 'Yves'
  },
  methods : {
    demo: function () {
      console.log('Salut')
    }
  }
})
