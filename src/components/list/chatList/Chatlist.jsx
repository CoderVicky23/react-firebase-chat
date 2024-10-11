import { useState } from "react"
import "./chatlist.css"

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchBar">
                    <img src="/public/search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./public/minus.png" : "./public/plus.png"} alt="" className="add" onClick={() => setAddMode((prev) => !prev)}/>
            </div>
            <div className="item">
                <img src="./public/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./public/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./public/avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chatlist