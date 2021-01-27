import express from "express";
import TodoController from "../controller/TodoController";

const router = express.Router();
const controller = new TodoController();

router.get("/", controller.getTodos);
router.get("/:id", controller.getTodoById);
router.post("/", controller.addTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
