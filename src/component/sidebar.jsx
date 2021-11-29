/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard from '../assets/img/dashboard.png';
import chat from '../assets/img/chat.png';
import folder from '../assets/img/folder.png';
import mail from '../assets/img/mail.png';
import setting from '../assets/img/setting.png';


function Sidebar() {
    return(
        <ul className='nav flex-column border-end' width='50'>
            <li className='nav-item'><a href="#" className='nav-link active'><img src={dashboard} alt='speedometer' width='40'/></a></li>
            <li className='nav-item'><a href="#" className='nav-link'><img src={chat} alt='chat' width='40'/></a></li>
            <li className='nav-item'><a href="#" className='nav-link'><img src={folder} alt="folder" width='40' /></a></li>
            <li className='nav-item'><a href="#" className='nav-link'><img src={mail} alt="mail" width='40' /></a></li>
            <li className='nav-item'><a href="#" className='nav-link'><img src={setting} alt="setting" width='40' /></a></li>
        </ul>
    )
}

export default Sidebar;