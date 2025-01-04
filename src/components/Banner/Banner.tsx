import React from 'react';
import './Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className=" banner w-full bg-primary overflow-hidden py-4">
            {/* <div className="flex space-x-8 whitespace-nowrap"> */}
            <div className='flex space-x-8 whitespace-nowrap animate-scroll'>
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
            </div>
            <div className="flex space-x-8 whitespace-nowrap animate-scroll">
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">UI/UX Design</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
                <span className="text-2xl font-bold text-primary-foreground">Web Development</span>
                <span className="text-2xl font-bold text-primary-foreground">&lt;/&gt;</span>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Banner;