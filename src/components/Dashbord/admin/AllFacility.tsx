import {  useState } from "react";
import { useDeleteFacilityMutation, useGetAllFacilityQuery } from "../../../redux/api/user"
import Editmodal from "./Editmodal";
import toast from "react-hot-toast";




type TFacility = {
    name: string;
    description: string;
    pricePerHour: number;
    location: string,
    isDeleted: boolean,
    image?: string,
    _id: string
}


const AllFacility = () => {
     const [facility, setFacility] = useState<TFacility>()
     const {data} = useGetAllFacilityQuery(undefined)
     const [deleteItem, {  isSuccess,  }] = useDeleteFacilityMutation();

     if(isSuccess){
      toast.success('Delete Succesfully!!')
     }


    const additionalFunction = (facility:TFacility) => {
      setFacility(facility)
    }
   
    

  const handleDelete = async (id: string) => {
    try {
      await deleteItem(id).unwrap();
      // Optionally, trigger a refetch or update the UI accordingly
    } catch (error) {
      console.error('Failed to delete the item: ', error);
    }
  };

    

    
   




  return (
    <div>
        <Editmodal facility={facility} />


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
        <th className="text-[#3B94E9]">PricePerHour</th>
        <th className="text-[#3B94E9]">Location</th>
        <th className="text-[#3B94E9]">Update</th>
        <th className="text-[#3B94E9]">Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}



      {
         data?.data.map((facility:TFacility ) =>  <tr key={facility._id}>
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
                   src={facility.image}
                   alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{facility.name}</div>
               
             </div>
           </div>
         </td>
         <td>
         
           <span > {facility.pricePerHour} </span>
           
         </td>
 
         <td> {facility.location} </td>
         <td>
             
             {/* <Link to={`/dashbord/editFacility/${facility._id}`} > */}
            <button onClick={() => { additionalFunction(facility); document.getElementById('my_modal_3')?.showModal()}} className="btn btn-xs bg-[#3B94E9] text-white">Edit</button>
            {/* </Link> */}
            </td>

            
         <th>
           <button onClick={()=> handleDelete(facility._id) } className="btn btn-ghost btn-xs bg-red-600">Delete</button>
         </th>
       </tr> )
      }

    </tbody>
    {/* foot */}
    
  </table>
</div>

    </div>
  )
}

export default AllFacility