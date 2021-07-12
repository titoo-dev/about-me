import './AboutMePageStyle.css'
import me from './../assets/images/me.png'

export function BannerImage () {
    return <div className="
        hidden
        lg:flex 
        lg:items-center
        lg:col-span-1" data-aos="fade-up-left" data-aos-delay="2000" data-aos-duration="700">
        <img className="block w-full max-w-3xl image-size shadow-2xl rounded-xl object-cover object-center" src={me} alt="me"/>
    </div>
}