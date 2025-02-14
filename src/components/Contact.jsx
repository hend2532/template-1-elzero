import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-[#f6f6f6]">
      <div
        id="contact"
        className="flex flex-col justify-center items-center mt-12"
      >
        <h1 className="text-[#eee] font-bold text[50px] lg:text-[95px]">Contact</h1>
        <p className="mt-[-45px] text-center text-[20px] font-[400] text-[#666]">
          We are born to create{" "}
        </p>
      </div>
      <div className="px-4 lg:px-48 flex flex-wrap justify-center items-center gap-8 p-3">
        
        <div className="text-[22px] text-center">
          <h1 className="font-bold py-8 text-[#2c4755]">Feel free to drop us a line at:</h1>
          <a
            href="mailto:leonagency@mail.com"
            className="text-[#10cab7] font-bold "
          >
            leonagency@mail.com
          </a>

          <p className="flex gap-3 items-center text-[#2c4755] text-[16px] font-[400] py-8">
            Find Us On Social Networks  <FaYoutube/> <FaFacebook/> <FaTwitter/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
