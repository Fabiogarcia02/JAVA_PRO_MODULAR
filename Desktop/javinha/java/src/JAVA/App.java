package JAVA;

    public class App {
            void main(){
            
            Carro meuCarro = new Carro("Toyota");
            meuCarro.acelerar(); 
            
            }

            public class Carro{
            String marca;   
                    public Carro(String marca){ //Construtor
                        this.marca= marca;
                    }

                    public void acelerar(){
                        System.out.println("Acelerando o carro da marca:"+marca);
                    }
            }
            public interface Carro1{

                void acelerar();
                void freiar();
                void topspeed();
            }


            //Implementando a interface na classe, geralmente ficam em arquivos separados

            //public class RenaultR6 implements Carro{
             
            //Aqui tera que ter os metodos se não dara erro
       // }
        }

     //   public class Servivo{
          //int idade;

          // public Servivo(int){

          //}
       // }

        //public class Humano extends Servivo{

         //public HUmano(){

          // super(idade:42)     PEGANDO CONSTRUTOR DA CLASSE PAI

        // }
    //}

    //NO MAIN SERVIVO = new Humano 