


    function repositorio<T>(){
        let dados: T;

        function getDados(){
            return dados;
        }
        function setDados(novoDado:T){
            dados =novoDado
        }
        return{getDados,setDados}
    }

     const repo1= repositorio<string>();


  
    repo1.setDados("15");
    console.log(repo1.getDados())


    