
function Portfolio() {
      const data=[
            {
                icon:<img src="/images/portfolio-1.jpg"/>,
                title:"Project Here",
                description:"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
            },
            {
                icon:<img src="/images/portfolio-2.jpg"/>,
                title:"Project Here",
                description:"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
            },
            {
                icon:<img src="/images/portfolio-3.jpg"/>,
                title:"Project Here",
                description:"My creative ability is very difficult to measure because it can manifest in so many surprising and.",
            },
           
           
        ]
  return (
    <div className='bg-[#f6f6f6]'>
    <div id="portfolio"  
      className="flex flex-col justify-center items-center mt-12"
       >
        <h1 className="text-[#eee] font-bold text[50px] lg:text-[95px]">Portfolio</h1>
        <p className="mt-[-45px] text-center text-[20px] font-[400] text-[#666]">

        If you do it right, it will last forever.
        </p>
    </div>
    <div className='px-4 lg:px-48 flex flex-row justify-center items-center gap-3 p-3'>
    <div className="px-4 lg:px-48 flex flex-wrap justify-center gap-12 p-16  ">
    {
        data.map((item,index)=>(
            <div key={index} className="flex flex-col  justify-center gap-6 w-80  bg-white rounded-lg overflow-hidden">
                <p className=""> {item.icon}</p>
                <h2 className="px-6 font-bold text-[22px]">{item.title}</h2>
                <p className="px-6 mb-4 text-[18px] text-[#bbb] font-[400]">{item.description}</p>
            </div>
        ))
    }
    </div>
    <div className='hidden lg:flex'>
        <img src="/images/Portfolio.jpg" className='rounded-lg '/>
    </div>
    </div>
    </div>
  )
}

export default Portfolio
