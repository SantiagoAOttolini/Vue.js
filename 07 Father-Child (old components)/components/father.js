Vue.component("father", {
  template: //html
  `
  <div class="p-5 bg-dark text-white">
    <h1>Father component:  {{fatherNumber}}</h1>
    <h5>{{fatherName}}</h5>
    <button class="btn btn-info mb-2" @click="fatherNumber++">+</button>
    <button class="btn btn-info mb-2" @click="fatherNumber--">-</button>
    <child :number="fatherNumber" @childName="fatherName = $event"></child>
  </div>
  `,
  data(){
    //father number is overwriten by the child name that is declare in child.js
    return  {fatherNumber:0, fatherName:""}
  }
});
