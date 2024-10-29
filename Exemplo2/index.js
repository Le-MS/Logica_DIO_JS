//JSON - JavaScript Object Notation
//Chave e valor com o objetivo de transferir dados

let pedido = {
    nome:"felipe",
    idade: 28,
    produtos: {
        0:["mouse 2wxm",29.20],
        1:["Teclado mecanico", 129.99],
        2:["Monitor", 899.99]
    }
}

function imprimir(pedido){
    console.log(pedido.nome);
    console.log(pedido.idade);
    console.log("Produtos:");
    for(let i in pedido.produtos){
        let [nomeProduto, precoProduto] = pedido.produtos[i];
        console.log(`- ${nomeProduto} - ${precoProduto}`);
    }
}
imprimir(pedido);