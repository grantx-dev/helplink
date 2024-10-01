import { Hono } from 'hono';
import createTicket from './routes/createTicket'; 

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/tickets', createTicket); 

export default app;
