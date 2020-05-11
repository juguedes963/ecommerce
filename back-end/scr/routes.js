const express = require('express')

const ControlerUsuario = require('./Controllers/ControllerUsuarios')
const ControlerProduto = require('./Controllers/ControllerProdutos')

const routes = express.Router()

routes.post('/usuario', ControlerUsuario.CreateUsuarios)

routes.post('/produtos', ControlerProduto.CreateProdutos)

routes.get('/produtos', ControlerProduto.indexProduto)
module.exports = routes