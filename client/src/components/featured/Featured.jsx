import "./featured.css"


const Featured = () => {
    return (
    <div>
        <div className="featured">
            <div className="featuredItem">
                <img src="/IMG/Home/dalat.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Da Lat</h1>                 
                </div>
            </div>

            <div className="featuredItem">
                <img src="/IMG/Home/HoChiMinh.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>HoChiMinh City</h1>    
                </div>
            </div>
        </div>

        <div className="featured2">
        <div className="featuredItem">
                <img src="/IMG/Home/Hanoi.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Ha Noi</h1>                 
                </div>
            </div>

            <div className="featuredItem">
                <img src="/IMG/Home/Danang.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Da nang</h1>    
                </div>
            </div>
            <div className="featuredItem">
                <img src="/IMG/Home/Vungtau.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Vung tau</h1>                 
                </div>
            </div>

          
        </div>
    </div>
        
    )
}

export default Featured