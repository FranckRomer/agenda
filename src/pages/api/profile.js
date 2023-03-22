// import jwt from "jsonwebtoken";
var jwt = require('jsonwebtoken');

export default function profileHandler(req, res) {
  const { myTokenName } = req.cookies;
  if (!myTokenName) {
    return res.status(404).json({ error: "Not logged in" });
  }
  const { username ,proyect } = jwt.verify(myTokenName, "secret");
  // console.log(jwt.verify(myTokenName, "secret"));
  return res.status(200).json({ username, proyect });
}