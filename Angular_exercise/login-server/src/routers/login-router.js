import express from 'express';
import { LoginService } from '../services/login.service.js';

export function loginRouter() {
  const router = express.Router();
  const loginService = new LoginService(); 
  
  router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = loginService.getUser(Number(id));

    if (!user) {
      res.status(404);
      res.json({error: `Unable to find a user with id: ${id}` })
      return;
    }
    res.json(user)
  });

  router.post('/users', (req, res) => {    
    const body = req.body;
    const result = loginService.findUser(body.userName, body.password); 
    console.log('server-result ', result)
    result ? res.send(result) : res.status(500).send('Incorrect username or password');
  })

  router.post('/users/:id', (req, res) => {   
    console.log(req)
    const newUser = req.body;
    loginService.addUser(newUser);
    console.log(loginService.getUser(newUser.id)) 
    console.log('new-user ', newUser)
  })

  return router;
}
