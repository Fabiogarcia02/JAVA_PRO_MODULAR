// ---------------------------
// INTERFACE COM GENERIC
// ---------------------------
interface NovoProdutoo<T extends number> {
    nome: string;
    preco: T;
    formatar(valor: T): string;
}

const arroz: NovoProdutoo<number> = {
    nome: "Arroz branco",
    preco: 1500,
    formatar(valor: number): string {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};

console.log(arroz.formatar(1500));


// ---------------------------
// TYPE COM GENERIC (mantido)
// ---------------------------
type NovoProduto<T extends number | string> = {
    nome: string;
    preco: T;  // AGORA O GENERIC T É USADO DE VERDADE
};

// Exemplo com preco STRING
const Arroz: NovoProduto<string> = {
    nome: "Arroz branco",
    preco: "1500"
};

// Exemplo com preco NUMBER
const Feijao: NovoProduto<number> = {
    nome: "Feijão preto",
    preco: 12.50
};
