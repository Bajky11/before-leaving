import { Stack } from "@mui/material";
import city_illustration from "../../res/city_illustration.svg"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { screenTypes } from "../../constants";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HomeScreen({ changeScreen, cityData, city, handleCityChange }) {

    return (
        <Stack alignItems='center' spacing={12} paddingY={4}>
            <img src={city_illustration} alt="city" width={330} height={158} />
            <Typography fontSize={36} fontFamily={'Roboto'}>Select yout home</Typography>
            <FormControl sx={{ width: '300px' }}>
                <InputLabel id="label-home-select">Home</InputLabel>
                <Select
                    labelId="label-home-select"
                    label="Home"
                    onChange={handleCityChange}
                >
                    {
                        cityData && cityData.map((city) => {
                            return <MenuItem key={city.id} value={city}>{city.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>


        </Stack>
    );
}

export default HomeScreen;