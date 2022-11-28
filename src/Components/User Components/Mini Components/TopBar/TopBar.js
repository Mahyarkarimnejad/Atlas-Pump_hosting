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
// Import Logo & Images
// =======================
function TopBar() {
    return (
        <div className="topbar-sty">
            <div className="right-topbar">
                <span className="right-topbar-shadow"><a href="#">+98 9145 896 289</a></span>
                <span>|</span>
                <span className="right-topbar-shadow"><a href="#">تماس با ما</a></span>
                <span>|</span>
                <span className="right-topbar-shadow"><a href="#">خدمات ما</a></span>
            </div>
            <div className="left-topbar">
                <button id="btnGroupDrop1" type="button" className="dropdown-toggle fa-solid fa-chevron-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <span>زبان سایت را انتخاب کنید</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#">Dropdown link</a>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
