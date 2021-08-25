const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
    const filmTitles = this.films.map((film) => {
      return film.title
    })
    return filmTitles

  } 
Cinema.prototype.findTitle = function (title) {
  const filmResult = this.films.find((film) => {
    film.title === title
  })
  return filmResult;
}

Cinema.prototype.findGenre = function (genre) {
  const filmGenreResult = this.films.filter((film) => {
    return film.genre === genre;
  })
  return filmGenreResult
}

Cinema.prototype.findByYear = function (year) {
  const filmYearResult = this.films.filter((film) => {
    return film.year === year;
  })
  return filmYearResult
}

Cinema.prototype.findByRuntime= function(runtime) {
  const filmRuntimeResult = this.films.filter((film) => {
    return film.length >= runtime;
  })
  return filmRuntimeResult;
}

Cinema.prototype.totalRuntime = function() {
  const runtimeResult = this.films.reduce((runningTotal, currentFilm) => {
    return runningTotal + currentFilm.length
  }, 0)

  return runtimeResult
}

module.exports = Cinema;
