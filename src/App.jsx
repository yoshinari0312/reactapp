import { Box, Button } from "@mui/material";
import { useContext } from "react";
import {Card} from "./components/Card"
import { Context } from "./components/providers/Provider";

export const App = () => {
  const {isAdmin, setIsAdmin} = useContext(Context)
  return (
    <Box>
      {isAdmin?<span>管理者です</span>:<span>管理者以外です</span>}
      <Button  variant="outlined"
        onClick={() => {
          setIsAdmin(!isAdmin)
        }}
      >
        切り替え
      </Button>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Card/>
      </Box>
    </Box>
  );
};
