Vue.use(vuelidate.default)



new Vue({
    el: '#app', //elemento principal do vue  

    data() {
        return {
            form: {
                nome: "",
                sobr: "",
                nasc: "",
                cid: "",
                signo: ""
            }      
        }            
    },

    validations: {
        form:{
            nome: {
                required: validators.required
            },
            sobr: {
                required: validators.required
            },
            nasc: {
                required: validators.required,
                minValue: value => value > new Date().toISOString()
            },
            cid: {
                required: validators.required
            },
            signo: {
                required: validators.required
            },
        }
    },

    methods: {
        submeterForm(){
            console.log("submetendo form")
            if(!this.$v.form.$invalid){
                console.log('Form submetido', this.form);
            }          
            else{
                console.log('Form Invalido!')
            }
        },

        mascara_data(campo, valor){
            console.log("mascarando data")
            var mydata = '';
            mydata = mydata + valor;
            if (mydata.length == 2){
              mydata = mydata + '/';
              campo.value = mydata;
            }
            if (mydata.length == 5){
              mydata = mydata + '/';
              campo.value = mydata;
            }
        },
    },

              
})