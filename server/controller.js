const todos = ["Get Purell", "get masks", "dont get covid-19"];

//build a controller
//all get post and delete take in a request and response

//status codes: 200s is good, 400s is bad, 300s is something missing?
const controller = {
  get: (req, res) => {
    res.status(200).send(todos) //send back the data
  },

  post:(req, res) => {
    //if you dont know what your request is, do req.body
    console.log(req.body)
    //sending it back as an object
    //req.body.todo
    let {todo} = req.body //same as let todo = req.body.todo. this is called destructuring objects
    todos.push(todo)
    res.status(201).send(`Posted todo ${todo}`)
  },

  delete: (req, res) => {
    console.log(req.params); //when doing things that require an update or delete, it is not coming from req.body, it is coming from req.params
    let {index} = req.params // let index = req.params.index
    let deleted = todos.splice(index, 1);
    res.status(202).send(`Deleted todo ${deleted}`)
  }
}

module.exports = controller;