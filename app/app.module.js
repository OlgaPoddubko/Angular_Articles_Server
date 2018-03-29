import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";

require("./show-todos/show-todos.module");
require("./add-todo/add-todo.module");
require("./edit-todo/edit-todo.module");
require("./todo-form/todo-form.module");

import todoFactory from "./todo-helpers/todos-factory";
import todoDays from "./todo-helpers/todo-days";

angular
  .module("app", [
    "showTodos",
    "addTodo",
    "editTodo",
    "todoForm",
    ngRoute,
    ngResource
  ])
  .factory("todoFactory", ["$resource", todoFactory])
  .filter("todoDays", todoDays)
  .config([
    "$locationProvider",
    "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/", {
          template: "<show-todos></show-todos>"
        })
        .when("/add", {
          template: "<add-todo></add-todo>"
        })
        .when("/edit/:id", {
          template: "<edit-todo></edit-todo>"
        })
        .otherwise("/");
    }
  ]);
