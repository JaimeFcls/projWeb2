const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/pedidos', (req, res) => {
    const pedidos = req.body;
    console.log(pedidos);

    // Enviar os pedidos como resposta para o navegador
    res.send(JSON.stringify(pedidos));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
