import { db } from "../firebase/firebase-config";

export const loadFavorites = async (uid:string) => {
    const notesSnap = await db.collection(`${uid}/sports/favorite`).get();


    const notes:any = []
    
    notesSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data(),
        })
    })
    return notes
}