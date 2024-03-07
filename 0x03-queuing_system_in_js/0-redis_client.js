// 0-redis_client.js

// Import the necessary library (using ES6 import syntax)
import redis from 'redis';


// Create a Redis client
const client = redis.createClient();

// Attempt to connect to the Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle connection errors
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

