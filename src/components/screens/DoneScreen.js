import { Stack } from "@mui/material";
import celebrate from "../../res/celebrate.svg"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { screenTypes } from "../../constants";

function DoneScreen({ changeScreen }) {
    return (
        <Stack alignItems='center' justifyContent='center' spacing={6} paddingY={4}>
            <Typography fontSize={36} fontFamily={'Roboto'}>All done!</Typography>
            <img src={celebrate} alt="city" width={300} height={300} />
            <Button variant="contained" size="large" onClick={() => changeScreen(screenTypes.HOME_SCREEN)}> RESET</Button>
        </Stack >
    );
}

export default DoneScreen;