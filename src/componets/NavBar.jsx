import Link from 'next/link';
import { useState } from 'react';
import logo01 from '../assets/logo01.png'
import Image from 'next/image';
import deliveryIcon from '../assets/deliveryIcon.png'
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { BiFoodMenu } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineContacts } from 'react-icons/ai'


import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'



function NavBar() {


    const socialsMedias = [
        { id: 1, name: 'instagran', icon: <FaInstagramSquare />, link: "https://instagram.com/ckbur_guer?igshid=NGExMmI2YTkyZg==" },
        { id: 2, name: 'facebook', icon: <FaFacebookSquare />, link: "https://www.facebook.com/profile.php?id=100092350002613&mibextid=ZbWKwL" },
        { id: 3, name: 'whatsApp', icon: <FaWhatsappSquare />, link: "https://wa.me/message/3GSC2U3NUFSHA1" }
    ]
    const [isNavShowing, setIsNavShowing] = useState(true)
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <Image src={logo01} alt='logo' id='logo-01' />
            </div>
            <div className='delivery-icon-container'>
                <Image src={deliveryIcon} alt='delivery' id='delivery-icon' />
                <p><span>{<BsWhatsapp />}</span>1196376-7135</p>
            </div>
            <ul className={isNavShowing ? 'display-none' : ""}>
                <li>
                    <span className='menu-icon'>{<AiOutlineHome />}</span>
                    <Link href="/" onClick={() => setIsNavShowing(onOff => !onOff)}>Início</Link>
                </li>
                <li>
                    <span className='menu-icon'>{<BiFoodMenu />}</span>
                    <Link href="/Menu" onClick={() => setIsNavShowing(onOff => !onOff)}>Menu</Link>
                </li>

                <li>
                    <span className='menu-icon'>{<AiOutlineContacts />}</span>
                    <Link href="/Contact" onClick={() => setIsNavShowing(onOff => !onOff)}>Contato</Link>
                </li>
            </ul>
            <div className="nav-mobile" onClick={() => setIsNavShowing(onOff => !onOff)}>
                {!isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
            </div>
        </nav>
    );
}

export default NavBar
