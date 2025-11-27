

function validarNome(tamanho:number){
    //key = propiedade
    return(constructor:any, key:string)=>{
        let valor = constructor[key];

        const getter=()=> {
            return  valor;
        }
        const setter=(value:string)=>{
            if(value === ""){
                console.log("Não pode deixar em branco")
            }else if(value.length<tamanho){
                console.log("Não pode criar com esse tamanho")
            }else{
                console.log("Cadastrado com sucesso!")
                valor = value;
            }
            Object.defineProperty(constructor,key,{
                get: getter,
                set : setter
            })
        }

    }
}


class Jogo{
    @validarNome(5)
    nome:string;
    

      constructor(nome:string){
        this.nome= nome
      }
}
 const jogo1 = new Jogo("Dota 2");

 console.log(jogo1.nome)
 