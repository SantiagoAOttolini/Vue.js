Vue.component("titleChild",{
    /* inside de commit pass the mutation */
    template: //html 
    `
    <div>
        
        <button @click="$store.commit('increase')">+</button>
        <h1>number {{$store.state.number}}</h1>  
    </div>
    `
})