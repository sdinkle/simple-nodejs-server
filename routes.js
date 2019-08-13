// Set up the request handler function
const requestHandler = (req, res) => {
    // Capture the URL and method from the request
    const url = req.url;
    const method = req.method;

    // Set up the "/" route
    // Serve a basic greeting page
    if (url === '/') {
        // Serve a basic greeting page
        res.write(`<!doctype html>
            <html>
                <head>
                    <title>Simple Node.js Server</title>
                </head>
                <body>
                    <h1>Welcome to my simple Node.js server!</h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Log to console</button>
                    </form>
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
    // Set up the "/create-user" route
    // Log the submitted text to the console and return to the root page
    else if (url === "/create-user" && method === "POST") {
        // Declare the body array
        const body = [];

        // Define the data event
        req.on('data', (chunk) => {
            // Push the chunk into the body array
            body.push(chunk);
        });

        // Define the end event and return it
        return req.on('end', () => {
            // Parse out the username
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];

            // Log the parsed username to the console
            console.log(username);

            // Redirect back to the root page
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

// Establish module.exports properties
exports.handler = requestHandler;