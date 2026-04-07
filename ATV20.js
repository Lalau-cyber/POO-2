
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}
class Cliente {
  constructor(email, senha, isVip = false) {
    this.email = email;
    this.senha = senha;
    this.isVip = isVip;
  }
}

class Loja {
  constructor() {
    this.usuarios = [];
    this.produtos = [];
  }

  cadastrar(email, senha, isVip) {
    if (this.usuarios.find(u => u.email === email)) return "❌ Erro: E-mail já existe!";
    this.usuarios.push(new Cliente(email, senha, isVip));
    return `✅ Usuário ${email} cadastrado!`;
  }

  login(email, senha) {
    const user = this.usuarios.find(u => u.email === email && u.senha === senha);
    return user ? user : null; // Retorna o objeto do cliente ou nada
  }


  vender(cliente, produto, quantidade) {
    // Validação de estoque
    if (produto.estoque < quantidade) return "❌ Sem estoque suficiente!";

    produto.estoque -= quantidade;
    let total = produto.preco * quantidade;

    // Condicional de desconto
    if (cliente.isVip) {
      total *= 0.9; // 10% de desconto
      console.log("⭐ Desconto VIP aplicado!");
    }

    return `🛍️ Venda para ${cliente.email}: ${quantidade}x ${produto.nome}. Total: R$ ${total.toFixed(2)}`;
  }
}


const minhaLoja = new Loja();
const fone = new Produto("Fone", 100, 10); // Criamos um produto com 10 no estoque

// 1. Cadastro e Login
minhaLoja.cadastrar("gui@email.com", "123", true); // Cliente VIP
const usuarioLogado = minhaLoja.login("gui@email.com", "123");

// 2. Realizando a Venda
if (usuarioLogado) {
  console.log(minhaLoja.vender(usuarioLogado, fone, 2)); 
}

console.log(`Estoque atual do fone: ${fone.estoque}`); // Sobraram 8