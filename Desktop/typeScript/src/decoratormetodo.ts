

 function verificaPessoa(idade:number){
    return(constructor:any,key:string, descriptor: PropertyDescriptor) =>{

         const metodoOriginal= descriptor.value // funçao cadastrar
         descriptor.value = function (){
                if(idade<18){
                    console.log("Estamos cadastrando como pessoa menor de idade");
                }else{
                    console.log("Adulto cadastrado no sistema");
                    return metodoOriginal.apply(this)//retornando o metodo original para aparecer depois
                }
         }
    }
 }


//METODO QUE CADASTRA APENAS PESSOAS DE UMA IDADE X POR EXEMPLO
class Pessoa{
    nome: string;

     constructor(nome:string){
        this.nome=nome;
     }
      @verificaPessoa(20)
      cadastrarpessoa(){
        console.log(`Bem vindo ao sistema ${this.nome}`)
      }
}

const pessoa = new Pessoa("Faibola02"); 

 pessoa.cadastrarpessoa();