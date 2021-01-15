let app = new Vue ({
    el: '#app',
    data: {
        films: [],
        tvSeries: [],
        searchString: "",
        langs: ['en', 'it', 'es', 'fr', 'de'],
    },
    methods: {
        cercaFilm: function (string){
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + string)
            .then(response => {
                this.films = response.data.results;
                console.log(this.films);
                //Per scoprire la lunghezza dell'overview
                /* for (let i = 0; i < this.films.length; i++) {
                    console.log(this.films[i].overview);
                    let descr = this.films[i].overview;
                    console.log(descr.length);
                    
                } */
                
            });	
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + string).then(response => {
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
})

