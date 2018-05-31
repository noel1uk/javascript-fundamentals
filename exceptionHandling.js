function getPerson(id) {
  if (id < 0) {
    throw new Error('ID must not be negative: ' + id);
  }
  return { id: id }; 
}

function getPersons(ids) {
  var result = [];
  ids.forEach(function (id) {
    try {
      var person = getPerson(id);
      result.push(person);
    } catch (exception) {
      console.log(exception);
    }
  });
  return result;
}
