/***************Third party module lodash */

// const _ = require('lodash')

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
// console.log(_.compact([12, 3, 'c', NaN, "", 59, 0]))


/***************variable global ********/
// console.log(__dirname, __filename)


/*********** CreateServer ********/
const http = require("http")

const server = http.createServer((req, res) => {
    // res.end("<h1>Hello Nodejs</h1>")
    // console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("<h1>Hello Nodejs</h1>")
            break;

        case "/ola":
            res.end("<h1>Ola Nodejs</h1>")
            break;

        case "/bonjour":
            res.end("<h1>Bonjour Nodejs</h1>")
            break;
    
        default:
            res.end("<h1>Ouuuuups</h1>")
            break;
    }

})

/********* run server *******/
server.listen(5000, () => {
    console.log("the server is running on port 5000");
})