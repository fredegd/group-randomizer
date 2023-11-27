const  express = require('express');
const { getBatch, getBatches, createBatch, updateBatch, deleteBatch } = require('../controllers/batches');

const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");




const batchRouter = express.Router();

batchRouter.get("/", getBatches);
batchRouter.get("/:id", getBatch);


batchRouter.batch("/newbatch", verifyToken, authorize("user"), upload.single("image"),  createBatch);

batchRouter.put("/:id", updateBatch); 

batchRouter.delete("/:id", deleteBatch);


module.exports = batchRouter;