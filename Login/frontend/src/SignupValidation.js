function Validation(values){
    console.log("Tipo de password:", typeof values.password, values.password);
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === "") {
        error.name = "Digite um nome válido";
    }else{
        error.name = ""
    }

    if(values.email === "") {
        error.email = "Digite um email válido";
    }else if(!email_pattern.test(values.email)) {
        console.log("Regex falhou para senha:", values.password);
        error.email = "O email não corresponde";
    }else{
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Digite sua senha";
    }else if(!password_pattern.test(values.password)) {
        error.password = "A senha não corresponde";
    }else{
        error.password = ""
    }
    return error;
    
}

export default Validation;