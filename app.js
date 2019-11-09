import React from 'react';

export default class extends React.Component{
     state = {
         products
     }
     render() {
         return(
             <div>
                <button>Products</button>
                 <button>Cards</button>
             </div>
         )
     }
}



let products = [

    {  img : './img/samsung.jpg',
        id : 100,
        name : 'samsumg',
        price : 1000,
        counter : 1

    },
    {   img : './img/nokia.jpg',
        id : 101,
        name : 'nokia',
        price : 800,
        counter : 1

    },
    {   img : './img/motorola.jpg',
        id : 103,
        name : 'motorola',
        price : 1200,
        counter : 1

    }

]

