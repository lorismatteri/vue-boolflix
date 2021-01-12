let app = new Vue ({
    el: '#app',
    data: {
        films: [],
        searchString: "",
    },
    methods: {
        cercaFilm: function (){
            let searchContent = this.searchString
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + searchContent)
            .then(response => {
                this.films = response.data.results
                console.log(response.data.results);
            });	
            
        }    
    }
})