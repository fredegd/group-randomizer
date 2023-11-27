const express = require("express");
const {
  getBatch,
  getBatches,
  createBatch,
  updateBatch,
  deleteBatch,
} = require("../controllers/batches");


const batchRouter = express.Router();

batchRouter.post("/new", createBatch);

batchRouter.put("/:id", updateBatch);

batchRouter.delete("/:id", deleteBatch);

batchRouter.get("/:id", getBatch);

batchRouter.get("/", getBatches);

module.exports = batchRouter;
