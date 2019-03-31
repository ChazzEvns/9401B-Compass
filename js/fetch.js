var vm = new Vue({
    el: '#app',
    data: {
        status: ''
    },
    created: function () {
        this.loadQuote();
    },
    methods: {
        loadQoute: function () {
            this.status = 'loading...';
            var vm = this;
            axios.get('http://api.eventful.com/rest/')
            .then(function(response) {
                vm.status = response.data[0];
            })
            .catch(function(error) {
                vm.status = 'An error just occured.' + error;
            });
        }
    }
});