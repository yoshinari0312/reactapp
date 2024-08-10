import { Box, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useContext } from "react";
import {Card} from "./components/Card"
import { Context } from "./components/providers/Provider";

export const App = () => {
  const {isAdmin, setIsAdmin} = useContext(Context)
  return (
    <Box>
      <Grid container>
        <Grid xs={2} sx={{marginLeft:"10px"}}>
          {isAdmin?<p>管理者です</p>:<p>管理者以外です</p>}
        </Grid>
        <Grid xs={2} sx={{marginTop:"10px"}}>
          <Button  variant="outlined"
            onClick={() => {
              setIsAdmin(!isAdmin)
            }}
          >
            切り替え
          </Button>
        </Grid>
        <Grid xs={8}></Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Card/>
      </Box>
    </Box>
  );
};
