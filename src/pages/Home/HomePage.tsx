import Services from "../Services/Services"
import Hero from "./Components/Hero/Hero"


function HomePage() {
    return (
        <div>
            <Hero />
            <div className="py-6">
                <Services />
            </div>
        </div>
    )
}


export default HomePage