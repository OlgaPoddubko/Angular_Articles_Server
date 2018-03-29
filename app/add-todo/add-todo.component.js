angular.module("addTodo").component("addTodo", {
  templateUrl: "app/add-todo/add-todo.template.html",
  controller: [
    "todoFactory",
    "$location",
    function(todoFactory, $location) {
      this.addTodo = function(todo) {
        todoFactory.addTodo(todo);
        $location.path("/");
      };
    }
  ]
});
