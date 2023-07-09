import { create } from 'zustand'
import { RegisterBody } from '../service/AuthService'

interface userStorage extends Omit<RegisterBody , "password">{}

interface GlobalUserStorage {
    userinfo?:userStorage
    setData: (data:userStorage) => void
}

export const userGlobalStore = create<GlobalUserStorage>((set) => ({
    userinfo:undefined,
    setData: (data) => set((state) => ({ userinfo:data })),
  }))