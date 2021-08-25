const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function (films) {
    const filmTitles = this.films.map((film) => {
      return film.title
    })
    return filmTitles

  } 
Cinema.prototype.findTitle = function (films, title) {
  const filmResult = this.films.find((film) => {
    film.title === title
  })
  return filmResult;
}

Cinema.prototype.findGenre = function (films, genre) {
  const filmResult = this.films.filter((film) => {
    film.genre === genre;
  })
  return filmResult
}

module.exports = Cinema;
