import './AboutMePageStyle.css'


import { Navbar } from './Navbar'
import { BannerContent } from './BannerContent'


export function Banner ()  {
    return <div className="
        flex 
        flex-col 
        banner-height 
        max-w-lg
        mx-auto
        xl:max-w-full
        lg:max-w-6xl
        md:max-w-3xl
        bg-black-87
        ">
        <Navbar />    
        <BannerContent />
            {/* <div className="lg:col-span-7 h-full"></div> */}
            {/* <div className="lg:col-span-5 h-full lg:bg-amber-500"></div> */}
                
    </div>
}
