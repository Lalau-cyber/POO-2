class Produto {
  constructor(nome, preco, quantidadeInicial) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = quantidadeInicial; // O "balde" que guarda os itens
  }


  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`📦 Reposição: +${quantidade} unidades de ${this.nome}.`);
    console.log(`Estoque atual: ${this.estoque}`);
  }

  vender(quantidade) {
    // A DICA: Verificar se o que o cliente quer é maior do que o que temos
    if (quantidade > this.estoque) {
      return `❌ Erro: Estoque insuficiente de ${this.nome}. (Disponível: ${this.estoque})`;
    }

    // Se tiver estoque, subtraímos a quantidade
    this.estoque -= quantidade;
    const total = quantidade * this.preco;
    
    return `✅ Venda realizada! ${quantidade}x ${this.nome} | Total: R$ ${total.toFixed(2)}`;
  }
}

const meuFone = new Produto("Fone Bluetooth", 150.00, 10);


console.log(meuFone.vender(15)); 
console.log(meuFone.vender(4)); // Agora restam 6 no estoque

meuFone.repor(20); // 6 + 20 = 26 unidades

console.log(meuFone.vender(15)); // Venda realizada!