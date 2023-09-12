import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const userRouter = express.Router();

// Define routes using a more readable format
userRouter
  .route("/")
  .get(getAllUsers) // GET /api/
  .post(createUser); // POST /api/

userRouter
  .route("/:param")
  .get(getUser) // GET /api/users/:param
  .post(createUser) // POST /api/:param
  .put(updateUser) // PUT /api/:param
  .delete(deleteUser); // DELETE /api/:param

export default userRouter;
