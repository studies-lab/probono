const db = require("../models");
const Client = db.clients;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ 
            message: "Field can't be empty" });
        return;
    }

    const client = new Client ({
        cpf: req.body.cpf,
        password: req.body.password,
    });

    client.save(client).then(data => { res.send(data) })
    .catch(err => { res.status(500).send({ message: err.message || 
        "Couldn't register! Please try again" });
    });
};

exports.findOne = (req, res) => {
    const cpf = req.params.cpf;
  
    Client.findById(cpf)
      .then(data => {
        if (!data)
          res.status(404).send({ message: 
            "Not found client with CPF " + cpf });
        else res.send(data);
      })
      .catch(err => { res.status(500)
          .send({ message: "Error recovering client with CPF: " + cpf });
      });
  };

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can't be empty" });
  }
  
  const cpf = req.params.cpf;

  Client.findByIdAndUpdate(cpf, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Client not found!` });
      } else res.send({ message: "Client was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating client with CPF: " + cpf });
    });
};

exports.delete = (req, res) => {
  const cpf = req.params.cpf;

  Tutorial.findByIdAndRemove(cpf)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can't find account ${cpf}` });
      } else {
        res.send({ message: "Account was deleted successfully!" });
      }
    }).catch(err => { res.status(500).send({
        message: "Could not delete account" });
    });
};