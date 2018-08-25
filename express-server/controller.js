const list = {
  Todos: []
};

module.exports = {
  fetch: (req, res) => {
    const { listName } = req.query;
    if (listName in list) {
      res.status(200).send(list[listName]);
    } else {
      res.status(404).send('List not Found');
    }
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    list[listName].push(todo);
    res.status(201).send(list[listName]);
  },
  delete: (req, res) => {
    const { index, listName } = req.query;
    list[listName].splice(+index, 1);
    res.status(202).send(list[listName]);
  }
};
