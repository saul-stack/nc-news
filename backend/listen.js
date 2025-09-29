const server = require("./server.js");
const { PORT = 9090 } = process.env;

server.use(express.static(path.join(__dirname, "../frontend/dist")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
