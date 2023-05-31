import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import hamburguer3 from '../assets/hamburguers/hamburguer01 (1).png'
import hamburguer4 from '../assets/hamburguers/pngwing.com (2).png'
import hamburguer5 from '../assets/hamburguers/pngwing.com.png'
import hotburguer from '../assets/_2102393221184.png'
import cocaLata from '../assets/bebidas/cocaLata.png'
import fantaLata from '../assets/bebidas/fanta_lata.png'
import pepsiLata from '../assets/bebidas/pepsiLata.png'
import cocaZeroLata from '../assets/bebidas/pepsiLata.png'
import spriteLata from '../assets/bebidas/spriteLata.png'
import fantaUvaLata from '../assets/bebidas/fanta_uva_lata.png'
import coca2l from '../assets/bebidas/coca2l.png'
import pepsi2l from '../assets/bebidas/pepsi2L.png'
import guarana2l from '../assets/bebidas/guarana_antartica2L.png'

export const haburguersDescription = [
    { id: 1, name: "CK SMASHBURGUER", Image: hamburguer3, description: "Pão, hamburguer, queijo, cebola, maionese da casa.", price: 'R$:29,90' },
    { id: 2, name: "CK SMASHBURGUER SALADA", Image: hamburguer4, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 3, name: "CK SMASHBURGUER BACON", Image: hamburguer5, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 4, name: "CK SMASHBURGUER CHEDDAR", Image: hamburguer3, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 5, name: "CK SMASHBURGUER PICANHA", Image: hamburguer4, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 6, name: "CK SMASHBURGUER COSTELA", Image: hamburguer5, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 7, name: "CK SMASHBURGUER COSTELA", Image: hamburguer3, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
    { id: 8, name: "CK SMASHBURGUER COSTELA", Image: hamburguer4, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", price: 'R$:29,90' },
]

export const drinks = [
    { id: 1, name: "Coca Cola", Image: cocaLata, description: "Refrigerante Coca Cola lata de 390ml.", price: 'R$ 5,90' },
    { id: 2, name: "Coca Cola zero", Image: cocaZeroLata, description: " Refrigerante Coca Cola zero lata de 390ml.", price: 'R$ 5,90' },
    { id: 3, name: "Fanta laranja", Image: fantaLata, description: "Refrigerante Fanta laranja lata de 390ml.", price: 'R$ 5,90' },
    { id: 4, name: "Pepsi", Image: pepsiLata, description: " Refrigerante Pepsi lata de 390ml.", price: 'R$ 5,90' },
    { id: 5, name: "Sprite", Image: spriteLata, description: "Refrigerante Sprite lata de 390ml.", price: 'R$ 5,90' },
    { id: 6, name: "Fanta uva", Image: fantaUvaLata, description: "Refrigerante Fanta uva lata de 390ml.", price: 'R$ 5,90' },
    { id: 7, name: "Coca Cola", Image: coca2l, description: "Refrigerante Coca Cola 2 litros.", price: 'R$ 13,90' },
    { id: 8, name: "Pepsi", Image: pepsi2l, description: "Refrigerante Pepsi 2 litros.", price: 'R$ 13,90' },
    { id: 9, name: "Guarana Antartica", Image: guarana2l, description: "Refrigerante Guarana Aantartica 2 litros", price: 'R$ 13,90' }
]

export const socialsMedias = [
    { id: 1, name: 'instagran', icon: <FaInstagramSquare />, link: "https://instagram.com/ckbur_guer?igshid=NGExMmI2YTkyZg==" },
    { id: 2, name: 'facebook', icon: <FaFacebookSquare />, link: "https://www.facebook.com/profile.php?id=100092350002613&mibextid=ZbWKwL" },
    { id: 3, name: 'whatsApp', icon: <FaWhatsappSquare />, link: "https://wa.me/message/3GSC2U3NUFSHA1" }
]