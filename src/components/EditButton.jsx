import { Button } from "@mui/material"
import { useContext } from "react"
import { Context } from "./providers/Provider"

export const EditButton = () => {
  const {isAdmin, canEdit, setCanEdit} = useContext(Context)
  return (
    <Button variant="outlined" disabled={!isAdmin} size="medium" onClick={() => {setCanEdit(!canEdit)}} sx={{my: 1}}>編集</Button>
  )
}