import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase("test.db")


export const init = ()=>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx) =>{
            tx.executeSql(" CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL, email, TEXT NOT NULL,phone TEXT NOT NULL, imageUri TEXT DEFAULT NULL, password TEXT NOT NULL,token TEXT DEFAULT NULL)"),
            [],
            () =>{
                resolve()
            },
            (_,err)=>{
                reject(err)
            }
        })
    })
    return promise
    
}