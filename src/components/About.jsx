
function About() {
  return (
    <>
    <div id="about"
      className="flex flex-col justify-center items-center mt-12"
       >
        <h1 className="text-[#eee] font-bold text-[95px]">About</h1>
        <p className="mt-[-45px] text-center text-[20px] font-[400] text-[#666]">

        Less is more work
        </p>
    </div>
    <div className='px-4 lg:px-48 flex flex-wrap justify-center items-center gap-8 p-3'>
    <div className=''>
        <img src="/public/images/about.jpg" className='rounded-lg w-[300px] mt-8'/>
    </div>
    <div className="text-[20px] text-center">
        <p className="font-[600] py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!</p>
        <hr className="border-t-2 border-[#10cab7] w-[70%] m-auto" />
         <p className="text-[#999] font-[400] py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse, alias, sed quo officia?</p>
    </div>
    </div>
    </>
  )
}

export default About
