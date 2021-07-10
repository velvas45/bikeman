import Img1 from '../../assets/images/Sepeda-Gunung-Polygon-COLLOSUS-DH9-TEAM-2019.jpg'
import Img2 from '../../assets/images/Sepeda-Gunung-Polygon-XQUARONE-EX8-2019.jpg'
import Img3 from '../../assets/images/Sepeda-Gunung-Polygon-XQUARONE-EX9-2019.jpg'
import Img4 from '../../assets/images/Sepeda-Gunung-Polygon-XQUARONE-EX9-SHIMANO-XTR.jpg'
import Img5 from '../../assets/images/Sepeda-Gunung-Polygon-XQUARONE-EX9-SRAM-XX1.jpg'


const DUMMY_DATA = [
    {
        id: '1',
        nama: 'Polygon Xquarone Ex9',
        merk: "Polygon",
        harga: '102000000',
        imagePath: Img3,
        description: {
            rangka: "180MM TRAVEL, BOOST, NAILD R3ACT 2PLAY SUSPENSION ACX",
            fork: `180MM (27.5") TRAVEL, BOOST 15X110MM, FOX FACTORY 36 FLOAT`,
            suspensi: "FOX FACTORY FLOAT X2 E2E:230X65MM",
            Handlebars : "BB:35MM, R:20MM, RACE FACE NEXT R 35; CARBON, W:780MM"
        },
        isProductStock: true,
    },
    {
        id: '2',
        nama: 'XQUARONE EX9 SRAM XX1',
        merk: "Polygon",
        harga: '102000000',
        imagePath: Img5,
        description: {
            rangka: "180MM TRAVEL, BOOST, NAILD R3ACT 2PLAY SUSPENSION ACX",
            fork: `180MM (27.5") TRAVEL, BOOST 15X110MM, FOX FACTORY 36 FLOAT`,
            suspensi: "FOX FACTORY FLOAT X2 E2E:230X65MM",
            Handlebars : "BB:35MM, R:20MM, RACE FACE NEXT R 35; CARBON, W:780MM"
        },
        isProductStock: true,
        
    },
    {
        id: '3',
        nama: 'Collosus DH9 Team Edition 2019',
        merk: "Polygon",
        harga: '100000000',
        imagePath: Img1,
        description: {
            rangka: "180MM TRAVEL, BOOST, NAILD R3ACT 2PLAY SUSPENSION ACX",
            fork: `180MM (27.5") TRAVEL, BOOST 15X110MM, FOX FACTORY 36 FLOAT`,
            suspensi: "FOX FACTORY FLOAT X2 E2E:230X65MM",
            Handlebars : "BB:35MM, R:20MM, RACE FACE NEXT R 35; CARBON, W:780MM"
        },
        isProductStock: true,
    },
    {
        id: '4',
        nama: 'XQUARONE EX9 Shimano XTR',
        merk: "Polygon",
        harga: '93000000',
        imagePath: Img4,
        description: null,
        isProductStock: false,
    },
    {
        id: '5',
        nama: '	Xquarone EX8 2019',
        merk: "Polygon",
        harga: '82000000',
        imagePath: Img2,
        description: null,
        isProductStock: false,
    }
]

  
// export function getFilteredEvents(dateFilter) {
// const { year, month } = dateFilter;

// let filteredEvents = DUMMY_EVENTS.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//     eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
// });

// return filteredEvents;
// }
  
function getProductById(id) {
    return DUMMY_DATA.find((product) => product.id === id);
}

function getProductBesidesId(id){
    return DUMMY_DATA.filter((product) => product.id !== id);
}

export {DUMMY_DATA, getProductById, getProductBesidesId}