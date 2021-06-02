Vue.component("Father", {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h1>number {{$store.state.number}}</h1> 
        <titleChild></titleChild>
    </div>
    `
  });