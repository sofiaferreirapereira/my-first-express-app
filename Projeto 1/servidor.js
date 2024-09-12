const express = require('express');
const app = express();
const porta = 3000;
const path = require('path')

//serve para dizer ao express os arquivos estáticos estão aqui
app.use(
    express.static(path.join(__dirname, 'public'))
)

//definindo o que será feito quando o usuário entrar nessa rota
app.get("/", (pedido, resposta) => {
    resposta.sendFile(path.join(__dirname, 'views'/*nomeDaPasta*/, 'index.html'/*nomeDoArquivo*/))
})

app.listen(porta, () => {
    console.log(`Servidor rodando com sucesso no endereço: localhost:${porta}`)
})