
      //target= receber o construtor da classe
      // function logInfo(target:any){
          //  console.log("Sistema esta online!");
      // }
       
       // padrão factory / Função que vai retornar a criação do decorator.
        function logInfo(mensagem:string){
          return(target:any)=>{
           console.log(`${mensagem}, ${target}`)
          }
       }
       
       
       @logInfo("Servidor esta rodando")
       class Sistma{

       }

