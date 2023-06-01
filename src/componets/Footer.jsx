import logo01 from '../assets/logo01.png'
import { socialsMedias } from '../data/data'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/bs'


function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <h2><Image src={logo01} alt='logo' id='logo-01' /><span>Hamburgueria</span> CK</h2>
                <p>Siga-nos nas redes sociais e fique por dentro de todas as nossas ações</p>
                <div>
                    {
                        socialsMedias.map((media) => {
                            return (
                                <a className="social-link-icon" key={media.id} id={media.name} href={media.link}>{media.icon}</a>
                            )
                        })
                    }
                </div>
                <p className='copyright'>
                    Desenvolvido   por <small> EGAdisign &copy;2023 All Rights Reserved</small>
                </p>
                <p id='ega-design-phone'><span>{<BsWhatsapp />}</span> +551193486-7766</p>
            </div>
        </footer>
    )
}

export default Footer
