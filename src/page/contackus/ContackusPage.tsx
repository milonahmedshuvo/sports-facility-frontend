import ContactForm from "../../components/ContactForm/ContactForm";


const ContackusPage = () => {
    
  return (
    <div>
       <ContactForm/>  

       <section className="text-xl w-1/2 mx-auto my-28 ">
                <h1 className=" text-2xl md:text-3xl lg:text-3xl my-10 uppercase text-center font-semibold">Our Contact Information</h1>
                <p className="text-center text-sm md:text-xl my-2" >Office address: Mirpur 10,Dhaka</p>
                <p className="text-center text-sm md:text-xl my-2" >Phone number: 017048848477</p>
                <p className="text-center text-sm md:text-xl my-2" >Email: milonahmed@gmail.com</p>
            </section>  
    </div>
  )
}

export default ContackusPage;