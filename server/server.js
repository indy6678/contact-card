const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Built-in middleware
// parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true}));
// parses incoming requests with URL-encoded payloads
app.use(express.json());
// serves static assets (HTML, images, etc)
app.use(express.static('../client/dist/'))

require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`)
});