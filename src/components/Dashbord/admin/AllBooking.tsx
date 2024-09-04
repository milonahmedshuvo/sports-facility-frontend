import { useGetAllbookingQuery } from "../../../redux/api/user";
import Spinner from "../../../sheared/Spinner/Spinner";


type TBooking = {
  _id: string,
  date: string;
  startTime: string,
  endTime: string,
  user: string,
  // facility: string,
  payableAmount: number,
  isBooked: string,
  email: string,
  image:string,
  facility: {
    name: string
  } 
}



const AllBooking = () => {
    const {data, isLoading} = useGetAllbookingQuery(undefined)

   
     if(isLoading){
      return <Spinner/>
     }
   

  return (
    <div className="text-white" >

<div>
        


     <div className="overflow-x-auto text-white">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="text-[#3B94E9]">Name</th>
        <th className="text-[#3B94E9]">Date</th>
        <th className="text-[#3B94E9]">StartTime</th>
        <th className="text-[#3B94E9]">EndTime</th>
        <th className="text-[#3B94E9]">IsBooked</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}



      {
         data?.data.map((booking:TBooking) =>  <tr key={booking._id}>
         <th>
           <label>
             <input type="checkbox" className="checkbox text-white" />
           </label>
         </th>
         <td>
           <div className="flex items-center gap-3">
             <div className="avatar">
               <div className="mask mask-squircle h-12 w-12">
                 <img
                   src={booking.image}
                   alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{booking?.facility?.name }</div>
               
             </div>
           </div>
         </td>
         <td>
         
           <span > {booking.date} </span>
           
         </td>
 
         <td> {booking.startTime} </td>
         <td> {booking.endTime} </td>
         <td> {booking.isBooked} </td>
         

            
         <th>
           <button  className="btn btn-ghost btn-xs bg-red-600">Delete</button>
         </th>
       </tr> )
      }

    </tbody>
    {/* foot */}
    
  </table>
</div>

    </div>
    </div>
  )
}

export default AllBooking