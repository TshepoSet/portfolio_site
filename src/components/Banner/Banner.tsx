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

// const Banner: React.FC = () => {
//     return (
//         <div className="logos">
//             <div className="logos-slide">
//                 <img src="src/assets/img/3m.svg" />
//                 <img src="src/assets/img/barstool-store.svg" />
//                 <img src="src/assets/img/budweiser.svg" />
//                 <img src="src/assets/img/buzzfeed.svg" />
//                 <img src="src/assets/img/forbes.svg" />
//                 <img src="src/assets/img/macys.svg" />
//                 <img src="src/assets/img/menshealth.svg" />
//                 <img src="src/assets/img/mrbeast.svg" />
//             </div>

//             <div className="logos-slide">
//                 <img src="src/assets/img/3m.svg" />
//                 <img src="src/assets/img/barstool-store.svg" />
//                 <img src="src/assets/img/budweiser.svg" />
//                 <img src="src/assets/img/buzzfeed.svg" />
//                 <img src="src/assets/img/forbes.svg" />
//                 <img src="src/assets/img/macys.svg" />
//                 <img src="src/assets/img/menshealth.svg" />
//                 <img src="src/assets/img/mrbeast.svg" />
//             </div>
//         </div>
//     )
// };

export default Banner;