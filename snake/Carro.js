class Carro {

    constructor(nome, velocidade, marca, anoFabricacao, valor){
        this.nome = nome;
        this.velociade = velocidade;
        this.marca = marca;
        this.anoFabricacao = anoFabricacao;
        this.valor = valor;
    }

    acelerar(){
        console.log(this.nome + " - Estou acelerando o carro  ... " );
    }

    freiar(){
        console.log(this.nome + " - Estou freiando o carro ... ");
    }

    tocarMusica(){
        console.log(this.nome + " - Estou tocando música no meu carro");
    }
}