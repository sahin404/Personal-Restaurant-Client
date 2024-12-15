import { FaFacebook, FaRegCopyright, FaYoutube } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                {/* Left */}
                <div className="bg-[#1F2937] text-white text-center flex-1 py-10">
                    <h1 className="mb-3">CONTACT US</h1>
                    <p>
                        123 ABS Street, Uni 21, Bangladesh
                        <br />
                        +88 123456789
                        <br />
                        Mon - Fri: 08:00 - 22:00
                        <br />
                        Sat - Sun: 10:00 - 23:00
                    </p>
                </div>
                {/* Right */}
                <div className="bg-[#111827] text-white flex-1 text-center py-10">
                    <h1 className="mb-3">FOLLOW US</h1>
                    <h1 className="mb-3">Join us Social Media</h1>
                    <div className="flex gap-2 text-2xl justify-center items-center">
                        <Link><FaFacebook /></Link>
                        <Link><FaSquareInstagram /></Link>
                        <Link><FaYoutube /></Link>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-16 flex items-center justify-center text-md  text-white gap-2">
                <h1>Copyright </h1>
                <h1> <FaRegCopyright /></h1>
                <h1> Md Sahin Alam. All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer