import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  movies: Array<Meta> = movieList

  constructor() { }

  // methods
  getMovies(){
    return this.movies
  }

  getMovie(id:number){
    let oneMovie;

    this.movies.forEach((movieItem)=>{
      if (movieItem.id === id) {
        oneMovie = movieItem;
      }
    })
    return oneMovie;
    }
}

export class Meta {
  constructor (
    public id: number,
    public title: string,
    public poster: string,
    public synopsis: string,
    public genres: Array<string>,
    public year: number,
    public director: string,
    public actors: Array<string>,
    public hours: Array<string>,
    public room: number
  ) {}
}

export const movieList:  Array<Meta> = [
  new Meta(
    1,
    "The Shawshank Redemption",
    "https://i.imgur.com/SuW2ZlC.jpg",
    "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...",
    [
      "Crime", "Drama"
    ],
    1994,
    "Frank Darabont",
    [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Gil Bellows"
    ],
    ["Monday","19:30","22:30"],
    1
  ),
  new Meta (
    2,
    "The Godfather",
     "https://i.imgur.com/Uzvny9I.jpg",
    "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...",
    [
      "Crime", "Drama"
    ],
    1972,
    "Francis Ford Coppola",
    [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano",
      "Robert Duvall",
      "Sterling Hayden"
    ],
    ["Tuesday","19:30","22:30"],
    2
  ),
  new Meta(
    3,
    "The Godfather Part II",
     "https://i.imgur.com/abJNkWI.jpg",
    "The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...",
    [
      "Crime", "Drama"
    ],
    1974,
    "Francis Ford Coppola",
    [
      "Al Pacino",
      "Robert Duvall",
      "Diane Keaton",
      "Robert De Niro",
      "John Cazale",
      "Talia Shire"
    ],
    ["Wednesday","19:30","22:30"],
    3
  ),
  new Meta(
    4,
    "The Dark Knight",
     "https://i.imgur.com/3jLPB46.jpg",
    "The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...",
    [
      "Action", "Crime", "Drama", "Thriller"
    ],
    2008,
    "Christopher Nolan",
    [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman"
    ],
    ["Thusday","19:30","22:30"],
    4
  ),
  new Meta(
    5,
    "Schindler's List",
     "https://i.imgur.com/IWZJOmu.jpg",
    "The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...",
    [
      "Biography", "Drama", "History"
    ],
    1993,
    "Steven Spielberg",
    [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall",
      "Jonathan Sagall",
      "Embeth Davidtz"
    ],
    ["Fiday","19:30","22:30"],
    5
  )
]
