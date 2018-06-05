'use strict'
var jane = {
  name: 'Jane',

  describe: function () {
    return 'Person named '+this.name;
  }
};

// > var func = jane.describe;
// > func()
// TypeError: Cannot read property 'name' of undefined

// The solution is to use the method bind() that all functions have
// It creates a new function whose this always has the given value

// > var func2 = jane.describe.bind(jane);
// > func2()
// 'Person named Jane'