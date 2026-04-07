class Carrinho {
  constructor() {
    this.itens = [];
  }

  adiciona(nome, preco, qtd) {
    this.itens.push({ nome, preco, qtd });
  }

  remover(nome) {
    this.itens = this.itens.filter(item => item.nome !== nome);
  }

  calcularTotal() {
    return this.itens.reduce((soma, item) => soma + (item.preco * item.qtd), 0);
  }
}


const car = new Carrinho();
car.adiciona("Leite", 5.00, 4);
car.adiciona("Pão", 2.00, 10);

console.log("Total:", car.calcularTotal()); // 40

car.remover("Leite");
console.log("Novo Total:", car.calcularTotal()); // 20