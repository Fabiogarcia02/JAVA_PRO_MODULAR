import{ applyMixins }from '../mixin/applymixin'
class Automovel{
      ligar():void{
          console.log("Ligando automovel");
      }
      desligar():void{
          console.log("Desligando automovel");
      }

}

 class Especificações{
   descricao: string;
   constructor(descricao:string){
    this.descricao= descricao;
   }
 }

  class Carro {
     nome: string;
     constructor(nome:string){
      this.nome=nome;
     }
  }

  interface Carro extends Automovel,Especificações{ }
  applyMixins(Carro,[Automovel,Especificações])
  const gol = new Carro("Gol 1.0");
  console.log(gol);
  gol.ligar
  gol.descricao= "Modelo completo manual";
    console.log(gol);