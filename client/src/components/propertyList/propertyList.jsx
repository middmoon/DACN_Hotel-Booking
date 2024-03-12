import "./propertyList.css"
import { useNavigate } from 'react-router-dom';
const PropertyList = () => {
    // điều hướng
    // const navigate = useNavigate();
    // const handleSearch = () => {
    //     navigate("/hotels")
    // }



    return (
    
            <div id="slider" className="slide">
           
                <div className="pList">
           
        <div  className="pListItem">
            <img src="/IMG/Home/Dalat2.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Da lat</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/Vungtau.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Vung tau</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/Danang.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Da nang</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/Nhatrang.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Nha trang</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem" >
            <img src="/IMG/Home/HoChiMinh.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Ho Chi Minh City</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/Hanoi.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Ha Noi</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/hue.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hue</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/Phanthiet.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Phan Thiet</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/HoiAn.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hoi An</h1>
                <h2>1111 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="/IMG/Home/MuiNe.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Mui ne</h1>
                <h2>1111 properties</h2>
            </div>
        </div>
        </div>
      
            </div>
    )
}

export default PropertyList