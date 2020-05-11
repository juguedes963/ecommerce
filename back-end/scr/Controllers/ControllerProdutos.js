const conexao = require('../database/conexao/conexao')
module.exports={
    async indexProduto(request, response)  {
        const Produto = await conexao('produto').select('*')
        return response.json(Produto)
    },
    async CreateProdutos(resp,req){
        const {NomeProduto,CodigoBarra,preco,modelo,ano}=req.body

        await conexao('produto').insert({
            NomeProduto,
            CodigoBarra,
            preco,
            modelo,
            ano
        })
        return resp.json({"produto cadastrado":{NomeProduto}})
    }
}