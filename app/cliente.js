var express = require('express')
var app = express()
const path = require('path');
const router = express.Router();

app.use('/assets',express.static(__dirname+'/assets'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/usuarios/:pagina', function (req, res) {
  if(req.params.pagina == "lista"){
    res.sendFile(path.join(__dirname+'/views/usuarios/index.html'));
  }else{
    res.sendFile(path.join(__dirname+'/views/usuarios/form.html'));
  }
})

app.get('/enderecos/:pagina', function (req, res) {
  if(req.params.pagina == "lista"){
    res.sendFile(path.join(__dirname+'/views/enderecos/index.html'));
  }else{
    res.sendFile(path.join(__dirname+'/views/enderecos/form.html'));
  }
})

app.listen(3000, function () {
  console.log('O server foi iniciado com Sucesso!')
  console.log('entre em localhost:3000')
})
