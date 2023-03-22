var jwt = require('jsonwebtoken');
import { DeleteData } from "../../../crud/crud"

export default async function DeleteTarea(req: any, res: any) {
    console.log("ELIMINAR DATO");

    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(404).json({ error: "Not logged in" });
    }
    //
    //   const { email } = jwt.verify(myTokenName, "secret");
    const { email, titulo, tiempo } = req.body

    const querys = { "email" : email , "titulo" : titulo }
    console.log(querys);

    const proyect = "agenda"
    const collection = "Tareas"
    const result = await DeleteData(querys, proyect, collection)
    console.log(result);
    
    return res.status(200).json(result);
    // return res.status(200).json({ data: true });
}