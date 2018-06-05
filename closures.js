// Each function stays connected to the variables of the functions 
// that surround it even after it leaves the scope in which it was created

function createIncremontor(start) {
  return function () { // 1
    start++;
    return start
  }
}

// The function starting in line 1 leaves the context in which
// it was created but stays connected to a live version of start:

// > var inc = createIncrementor(5);
// > inc()
// 6
// > inc()
// 7
// > inc()
// 8

// A closure is a function plus the connection to the variables of its 
// surrounding scopes. Thus what createIncrementor() returns is a closure