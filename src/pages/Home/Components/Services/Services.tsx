import React from 'react';
import './Sercives.scss';

const Services: React.FC = () => {
    return (
        <div>
            <section className='py-10'>
                <h1 className='flex justify-center heading__color mb-8'>Services</h1>

                <div className="max-w-screen-xl mx-auto md:px-8 grid md:grid-cols-2 gap-12">
                    {/* Left Column - Service Cards */}
                    <div className="bg-gradient-to-b from-[#3B82F6] to-[#4338CA] rounded-3xl p-8 space-y-6">
                        <div className="bg-white rounded-2xl p-6">
                            <div className="flex items-start gap-12">
                                <div className="text-3xl font-bold">
                                    <span className="text-pink-500">UI</span>
                                    <br />
                                    <span className="text-blue-500">UX</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
                                    <p className="text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                            <div className="flex gap-12">
                                {/* TODO: fix the circle */}
                                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
                                    .DEV
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                                    <p className="text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Development Description */}
                    <div className="space-y-6">
                        <h3 className="text-5xl font-bold text-[#0891B2]">Development</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            </p>
                            <p>
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>
                        <button className="rounded-full">
                            Resume
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services