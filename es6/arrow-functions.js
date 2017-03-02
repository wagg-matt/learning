// Why arrow functions....

var urlUpdate = function(path, title) {
  return path + title;
}

var arrowUrlUpdate = (path, title) => {
  return path + title;
}

// or
// automatically returns

var arrowUrlUpdate = (path, title) => path + title;

// or
// if only returning one paramter

var arrowUrlUpdate = path => path;

// eg to get x squared

var squared = x => x * x;
