class Conta{
    constructor(saldo, nome){
        this.nome = nome;
        this.saldo = saldo;

    }
  // Método para depositar valor
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  // Método para sacar com validação de saldo
  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para ${this.titular}!`);
      return false; // Retorna falso se não conseguiu sacar
    }
    this.saldo -= valor;
    return true; // Retorna verdadeiro se o saque deu certo
  }

  // Método de transferência: interage com outra instância de Conta
  transferir(valor, contaDestino) {
    console.log(`Tentando transferir R$${valor} de ${this.titular} para ${contaDestino.titular}...`);
    
    // 1. Tenta sacar da conta atual
    if (this.sacar(valor)) {
      // 2. Se o saque funcionou, deposita na conta destino
      contaDestino.depositar(valor);
      console.log("Transferência concluída com sucesso!");
    } else {
      console.log("Transferência cancelada.");
    }
  }


}
// --- Testando o sistema ---

const conta1 = new Conta("Ana", 1000);
const conta2 = new Conta("Beto", 500);

// Ana transfere para Beto
contaAna.transferir(300, conta2);

console.log(`Saldo Ana: R$${conta1.saldo}`); // 700
console.log(`Saldo Beto: R$${conta2.saldo}`); // 800

// Tentativa de transferência sem saldo
conta1.transferir(2000, conta2);