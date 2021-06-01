const app = new Vue({
    el: "#app",
    data: {
        message: "Hello im Santiago",  
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        //Crea los metodos, observadores y eventos pero aun no accede al dom
        //aun no se puede acceder a "El"
        console.log("created")
    },
    beforeMount(){
        //se ejecuta antes de insertar el dom
        console.log("beforeMount")
    },
    mounted(){
        //se ejecuta al insertar el dom
        console.log("mounted")
    },
    beforeUpdate(){
        //al detectar un cambio
        console.log("beforeUpdate")
    },
    updated(){
        //al realizar los cambios
        console.log("updated")
    },
    beforeDestroy(){
        //antes de destruir la instancia
        console.log("beforeDestroy")
    },
    destroyed(){
        //se destruye toda la instancia
        console.log("destroyed")
    },
    methods: {
        destroy(){
            this.$destroy()
        }
    }
  });