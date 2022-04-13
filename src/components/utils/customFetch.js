const products =
[{name:"Corbata", price:100, stock:10, id:1, img:'https://previews.123rf.com/images/yupiramos/yupiramos1706/yupiramos170619294/80334156-corbata-elegante-aislado-icono-de-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o.jpg', category:"Dress"},
{name:"Pantalon", price:850, stock:22, id:2, img:'https://media.istockphoto.com/vectors/pants-cartoon-vector-id1076492576', category:"Dress"},
{name:"Gorra", price:100, stock:5, id:3, img:'https://media.istockphoto.com/vectors/pants-cartoon-vector-id1076492576', category:"Accesories"},
{name:"Zapato", price:800, stock:10, id:4, img:'https://gestion.pe/resizer/CNx8YN7g4JT40BmznY5bZVWkesk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MTAKNCOMFBFB5ND7G7SMSBOKHU.jpg', category:"Zapatos"},
{name:"Camisa", price:700, stock:15, id:5, img:'https://us.123rf.com/450wm/redrockerz/redrockerz1601/redrockerz160100016/50854987-camisa-de-ilustraci%C3%B3n-de-bosquejo-del-dise%C3%B1o.jpg?ver=6', category:"Dress"},
{name:"Chaqueta", price:900, stock:8, id:6, img:'https://m.media-amazon.com/images/I/61cmifc3sLL._AC_UX342_.jpg', category:"Dress"},
{name:"Cinturon", price:200, stock:6, id:7, img:'https://media.istockphoto.com/photos/brown-leather-belt-isolated-on-white-background-picture-id454363033?k=20&m=454363033&s=612x612&w=0&h=-i3a6qqdmQUcLjJd0oJ5p1gZ7UsXK8brPuh4aFkEUSE=', category:"Accesories"},
{name:"Boina", price:250, stock:5, id:8, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/102/985/products/boina-inglesa-jaspeada-gris-costado1-55ac73c0181f09d87416185063212070-640-0.jpg', category:"Accesories"},
{name:"Musculosa", price:500, stock:10, id:9, img:'https://http2.mlstatic.com/D_NQ_NP_681574-MLA31598844640_072019-O.jpg', category:"Dress"},
{name:"Reloj", price:1500, stock:6, id:10, img:'https://m.media-amazon.com/images/I/51keW69CFpL._SL500_.jpg', category:"Accesories"},
{name:"Cadena", price:980, stock:4, id:11, img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/380/182/products/whatsapp-image-2021-04-19-at-8-39-03-pm1-c7f26f6b04e4bbf6a716188765862063-640-0.jpeg', category:"Accesories"},
{name:"Perfume", price:2500, stock:4, id:12, img:'https://farmaonline.vteximg.com.br/arquivos/ids/313633-450-450/11386.jpg?v=637746753495900000', category:"Accesories"},
{name:"Gafas", price:250, stock:5, id:13, img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621418243-411RFR8aXL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480:*', category:"Accesories"},
{name:"Billetera", price:220, stock:4, id:14, img:'https://images-na.ssl-images-amazon.com/images/I/81XC-oH-5fL._AC_UL604_SR604,400_.jpg', category:"Accesories"},
{name:"Campera", price:3500, stock:10, id:15, img:'https://scandinavian.com.ar/media/catalog/product/cache/84501bf2af75e659022a456946bd3e2c/1/8/1823161_010_f_1_2.jpg', category:"Dress"}]

const product =
[{name:"Reloj", price:1500, stock:6, id:10, img:'https://m.media-amazon.com/images/I/51keW69CFpL._SL500_.jpg', category:"Accesories"}]

export const customFetch = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout (() => {
            resolve(products);
        }, 3000);
    });
};

export const Reloj = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout (() => {
            resolve(product);
        }, 3000);
    });
};

