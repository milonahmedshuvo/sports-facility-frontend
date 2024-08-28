import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


export const userApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: ( data ) => {
        // console.log("redux api thke", data)

        return {
          url: `/user/create`,
          method: "POST",
          body: data
         }
      }
    }),
  }),
})




export const { useUserRegisterMutation } = userApi;