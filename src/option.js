const Option = function(value) {
  this.value = value;
};

const None = new Option();

const Some = function(value) {
  if (typeof value !== undefined) {
    return new Option(value);
  }
  return None;
};

Option.prototype.map = function(fn) {
  if (this.value !== undefined) {
    return new Some(fn(this.value));
  }
  return None;
};

Option.prototype.getOrElse = function(value) {
  if (this.value !== undefined) {
    return this.value;
  }
  return value;
};

const person = {
  title: None,
  firstname: Some('Joe'),
  middlename: None,
  lastname: Some('Pizza')
};

function formatName(person) {
  const addSpace = function(inp) {
    return inp + ' ';
  };
  return person.title.map(addSpace).getOrElse('') +
      person.firstname.map(addSpace).getOrElse('') +
      person.middlename.map(addSpace).getOrElse('') +
      person.lastname.map(addSpace).getOrElse('');
}
export const result = () => {
  return formatName(person);
};
