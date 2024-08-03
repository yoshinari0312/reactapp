import { createContext, useState } from "react";

export const Context = createContext({})

export const Provider = ({children}) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [canEdit, setCanEdit] = useState(false)

  return (
    <Context.Provider value={{isAdmin, setIsAdmin, canEdit, setCanEdit}}>
      {children}
    </Context.Provider>
  )
}