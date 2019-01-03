let app = new Vue({
  el: '#app',
  data: {
    success: false,
    message: ''
  },
  computed: {
    cls: function() {
      console.log('cls called')
      return this.success === true ? 'success' : 'error'
    }
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    firstname: 'Rémi',
    lastname: 'Willebrouck'
  },
  computed : {
    // fullname: function() {
    //   return this.firstname + ' ' + this.lastname
    // }
    fullname: {
      get: function () {
        return this.firstname + ' ' + this.lastname
      },
      set: function (value) {
        // console.log(value)
        let parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    }
  }
})

let app3 = new Vue({
  el: '#app-3',
  data: {
    firstname: 'Rémi',
    lastname: 'Willebrouck',
    fullname: ''
  },
  watch: {
    fullname: function (value) {
      console.log('watch', value)
    }
  }
})
