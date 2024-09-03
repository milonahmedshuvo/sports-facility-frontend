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
   tagTypes: ['facility'],
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

    createAdmin: builder.mutation({
      query: ( data ) => {
        return {
          url: `/user/createAdmin`,
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
    facilityPost: builder.mutation({
      query: (data) => {
        return {
          url: '/facility/create',
          method: 'POST',
          body: data
        }
      },
      invalidatesTags: ['facility'] 
    }),
    updateFacility : builder.mutation({
      query: ({id, data}) => {
        console.log("redux id", id)
        console.log('redux data', data)

        return {
          url: `/facility/update/${id}`,
          method: 'PUT',
          body: data
        }
      },
      invalidatesTags: ['facility'] 
    }),

    deleteFacility : builder.mutation({
      query: (id) => {
        console.log("redux delete id", id)
        // console.log('redux data', data)

        return {
          url: `/facility/delete/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['facility'] 
    }),

    getSingleuserInfo: builder.query({
      query: () => {
        console.log("redux api")
        return {
          url: '/user/single',
        }
      } 
    }),

    getAllFacility: builder.query({
      query: () => {
       
        return {
          url: '/facility/all',
        }
      }, 
      providesTags: ['facility']
    }),

    getCheckAvaiableSort: builder.query({
      query: (date) => {
        console.log("redux date", date)

        return {
          url: `/booking/check-availability?date=${date}`,
        }
      } 
    }),
    bookingPost: builder.mutation({
      query: (data) => {
        console.log(data)
        
        return {
          url: '/booking/create',
          method: 'POST',
          body: data
        }
      },
       
    }),

    getUserAllBooking: builder.query({
      query: () => {
       
        return {
          url: '/booking/user-all-booking',
        }
      }, 
      
    }),

  }),
})




export const { useUserRegisterMutation, useUserLoginMutation, useGetSingleuserInfoQuery,useFacilityPostMutation, useCreateAdminMutation, useGetAllFacilityQuery, useUpdateFacilityMutation, useDeleteFacilityMutation, useGetCheckAvaiableSortQuery, useBookingPostMutation, useGetUserAllBookingQuery } = userApi;