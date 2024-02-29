import Navbar from "../../components/navbar/navBar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/propertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/Mail.List"
import Footer from "../../components/footer/Footer"
import Slogan from "../../components/slogan/slogan"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <div>
                <h1 className="homeTitle">Trending destinations</h1>
                <p className="homeDecrip">Most popular choices for travellers from Vietnam</p>
                </div>
                <Featured />
                <div>
                <h1 className="homeTitle">  Booking made easy</h1>
                </div>
                <Slogan />
                <div>
                <h1 className="homeTitle">Explore Vietnam</h1>
                <p className="homeDecrip">These popular destinations have a lot to offer</p>
                </div>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home