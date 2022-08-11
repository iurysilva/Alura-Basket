import logo from "../../assets/logo.png"
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        title: "Basket details"
    },
    details: {
        name: "Vegetables basket",
        description: "A basket with carefully selected products, from the farm directly to your kitchen",
        price: "R$ 50,00",
        farmName: "Jenny Jack Farm",
        farmImage: logo,
        button: "Comprar"
    },
    items: {
       title: "Basket items",
        list: [
          {
            name: "Tomato",
            image: tomate,
          },
          {
            name: "Broccoli",
            image: brocolis,
          },
          {
            name: "Potato",
            image: batata,
          },
          {
            name: "Cucumber",
            image: pepino,
          },
          {
            name: "Pumpkin",
            image: abobora,
          }
        ]
      }
}

export default basket;