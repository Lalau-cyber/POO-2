class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea(area){
        area = this.largura* this.altura
        return area;
    }

    calculaPerimetro(perimetro){

        perimetro = 2* (this.largura + this.altura)
        return perimetro;

    }
}

const rRetangulo = new Retangulo(30, 3);

console.log(`largura : ${rRetangulo.largura}`)
console.log(`Altura: ${rRetangulo.altura}`);
console.log(`Área: ${rRetangulo.calculaArea()}`); //saida 60
console.log(`Perímetro: ${rRetangulo.calculaPerimetro()}`); //saida 56