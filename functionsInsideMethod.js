var jane = {
  name: 'Jane',
  friends: [ 'Tarzan', 'Cheeta'],
  logHiToFriends: function () {
    'use strict';
    this.friends.forEach(function (friend) {
      // `this` is undefined here
      console.log(this.name+' says hi to '+friend)
    });
  }
}

// Calling logHiToFriends produces an error

// > jane.logHiToFriends()
// TypeError: Cannot read property 'name' of undefined

/*
First way to fix it
*/

logHiToFriends: function () {
  'use strict';
  var that = this;
  this.firends.forEach(function (friend) {
    console.log(that.name+'says hi to '+friend);
  });
}

/*
Second way to fix it
*/

logHiToFriends: function () {
  'use strict';
  this.friends.forEach(function (friend) {
    console.log(this.name+' says hi to '+friend);
  }, this)
}