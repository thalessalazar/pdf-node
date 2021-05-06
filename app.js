const express = require('express');
const app = express();
const pdf = require('html-pdf');
const ejs = require('ejs');
const path = require('path');

app.get('/', (req, res, next) => {

    var dados = {
        nome: 'Thales',
        produtos: [
            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },
            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },            {
                sequencia: 1,
                descricao: 'Leite Condensado',
                quantidade: 3,
                valorUnitario: 4.05,
                valorTotal: 12.15
            },

        ]
    }
    
    let baseAltura = 15;
    let incrementoAltura = 5.3;

    baseAltura += incrementoAltura * ( dados.produtos.length - 1);

    console.log(dados.produtos.length);
    console.log(baseAltura);

    ejs.renderFile('./template/template.ejs', dados,(err, html) => {
        if(err) {
            console.log('houve erro');
            console.log(err);
        } else {
            pdf.create(html, {width: '80mm', height: `${baseAltura}mm` }).toFile('./pdf/pdfgerado.pdf', (err, response) => {
                if(err) {
                    console.log('houve erro ao gerar pdf');
                    console.log(err);
                } else {
                    res.sendFile(path.join(__dirname, './pdf/pdfgerado.pdf'));
                }
            })
        }
    });
});

app.listen('3333', (err) => {
    if(err) console.log('erro ao iniciar servidor');
    else console.log('servidor rodando na porta 3333');
})