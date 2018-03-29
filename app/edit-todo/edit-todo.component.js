angular.module("editTodo").component("editTodo", {
  templateUrl: "app/edit-todo/edit-todo.template.html",
  controller: [
    "todoFactory",
    "$location",
    "$routeParams",
    function(todoFactory, $location, $routeParams) {
      this.todo = todoFactory.getTodos().find(todo => {
        return todo._id === +$routeParams.id;
      });

      this.editTodo = function(todoText) {
        todoFactory.editTodo({
          ...this.todo,
          text: todoText
        });
        $location.path("/");
      };
    }
  ]
});
