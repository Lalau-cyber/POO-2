class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
    }

    login(nomeInf, senhaInf){

        if(nomeInf === this.nome && senhaInf === this.senha){

            return `Login realizado, bem-vinda(o) ${this.nome}`
        }
        else{
            return `Falha, nome ou senha incorretos`
        }
    }
}
const usuario1 = new Usuario("Lex_Wall", "6776@");

console.log(usuario1.login("Lex_Wall", "!2177")); // incorreto
console.log*usuario1.login("Lex_Wall", "6776@") // certo