import p1_img from '../assets/p1.jpg'
import p2_img from '../assets/p2.jpg'
import p3_img from '../assets/p3.avif'
import p4_img from '../assets/p4.jpg'

let data_product= [
     {
            id: 1,
            name: "Dress",
            category: "women",
            image: p1_img,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Dress", category: "women", image:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "traditional Indian Anarkali suit", category: "women", image:p3_img, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "Dress", category: "women", image: p4_img, new_price: 90.0, old_price: 140.0 }
]

export default data_product;