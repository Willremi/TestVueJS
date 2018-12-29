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
// app2.message = 'un nouveau message'

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
// app3.seen = false

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Apprendre JavaScript' },
      { text: 'Apprendre Vue' },
      { text: 'Créer quelque chose de génial' }
    ]
  }
})
// app4.todos.push({ text: 'Un nouvel élément ajouté' })

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Salut les gars !'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Salut les amis !'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Chocolat' },
      { id: 1, text: 'Chips' },
      { id: 2, text: 'Tout ce que les humains sont supposés manger' } 
    ]
  }
})
