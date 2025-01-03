import { useLoaderData } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { useBookingPostMutation, useGetCheckAvaiableSortQuery } from "../../redux/api/user"
import { useState } from "react"
import toast from "react-hot-toast"


type Inputs = {
  date: string
}

type TimeSorts = {
  startTime: string,
  endTime: string,
}

// defined booking type 
type TFacility = {
  data: {
    name: string;
  description: string;
  pricePerHour: number;
  location: string,
  isDeleted: boolean,
  image?: string,
  _id: string
  }
}




const BookingPage = () => {
  const [date, setDate] = useState<string>('')
  const booking = useLoaderData() as TFacility
  const { data } = useGetCheckAvaiableSortQuery(date)
  const [bookingPost, { data:bookingResponse, error, isSuccess } ] = useBookingPostMutation()

  

  const {
    register: registerDate,
    handleSubmit: handleSubmitDate,
  } = useForm<Inputs>();

  const {
    register: registerTime,
    handleSubmit: handleSubmitTime,
    reset
  } = useForm<TimeSorts>();

  const onSubmitDate: SubmitHandler<Inputs> = (data) => {
    console.log("handle date:", data.date);
    setDate(data.date);
  };

  const onSubmitTime: SubmitHandler<TimeSorts> = (time) => {
    console.log("handle time:", time);

    const bookingData = {
      // user: "66ba035155e6848f700a4b53",
      facility: booking.data._id,
      image: booking?.data?.image,
      date: date,
      startTime: time.startTime,
      endTime: time.endTime
    }
    console.log("data bookings:", bookingData)
    bookingPost({
      data: bookingData
    })

    reset()
  };

 
  console.log('booking response', bookingResponse)
  console.log('booking error res:',  error)

  if(isSuccess){
    toast.success(bookingResponse?.message)
  }






  






  return (
    <div className="flex  justify-between bg-white pt-7 pb-28">
      <div className="text-white w-1/3 mx-auto border-b-2 pb-4 pt-32">
        <div className=''>

          <img className="h-[200px] w-full" src={booking?.data?.image} alt="" />
          <p className="text-2xl font-semibold text-[#1D1D1F] my-1"> {booking?.data?.name} </p>
          <p className="text-[#4F5465]"> {booking?.data?.description} </p>
          

        </div>
      </div>


      <div className="w-1/2 pt-32">
        <form action="" className="flex gap-3" onSubmit={handleSubmitDate(onSubmitDate)} >

          <input type="text" placeholder="YYYY-MM-DD" {...registerDate("date")} className="w-1/2 border border-gray-400 outline-none py-3 px-5" />






          <input type="submit" value="Check Button" className="bg-orange-600 py-2 text-white font-semibold px-4" />
        </form>


        {/* avaiable sort time  */}
        <div>
          <p className="text-orange-600 font-semibold text-xl my-8">Avaiable Sorts</p>
          {
            data?.data?.map((sort: TimeSorts) => <div className="flex gap-6">
              <p className="bg-gray-900 py-2 px-10 text-white font-semibold my-2 ">{sort?.startTime}</p>
              <p className="bg-gray-900 py-2 px-10 text-white font-semibold my-2 ">{sort?.endTime}</p>
            </div>)
          }
        </div>


        {/* start time and end time */}

        <form action="" onSubmit={handleSubmitTime(onSubmitTime)} >

          <div className="mt-5">

            <div className="flex flex-col my-2">
              <label>Start Time</label>
              <input type="text" placeholder="10:00" {...registerTime("startTime")} className="w-1/2 border border-gray-400 outline-none py-3 px-5" />
            </div>

            <div className="flex flex-col my-2">
              <label>End Time</label>
              <input type="text" placeholder="12:00" {...registerTime("endTime")} className="w-1/2 border border-gray-400 outline-none py-3 px-5 " />
            </div>

          </div>

          <input type="submit" value="Confirm Booking" className="bg-orange-600 py-2 text-white font-semibold px-4 my-5" />
        </form>
      </div>

    </div>
  )
}

export default BookingPage;