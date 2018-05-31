// can access all parameters via the special arguments variable

function f() { return arguments }
var args = f('a', 'b', 'c');
args.length
args[0]