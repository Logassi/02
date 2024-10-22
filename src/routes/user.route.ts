import { Router } from "express";
import { GetAllUsers, GetUserDetail } from "../controllers/user.controller";
import masukMiddleWare from "../middlewares/masuk.middleware";

const router = Router();

// Semua kena middleware
// router.use(masukMiddleWare);

// GET ALL USER
// GET http://localhost:8080/user-management/users
router.get("/users", GetAllUsers);

// GET DETAIL USER
// GET http://localhost:8080/user-management/users/3

// Below is using middleware
// GET http://localhost:8080/user-management/users/23?user=Anjay
router.get("/users/:uuid", masukMiddleWare, GetUserDetail);

export default router;

//http://localhost:8080/user-management/users?user=Hesoyam
