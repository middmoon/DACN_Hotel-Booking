import "./searchItem.css"

const SearchItem = () =>{
    return(
        <div className="searchItem">
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square200/198184067.webp?k=fddb8d650bf38b291a9a04d827673bf6a62ee28797e70b07aa2443dfd70871c3&o=" 
            alt="" 
            className="siImg" 
            />
            <div className="siDesc">
            <h1 className="siTitle">LENS HOTEL</h1>
            <span className="siDistrict">DaLat</span>
            <span className="siDistance">0,6km from center</span>
            <span className="siSubtitle">Tọa lạc ở Đà Lạt, cách Sân golf Dalat Palace Golf Club 1.7 km, Len's Hotel cung cấp chỗ nghỉ có phòng chờ chung, chỗ đậu xe riêng miễn phí, sân hiên và nhà hàng.</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>9.0</button>
                </div>
                <div className="siDetailTexts">
                    
                    <button className="siCheckButton">See availabitity</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem