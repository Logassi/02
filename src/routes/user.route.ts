import { Router } from "express";
import { GetAllUsers, GetUserDetail } from "../controllers/user.controller";

const router = Router();

// GET ALL USER
router.get("/users", GetAllUsers);

// GET DETAIL USER
router.get("/users/:uuid", GetUserDetail);

export default router;
