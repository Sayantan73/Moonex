import { Background } from '@/components/Background'
import { Comparison } from '@/components/Comparison'
import { FAQ } from '@/components/FAQ'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export const Home = () => {
    const content = [
        {
            head: "Cheapest TXS",
            desc: "Exchange popular digital currencies at the cheapest possible transaction price."
        },
        {
            head: "CerTlK",
            desc: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to."
        },
        {
            head: "No Contract Sells",
            desc: "No contract sells to fund the marketing wallets"
        },
        {
            head: "CrossDex Support",
            desc: "Exchange popular digital currencies at the cheapest possible transaction price"
        }
    ];

    const faqs = [
        {
            question: "How do I get a Referral Code?",
            answer: "You can get a referral code by clicking on the 'Get Referral Code' button on our website.",
        },
        {
            question: "Do I get rewarded in tokens or ETH when I refer buyers?",
            answer: "You can get a referral code by clicking on the 'Get Referral Code' button on our website.",
        },
        {
            question: "How do I get a Referral Code?",
            answer: "You can get a referral code by clicking on the 'Get Referral Code' button on our website.",
        },
    ]

    return (
        <div>
            <div className="bg-[#071624] text-white overflow-auto overflow-x-hidden">
            <div  className="py-11">
                <Background />
                <Navbar/>
                <Hero />
            </div>
                <Comparison />
                <Features content={content} />
                <FAQ faqs={faqs} />
                <Footer />
            </div>

        </div>
    )
}
