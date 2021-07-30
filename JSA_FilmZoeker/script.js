const filmListParent = document.querySelector("#overzicht"); //parent stap 1
// console.log(filmListParent);

//van elke film de poster in de Dom zetten
const addMoviesToDom = (moviesArray) => {
  filmListParent.innerHTML = ""; //lijst legen
  //array maken
  moviesArray.forEach((movies) => {
    // en elk object in de array aanroepen
    const newLi = document.createElement("li"); //child <li> defined
    const newImgContent = document.createElement("img"); //child <img> defined
    newLi.classList = movies.imdbID; //add class to Li
    const newAtag = document.createElement("a"); //child <a> defined
    newLi.appendChild(newAtag); //add <a> as child to Li
    newAtag.setAttribute("href", "https://www.imdb.com/title/" + movies.imdbID); //add url
    newImgContent.src = movies.Poster; //add Poster to <img>
    newAtag.appendChild(newImgContent); //add <img> as child to <a>
    filmListParent.appendChild(newLi); // add <li> to <ul>
    // console.log(movies.Poster);
  });
};
addMoviesToDom(movies);

//selecteer buttons en maak er een array van
const radioButtons = document.getElementsByName("filter");
// console.log(Array.isArray(Array.from(radioButtons)));

//voeg een event toe aan elke button
Array.from(radioButtons).forEach(function (item) {
  item.addEventListener(
    "change",
    (handleOnChangeEvent = (event) => {
      switch (event.target.id) {
        case "nieuw":
          addMoviesToDom(newMovies);
          break;
        case "avengers":
          addMoviesToDom(avengersMovies);
          break;
        case "xmen":
          addMoviesToDom(xmenMovies);
          break;
        case "princess":
          addMoviesToDom(princessMovies);
          break;
        case "batman":
          addMoviesToDom(batmanMovies);
          break;
        default:
          console.log(
            "princess-films",
            "x-men-films",
            "avenger-films",
            "batman-films",
            "latest-films"
          );
      }
      // console.log(event.target.id);
    })
  );
});
//alle princess films in een array
const princessMovies = movies.filter((pr) => {
  const prGenre = pr.Title.includes("Princess");
  return prGenre;
});
console.log(princessMovies);
//alle Avengers in Array
const avengersMovies = movies.filter((av) => {
  const avGenre = av.Title.includes("Avengers");
  return avGenre;
});
console.log(avengersMovies);
//alle X-men
const xmenMovies = movies.filter((xm) => {
  const xmGenre = xm.Title.includes("X-Men");
  return xmGenre;
});
console.log(xmenMovies);
//batman
const batmanMovies = movies.filter((bt) => {
  const btGenre = bt.Title.includes("Batman");
  return btGenre;
});
console.log(batmanMovies);

//nieuwste films
const newMovies = movies.filter((nw) => {
  return nw.Year >= "2014";
});
// });
console.log(newMovies);
// addMoviesToDom(princessMovies);

// const newAtag = document.createElement("a");
// newAtag.setAttribute("href", "https://www.imdb.com/title/" + movies.imdbID);
// console.log(newAtag);
