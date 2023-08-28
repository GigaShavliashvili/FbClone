import { create } from 'zustand'
import { RegisterBody } from '../service/AuthService'

interface userStorage extends Omit<RegisterBody , "password">{
    id?:number
}

interface GlobalUserStorage {
    userinfo:userStorage
    setData: (data:userStorage) => void
}

export const userGlobalStore = create<GlobalUserStorage>((set) => ({
    userinfo:{},
    setData: (data) => set((state) => ({ userinfo:data })),
  }))


interface LangugaStorage {
    ln:string,
    changeLn:(value:string) => void
}
  export const LangugaStorage = create<LangugaStorage>((set) => ({
    ln:"en",
    changeLn: (value:string) => set((state) => ({ ln:value })),
  }))