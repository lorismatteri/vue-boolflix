let app = new Vue ({
    el: '#app',
    data: {
        films: [],
        tvSeries: [],
        searchString: "",
        langs: ['en', 'it', 'es', 'fr', 'de']
    },
    methods: {
        cercaFilm: function (){
            let searchContent = this.searchString
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + searchContent)
            .then(response => {
                this.films = response.data.results;
                console.log(this.films);
            });	
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + searchContent).then(response => {
                this.tvSeries = response.data.results;
                console.log(this.tvSeries);
            });
            
        },
        getFlag: function(lang){
            return `./assets/img/${lang}.png`
        },
        getCover: function(cover){
            return `https://image.tmdb.org/t/p/w342/${cover}`
        }
    },
    mounted(){
    }
})