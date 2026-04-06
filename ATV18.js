class Forma{
    constructor( altura, largura){
        
        this.largura = largura;
        this.altura = altura;
}

calculaArea(area){
   return   this.largura* this.altura;
    
}
}

class Forma2 extends Forma{
    constructor(altura,largura){
    super(altura,largura);
}
calculaArea(area){
    return (this.largura* this.altura)/ 2;
    
}
}

class Forma3 extends Forma {
    constructor(altura, larguraBaseMaior, larguraBaseMenor) {
        super(altura, larguraBaseMaior); // Usamos a largura comum como base maior
        this.larguraMenor = larguraBaseMenor;
    }

    calculaArea() {
        // Fórmula: ((BaseMaior + BaseMenor) * altura) / 2
        return ((this.largura + this.larguraMenor) * this.altura) / 2;
    }
}


const retangulo = new Forma(10, 5);
console.log("Área Retângulo:", retangulo.calculaArea()); // 50

const triangulo = new Forma2(10, 5);
console.log("Área Triângulo:", triangulo.calculaArea()); // 25