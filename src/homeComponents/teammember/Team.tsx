import { motion } from "framer-motion";



const Teams = () => {
  const teams = [
    {
      image: 'https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/6605506c3337c3f14660af4e_Olivia%20Mitchell.webp',
      name: 'Olivia Mitchell',
      identity: 'Hamlet '
    },
    {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/65cb6b22bff2786e6d85be4d_Ethan%20Davis.webp",
      name: 'Ethan Devis',
      identity: 'Romeo Juliet'
    },
    {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/6605534b601b171d1ef01aed_Sophia%20Rodriguez%202.webp",
      name: 'Sopia Rags',
      identity: 'Romeo Juliet'
    }, {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/65cb6aa130764e85e44ffa89_Liam%20Anderson.webp",
      name: 'Liam Anderson',
      identity: 'Busket Triner'
    }, {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/65cb6a6f938b517df481f228_Megan%20Harper.webp",
      name: 'Mager Harper',
      identity: 'Ander Triner'
    }, {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/660557a84f21dbbe2a1122d3_Nathan%20Brooks.webp",
      name: 'Nathan Boorks',
      identity: 'Angisrl Triner'
    },
    {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/65cb69ffd7ea69f8fa674f89_Grace%20Martinez.webp",
      name: 'Gress Martrines',
      identity: 'Hill Running Triner'
    },
    {
      image: "https://cdn.prod.website-files.com/65c0fec0494dff5e0b6290de/65cb69c2af5a2f70eaa4cdff_Marcus%20Wallace.webp",
      name: 'Marcuss mali',
      identity: 'Running Sport'
    },

  ]

  return (
    <div className="mx-10 mt-32">
      <p className="text-secondary mb-2 font-inter text-lg">Team</p>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className=" text-[35px] md:text-[45px] lg:text-[56px] font-inter font-bold mb-8">Our professional trainers</motion.h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

        {
          teams.map((item, i) => <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            key={i} className=" bg-[#202020] ">



            <img
              src={item.image}
              alt="Example"
              className="mx-auto bg-cover px-16 bg-center w-full h-[250px] bg-secondary "
            />



            <p className=" mt-4 text-secondary hover:text-white text-[24px] ml-4 font-inter font-[600]">{item.name}</p>

            <p className=" my-3 text-white text-[20px] ml-4 font-inter font-[400]">{item.identity}</p>
          </motion.div>)
        }

      </div>

    </div>
  );
};

export default Teams;
