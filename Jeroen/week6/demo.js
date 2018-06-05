function CatProvider(apiUrl) {
    this.apiUrl = apiUrl;
}
CatProvider.prototype.fetchCatUrl = function(callback) {
    $.get(this.apiUrl, function(data) {
        callback(data.file);
    });
}


function ViewController(el) {
    let self = this;
    self.cc = new CatProvider('http://aws.random.cat/meow');
    self.view = new Vue({
        el: el,
        data: {
            caturl: 'https://purr.objects-us-west-1.dream.io/i/067_-_1yzs4wL.gif'
        },
        methods: {
            fetchNewCat: function() {
                self.cc.fetchCatUrl(function(url) {
                    self.view.caturl = url;
                });
            }
        }
    });
}

let vc =new ViewController('#app1');
