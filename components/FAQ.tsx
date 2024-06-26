"use client"
import Image from "next/image";
import PlayStore from "@/public/assets/PlayStore.png";
import Spray from "@/public/assets/Spray3.png";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

export default function FAQ() {
    const {ref} = useInView({
        threshold: 1,
    });
    return (
        <motion.div ref={ref} initial={{opacity: 0, x: -35}} whileInView={{opacity: 1, x: 0, transition: {duration: 0.6}}} viewport={{once: true}} className="mt-28 w-full flex flex-col gap-8 px-4  lg:px-8">
            <div className="flex flex-col items-start gap-4 text-center lg:text-left">
                <p className="text-xl  text-orange-600 tracking-widest w-full text-center lg:w-auto lg:text-left font-clashMedium">FAQ</p>
                <h1 className="font-extrabold text-3xl text-center w-full lg:w-auto lg:text-left sm:text-4xl lg:text-5xl font-clashBold">Frequently asked <br className="hidden lg:block" /> questions</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
                <section className="relative w-full flex flex-col lg:flex-row justify-center dark:bg-purple-700 items-center bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 font-clashSemiBold">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-slate-200 rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 font-clashSemiBold text-center lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
                <section className="order-2 lg:order-1 relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-slate-200 rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 text-center font-clashSemiBold lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="order-1 lg:order-2 relative w-full flex flex-col lg:flex-row justify-center items-center dark:bg-purple-700  bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl font-clashSemiBold mb-4">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
                <section className="relative w-full flex flex-col lg:flex-row justify-center items-center dark:bg-purple-700  bg-[#ff5556] px-4 py-8 text-white rounded-lg">
                    <div className="text-center lg:text-left">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl font-clashSemiBold mb-4">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
                <section className="relative w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200 p-8 text-black bg-slate-200 rounded-lg">
                        <h2 className="capitalize font-bold text-xl lg:text-3xl mb-4 font-clashSemiBold text-center lg:text-left">Eligendi deserunt deleniti ducimus voluptate commodi nam?</h2>
                        <p className="text-sm lg:text-base text-center lg:text-left font-clashMedium tracking-wider">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores autem alias dolorum ipsa tenetur recusandae officiis veritatis illum,
                        </p>
                    </div>
                </section>
            </div>

            <span className="relative mx-auto ">
                <Image src={Spray} alt="PlayStore APP" className="dark:hidden block  absolute -z-10 lg:-top-16 -top-8 -left-36 lg:-left-60 w-[70%] lg:w-[50%]" />
                <span className="rounded-full blur-3xl bg-purple-600 dark:block hidden absolute -z-10 lg:top-16 top-8 -left-36 lg:-left-24 w-[17rem] h-[17rem] " ></span>
                <Image src={PlayStore} alt="PlayStore APP" className="mt-24 lg:mt-28" />
            </span>
        </motion.div>
    );
}
