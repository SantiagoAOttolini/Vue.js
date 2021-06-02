Vue.component("counter", {
    template: //html
    ` 
    <div  class="container">
    <hr>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>
    `,
    data(){
        return {numero: 0}
    }
})

