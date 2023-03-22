var jwt = require('jsonwebtoken');
import { InsertData } from "../../../crud/crud"

export default async function CreateTarea(req:any, res:any) {
  const { myTokenName } = req.cookies;
  if (!myTokenName) {
    return res.status(404).json({ error: "Not logged in" });
  }
  //
  const { email } = jwt.verify(myTokenName, "secret");
  const body = req.body
  console.log(body);
  body.email = email
  const proyect = "agenda"
  const collection = "Tareas" 
  const result = await InsertData(body, proyect, collection)  
  return res.status(200).json(result);
}