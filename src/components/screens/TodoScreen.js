import { Stack } from "@mui/material";
import home from "../../res/home.svg"
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ItemTodo from "../controls/ItemTodo";
import ItemDone from "../controls/ItemDone";
import Button from '@mui/material/Button';
import { screenTypes } from "../../constants";
import { useCallback, useEffect, useState } from 'react'
import { todoData } from "../../constants";

function TodoScreen({ changeScreen, city }) {

    const [cityTodos, setCityTodos] = useState(todoData.find(cityData => cityData.city === city.value).todos);

    const toggleItemState = (id) => {
        const updatedTodos = cityTodos.map(todo => {
            if (todo.id === id) {
                todo.state = todo.state === 'done' ? 'todo' : 'done'
            }
            return todo
        })
        setCityTodos(updatedTodos)
        console.log('click')
    }

    useEffect(() => {
        const allDone = cityTodos.filter(todo => todo.state === 'todo');
        if (allDone.length === 0) {
            changeScreen(screenTypes.DONE_SCREEN)
        }
    }, [cityTodos, changeScreen])

    return (
        <Stack alignItems='center' spacing={2} paddingY={4}>
            <Stack alignItems='center' justifyContent='space-between' alignSelf={'stretch'} direction='row' paddingX={7}>
                <Typography fontSize={36} fontFamily={'Roboto'}>{city.name}</Typography>
                <img src={home} alt="city" width={95} height={141} />
            </Stack>
            <Divider width={300} />
            {
                cityTodos && cityTodos.map((todo) => {
                    return todo.state === 'todo'
                        ? <ItemTodo key={todo.id} todo={todo} handleClick={toggleItemState} />
                        : <ItemDone key={todo.id} todo={todo} handleClick={toggleItemState} />
                })
            }

            <Button variant="contained" size="large" onClick={() => changeScreen(screenTypes.HOME_SCREEN)}>BACK</Button>
        </Stack>
    );
}

export default TodoScreen;