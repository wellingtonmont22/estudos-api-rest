import app from './index';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Rodando na port ${port}`));
