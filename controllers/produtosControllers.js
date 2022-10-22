const path = require('path')
const fs = require('fs');

const produtoJson = path.join(__dirname,'../products.json');
const produtos = JSON.parse(fs.readFileSync(produtoJson))

const produtosControllers = {
    index: (req, res) => {
        
        let categoria = req.query.categoria//pega os parâmetros da url
        
        if (!categoria)
            res.render('produtos', { produtos: produtos })

        else {
            let resultado = produtos.filter(p => p.categoria == categoria)
            res.render('produtos', { produtos: resultado })

        }

    }
}
module.exports = produtosControllers;
