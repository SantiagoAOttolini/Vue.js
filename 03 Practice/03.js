const app = new Vue({
  el: "#app",
  data: {
    title: "GYM with vue",
    task: [],
    newTask: "",
  },
  methods: {
    addTask() {
      this.task.push({ name: this.newTask, state: false });
      this.newTask = "";
      localStorage.setItem("gym-vue", JSON.stringify(this.task));
    },
    editTask(index) {
      this.task[index].state = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.task));
    },
    deleteTask(index) {
      this.task.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.task));
    },
  },
  created: function () {
    let dataDB = JSON.parse(localStorage.getItem("gym-vue"));
    if (dataDB === null) {
      this.task = [];
    } else {
      this.task = dataDB;
    }
  },
});
