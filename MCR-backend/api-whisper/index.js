
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.send("804727c372a10231e19a3051a9559350bd40ba7fd8f929d532c0d42c187a5107ed420c012b79df9bab4aa7a90af0b807d39a089f07a643a4fb18ded772a955bc94f47de5924fda928711acbb4d36b6472fa43eaac4a15fd124e998cde2bb0ac3cc53fa8794e8dbcfa8d3f4161cf9155c32bb5f8a0d7d773a90e5c79f5454ccea4025fa2b4dff892d674e73b31dd4eea25527d8c72b0689fc63cc8098257ee64f7e3ed1a1815eb4e7b899e3c7d21f78a9e20e67d97ce368388554cac36cc7e985ec2207f6dca5a9f8e0e84622162baec8904")
});

// app.push("/", (response, request) => {
//     response.send()
// });

app.listen(3000, console.log("listening on port 3000"));
