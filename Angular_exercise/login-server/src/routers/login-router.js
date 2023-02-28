import express from 'express';
import { LoginService } from '../services/login.service.js';

export function loginRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { userName, password } = req.query;
    const loginService = new LoginService(); 
  });
  
  router.get('/users', (req, res) => {
    const loginService = new LoginService(); 
    res.json(loginService.getAll())
  });

  router.post('/users', (req, res) => {    
    const body = req.body;
    const loginService = new LoginService(); 
    const result = loginService.findUser(body);
    console.log('server-result ', result)
    res.send(result);
  })


  return router;
}
