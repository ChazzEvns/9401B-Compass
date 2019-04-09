//var data = { c: 1 } TB

 new Vue({
    //data: data TB
    el: '#app',
    data () {
      return {
<<<<<<< HEAD
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
=======
        info: [],
>>>>>>> 1849f8cd212e77cac283c2a693e564880d79cf32
      }
    },
    
    mounted () {
      axios
<<<<<<< HEAD
        .get('http://api.eventful.com/rest/categories/list?subcategories=music&app_key=9KM6xpqMgc6RqHPj')
        .then(response => (this.results = response))
        .catch(error => console.log(error))
    }
  });*/
=======
        .get('http://api.eventful.com/json/events/search?keywords=music&location=Singapore&app_key=9KM6xpqMgc6RqHPj')
        .then(response => (this.info = response))
    },
});
>>>>>>> 1849f8cd212e77cac283c2a693e564880d79cf32
