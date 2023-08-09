import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

function ItemTodo({ todo, handleClick }) {

    return (
        <Stack
            spacing={4}
            direction='row'
            alignItems='center'
            justifyContent='center'
            width={300}
            height={60}
            bgcolor={'#6C63FF'}
            borderRadius={2}
            onClick={() => handleClick(todo.id)}
        >
            <Typography fontSize={24} fontFamily={'Roboto'}>{todo.title}</Typography>
        </Stack>
    )
}
export default ItemTodo;