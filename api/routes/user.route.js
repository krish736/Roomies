import express from "express";
import { updateUser, signOut} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update/:userId'", updateUser);
router.post("/signout", signOut);

export default router;
