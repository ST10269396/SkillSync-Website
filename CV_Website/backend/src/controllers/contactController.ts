import { Request, Response } from 'express';
import { Contact } from '../models/Contact';

export async function submitContact(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({
        message: 'Please provide name, email, and message',
      });
      return;
    }

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Save to database
    await contact.save();

    // Log to console
    console.log('New contact submission received:');
    console.log(`  Name: ${name}`);
    console.log(`  Email: ${email}`);
    console.log(`  Message: ${message}`);
    console.log(`  Timestamp: ${new Date().toISOString()}`);

    res.status(201).json({
      message: 'Contact submission received successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    res.status(500).json({
      message: 'Failed to process contact submission',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}







