// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

let produto = (quantidade, produto) => {
    return {
    item: {
        nome: produto.nome,
        valorEmCentavos: produto.valorEmCentavos
    },
    quantidade}
}

jose.carrinho.push(produto(1, tv), produto(2, caboUsb), produto(1, webcam))
carlos.carrinho.push(produto(2, notebook))
patricia.carrinho.push(produto(1, teclado), produto(2, caboUsb), produto(1, carregador), produto(1, mouse), produto(1, monitor))
renato.carrinho.push(produto(5, webcam))
roberto.carrinho.push(produto(1, webcam), produto(2, caboUsb), produto(1, monitor))

console.log(jose, carlos, patricia, renato, roberto);
