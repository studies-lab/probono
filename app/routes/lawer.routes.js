module.exports = app => {
    const lawers = require("../controllers/lawer.controller.js");
  
    var router = require("express").Router();
    router.post("/", lawers.create);
    router.get("/:id", lawers.findOne);
    router.put("/:id", lawers.update);
    router.delete("/:id", lawers.delete);

    app.use('/api/lawers', router);
  };