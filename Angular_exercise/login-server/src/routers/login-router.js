import express from 'express';
import { LoginService } from '../services/login.service.js';

export function loginRouter() {
  const router = express.Router();

  router.get('/users', (req, res) => {
    const { userName, password } = req.query;
    const loginService = new LoginService(); 
    loginService.findUser(userName, password)
  });
  
  // list all
  router.get('/', (req, res) => {
    const loginService = new LoginService(); 
    console.log("Hello w")
    res.json(loginService.getAll())
  });

  // get one
  router.get('/:id', (req, res) => {
    const todoService = LoginService.getInstance();
    const { id } = req.params;

    const todo = todoService.getOne(id);

    if (!todo) {
      res.status(404);
      res.json({error: `Unable to find a todo with id: ${id}` })
      return;
    }

    res.json(todo)
  });

  return router;
}
