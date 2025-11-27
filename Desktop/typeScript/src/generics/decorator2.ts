

    function setipServidor(novoip:string){
          return (constructor:any)=>{

            return class extends constructor{
                ip = novoip;
                
            }
          }
    }

    @setipServidor("192.9831.10")
    class Servidor{

    }
    const servidor1 = new Servidor()
    console.log(servidor1);