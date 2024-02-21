Preflight Request:

A preflight request is an additional HTTP request sent by the browser as part of the CORS mechanism.
It is issued by the browser automatically before making a cross-origin request to determine whether the actual request is safe to send.
Preflight requests use the HTTP OPTIONS method and include CORS-specific headers such as Access-Control-Request-Method and Access-Control-Request-Headers.
The server responds to the preflight request with CORS headers indicating whether the actual request is allowed from the origin making the request.
CORS (Cross-Origin Resource Sharing):

CORS is a security feature implemented in web browsers to restrict cross-origin HTTP requests initiated by JavaScript code running on a webpage.
It allows servers to specify which origins are permitted to access their resources through HTTP headers like Access-Control-Allow-Origin.
CORS headers control access to resources across different origins, helping to prevent unauthorized access and protect sensitive data.
CORS is commonly used in modern web applications to enable secure communication between different origins while still enforcing the Same-Origin Policy for security.

// CORS policy middleware to restrict unauthorized access and control access to the API

// Middleware to handle CORS for a specific route
server.use('/specific-route', (req, res, next) => {
// Allow requests only from http://localhost:5500
res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
// Allow any headers in the request
res.header('Access-Control-Allow-Headers', '_');
// Allow any HTTP methods
res.header('Access-Control-Allow-Methods', '_');

// Return OK for preflight requests
if (req.method === 'OPTIONS') {
return res.sendStatus(200);
}
// Move to the next middleware in the stack
next();
});

// Middleware to handle CORS for all client requests
server.use((req, res, next) => {
// Allow requests from any origin
res.header('Access-Control-Allow-Origin', '\*');
// Move to the next middleware in the stack
next();
});
