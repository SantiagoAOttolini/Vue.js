Vue.component("message", {
  template: //html
  `
    <div class="container">
        <h1>{{message}}</h1>
    </div>
    `,
  data() {
    return {
      message: "Hello im Santiago",
    };
  },
});
