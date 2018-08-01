const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  return this.films.map(film => film.title);
}


Cinema.prototype.findFilmByTitle = function (title) {
return this.films.find( film => film.title === title );
};

Cinema.prototype.getTotalRunTimeOfAll = function () {
  return this.films.reduce((accumulator, currentValue) => accumulator + currentValue.duration, 0)
};
module.exports = Cinema;
