//Enpoint -> URL onde o serviço pode ser acessado: http:localhost:3000/client

const client = require('../models/Client');

// Resource listando todos os clientes
async function listarClients(req, res) {
    const cliente = await client.findAll();

    return res.status(200).json(cliente);
};

// Resource listando cliente específicos
async function listarClient(req, res) {
    const cliente = await client.findByPk(req.params.id);

    if(!cliente) 
        return res.status(204).json();
    
    return res.status(200).json(cliente);
};

// Resource Inserindo dados de um novo cliente
async function criarClient(req, res) {
    const { name, email, age} = req.body;
    
    const clientExiste = await client.findOne({ where: { email: email } });
    if (clientExiste) 
        return res.status(400).json({ error: 'Client ja existe' });

    const cliente = await client.create({name, email, age});

    return res.status(201).json(cliente);
};

// Resource que atualiza os dados de um determinado cliente
async function atualizarClient(req, res) {
    const { id } = req.params;
    
    const cliente = await client.update(req.body, { where: {id:id}});

    if(!cliente) 
        return res.status(204).json();
    
    return res.status(200).json(cliente);
};

// Resource que apaga dados de um determinado cliente
async function removeClient(req, res) {
    const { id } = req.params;

    const cliente = await client.destroy({ where: { id: id } } );

    return res.status(200).json();
};

module.exports = {
    listarClients,
    listarClient,
    criarClient,
    atualizarClient,
    removeClient,
};