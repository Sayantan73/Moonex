import React from 'react'

export const Comparison = () => {
    return (
        <div id='about' className='relative'>
            <div className="absolute glow-elipse top-[270px] left-[230px] blur-[250px]"></div>
            <div className="absolute glow-elipse top-[130px] left-[1550px] blur-[200px]"></div>

            <div className="flex-col font-neuemachina items-start max-w-[90vw] mx-auto mt-32 md:mt-72">
                <div className="w-[90%] md:w-full ml-8"><p className="text-5xl font-semibold">Why <span className="text-yellow">MoonEx</span> ?</p></div>
                <div className="flex rounded-xl bg-[rgba(255,255,255,0.02)] md:backdrop-blur-xl w-full p-4 divide-x my-12 shadow-md">
                    <div className="divide-y grow">
                        <p className="text-sm md:text-3xl font-semibold text-yellow h-[89px] flex justify-center items-center px-5 py-4">Comparison</p>
                        <p className="table-content ps-3 py-4">1. Point no one this </p>
                        <p className="table-content ps-3 py-4">2. Point no two this </p>
                        <p className="table-content ps-3 py-4">3. Point no three this </p>
                        <p className="table-content ps-3 py-4">3. Point no four this </p>
                        <p className="table-content ps-3 py-4">4. Point no five this </p>
                    </div>
                    <div className="divide-y grow">
                        <p className="text-4xl font-extrabold text-yellow h-[89px] flex justify-center items-center py-4"><img src="/smallLogo.png" alt="" className="" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/check_bold.png" alt="" className="size-6 md:size-10" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/check_bold.png" alt="" className="size-6 md:size-10" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/check_bold.png" alt="" className="size-6 md:size-10" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/check_bold.png" alt="" className="size-6 md:size-10" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/check_bold.png" alt="" className="size-6 md:size-10" /></p>
                    </div>
                    <div className="divide-y grow">
                        <p className="text-4xl font-semibold text-yellow h-[89px] flex justify-center items-center pl-1 py-4"><img src="/logo2.png" alt="" className='' /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/close_small.png" alt="" className="size-10 md:size-14" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/close_small.png" alt="" className="size-10 md:size-14" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/close_small.png" alt="" className="size-10 md:size-14" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/close_small.png" alt="" className="size-10 md:size-14" /></p>
                        <p className="flex justify-center items-center h-[79px] py-4"><img src="/close_small.png" alt="" className="size-10 md:size-14" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
