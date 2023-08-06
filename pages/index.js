import Nav from "@/components/nav"
import Banner from "@/components/banner"
import About from "@/components/about"
import Services from "@/components/services"
import Team from "@/components/team"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
    return (
    <div>
        <Nav/>
        <Banner/>
        <About/>
        <Services/>
        <Team/>
        <Reviews/>
        <Contact/>
        <Footer/>
    </div>
    )
}