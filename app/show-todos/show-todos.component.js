angular.module('showTodos').component('showTodos', {
  templateUrl: 'app/show-todos/show-todos.template.html',
  controller: [
    '$scope',
    'todoFactory',
    ($scope, todoFactory) => {

      $scope.todos = todoFactory.getTodos();

      $scope.removeTodo = todo => {
        todoFactory.removeTodo(todo);
      };

      $scope.editTodo = todo => {
        todoFactory.editTodo(todo);
      };

      $scope.toggleDone = (todo) => {
        todoFactory.toggleDone(todo);
      };

      $scope.sortParam = 'created | todoDays';
      $scope.sortBy = (sortParam) => {
        $scope.sortParam = sortParam;
      };

      /*pagination*/
      $scope.startingTodo = 0;
      $scope.limit = 4;
      $scope.currentPage = 0;

      $scope.numberOfPages = () => {
        return Math.ceil($scope.todos.length / $scope.limit);
      };

      $scope.showPrevPage = function() {
        $scope.currentPage = $scope.currentPage - 1;
        $scope.startingTodo = $scope.startingTodo - $scope.limit;
      };
      $scope.showNextPage = function() {
        $scope.currentPage = $scope.currentPage + 1;
        $scope.startingTodo = $scope.startingTodo + $scope.limit;
      }
    }
  ]
});
