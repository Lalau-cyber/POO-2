class Funcionario{
        constructor(salarioBa, nome){
            this,nome = nome;
            this.salarioBa = salarioBa;

        }
        //Polimorfismo o metodo te muitas formas, 
        // é diferente em cada um dos objetos
        calculaSalario(){
            return this.salarioBa;
        }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, salarioBa, bonus){
        super(nome,salarioBa);
        this.bonus = bonus;
    }
    //Polimorfismo
    calculaSalario(){
return this,salarioBa + this.bonus;

    }
}

class Design extends Desenvolvedor{
    constructor (nome, salarioBa, bonus, Comissao){
        super(nome, salarioBa, bonus);
        this.Comissao = Comissao;
    }
 //Polimorfismo
    calcularSalario(){

        return this.salarioBa + (this.salarioBa * this.comissao);
    }
}
 const Dev = new Desenvolvedor("Aaron", 3000, 2000);
 const Des = new Design ("Ryen", 5000, 1000, 0.15)

 console.log(`${Dev.nome} (Dev) recebe: R$ ${Dev.calcularSalario()}`); 
 console.log(`${Des.nome} (Designer) recebe: R$ ${Des.calculateSalario()}`);