import React from "react";
// Import Components
// Import Components
// =======================
// Import Custom Style
// Import Custom Style
// =======================
// Import Icons & Fonts
// Import Icons & Fonts
// =======================
// Import Logo & Images
import Mainlogo from '../../Image/Layer 2.png';
// Import Logo & Images
// =======================
function TopNavBar() {
    return (
        <div className="topnavbar-sty">
            <div className="mainlogo-sty">
                <div className="mainimg-sty">
                    <a href="/"><img src={Mainlogo} /></a>
                </div>
                <div className="mainlogo-text-sty"> اطلس پمپ تبریز</div>
            </div>
            <div className="right-topnavbar">
                <span className="right-topnavbar-shadow"><a href="#">صفحه نخست</a></span>
                <span className="right-topnavbar-shadow"><a href="#">درباره ما</a></span>
                <span className="right-topnavbar-shadow"><a href="#">خدمات ما</a></span>
                <span className="right-topnavbar-shadow"><a href="#">فروشگاه</a></span>
                <span className="right-topnavbar-shadow"><a href="#">تماس با ما</a></span>
                <span>|</span>
                <span className="right-topnavbar-shadow"><a href="#">فعال سازی گارانتی</a></span>
                <span className="right-topnavbar-shadow"><a href="#">دریافت اپلیکیشن</a></span>
            </div>
            <div className="left-topnavbar">
                <button className="fa-solid fa-magnifying-glass left-topnavbar-items-sty"></button>
                <button className="fa-solid fa-user left-topnavbar-items-sty"></button>
                <button className="fa-solid fa-cart-shopping left-topnavbar-items-sty"></button>
            </div>
            <a
                className="App-link"
                href="https://particles.js.org"
                target="_blank"
                rel="noopener noreferrer"
            ></a>
            
        </div>
    );
}

export default TopNavBar;
