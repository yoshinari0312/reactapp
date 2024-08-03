import { Box, TextField } from "@mui/material";
import {EditButton} from "./EditButton"
import { useContext } from "react";
import { Context } from "./providers/Provider";

export const Card = () => {
  const {canEdit, isAdmin} = useContext(Context)
  return (
    <Box display="flex" flexDirection="column" backgroundColor="#FFE4B5" justifyContent="center" alignItems="center" margin="8px" width="500px">
      <TextField id="standard-basic" label="名前" variant="standard" disabled={!canEdit || !isAdmin} />
      <EditButton></EditButton>
    </Box>
  );
};