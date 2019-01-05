// Vue.component('message', {
  // props: ['type', 'message'],
//   props: {
//     type: {type: String, default: 'success'},
//     message: String
//   },
//   template: `<div class="ui message success" :class="type">{{ message }}</div>`
// })
let message = {
  props: {
      type: {type: String, default: 'success'},
      message: String,
      header: String
    },
    template: `<div class="ui message success" :class="type">
    <button class="close icon" @click.prevent="close">X</button>
    <div class="header">{{ header }}</div>
    {{ message }}
    </div>`,
    methods: {
      close () {
        // this.$parent.$data.alert = false
        this.$emit('close')
      }
    }
}

let counter = {
  data: function () {
    return {
      count: 0
    }
  },
  props: {
    start: {type: Number, default: 0}
  },
  computed: {
    total: function () {
      return this.start + this.count
    }
  },
  methods: {
    increment: function () {
      this.count ++
    }
  },
  template: `<button @click="increment">{{ total }}</button>`
  // mounted: function () {
  //   this.count = this.start
  // }
}


let app = new Vue({
  el: '#app',
  components: { message, counter },
  data: {
    message: 'Salut à tous',
    alert: false
  },
  methods: {
    showAlert () {
      this.alert = true
    },
    hideAlert () {
      this.alert = false
    }
  }
})
