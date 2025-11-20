import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    let data = ["rupjit", "abdullah", "malik"];
    console.log(data);
    res.status(200).json({ msg: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.post("/register", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);
    return res.status(200).json({ msg: "registered", data: userInput });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.post("/login", (req, res) => {
  try {
    let email = req.body.email;
    let name = req.body.name;
    let age = req.body.age;
    let password = req.body.password;

    if (password.length < 3) {
      return res.status(405).json({ msg: "pass is too short" });
    }

    let outermessage = `My name is ${name}, email is ${email}, age is ${age}, password is ${password}`;
    console.log(outermessage);
    res.status(200).json({ msg: outermessage, fname: "hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server Chalu ho gya http://localhost:${PORT}`);
});
