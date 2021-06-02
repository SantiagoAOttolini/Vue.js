Vue.component("child", {
    template: //html
    `
    <div class="py-5 bg-success">
        <h1>Child component: {{number}}</h1>
        <h1>Name: {{name}}</h1>
    </div>
    `,
    props:["number"],
    data(){
        return {name:"Santiago"}
    },
    mounted(){
        this.$emit("childName", this.name)
    }
  });