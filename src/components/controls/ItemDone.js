import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

function ItemDone({ todo, handleClick }) {

    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            width={300}
            height={60}
            bgcolor={'#F1F2F2'}
            borderRadius={2}
            onClick={() => handleClick(todo.id)}
        >
            <Typography fontSize={24} fontFamily={'Roboto'}>Done</Typography>
        </Stack>
    )
}
export default ItemDone;