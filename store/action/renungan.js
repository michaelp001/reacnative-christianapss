import { RENUNGAN } from "../../data/dunmmy-data"
export const SHOW_RENUNGAN = "SHOW_RENUNGAN"


const loadRenungan = () =>{
    return new Promise((resolve)=>{
        const renungan_id = RENUNGAN
        resolve(renungan_id)
    })
}

export const fetchRenungan = () =>{
    return async (dispatch)=>{
        const renungan = await loadRenungan()
        dispatch({
            type:SHOW_RENUNGAN,
            data:renungan
        })
        console.log(renungan)
    }
}