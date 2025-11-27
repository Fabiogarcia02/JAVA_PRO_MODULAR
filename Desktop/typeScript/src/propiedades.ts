

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
        @validarNome(10)
    titulo: string;

    

      constructor(nome:string, titulo:string){
        this.nome= nome;
        this.titulo = titulo;
      }
}
 const jogo1 = new Jogo("Dota 2", "Jogo de moba");

 console.log(jogo1.nome)
 