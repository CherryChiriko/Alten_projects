import express from 'express';
import { LoginService } from '../services/login.service.js';

export function loginRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { userName, password } = req.query;
    const loginService = new LoginService(); 
  });
  
  router.get('/users/:id', (req, res) => {
    const loginService = new LoginService();
    const { id } = req.params;
    const user = loginService.getUser(0);

    if (!user) {
      res.status(404);
      res.json({error: `Unable to find a user with id: ${id}` })
      return;
    }
    res.json(user)
  });

  router.post('/users', (req, res) => {    
    const body = req.body;
    const loginService = new LoginService(); 
    const result = loginService.findUser(body);
    console.log('server-result ', result)
    result ? res.send(result) : res.status(500).send('Incorrect username or password');
  })


  return router;
}
