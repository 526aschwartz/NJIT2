const vue_app = Vue.createApp({
      created() {
            fetch('movies.json')
                  .then(response => response.json())
                  .then(json => {
                        this.movies = json.concat(this.favoriteMovies)
                  })
      },

      data() {
            return {
                  movies: [],

                  title: "Disney Favorite Movies",
                  owner: "Alyson Schwartz",
                  github: "https://github.com/526aschwartz/NJIT2",

                  favoriteMovies: [
                        {
                              title: "Aladdin",
                              country: "USA",
                              iscore: 8.8,
                              runtime: 90,
                              released: [1992, 11, 25],
                              rating: "G",
                              imdb: "https://www.imdb.com/title/tt0103639",
                              website: "https://www.disney.com",
                              likes: 2600,
                              dislikes: 140,
                              posterindex: 0,
                              posters: ["img/aladdin1.jpg", "img/aladdin2.jpg", "img/aladdin3.jpg"]
                        },
                        {
                              title: "Toy Story",
                              country: "USA",
                              iscore: 9.2,
                              runtime: 81,
                              released: [1995, 11, 22],
                              rating: "G",
                              imdb: "https://www.imdb.com/title/tt0114709",
                              website: "https://www.disney.com",
                              likes: 3200,
                              dislikes: 80,
                              posterindex: 0,
                              posters: ["img/TS1.jpg", "img/TS2.jpg", "img/TS3.webp"]
                        },
                        {
                              title: "Cinderella",
                              country: "USA",
                              iscore: 8.5,
                              runtime: 74,
                              released: [1950, 2, 15],
                              rating: "G",
                              imdb: "https://www.imdb.com/title/tt0042332",
                              website: "https://www.disney.com",
                              likes: 2000,
                              dislikes: 120,
                              posterindex: 0,
                              posters: ["img/C1.jpg", "img/C2.jpg", "img/C3.jpeg"]
                        }
                  ]
            }
      },

      methods: {
            makeTextDate(dateArray) {
                  const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
                  let year = dateArray[0];
                  let month = months[dateArray[1] - 1];
                  let day = dateArray[2];
                  return `${month} ${day}, ${year}`;
            },

            like(index) {
                  this.movies[index].likes++;
            },

            dislike(index) {
                  this.movies[index].dislikes++;
            },

            posterClick(index) {
                  let movie = this.movies[index];
                  movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
            },

            timeText(minutes) {
                  let hrs = Math.floor(minutes / 60);
                  let mins = minutes % 60;
                  return `${hrs}h ${mins}min`;
            }
      }
});

vue_app.mount("#vue_app");
