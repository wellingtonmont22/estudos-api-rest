import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Ok');
});

export default router;
