//create instance Vue
const app = new Vue({
  el: "#app",
  data: {
    title: "Hello word with Vue",
    fruits: ["Apple", "Pear", "Watermelon"],
    people: [
      { name: "Santiago", age: 22 },
      { name: "Matias", age: 20 },
      { name: "Joaquin", age: 17 },
    ],
  },
});
