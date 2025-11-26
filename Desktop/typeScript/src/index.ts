import{ connection,statusconnection}from   './database/conection'
import status  from './database/aplicativo';
import getStatusapp from './database/aplicativo';
    function acessasSistema(){
        connection({ip:"192.187.54.10", name: "MySQL"})
    }
    acessasSistema();
    statusconnection();
    getStatusapp();
