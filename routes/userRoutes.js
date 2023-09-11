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
  .get(getAllUsers) // GET /api/users
  .post(createUser); // POST /api/users

userRouter
  .route("/:user_id")
  .get(getUser) // GET /api/users/:user_id
  .put(updateUser) // PUT /api/users/:user_id
  .delete(deleteUser); // DELETE /api/users/:user_id

export default userRouter;
