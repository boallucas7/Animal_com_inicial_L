class Leao {
    nome: string = "Leão";
    nomecientifico: string = "Panthera leo";
    ordem: string = "Carnívoro";
    especie: string = "Mamífero";
    rugido: string = "WAAAAOOR!!!";

    constructor(novoNome: string) {
        this.nome = novoNome;
    }

    rugir(): void {
        console.log(`${this.nome} está rugindo!`);
    }

    caçar(): void {
        console.log(`${this.nome} está caçando!`);
    }
}

// Criando dois objetos da classe Leao
const leao1 = new Leao('Simba');
console.log(leao1.nome); // Exibindo os nomes dos animais
leao1.rugir(); // Leão 1 está rugindo!
leao1.caçar(); // Leão 1 está caçando!

const leao2 = new Leao('Mufasa');
console.log(leao2.nome); // Exibindo os nomes dos animais
leao2.rugir(); // Leão 2 está rugindo!
leao2.caçar(); // Leão 2 está caçando!