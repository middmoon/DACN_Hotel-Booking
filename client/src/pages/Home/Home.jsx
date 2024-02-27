import Navbar from "../../components/navbar/navBar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/propertyList"
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
                <h1 className="homeTitle">Explore Vietnam</h1>
                <p className="homeDecrip">These popular destinations have a lot to offer</p>
                </div>
                <PropertyList />
            </div>
        </div>
    )
}

export default Home