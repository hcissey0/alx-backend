// 0-redis_client.js

// Import the necessary library (using ES6 import syntax)
import redis from 'redis';

// Create a Redis client
const client = redis.createClient({
  host: '127.0.0.1', // Redis server address (localhost)
  port: 6379, // Redis server port
});

// Attempt to connect to the Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle connection errors
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Close the Redis connection when done (optional)
// client.quit();

// Example usage: Set a key-value pair
client.set('myKey', 'myValue', (err, reply) => {
  if (err) {
    console.error(`Error setting key: ${err.message}`);
  } else {
    console.log(`Key set successfully: ${reply}`);
  }
});
