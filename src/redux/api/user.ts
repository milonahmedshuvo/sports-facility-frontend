import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


export const userApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1',
     prepareHeaders: (Headers) => {
      const token = localStorage.getItem('accessToken')
      if(token){
        Headers.set('Authorization', token)
      }
     }
   }),
   
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

    userLogin: builder.mutation({
      query: (data) => {
        return {
          url: '/user-login/login',
          method: 'POST',
          body: data
        }
      } 
    }),

    getSingleuserInfo: builder.query({
      query: () => {
        console.log("redux api")
        return {
          url: '/user/single',
        }
      } 
    }),

  }),
})




export const { useUserRegisterMutation, useUserLoginMutation, useGetSingleuserInfoQuery } = userApi;