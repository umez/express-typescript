import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
    <div>
      <label>Email:</label>
      <input name="email" type="text" />
    </div>
    <div>
    <label>Password</label>
    <input name="password" type="password" />
    </div>
    <div><button type="submit">Submit</button></div>
    </form>
  `)
})

router.post('/login', (req: Request, res: Response) => {
  const {email, password} = req.body;
  res.send(email + password);
})

export {router};