/* new Vue({
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
     
    
    methods: {
         displayPage: function(id) {
            desId = id.currentTarget.id   
         }
    },
    
 });*/


window.onload = function() {
	fetch_categories();
}

function fetch_categories() {
	end_point = "https://www.eventbriteapi.com/v3/categories/?token=BI4EZ4WPLG53F6RLTG7B";

	$.ajax({
		url: end_point,
		success: function(data) {
			console.log(data);
			category_list = data.categories;
			
			categories = $("#categories");
			categories.html("");
			var content = "";

			for(var i = 0; i < category_list.length; i++) {
				var category = category_list[i];

				content += "<div class="+category.short_name+">"+category.name+"</div>";
			}
			
			categories.html(content);
		}
	});
}


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