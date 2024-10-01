import { Hono } from 'hono';

const ticketRoute = new Hono();

interface TicketPayload {
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  description?: string | null;
  priority?: 'low' | 'medium' | 'high' | "urgent" | null;
  custom?: Record<string, string | null>;
  fileLink?: string | null;
}

ticketRoute.post('/submit', async (c) => { 
  try {
    const payload: TicketPayload = await c.req.json();

    const atLeastOneField = 
      payload.name || 
      payload.email || 
      payload.subject || 
      payload.description || 
      payload.priority || 
      payload.custom || 
      payload.fileLink;

    if (!atLeastOneField) {
      return c.json({ message: 'At least one field must be provided.' }, 400);
    }

    if (payload.custom && typeof payload.custom !== 'object') {
      return c.json({ message: 'custom should be a valid JSON object.' }, 400);
    }

    console.log('Ticket submitted:', payload);

    return c.json({ message: 'Support ticket submitted successfully!', ticket: payload }, 200);
  } catch (error) {
    console.error('Error submitting ticket:', error);
    return c.json({ message: 'Error submitting ticket' }, 500);
  }
});

export default ticketRoute;
