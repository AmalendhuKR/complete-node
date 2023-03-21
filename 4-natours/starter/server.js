const env = require('dotenv');
// READING THE PROCESS HAPPENS ONLY ONCE AT THE TOP LEVEL
env.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

const PORT = process.env.PORT || 8000;
const environment = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} in ${environment}`);
});
