import React, { useState, createContext, useContext, useEffect } from "react"
import { profileService } from "../services/auth"

export const Context = createContext()

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getSessionData() {
      const { data: data } = await profileService()
      login({ _id: data._id, email: data.email })
    }
    getSessionData()
  }, [])

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  const value = { user, login, logout }

  return <Context.Provider {...props} value={value} />
}

// Hook
export const useContextInfo = () => useContext(Context)
