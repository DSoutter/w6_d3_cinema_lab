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
  const filmGenreResult = this.films.filter((film) => {
    return film.genre === genre;
  })
  return filmGenreResult
}

Cinema.prototype.findByYear = function (films, year) {
  const filmYearResult = this.films.filter((film) => {
    return film.year === year;
  })
  return filmYearResult
}

Cinema.prototype.findByRuntime= function(films, runtime) {
  const filmRuntimeResult = this.films.filter((film) => {
    return film.length >= runtime;
  })
  return filmRuntimeResult;
}

Cinema.prototype.totalRuntime = function(films) {
  const runtimeResult = this.films.reduce((runningTotal, currentFilm) => {
    return runningTotal + currentFilm.length
  }, 0)

  return runtimeResult
}

module.exports = Cinema;
