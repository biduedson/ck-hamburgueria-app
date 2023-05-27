import Image from 'next/image'
import Link from 'next/link';
import { haburguersDescription, socialsMedias } from '../data/data'

function Menu() {

    return (
        <section className="menu">

            <div className='background-linear'></div>
            <h1>Menu</h1>
            <div className='bts-menu-container'>
                <button>Hamburguers</button>
                <button>Porções</button>
                <button>Bebidas</button>
            </div>
            <div className='cards-hamburguers'>
                {
                    haburguersDescription.map((description) => {
                        return (
                            <div className='card-harburguer' key={description.id} style={{
                                opacity: '0',
                                animation: ' zoomIn 1s forwards',
                                animationDelay: `${description.id}`
                            }}>
                                <p>{description.name}</p>
                                <Image src={description.Image} id='hamburguer-photo' alt='hamburguer-photo' />
                                <div className='description-burguer'>
                                    <p>{description.description}</p>
                                </div>
                                <button>{description.price}</button>
                                <div className='socials-link-menu'>
                                    {
                                        socialsMedias.map((media) => {
                                            return (
                                                <a key={media.id} id={media.name} href={media.link}>{media.icon}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Menu
