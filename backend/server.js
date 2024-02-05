import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

//get a list of jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "This is a jokes1",
      content: "Jokes1",
    },
    {
      id: 2,
      title: "This is a jokes2",
      content: "Jokes2",
    },
    {
      id: 3,
      title: "This is a jokes3",
      content: "Jokes3",
    },
    {
      id: 4,
      title: "This is a jokes4",
      content: "Jokes4",
    },
    {
      id: 5,
      title: "This is a jokes5",
      content: "Jokes5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(` Server st https://localhost:${port}`);
});
