//var data = { c: 1 } TB

 new Vue({
    //data: data TB
    el: '#app',
    data () {
      return {
        info: []
      }
    },
    mounted () {
    // API Endpoint
      axios
        .get('https://www.eventbriteapi.com/v3/categories/?token=BI4EZ4WPLG53F6RLTG7B')
        .then(response => (this.info = response.data.categories))
        .catch(error => console.log(error))
    },
     
    
    
    
  });
/*
var Component = Vue.extend ({
    data: function () {
        return {c: 1};
    }
})*/
/*
new Vue({
    el: '#fetch',
    data () {
      return {
        //info: null,
        results: null
      }
    },
    
    mounted () {
      axios
        .get('http://api.eventful.com/rest/categories/list?subcategories=music&app_key=9KM6xpqMgc6RqHPj')
        .then(response => (this.results = response))
        .catch(error => console.log(error))
    }
  });*/