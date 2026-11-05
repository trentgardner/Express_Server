// here we're importing your express app
const server = require('./app');

// Render provides the port in PORT; fall back to 3000 for local runs
const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
