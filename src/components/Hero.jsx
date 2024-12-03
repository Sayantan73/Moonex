import React from 'react'

export const Hero = () => {
    return (
        <div>
            <div className="w-full flex-col justify-start px-[7%] mt-80 md:mt-64 relative">
                <div className="flex flex-col justify-center items-start md:w-[70%] w-[90%]">
                    <p className="font-neuemachina text-3xl md:text-7xl font-extrabold">Trusted Multi-Chain {" "}<span className="text-yellow">DEX</span> Platform</p>
                    <p className="text-[#9E9E9E] text-xl md:text-2xl font-light font-neuemachina my-4">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
                </div>
                <div className="flex md:w-[25%] w-[90%] justify-between items-center font-raleway mt-10">
                    <div className="md:rounded-full rounded-2xl px-3 py-2 md:px-6 md:py-3 gradient-yellow-white transition-all duration-300 hover:scale-110">
                        <p className="text-black text-sm font-extrabold">Connect Wallet</p>
                    </div>
                    <div className="md:rounded-full rounded-2xl px-3 py-2 md:px-6 md:py-3 transition-all duration-300 hover:scale-110 bg-none border-[#EDD955] border md:border-2">
                        <p className="text-sm text-[#EDD955] font-extrabold">Trade Crypto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
