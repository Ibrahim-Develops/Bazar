import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    userId: number;
    todo: string;
    completed: boolean;
}

interface TodoState {
    Loading: boolean;
    data: Todo[] | null;
    Error: boolean;
}

export const fetchTodo = createAsyncThunk('fetchtodo', async ()=> {
    const res = await fetch('https://dummyjson.com/todos')
    const todos = await res.json()
    return todos.todos
})

const initialState: TodoState = {
    Loading: false,
    data: null,
    Error: false
};

const TodoSlice = createSlice({
    name: "tods",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action)=>{
            state.Loading = true
            state.Error = false
        });
        builder.addCase(fetchTodo.fulfilled, (state, action: PayloadAction<Todo[]>)=>{
            state.Loading = false
            state.data = action.payload
        });
        builder.addCase(fetchTodo.rejected, (state, action)=>{
            state.Error = true
        })
    },
})

export default TodoSlice.reducer