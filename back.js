const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));


app.post('/pedidos', (req, res) => {
    var { numPedido, itemPedido, valorPedido, horaPedido, minutosPedido, anoPedido } = req.body; 
    res.send(`N° do Pedido: ${numPedido}, Produto: ${itemPedido}, valor: R$ ${valorPedido}, Comprado às: ${horaPedido}:${minutosPedido} de ${anoPedido}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 
