const productos = [
    {
        id: 1, 
        title:'Pantalon Cargo Deportivo', 
        stock:20, 
        price:3.699,
        img: "../../images/products-img/pantalon1.jpg",
        category_id: 1,
        detail_id: 1,
    },
    {
        id: 2,
        title: 'Pantalon Chandal Hombre Algodon',
        stock: 10,
        price: 2.900,
        img: "../../images/products-img/pantalon2.jpg",
        category_id: 1,
        detail_id: 2,
    },
    {
        id: 3,
        title: 'Pantalones de deporte largos para hombre',
        stock: 15,
        price: 2.500,
        img: "../../images/products-img/pantalon3.jpg",
        category_id: 1,
        detail_id: 3,
    },
    {
        id: 4,
        title: 'Camiseta con dobladillo curvo para hombre',
        stock: 5,
        price: 1.500,
        img: "../../images/products-img/remera1.jpg",
        category_id: 2,
        detail_id: 4,
    },
    {
        id: 5,
        title: 'Camiseta de manga corta',
        stock: 10,
        price: 1.700,
        img: "../../images/products-img/remera3.jpg",
        category_id: 2,
        detail_id: 5,
    },
    {
        id: 6,
        title: 'Camiseta 100% Algodon',
        stock: 3,
        price: 1.300,
        img: "../../images/products-img/remera2.jpg",
        category_id: 2,
        detail_id: 6,
    },
    {
        id: 7,
        title: 'Chaqueta de Bombardero Militar de Algodón Casual para Hombre de Invierno Cortavientos',
        stock: 30,
        price: 12.000,
        img: "../../images/products-img/campera1.jpg",
        category_id: 3,
        detail_id: 7,
    },
    {
        id: 8,
        title: 'Hombres Chaqueta Cuero Sintético Transición Acanalada Moda Casuales Algodón Jacket',
        stock: 10,
        price: 15.000,
        img: "../../images/products-img/campera2.jpg",
        category_id: 3,
        detail_id: 8,
    },
    {
        id: 9,
        title: 'Chaqueta de Piel Sintética para Hombre Abrigo Cálido Antiviento',
        stock: 5,
        price: 14.000,
        img: "../../images/products-img/campera3.jpg",
        category_id: 3,
        detail_id: 9,
    },
    {
        id: 10,
        title: 'Reloj Impermeable para Hombres Relojes Deportivo de Cuarzo',
        stock: 20,
        price: 8.000,
        img: "../../images/products-img/reloj1.jpg",
        category_id: 4,
        detail_id: 10,
    },
    {
        id: 11,
        title: 'Reloj Impermeable para Hombres Relojes Deportivo de Cuarzo Analógico',
        stock: 7,
        price: 5.000,
        img: "../../images/products-img/reloj2.jpg",
        category_id: 4,
        detail_id: 11,
    },
    {
        id: 12,
        title: 'Reloj de Pulsera clásico para Hombres Estuche Ultra Fino Minimalista',
        stock: 6,
        price: 7.000,
        img: "../../images/products-img/reloj3.jpg",
        category_id: 4,
        detail_id: 12,
    },
]




export const traerProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 3000)
})