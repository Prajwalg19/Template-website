import Icon from "@/public/assets/Icon.png";
import Image from "next/image";
import {BiSolidMessageDetail} from "react-icons/bi";
import {FaPhone} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="text-base w-full mt-32 px-4 lg:px-8 py-8 text-gray-600">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between">
                <section className="flex flex-col items-center lg:items-start gap-5">
                    <Image src={Icon} alt="Website icon" />
                    <div className="flex items-center gap-3">
                        <BiSolidMessageDetail className="text-xl text-orange-600" />
                        <p>Help@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-xl text-orange-600" />
                        <p>+91 0394-2342-223</p>
                    </div>
                </section>

                <section className="flex flex-col items-center lg:items-start gap-5">
                    <p className="text-2xl font-semibold">Links</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Bookings</p>
                    <p>Blog</p>
                </section>

                <section className="flex flex-col items-center lg:items-start gap-5">
                    <p className="text-2xl font-semibold">Legal</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </section>

                <section className="flex flex-col items-center lg:items-start gap-5">
                    <p className="text-2xl font-semibold">Product</p>
                    <p>Take Tour</p>
                    <p>Live Chat</p>
                    <p>Reviews</p>
                </section>

                <section className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-auto">
                    <p className="text-2xl font-semibold">Newsletter</p>
                    <p>Stay Up To Date</p>
                    <div className="flex flex-col lg:flex-row gap-3 w-full">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="border border-gray-200 py-2 px-3 w-full lg:w-auto flex-grow"
                        />
                        <button className="py-2 px-6 bg-black rounded-sm text-white text-base">Subscribe</button>
                    </div>
                </section>
            </div>
            <hr className="my-10" />
            <p className="text-center text-gray-600 text-xs">Copyright 2024 Demo&copy;, All Rights Reserved</p>

        </footer>
    );
}
