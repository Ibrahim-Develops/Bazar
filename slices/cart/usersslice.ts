import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchUsers } from "@/app/actions/users";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: "male" | "female" | string;
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: { color: string; type: string };
    university: string;
    company: { name: string; title: string };
}

interface UserState {
    Loading: boolean;
    data: User[] | null;
    Error: boolean;
}

export const GetAllUsers = createAsyncThunk('getusers', async () => {
    const Users = await FetchUsers()
    return Users
})

const initialState: UserState = {
    Loading: false,
    data: null,
    Error: false
};

const UserSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(GetAllUsers.pending, (state, action)=>{
            state.Loading = true
            state.Error = false
        });
        builder.addCase(GetAllUsers.fulfilled, (state, action)=>{
            state.Loading = false
            state.data = action.payload
        });
        builder.addCase(GetAllUsers.rejected, (state, action)=>{
            state.Error = true
        })
    }
})

export default UserSlice.reducer