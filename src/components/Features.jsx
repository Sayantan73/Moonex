import React from 'react'

export const Features = ({ content }) => {

    return (
        <div className="flex-col font-neuemachina items-start max-w-[90vw] mx-auto mt-32">
            <p className="text-5xl font-bold text-center">Our <span className="text-yellow">Features</span></p>
            <div className="w-full flex md:flex-row flex-col justify-center items-center gap-8 my-12 p-4">
                {content.map((item, index) => {
                    return (
                        <div key={index} className="flex-col items-start w-[296px] h-[296px] rounded-2xl bg-[rgba(255,255,255,0.02)] backdrop-blur-xl shadow-md border border-[rgba(255,255,255,0.05)] p-6">
                            <div className="w-[80px] h-[80px]"><img src={"/feature" + (index + 1) + ".png"}></img></div>
                            <div className="font-raleway flex-col mt-6">
                                <p className="text-2xl font-semibold">{item.head}</p>
                                <p className="text-md text-[#F0F0F0B2] mt-4">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
