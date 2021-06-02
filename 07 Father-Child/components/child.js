Vue.component("child", {
    template: //html
    `
    <div class="py-5 bg-success">
        <h1>Child component: {{number}}</h1>
    </div>
    `,
    props:["number"]
  });