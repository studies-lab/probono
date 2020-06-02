const db = require("../models");
const Lawer = db.lawers;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ 
            message: "Field can't be empty" });
        return;
    }

    const lawer = new Lawer ({
        email: req.body.email,
        password: req.body.password,
    });

    lawer.save(lawer).then(data => { res.send(data) })
    .catch(err => { res.status(500).send({ message: err.message || 
        "Couldn't register! Please try again" });
    });
};

exports.findOne = (req, res) => {
    const email = req.params.email;
  
    Lawer.findById(email)
      .then(data => {
        if (!data)
          res.status(404).send({ message: 
            "Not found Lawer with email " + email });
        else res.send(data);
      })
      .catch(err => { res.status(500)
          .send({ message: "Error recovering Lawer with email: " + email });
      });
  };

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can't be empty" });
  }
  
  const email = req.params.email;

  Lawer.findByIdAndUpdate(email, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Lawer not found!` });
      } else res.send({ message: "Lawer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Lawer with email: " + email });
    });
};

exports.delete = (req, res) => {
  const email = req.params.email;

  Tutorial.findByIdAndRemove(email)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Can't find account ${email}` });
      } else {
        res.send({ message: "Account was deleted successfully!" });
      }
    }).catch(err => { res.status(500).send({
        message: "Could not delete account " + email });
    });
};