
type Connection ={
    ip:string;
    name: string;
}

   export  function connection(info:Connection):boolean{
    console.log("Conexao realizada com sucesso", info.ip);
    return true;
 }
 export function statusconnection():void{
    console.log("Servidor esta funcionando 100%")
 }