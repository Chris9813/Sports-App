import { DataSports } from "../interfaces/interfaces"

export const getterById = (sports:DataSports[], favorites:number[]) => {
    
    return sports.filter((item:DataSports) => favorites.includes(item.idSport))

}