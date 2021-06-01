const app = new Vue({
  el: "#app",
  data: {
      message: "Hello im Santiago", 
      counter: 0
  },
  //Computed: data with any logic
  computed:{
    invested(){
        return this.message.split("").reverse().join("")
    },
    color(){
        return {
            "bg-success": this.counter <= 10,
            "bg-warning": this.counter > 10 && this.counter < 20,
            "bg-danger": this.counter >= 20,
        }
    }
  },
  methods: {},
});
