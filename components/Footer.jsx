import  logo from "public/logo-dark.png"
import { footerLinks, socialMedia } from "@/constants/data"
import Image from "next/image"
import Subscribe from "./Subscribe"

const Footer = () => (
  <section className={`flex justify-center items-center sm:py-10 py-6 flex-col px-10 bg-primary`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full md:gap-20`}>
      <div className="flex flex-col justify-start mr-10">
        <Image src={logo} alt="hoobank" className="w-[145px] object-contain" />
        <p className={`font-normal text-slate-200 text-lg leading-[30.8px] mt-4 max-w-[310px]`}>Collaboration platform for mordern team </p>
      </div>

      <div className="flex-[1.5] w-[full] flex flex-row flex-wrap md:mt-0 mt-10 md:gap-20">
        {footerLinks.map(footerLink => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-medium text-lg leading-[27px] text-[#5468E7]">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-normal text-md leading-[24px] text-slate-200 hover:text-white cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : ''} mb-0`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="mb-4 font-medium text-lg leading-[27px] text-[#5468E7]">Stay Up to Date</h4>
          <p className="font-normal text-md leading-[24px] text-slate-200 mb-4">Subscribe to our newseller</p>
          <Subscribe />
        </div>
      </div>
    </div>

    <div className="w-full pt-6">
      <p className="font-normal text-md text-slate-200 mt-4 leading-[27px] text-white">© Copyright Team Inc. Built by Husam Asaad
      </p>
    </div>
  </section>
)


export default Footer