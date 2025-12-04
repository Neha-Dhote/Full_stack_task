import express from "express"
import { home } from "../controllers/controller.js"

const router = express.Router()

router.get ("/test",home)
                                   { 1st portion }
export default router



import express from "express"
import { home, PostRegisterUser, getAllUsers } from "../controllers/controller.js"

const router = express.Router()

router.get("/test", home)           { 2nd portion }

router.post("/register-user", PostRegisterUser)

router.get("/get-all-user", getAllUsers)

export default router