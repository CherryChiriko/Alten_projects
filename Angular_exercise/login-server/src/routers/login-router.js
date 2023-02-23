import express from 'express';
import { LoginService } from '../services/login.service.js';

export function loginRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { userName, password } = req.query;
    const loginService = new LoginService(); 
    loginService.findUser(userName, password)
  });
  
  router.get('/users', (req, res) => {
    const loginService = new LoginService(); 
    // console.log("Hello w")
    res.json(loginService.getAll())
  });


  return router;
}
