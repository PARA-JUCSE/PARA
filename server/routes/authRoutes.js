import express from 'express';
// import { isAdmin, requireSignIn } from '../middlewares/authMiddleware';
import { loginController, signupController } from '../controller/loginController.js';
const router = express.Router();

router.post("/signup", signupController);

router.post("/login", loginController);

// router.post("/forgot-password", forgotPasswordController);

// router.get("/test", requireSignIn, isAdmin, loginController);

// router.get('/user-auth', requireSignIn, (req, res) => {
//     res.status(200).send({ok : true});
// })

// router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
//     res.status(200).send({ok : true});
// })

export default router;