Vue.component("father", {
  template: //html
  `
  <div class="p-5 bg-dark text-white">
    <h1>Father component:  {{fatherNumber}}</h1>
    <button class="btn btn-info mb-2" @click="fatherNumber++">+</button>
    <button class="btn btn-info mb-2" @click="fatherNumber--">-</button>
    <child :number="fatherNumber"></child>
  </div>
  `,
  data(){
    return  {fatherNumber:0}
  }
});
