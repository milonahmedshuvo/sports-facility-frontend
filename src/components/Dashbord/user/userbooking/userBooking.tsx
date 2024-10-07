// import { useGetUserAllBookingQuery } from "../../../../redux/api/user"
// type TBooking = {
//   _id: string,
//   date: string;
//   startTime: string,
//   endTime: string,
//   user: string,
//   // facility: string,
//   payableAmount: number,
//   isBooked: string,
//   email: string,
//   image:string,
//   facility: {
//     name: string
//   } 
// }

import img1 from '../../../../image/booking1.jpg'
import img2 from '../../../../image/booking2.jpg'
import img3 from '../../../../image/booking3.jpg'



const UserBooking = () => {
    // const {data} = useGetUserAllBookingQuery(undefined)
    const data = [
      { id: 1, image:img1, name: 'John Doe', email: 'john@example.com', role: 'confirmed' },
      { id: 2, image:'https://i.ibb.co/qYV0DCz/sports.jpg', name: 'Dune Tmith', email: 'dunetmith@example.com', role: 'confirmed' },
      { id: 2, image:img2, name: 'Tane Fmit', email: 'tanefmit@example.com', role: 'confirmed' },
      { id: 2, image:img3, name: 'Hane Smith', email: 'hane@example.com', role: 'confirmed' },
      { id: 3, image:'https://i.ibb.co/qYV0DCz/sports.jpg', name: 'Bob Johnson', email: 'bob@example.com', role: 'confirmed' },
      // Add more data as needed
    ];
   


  return (
    <div className="text-white" >
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