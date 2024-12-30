import { useState } from 'react';
import img1 from '../../../../image/booking1.jpg'
import img2 from '../../../../image/booking2.jpg'
import img3 from '../../../../image/booking3.jpg'
import toast from 'react-hot-toast';



const UserBooking = () => {
    // const {data} = useGetUserAllBookingQuery(undefined)
    const [data, setData] = useState([
      { id: 0, image: img1, name: 'John Doe', email: 'John@example.com', role: 'Confirm', order: 'Cancel Order' },
      { id: 1, image: 'https://i.ibb.co/qYV0DCz/sports.jpg', name: 'Dune Tmith', email: 'Dunetmith@example.com', role: 'Confirm', order: 'Cancel Order' },
      { id: 2, image: img2, name: 'Tane Fmit', email: 'Janefmit@example.com', role: 'Confirm', order: 'Cancel Order' },
      { id: 3, image: img3, name: 'Hane Smith', email: 'Hane@example.com', role: 'Confirm', order: 'Cancel Order' },
      { id: 4, image: 'https://i.ibb.co/qYV0DCz/sports.jpg', name: 'Bob Johnson', email: 'Bob@example.com', role: 'Confirm', order: 'Cancel Order' },
      // Add more data as needed
    ]);
  
    const handleOrder = (id: number) => {
      console.log('Item to delete:', id);
      // Update the data array using the setData function
      setData((prevData) => prevData.filter((item) => item.id !== id));
      toast.success('Order cencel success.')
    };

  return (
    <div className="text-white pb-64" >
        <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md rounded-lg">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b">
                <tr>
                  <th className="px-6 py-4 text-white">ID</th>
                  <th className="px-6 py-4 text-white">Image</th>
                  <th className="px-6 py-4 text-white">Name</th>
                  <th className="px-6 py-4 text-white">Email</th>
                  <th className="px-6 py-4 text-white">isBooked</th>
                  <th className="px-6 py-4 text-white">Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="">
                    <td className="whitespace-nowrap px-6 py-3">{item.id}</td>
                    <td className="whitespace-nowrap px-6 py-3">
                      <img className='w-[70px] h-[60px] rounded-lg' src={item.image} alt="" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-3">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-3">{item.email}</td>
                    <td className="whitespace-nowrap px-6 py-3">{item.role}</td>
                    <td className="whitespace-nowrap px-6 py-3 hover:text-secondary cursor-pointer" onClick={()=>handleOrder(item.id)}>{item.order}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserBooking