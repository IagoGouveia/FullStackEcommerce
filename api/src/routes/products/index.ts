import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('A list of products')
  });

  router.get('/:id', (req, res) => {
    res.send('A product')
  });

  router.post('/', (req, res) => {
    res.send('Adding a new product')
  });

export default router;