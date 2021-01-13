let app = new Vue ({
    el: '#app',
    data: {
        shows: [],
        searchString: "",
    },
    methods: {
        cercaFilm: function (){
            let searchContent = this.searchString
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + searchContent)
            .then(response => {
                this.shows = response.data.results;
                console.log(this.shows);
            });	
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=ebf14a283df056252b947c3b861417f2&language=it-IT&query=" + searchContent).then(response => {
                this.shows = response.data.results;
                console.log(this.shows);
            })
            
        }    
    },
    mounted(){
    }
})