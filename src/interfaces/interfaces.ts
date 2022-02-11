export interface DataSports {
    idSport: number, 
    strSport: string, 
    strSportDescription: string, 
    strSportIconGreen: string, 
    strSportThumb: string,
}


export interface sports {
    sports: DataSports[]
    favorites: number[]
}

interface auth {
    name: string
}

export interface stateInter {
    sports: sports,
    auth: auth
}

type actionAuth = {
    uid: number,
    displayname: string,
  }

export interface actionInter {
    type: string,
    payload: actionAuth
  }

  export interface favorites {
    name: string,
    url: string,
    id: string,
  }