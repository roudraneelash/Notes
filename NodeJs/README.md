-- create a server using inbuild modules
-- input/output/path, readLine/writeFile/readFile/appendFile/unlink
-- path, relative/absolute
-- Debugging in Node Js, node inspect, set break , debugging in VS code
-- Email handling in NodeJS using nodemailer

-- Express Framework
-- it help in routing, easily access get/post route
-- using middlewares
-- using templateEngine, like ejs for rendering HTML as response
-- express.static('folder'); it gives access, for static files which can be rendered as it is , with out any authorization

-- middlewares are the function , to intercept in between req and response in a route
-- HTTP request, GET,POST,PUT,DELETE
-- HTTP headers : to handle authorization, cache , content-type
-- HTTP status codes:
-Informational responses (100 – 199)
-Successful responses (200 – 299)
-Redirection messages (300 – 399)
-Client error responses (400 – 499)
-Server error responses (500 – 599)

-- Architecture patterns (MVC, REST API, MICROSERVICES)
-- MVC(Model-View-Controller)
-- Model handles the schema/DB
-- View handle the UI part
-- Controller handles the business logics for updating DB/sending response

-- express.static :
-- This middleware simplifies the process of serving static files and is commonly used in web applications to deliver client-side assets
-- The middleware is added to the application using app.use(), which means it will be applied to every request.
-- Files in the "public" directory can now be accessed directly from the browser. For example, if there is a file named styles.css in the "public" directory, it can be accessed at http://localhost:3000/styles.css

-- veiw engine for rendering dynamic UI, view engine-EJS
