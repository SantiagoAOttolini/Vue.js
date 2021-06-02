Vue.component("Father", {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h1>number {{number}} </h1> 
        <titleChild></titleChild>
    </div>
    `,
    computed: {
        ...Vuex.mapState(["number"])
    }
  });