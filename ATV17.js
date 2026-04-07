class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this,disponivel = true;
  }
}

class Biblioteca extends Livro{
    constructor(titulo, autor){
        super(titulo,autor)
        this.bibli = []
    }

    adicionarLivro(titulo, autor){
        const novoLivro = new Livro(titulo, autor);
        this.bibli.push(novoLivro);
    }

    emprestar(titulo){
        const livro = this.bibli.find(l => l.titulo === titulo);

        if (!Livro) return "Erro, livro não existe";
        
        if (livro.disponivel === false) return "Ops! Alguém já pegou esse.";
        
        livro.disponivel = false;
    return `✅ Sucesso! Você pegou o livro "${titulo}".`;
    }

devolver(titulo) {
    const livro = this.bibli.find(l => l.titulo === titulo);

    if (livro) {
      livro.disponivel = true; // "Libera" o livro novamente
      return ` Obrigado! "${titulo}" foi devolvido.`;
    }
}
}

const livr = new  Biblioteca();

livr.adicionarLivro("Assim que acaba", "Collen Hover");
livr.adicionarLivro("Assim que termina", "Collen Hover");

console.log(livr.emprestar("Assim que acaba"));

console.log(livr.emprestar("Assim que acaba"));// erro

console.log(livr.devolver("Assim que acaba"));

console.log(livr.emprestar("Assim que acaba"));