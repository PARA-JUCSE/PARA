import express from 'express'
import { getRephraserController } from '../controller/getRephraserController.js';
const router = new express.Router();

router.get("/get-rephrase", (req, res)=>{
    res.send("HELLO THERE!!");
});
router.post("/get-rephrase", getRephraserController);

export default router;