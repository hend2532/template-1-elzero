import {  FaGem, FaGlobeAsia, FaMagic } from "react-icons/fa";

function Hero() {
    const data=[
        {
            icon:<FaMagic  size={35}/>,
            title:"Tell Us Your Idea",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
        },
        {
            icon:<FaGem  size={35}/>,
            title:"We Will Do All The Work",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
        },
        {
            icon:<FaGlobeAsia  size={35}/>,
            title:"Your Product is Worldwide",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
        },
       
    ]
  return (
    <>
    <div
      className="h-[92vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/landing.jpg')" }}
    >
        <h1 className="text-[#10cab7] font-bold text-[45px]">Hello There</h1>
        <p className="text-[20px] font-[400] text-[#2c4755]">
        We are Leon - Super Creative & <br/> Minimal Agency Web Template  
        </p>
    </div>
    <div className="px-4 lg:px-48 flex flex-wrap bg-[#f6f6f6] justify-between gap-10 p-16  ">
    {
        data.map((item,index)=>(
            <div key={index} className="flex flex-col text-center items-center justify-center gap-6 w-80 ">
                <p className="text-[#10cab7] "> {item.icon}</p>
                <h2 className="font-bold text-[22px]">{item.title}</h2>
                <p className="text-[25px] text-[#bbb] font-[400]">{item.description}</p>
            </div>
        ))
    }
    </div>
    </>
  );
}

export default Hero;
