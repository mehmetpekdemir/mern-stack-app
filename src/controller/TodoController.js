import TodoModel from "../model/TodoModel";

class Todo {
  
}

Todo.prototype.getTodos = (request, response) => {
  TodoModel.find(function (error, todos) {
    if (error) {
      console.log(error);
    } else {
      response.json(todos);
    }
  });
};

Todo.prototype.getTodoById = (request, response) => {
  let id = request.params.id;
  TodoModel.findById(id, function (error, todo) {
    response.json(todo);
  });
};

Todo.prototype.addTodo = (request, response) => {
  let todo = new TodoModel(request.body);
  todo
    .save()
    .then((todo) => {
      response.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      response.status(400).send("adding new todo failed");
    });
};

Todo.prototype.updateTodo = (request, response) => {
  TodoModel.findById(request.params.id, function (error, todo) {
    if (!todo) {
      response.status(404).send("data is not found");
    } else {
      todo.todo_description = request.body.todo_description;
      todo.todo_responsible = request.body.todo_responsible;
      todo.todo_priority = request.body.todo_priority;
      todo.todo_completed = request.body.todo_completed;
    }

    todo
      .save()
      .then((todo) => {
        response.json("Todo updated");
      })
      .catch((err) => {
        response.status(400).send("Update not possible");
      });
  });
};

Todo.prototype.deleteTodo = (request, response) => {
  let id = request.params.id;
  TodoModel.findByIdAndRemove(id, (error, result) => {
    if (error) {
      response.send(error);
    } else {
      response.send(result);
    }
  });
};

module.exports = Todo;
