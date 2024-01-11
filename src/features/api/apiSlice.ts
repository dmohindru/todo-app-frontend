import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addAuth } from "../../app/store";
import { RootState } from "../../app/store";
import keycloak from "../../auth/Keycloak";

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://localhost:8080',
//     credentials: 'include',
//     prepareHeaders: (headers, { getState }) => {
//         const state = getState() as RootState;
//         const token = state.auth.token;
//         if (token) {
//             headers.set("authorization", `Bearer ${token}`)
//         }
//         return headers
//     }
// });

// const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: any) => {
//    let result = await baseQuery(args, api, extraOptions);

//    if (result?.error?.status === 403) {
//         console.log('refreshing keycloak token')
        
//         // get new access token
//         await keycloak.updateToken(5);

//         console.log('keycloak refresh token: ', keycloak.token);
//         api.dispatch(addAuth({
//             refreshToken: keycloak.refreshToken ?? '',
//             accessToken: keycloak.token ?? ''
//         }));
//         result = await baseQuery(args, api, extraOptions);
//     } else {
//         console.log('error occured in fetch: ', result?.error);
//     }

//     return result

// }



// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: baseQueryWithReauth,
//     //tagTypes: ['TodoTitle', 'Todo'],
//     endpoints: builder =>({})
// });


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    //tagTypes: ['TodoTitle', 'Todo'],
    endpoints: builder =>({})
});