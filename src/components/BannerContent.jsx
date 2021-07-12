import './AboutMePageStyle.css'

import { OutlinedButton } from './Buttons'
import { BannerImage } from './BannerImage'

export function BannerContent () {
    return <div className="
    px-6
    py-6
    w-full
    h-full
    xl:px-32
    lg:grid
    lg:grid-cols-2
    ">
        <div className="
            flex 
            h-full 
            flex-col 
            justify-center             
            lg:col-span-1
            ">

            <p className="text-xl font-medium md:text-2xl text-white-60" data-aos="fade-right" data-aos-duration="1000">Bonjour,</p>
            <h1 className="text-5xl pt-3 xl:text-7xl md:text-7xl font-semibold text-amber-500" data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">Je suis Titosy</h1>
            <h3 className="text-xl xl:text-3xl pt-5 md:text-2xl font-medium text-white-60 max-w-sm 2xl:max-w-2xl" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000">Designer et développeur mobile</h3>
            <OutlinedButton text="Contactez-moi" />  
        </div>
        <BannerImage />
    </div>
}
