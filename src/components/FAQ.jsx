import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = ({ faqs }) => {
  return (
    <div className="relative">
      <div className="absolute glow-elipse top-[158px] left-[-350px] blur-[230px]"></div>
      <div className="absolute glow-elipse top-[-80px] left-[1400px] blur-[230px]"></div>

      <div className="m-44 w-[90%] md:w-[1100px] mx-auto bg-[rgba(255,255,255,0.02)] backdrop-blur-xl py-7 rounded-xl pb-14">
        <div className="text-5xl font-bold text-center text-yellow font-neuemachina">FAQs</div>

        <div className="mt-10 border-t border-[#333]">
          <Accordion type="single" collapsible>

            {
              faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#333] px-10 md:px-20 py-4">
                  <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))
            }

          </Accordion>
        </div>

      </div>
    </div>

  )
}
