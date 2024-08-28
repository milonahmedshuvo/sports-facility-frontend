import { useGetSingleuserInfoQuery } from "../../../../redux/api/user"
import catoon from '../../../../image/catoon.jpg'

const UserInfo = () => {
  const { data } = useGetSingleuserInfoQuery(localStorage.getItem)
  console.log(data)





  return (
    <div className="text-white mx-10 rounded-3xl bg-white py-14 flex justify-evenly items-center h-[260px] mt-10">





      <div>
        <h3 className="text-orange-600 text-3xl font-semibold font-mark-pro"> Welcome back, {data?.data?.name}</h3>
        <h3 className="text-orange-600 text-xl">{data?.data?.email}</h3>
      </div>


      <div>
        <img className="h-[200px]" src={catoon} alt="" />
      </div>


    </div>
  )
}

export default UserInfo