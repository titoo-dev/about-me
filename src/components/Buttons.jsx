export function RaisedButton ({text}) {
    return <div className="mt-12 2xl:mt-16" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
        <a className="inline-block cursor-pointer border-2 md:text-sm border-amber-500 transition md:px-6 md:py-4 bg-amber-500 hover:text-black-56 px-4 py-3  text-white font-semibold text-xs rounded shadow-lg uppercase tracking-wider" href>{text}</a>
    </div>
}

export function OutlinedButton ({text}) {
    return <div className="mt-12 2xl:mt-16" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
        <a className="inline-block cursor-pointer transition md:text-sm hover:text-black-56 hover:bg-amber-500 md:px-6 md:py-4 px-4 py-3 border-2 border-amber-500 text-amber-500 font-semibold text-xs rounded shadow-lg uppercase tracking-wider" href>{text}</a>
    </div>
}