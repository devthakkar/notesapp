var square = x => x * x;
console.log(square(7));

var user = {
  name: 'Dev',
  sayHi: (() => {
    console.log('hi im ');
  })
  sayHiAlt () {
    console.log(arguments)
    console.log (`hi i'm ${this.name}`);
  }
}
user.sayHi();
