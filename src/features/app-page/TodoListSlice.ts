import { apiSlice } from "../api/apiSlice";
import { User } from "../../dto/dto";

export const userTodoListApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserTodoList: builder.query<User, void>({
            query: () => '/api/v1/user',
            transformResponse: (response: User) => {
                console.log('response from /api/v1/user: ', response);
                return response;
            }   
        })
    })
});

export const { useGetUserTodoListQuery } = userTodoListApiSlice;