// Why arrow functions....
// simplifies scope, enables referring to scope outside of the function

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

// handlers original

var deliveryBoy = {
  name: "Matt",

  handleMessage: function(message, handler) {
    handler(message);
  },

  receive: function() {
    var that = this;

    this.handleMessage("Hello, ", function (message) {
      that.name;

      console.log(message + that.name);
    })
  }
}

deliveryBoy.receive();

// with arrow functions

var deliveryBoy = {
  name: "Matt",

  handleMessage: function(message, handler) {
    handler(message);
  },

  receive: function() {
    var that = this;

    this.handleMessage("Hello, ", (message) => {
      console.log(message + this.name);
    })
  }
}

deliveryBoy.receive();
