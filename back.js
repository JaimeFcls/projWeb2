const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/pedidos', (req, res) => {
    var numPedido = req.body.numPedido;
    var itemPedido = req.body.itemPedido;
    var valorPedido = req.body.valorPedido;
    var horaPedido = req.body.horaPedido;
    var minutosPedido = req.body.minutosPedido;
    var anoPedido = req.body.anoPedido;

    res.send('N° do Pedido : ' + numPedido + ' , Produto : ' + itemPedido + ' , valor : R$ ' + valorPedido + ' Comprado às : ' + horaPedido + ' e ' + minutosPedido + ' de ' + anoPedido);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
