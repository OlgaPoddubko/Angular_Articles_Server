const articles = 'http://localhost:3000/articles/';

export default $resource => {
  let todoList = $resource(articles).query();

  return {
    getTodos() {
      return todoList;
    },

    getTodo(id) {
      return $resource(articles + id).query();
    },

    addTodo(todo) {
      $resource(articles + 'add').save(JSON.stringify(todo), todo => {
        todoList.push(todo);
      });
    },

    removeTodo(id) {
      return $resource(articles + id)
        .delete()
        .$promise.then(
          () => (todoList = todoList.filter(todo => todo._id !== id)),
          error => console.log(error),
        );
    },

    editTodo(todo) {
      return $resource(articles + todo._id, null, {
        update: { method: 'PUT' },
      })
        .update(JSON.stringify(todo))
        .$promise.then(
          () => console.log('update'),
          error => console.log(error),
        );
    },
  };
};

/*
export default $resource => {

  let todoList = $resource("./app/todo-helpers/todo-list.json").query(
    { method: "GET" },
    response => {
      return response;
    }
  );

  return {
    getTodos() {
      return todoList;
    },
    addTodo(text, content) {
      todoList.push({
        id: Date.now(),
        text,
        content,
        created: new Date().toJSON(),
        done: false
      });
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    },
    editTodo(todo) {
      const todoIndex = todoList.findIndex(item => item.id === todo.id);
      todoList.splice(todoIndex, 1, todo);
    },
    removeTodo(todo) {
      todoList.splice(todoList.indexOf(todo), 1);
    }
  };
};
*/
