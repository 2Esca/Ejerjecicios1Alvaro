document.addEventListener("DOMContentLoaded",function(evento) {

    const usuarios = document.getElementById('uname');
    const clave=document.getElementById('pwd');
    const form=document.getSelector('form');

    form.addEventListener('submit', validarFormulario);

    usuarios.addEventListener("keyup", function(e){
        console.log("ha cambiado");
        if (this.value){
            this.setCustomValidity("");
        }else{
            this.setCustomValidity("campo vacio");
        }
    })

    clave.addEventListener("keyup", function(e){
        console.log("ha cambiado");
        if(this.value.length > 6){
            this.setCustomValidity("");
        }else{
            this.setCustomValidity("Menor de 6 caracteres");
        }
    })

    function validarFormulario(evento) {
        
        evento.preventDefault();
        let valido=true;
        if(!usuarios.value){
        usuarios.setCustomValidity("Campo vacio");
        valido=false;
        }else{
            usuarios.setCustomValidity("");
        }

        if(clave.length < 6){
            clave.setCustomValidity("Menor de 6 caracteres");
            valido=false;
        }else{
            clave.setCustomValidity("");
        }

        this.classList.add('was-validated');

        if(valido){
            this.submit();
        }else{
            usuarios.setCustomValidity("Menor de 6 caracteres");
        }

    }



});