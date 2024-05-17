import { memo } from "react";
import "./style.scss";
import {FaUserLarge} from 'react-icons/fa6';

const Header = () =>{   
    return (
    <div className="header__top">
        <div className="container">
        <div className="row">
            <div className="col-6">trai</div>
            <div className="col-6 header__top_right">
                <ul>
                    <li>
                        <FaUserLarge/>
                        <span>Đăng nhập</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>) 
};
export default memo(Header);