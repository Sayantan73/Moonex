import React from 'react'

export const Footer = () => {
    return (
        <div>
            <div id="footer" className="w-full mt-24 bg-[#051422] p-6 font-raleway">
                <div className="w-[90%] flex justify-between items-center p-4 mx-auto py-14">
                    <img src="/footer.png" alt="" className="size-28 md:size-40" />
                    <div className="hidden md:flex font-extrabold text-lg gap-20">
                        <a href="#about" className="scale-up">About Us</a>
                        <a href="#" className="scale-up">Roadmap</a>
                        <a href="#faq" className="scale-up">FAQs</a>
                        <a href="#footer" className="scale-up">Contact Us</a>
                    </div>
                    <div className="flex flex-col justify-start items-center h-full">
                        <p className="text-xl md:text-3xl font-bold">Contact <span className="text-yellow">Us</span></p>
                        <div className="flex justify-between items-center gap-6 mt-4">
                            <img src="/telegram.png" className="cursor-pointer size-4 md:size-6" alt="" />
                            <img src="/reddit.png" className="cursor-pointer size-4 md:size-6" alt="" />
                            <img src="/twitter.png" className="cursor-pointer size-4 md:size-6" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
