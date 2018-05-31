// Function declarations are hoisted- moved in entirety to beginning of curretn scope

function foo() {
  bar(); // ok, bar is hoisted
  function bar() {
  }
}

// However assignments performed by them are not

function foo() {
  bar(); // Not ok, bar is still undefined
  var bar = function() {

  };
}