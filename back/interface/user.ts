export interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  genderId: number
}

export interface createTokenBody extends RegisterBody {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface loginBody {
  email: string;
  password: string;
}
export interface createAvatar {
  id: number,
  avatar: string,
  isProfile:boolean
  userId:number
}
