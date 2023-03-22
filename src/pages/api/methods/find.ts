var jwt = require('jsonwebtoken');
import { FindData } from "../../../crud/crud"

export default async function FindTarea(req: any, res: any) {
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(404).json({ error: "Not logged in" });
    }
    const { email } = jwt.verify(myTokenName, "secret");
    const querys = { "email": email }
    const proyect = "agenda"
    const collection = "Tareas"
    const result = await FindData(querys, proyect, collection)
    //   console.log(result);
    try {
        // console.log(result[0].titulo);
        const funciona = result[0].titulo
    } catch (error) {
        return res.status(400).json("No hay datos");
    }
    return res.status(200).json(result);
}