Vue.component("titleChild",{
    template: //html 
    `
    <div>
        
        <button @click="increase">+</button>
        <button @click="decrease(2)">-</button>
        <h1>number {{number}}</h1>  
    </div>
    `,
    computed: {
        ...Vuex.mapState(["number"])
    },
    methods: {
        ...Vuex.mapMutations(["increase", "decrease"])
    }
})