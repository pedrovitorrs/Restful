//Enpoint -> URL onde o serviço pode ser acessado: http:localhost:3000/client

const client = require('../models/Client');

// Resource listando todos os clientes

async function listarClients(req, res) {
    const cliente = await client.findAll();

    return res.status(200).json(cliente);
};

// Resource Inserindo dados de um novo cliente
async function criarClient(req, res) {
    const { name, email, age} = req.body;
    
    await client.create({name, email, age});

    return res.status(200).json(client);
};

// Resource que atualiza os dados de um determinado cliente
async function atualizarClient(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    
    if (!client) // Rota existe porém não existe o conteúdo para o ID do cliente solicitado
        return res.status(204).json(); 
    
    const { name } = req.body;
    client.name = name;
    res.json(client);
};

// Resource que apaga dados de um determinado cliente
async function removeClient(req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
};

module.exports = {
    listarClients,
    criarClient,
    atualizarClient,
    removeClient,
};