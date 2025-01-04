import Banner from "../Banner/Banner"


function Hero() {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 overflow-hidden md:px-8 md:flex">
                    <div className='flex-none space-y-5 max-w-xl pt-28 '>
                        <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                            Empowering Your Digital Future
                        </h1>
                        <p>
                            I am is a skilled web developer, turning ideas into seamless, high-performance websites. Using the latest technologies, I create responsive, user-friendly digital experiences
                        </p>
                        <button>Get in touch</button>
                    </div>
                    <div className='flex-1 hidden md:block '>
                        <img src="src\assets\img\rb_3863.png" className="max-w-none w-[700px] h-auto" />
                    </div>
                </div>
                <Banner />
            </section>
        </div>
    )

}

export default Hero