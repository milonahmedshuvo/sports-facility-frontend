// import PieChart from "./DoughnutChart"
import BarChart from "./BarCart"
import DoughnutChart from "./DoughnutChart"
import PaymentHistory from "./PaymentHistory";
import ProgressBarTailwind from "./ProgressBarTailwind"
import { ChartData, ChartOptions } from 'chart.js';

const Manage = () => {


  const barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (USD)',
        data: [3000, 5000, 2000, 8000, 7000, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sales 2023 (USD)',
        data: [2000, 4000, 3000, 6000, 5000, 3000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data for 2024 vs 2023',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };




  return (
    <div className="mx-10 ">



      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10">

        <div className="h-[160px] bg-[#1F2937] flex items-center p-6 gap-4 w-1/2 rounded">
          <div>
            <p className="text-xl font-inter">Welcome Back! Watson</p>
            <p className="text-[14px] text-[#738499]">You have completed 76% of your goal this</p>
            <p className="text-[14px] text-[#738499]">week! Start a new goal and improve your result.</p>
          </div>

          <div className="w-1/3 h-[100px]">
            <DoughnutChart></DoughnutChart>
          </div>

        </div>


        <div className="h-[160px] bg-[#1A344E] flex justify-between items-center rounded p-4 gap-4 w-1/2">

          <div>
            <p className="text-xl text-white font-inter">Upgrade to <span className="uppercase text-blue-500 font-semibold">PRO </span> for</p>
            <p className="text-xl text-white font-inter">more resources</p>
            <button className="bg-[#377AEC] text-white px-6 py-1 font-inter rounded mt-3">upgrate now</button>
          </div>

          <div>
            <img src="https://uko-vue.vercel.app/images/illustration/Frame-1.png" alt="" />
          </div>

        </div>

      </div>




      <div className="flex justify-between gap-8 mt-10">


        <div className="container mx-auto p-30 w-1/2">
          <h2 className="text-2xl font-bold mb-4 font-inter">Order Progress</h2>
          <ProgressBarTailwind name="GameBooker" percentage={90} />
          <ProgressBarTailwind name="PlayTime Hub" percentage={49} />
          <ProgressBarTailwind name="ArenaAccess" percentage={70} />
          <ProgressBarTailwind name="CourtReserve" percentage={60} />
        </div>

        <div className="w-1/2">
          <p className="text-white text-2xl font-bold mb-4 font-inter">Sels overview</p>
          <BarChart data={barChartData} options={barChartOptions} />
        </div>

      </div>



      <div className="mt-5">
        <PaymentHistory></PaymentHistory>
      </div>

    </div>
  )
}

export default Manage