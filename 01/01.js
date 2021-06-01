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
    newPerson: "",
    total: 0,
  },
  methods: {
    addPerson() {
      this.people.push({ name: this.newPerson, age: 15 });
      this.newPerson = "";
    },
  },
  computed: {
    sumAge() {
      this.total = 0;
      for (person of this.people) {
        this.total = this.total + person.age;
      }
      return this.total
    },
  },
});
