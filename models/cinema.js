const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.listOfTitles = function () {
//   // const filmTitles = []
//   const filmTitles = function (films) {
//     const result = films.map((film) => {
//       return film.title
//     })
//   } 
//   return result
// }

Cinema.prototype.listOfTitles = function (films) {
    const filmTitles = this.films.map((film) => {
      return film.title
    })
    return filmTitles

  } 

module.exports = Cinema;
