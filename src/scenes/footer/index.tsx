import Logo from "@/assets/Logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFa } from '@fortawesome/free-solid-svg-icons'
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";
import Call from "@/assets/call.png";
import github from "@/assets/github.png";
import mail from "@/assets/mail.png";


const Footer = () => {
    return (
        <footer className=" bg-primary-100 py-16">
            <div className=" justify-between mx-auto w-5/6 gap-16 md:flex ">
                <div className=" mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo}/>
                    <p className=" my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum sapiente unde corporis alias, veritatis a odit! Nemo fuga temporibus sapiente optio! Optio tenetur eligendi amet neque facere! Repellat, minima?</p>
                    
                </div>
                <div className=" mt-16 basis-1/4 md:mt-0">
                    <h4 className=" font-bold">
                        Links
                    </h4>
                    <div className=" flex">
                        <div className="w-[15%] mt-4 mr-2">
                            <img className=" w-8 h-8 " src={Facebook} alt="facebook" />
                        </div>
                        <a className=" my-5" href="https://www.facebook.com/ali.alshater.12/" >facebook</a>
                    </div>
                    <div className=" flex">
                        <div className="w-[15%] mt-4 mr-2">
                            <img className=" w-8 h-8" src={Instagram} alt="instagram" />
                        </div>
                        <a className=" my-5" href="https://www.instagram.com/ali.alshater/" >instagram</a>
                    </div>
                    <div className=" flex">
                        <div className="w-[15%] mt-4 mr-2">
                            <img className=" w-8 h-8" src={github} alt="github" />
                        </div>
                        <a className=" my-5" href="https://github.com/alialshater77" >github</a>
                    </div>
                </div>
                <div>
                    <h4 className=" font-bold">
                        Contact Us
                    </h4>
                    <div className=" flex">
                        <div className="w-[15%] mt-4 mr-4">
                            <img className=" w-10 h-8" src={mail} alt="mail" />
                        </div>
                        <p className=" my-5">alialshater7@gmail.com</p>
                    </div>
                    <div className=" flex">
                        <div className="w-[15%] mt-4 mr-2">
                            <img className=" w-8 h-8" src={Call} alt="call" />
                        </div>
                        <p className=" my-5">+963993171809</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer