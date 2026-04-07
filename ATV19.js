class login{
    constructor(){
        this.usuarios = [];

    }
    cadastro(email,senha){
        const existe = this.usuarios.find(u => u.email === email);
    
        if(existe){
        return "Erro, cadastro ja existe";
     }
        this.usuarios.push({ email, senha });
        return "✅ Cadastro realizado!";
    }
 
    loginUsu(email,senha){

        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
        return usuario ? " Login autorizado!" : "E-mail ou senha incorretos.";
  
    }

}

const novo = new login();

console.log(novo.cadastro("Walte@12", "5566"));
console.log(novo.cadastro("Walte@12", "5566"));
console.log(novo.cadastro("Alice@72", "9066"));