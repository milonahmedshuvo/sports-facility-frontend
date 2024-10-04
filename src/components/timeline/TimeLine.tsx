// src/components/Timeline.js
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import default styles for timeline
import { FaBriefcase, FaGraduationCap, FaUniversity, FaVoicemail } from 'react-icons/fa';

const Timeline = () => {
  return (
    <div className="pt-20">
      <h2 className="text-3xl uppercase text-center font-bold text-white mb-4">Your Gateway to Seamless Sports Facility Reservations</h2>
      <p className='text-center text-text w-full lg:w-2/3 mx-auto mb-12'>SportBooking is a user-friendly platform designed to simplify the process of reserving sports facilities. Whether you're looking to book a football field, tennis court, or basketball arena, SportBooking offers an intuitive interface for finding available venues, comparing prices, and making hassle-free bookings. Ideal for athletes, sports enthusiasts, and event organizers, it ensures you never miss an opportunity to play at your preferred location.</p>






      <VerticalTimeline>

        <VerticalTimelineElement

          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2023 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Frist Step</h3>
          <h4 className="vertical-timeline-element-subtitle">User Register and Login</h4>
          <p>
            The sports organization give register and login by user and user can create new account. if user have account then can login by email and password.
          </p>
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}


          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Secound Step</h3>
          <h4 className="vertical-timeline-element-subtitle">User Role Select</h4>
          <p>The sports organization's user can select thair role when you create new account give specific filed role user and admin. Each role will get specific access by role.</p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
          date="2020 - 2021"
          iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Thrid Step</h3>
          <h4 className="vertical-timeline-element-subtitle">Go to Facility Route</h4>
          <p>
            The sports organization show facility route in top the navber.you click facility route then click specific facility on datails button for booking.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(255, 87, 34)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 87, 34)' }}
          date="2018 - 2020"
          iconStyle={{ background: 'rgb(255, 87, 34)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Four Step</h3>
          <h4 className="vertical-timeline-element-subtitle">Go to Booking Page</h4>
          <p>
            You go to booking page show your specific facility information then give your informantion for booking.Check avaiable sorts by Date.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(156, 39, 176)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(156, 39, 176)' }}
          date="2017 - 2018"
          iconStyle={{ background: 'rgb(156, 39, 176)', color: '#fff' }}
          icon={<FaVoicemail />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Five Step</h3>
          <h4 className="vertical-timeline-element-subtitle">Confirom Booking</h4>
          <p>
            Booking page full complete then click Confirom booking button. Booking product will show your dashbord.
          </p>
        </VerticalTimelineElement>



      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
