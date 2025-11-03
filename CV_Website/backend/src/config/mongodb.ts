import mongoose from 'mongoose';

export async function connectMongoDB(): Promise<void> {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/cv-website';

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

export async function disconnectMongoDB(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Failed to disconnect from MongoDB:', error);
    process.exit(1);
  }
}







