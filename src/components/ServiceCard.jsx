export function ServiceCard ({color, children, title, text, animationDelay}) {
    return <div className={`flex flex-col justify-center bg-gradient-to-t md:mr-6 from-${color}-500 to-${color}-300 col-span-1 space-y-4 h-96 p-8 rounded-lg my-6 md:max-w-md md:h-80`}  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={animationDelay}>
        <h3 className="text-2xl font-medium text-white-60  md:text-2xl">{ title }</h3>
        <p className="text-sm font-normal text-white-52 md:text-base">{ text }</p>
    </div>
}