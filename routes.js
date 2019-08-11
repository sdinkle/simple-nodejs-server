// Set up the request handler function
const requestHandler = (req, res) => {
    // Capture the URL and method from the request
    const url = req.url;
    const method = req.method;

    // Set up the "/" route
    // Serve a basic greeting page
    if (url === '/') {
        // Serve a basic greeting page
        res.write(`<!doctype html
            <html>
                <head>
                    <title>Simple Node.js Server</title>
                </head>
                <body>
                    <h1>Welcome to my simple Node.js server!</h1>
                </body>
            </html>`
        );

        // Return the response
        return res.end();
    }
    // Set up the "/users" route
    // Serve a dummy list of users
    else if (url === "/users") {
        // Set the Content-Type header to "text/html"
        res.setHeader("Content-Type", "text/html");

        // Serve a dummy list of users
        res.write(`<!doctype html>
            <html>
                <head>
                    <title>Users</title>
                </head>
                <body>
                    <h1>Users List</h1>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                    </ul>
                </body>
            </html>`
        );

        // Return the response
        return res.end();
    }
};

// Establish module.exports properties
exports.handler = requestHandler;