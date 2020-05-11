const conexao = require('../database/conexao/conexao')
module.exports={
    async indexUsuario(request, response)  {
        const Usuario = await conexao('usuarios').select('*')
        return response.json(Usuario)
    },
    async CreateUsuarios(resp,req){
        const {name,senha,email,modelo,whatsapp,enderecao}=req.body

        await conexao('Usuario').insert({
            name,
            senha,
            email,
            modelo,
            whatsapp,
            enderecao
        })
        return resp.json({"Usuario cadastrado":{name}})
    }
}