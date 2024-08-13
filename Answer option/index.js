const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
const greet = obj.greet;
greet();
