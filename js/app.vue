new Vue({
    el: '#app',
    data () {
      return {
        info: [],
        search: null
      }
    },

    mounted() {
      axios
        .get('http://api.eventful.com/json/events/search?keywords=music&location=Singapore&app_key=9KM6xpqMgc6RqHPj')
        .then(response => (this.info = response))
    },
})