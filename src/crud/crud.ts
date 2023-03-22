var MongoClient = require('mongodb').MongoClient;
var moment = require('moment');

const url = process.env.BASE_DE_DATOS;
//
///////////////////////////////////////////////////////////////////////


// FIND 
export async function FindData( query:any, proyect:string, collection:string) {
    
    if (  proyect == "" || collection == "") {
        return false
    } else {
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        // console.log(query, proyect, collection);
        let result = await MyCollection.find(query).toArray();        
        db.close();
        return result
    }
}
// INSERT
export async function InsertData(body:object, proyect:string, collection:string) {
    if (  proyect == "" || collection == "") {
        return false
    } else {
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.insertOne(body);        
        db.close();
        return result
    }
}

// UPDATE
export async function UpgrateData(body:object, query:object, proyect:string, collection:string) {
    if ( proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "zona": body.zona }
        let newvalues = { $set: body };
        const db = await MongoClient.connect(url);
        const dbo = db.db(proyect);
        const MyCollection = dbo.collection(collection);
        let result = await MyCollection.updateOne(query, newvalues);
        if (result.modifiedCount == 0 && result.upsertedCount == 0 && result.matchedCount == 0 ) {        
            result = await MyCollection.insertOne(body);
        } else {
            //   
        }
        db.close();
        return result
    }
}

// DELETE
export async function DeleteData(query:object, proyect:string, collection:string) {
    if ( query == null || proyect == "" || collection == "") {
        return false
    } else {
        // let query = { "can": body.can, "pin": body.pin }
        const db = await MongoClient.connect(url);
        const dbo = db.db( proyect );
        const MyCollection = dbo.collection(collection);
        const result = await MyCollection.deleteOne(query);
        db.close();
        return result
    }
}

// --------------------------------------------------------------------

export function HoraActual() {
    //
    // return moment().zone('-0700').format('YYYY-MM-DD HH:mm')
    return moment().utcOffset("-6:00").format('YYYY-MM-DD HH:mm:ss')
}