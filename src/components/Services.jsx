
import { FaPalette, FaPencilRuler, FaSketch } from 'react-icons/fa'
import { FaVectorSquare } from 'react-icons/fa6'

function Services() {
      const data=[
            {
                icon:<FaPalette  size={35}/>,
                title:"Graphic Design",
                description:"Graphic design is the process of visual communication and problem-solving using one or more of typography, photography and illustration.",
            },
            {
                icon:<FaSketch  size={35}/>,
                title:"UI & UX",
                description:"Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction.",
            },
            {
                icon:<FaVectorSquare  size={35}/>,
                title:"Web Design",
                description:"Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
            },
            {
                icon:<FaPencilRuler size={35}/>,
                title:"Web Development",
                description:"Web development is a broad term for the work involved in developing a web site for the Internet or an intranet.",
            },
           
        ]
  return (
    <>
    <div id="services"
      className="flex flex-col justify-center items-center mt-12"
       >
        <h1 className="text-[#eee] font-bold text-[95px]">Services</h1>
        <p className="mt-[-45px] text-center text-[20px] font-[400] text-[#666]">

Don &apos;t be busy, be  productive 
        </p>
    </div>
    <div className='px-4 lg:px-48 flex flex-row justify-center items-center gap-3 p-3'>
    <div className="px-4 lg:px-48 flex flex-wrap justify-center gap-12 p-16  ">
    {
        data.map((item,index)=>(
            <div key={index} className="flex flex-col text-center items-center justify-center gap-6 w-80 ">
                <p className="text-[#10cab7] "> {item.icon}</p>
                <h2 className="font-bold text-[22px]">{item.title}</h2>
                <p className="text-[18px] text-[#bbb] font-[400]">{item.description}</p>
            </div>
        ))
    }
    </div>
    <div className='hidden lg:flex'>
        <img src="/public/images/services.jpg" className='rounded-lg '/>
    </div>
    </div>
    </>
  )
}

export default Services
