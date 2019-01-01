var app = new Vue({
  el: '#app',
  data: {
    texte: 'Je m\'appelle Rémi Willebrouck et j\'ai 34 ans, je vis à Liévin',
    link: 'http://www.wiremi.fr',
    texte2: 'Je suis là'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    success: true,
    friends: ['Jean François', 'Yves', 'Thomas', 'Fabien']
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    success: true
  },
  methods: {
    close: function() {
      this.success = false
    },
    style: function() {
      if(this.success) {
        return {background: 'green'}
      } else {
        return {background: 'red'}
      }
    }
  }
})
