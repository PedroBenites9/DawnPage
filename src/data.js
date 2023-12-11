export const productCategories = {
  bags: "bags",
  shoes: "shoes",
};

const colors = {
  denim: {
    name: "Denim",
    id: "denim",
    hex: "#6F8FAF",
  },
  oyster: {
    name: "Oyster",
    id: "oyster",
    hex: "#D7C9B1",
  },
  white: {
    name: "White",
    id: "white",
    hex: "#FFFFFF",
  },
  buttermilk: {
    name: "Buttermilk",
    id: "buttermilk",
    hex: "#FFF6BA",
  },
  black: {
    name: "Black",
    id: "black",
    hex: "#000000",
  },
  emerald: {
    name: "Emerald",
    id: "emerald",
    hex: "#50C878",
  },
  pink: {
    name: "Pink",
    id: "pink",
    hex: "#FFD1DC",
  },
};

export const products = [
  {
    id: 0,
    name: "Art Deco",
    price: 375,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_533x.jpg?v=1624899468",
    colors: [
      colors.denim,
      colors.black,
      colors.emerald,
      colors.oyster,
      colors.white,
    ],
  },
  {
    id: 1,
    name: "Bo Ivy",
    price: 390,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_533x.jpg?v=1630363134",
    colors: [
      colors.denim,
      colors.oyster,
      colors.white,
      colors.buttermilk,
      colors.black,
    ],
    offerPrice: 292,
  },
  {
    id: 2,
    name: "Bo Soft Strap",
    price: 365,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-bo-soft-strap-brown-1_533x.jpg?v=1623767166",
    colors: [
      colors.buttermilk,
      colors.black,
      colors.emerald,
      colors.pink,
      colors.oyster,
    ],
    offerPrice: 273,
  },
  {
    id: 3,
    name: "Brick",
    price: 385,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-brick-oil-yellow-1_533x.jpg?v=1623171962",
    colors: [
      colors.black,
      colors.buttermilk,
      colors.white,
      colors.oyster,
      colors.emerald,
    ],
  },
  {
    id: 4,
    name: "Business Bag",
    price: 545,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-business-bag-black_grey-1_533x.jpg?v=1623694575",
    colors: [colors.pink, colors.black, colors.buttermilk, colors.oyster],
  },
  {
    id: 5,
    name: "Helix",
    price: 470,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-helix-multicolor-2_1800x1800_10c62242-6743-4d46-a251-defa246dd195_533x.jpg?v=1628531328",
    colors: [
      colors.pink,
      colors.oyster,
      colors.white,
      colors.denim,
      colors.buttermilk,
    ],
    offerPrice: 352,
  },
  {
    id: 6,
    name: "Hobo Large",
    price: 615,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-hobo-l-latte-n1_533x.jpg?v=1623763351",
    colors: [colors.buttermilk, colors.oyster],
  },
  {
    id: 7,
    name: "Hobo Medium",
    price: 420,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-hobo-m-latte-n1_533x.jpg?v=1623764350",
    colors: [colors.buttermilk, colors.pink, colors.oyster, colors.denim],
    offerPrice: 315,
  },
  {
    id: 8,
    name: "Hobo Small",
    price: 195,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-hobo-xs-latte-n1_533x.jpg?v=1623765482",
    colors: [colors.white, colors.oyster],
    offerPrice: 146,
  },
  {
    id: 9,
    name: "Lantern Bag",
    price: 415,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-lantern-bag-earth-1_533x.jpg?v=1623696545",
    colors: [colors.buttermilk, colors.white, colors.emerald],
    offerPrice: 311,
  },
  {
    id: 10,
    name: "Lantern Bag Pleated",
    price: 460,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-lantern-bag-pleated-mint-nn1_533x.jpg?v=1623172403",
    colors: [
      colors.emerald,
      colors.black,
      colors.buttermilk,
      colors.white,
      colors.oyster,
    ],
  },
  {
    id: 11,
    name: "Louise Slide Sandal",
    price: 430,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb_533x.jpg?v=1630382118",
    colors: [colors.pink, colors.black, colors.denim],
    offerPrice: 322,
  },
  {
    id: 12,
    name: "Mini Eddy",
    price: 375,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-mini-eddy-cappuccino-1_1b6844b8-aef5-4e42-9e64-91e61d7bd272_533x.jpg?v=1628177628",
    colors: [
      colors.buttermilk,
      colors.denim,
      colors.oyster,
      colors.pink,
      colors.emerald,
    ],
  },
  {
    id: 13,
    name: "Mini Naomi Bag",
    price: 315,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-mini-naomi-bag-harvest-1_533x.jpg?v=1627491490",
    colors: [colors.denim, colors.oyster, colors.emerald, colors.white],
  },
  {
    id: 14,
    name: "Mini Sera Tote",
    price: 365,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-mini-sera-tote-butter-1a_3ffe65b3-bf80-4051-bdc1-c4dee5a10549_533x.jpg?v=1623171415",
    colors: [colors.emerald, colors.denim, colors.pink],
    offerPrice: 273,
  },
  {
    id: 15,
    name: "Mini Woven Bag",
    price: 375,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/wl1_533x.jpg?v=1623171781",
    colors: [colors.denim, colors.oyster],
  },
  {
    id: 16,
    name: "Naomi AirPods Case",
    price: 119,
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-naomi-airpods-case-black-gray-1_533x.jpg?v=1623782209",
    colors: [
      colors.buttermilk,
      colors.pink,
      colors.white,
      colors.black,
      colors.emerald,
    ],
    offerPrice: 89,
  },
  {
    id: 17,
    name: "Naomi Bag",
    price: 525,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-naomi-milky-2_533x.jpg?v=1623767676",
    colors: [colors.pink, colors.white, colors.oyster],
  },
  {
    id: 18,
    name: "Naomi Mini Wallet",
    price: 187,
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-naomi-mini-wallet-denim-1_0126fb79-9629-48bf-a1c1-b6229f5aaa91_533x.jpg?v=1623768820",
    colors: [colors.black, colors.buttermilk],
  },
  {
    id: 19,
    name: "Otti Combat Boot",
    price: 595,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-combat-boots-milky-1_474ca228-6887-4af1-b0e3-dfdc5302517a_533x.jpg?v=1623782425",
    colors: [colors.emerald, colors.pink, colors.buttermilk, colors.white],
  },
  {
    id: 20,
    name: "Otti Summer Boot",
    price: 479,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-otti-summer-boots-black-1_f824b8a9-da57-4a23-b354-7f0fe7627e4d_533x.jpg?v=1623784378",
    colors: [colors.buttermilk, colors.pink, colors.emerald],
    offerPrice: 359,
  },
  {
    id: 21,
    name: "Pleated Heel Boot",
    price: 585,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-pleated-boots-taupe-1_e36064af-8115-43ab-9dd1-6fe2e8403890_533x.jpg?v=1623785132",
    colors: [
      colors.buttermilk,
      colors.white,
      colors.oyster,
      colors.pink,
      colors.denim,
    ],
  },
  {
    id: 22,
    name: "Pleated Heel Mule",
    price: 495,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_533x.jpg?v=1629754134",
    colors: [colors.pink, colors.denim, colors.buttermilk],
    offerPrice: 371,
  },
  {
    id: 23,
    name: "Puff",
    price: 465,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-puff-olive-leaf-1_d53c2dd6-b753-432a-85bd-373334b72994_533x.jpg?v=1623171247",
    colors: [colors.oyster, colors.denim, colors.white, colors.pink],
    offerPrice: 348,
  },
  {
    id: 24,
    name: "Puff Large",
    price: 520,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-puff-large-latte-1_cce305ff-ccd1-416f-80ea-5ec5b47740f4_533x.jpg?v=1623171280",
    colors: [colors.buttermilk, colors.oyster, colors.pink, colors.emerald],
    offerPrice: 390,
  },
  {
    id: 25,
    name: "Sera Tote",
    price: 545,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-sera-tote-butter-1_40a894e5-2624-4582-b8f1-8fbd5e46776d_533x.jpg?v=1623772237",
    colors: [
      colors.white,
      colors.black,
      colors.buttermilk,
      colors.oyster,
      colors.emerald,
    ],
    offerPrice: 408,
  },
  {
    id: 26,
    name: "Small Convertible Flex Bag",
    price: 395,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-small-convertible-flex-bag-cappuccino-n1_533x.jpg?v=1623695606",
    colors: [colors.buttermilk, colors.emerald, colors.white, colors.denim],
  },
  {
    id: 27,
    name: "Small Naomi",
    price: 485,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-small-naomi-gummy-n1_533x.jpg?v=1623768994",
    colors: [
      colors.pink,
      colors.buttermilk,
      colors.denim,
      colors.oyster,
      colors.emerald,
    ],
    offerPrice: 363,
  },
  {
    id: 28,
    name: "Stormi",
    price: 545,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-stormi-cognac-olive-leaf-1_533x.jpg?v=1623330954",
    colors: [colors.denim, colors.buttermilk, colors.pink, colors.black],
    offerPrice: 408,
  },
  {
    id: 29,
    name: "Studio Bag",
    price: 465,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_533x.jpg?v=1628177605",
    colors: [
      colors.pink,
      colors.denim,
      colors.oyster,
      colors.white,
      colors.emerald,
    ],
  },
  {
    id: 30,
    name: "Thelma Sandal",
    price: 360,
    category: "shoes",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-thelma-sandal-black-1_be0686ea-6ae9-4fff-85a6-2eacbe19ba94_533x.jpg?v=1623786378",
    colors: [colors.white, colors.emerald, colors.oyster, colors.buttermilk],
  },
  {
    id: 31,
    name: "Wave Wallet",
    price: 215,
    category: "bags",
    img: "https://cdn.shopify.com/s/files/1/0551/7626/5784/products/mlouye-wave-wallet-earth-1_533x.jpg?v=1623172347",
    colors: [colors.pink, colors.denim],
    offerPrice: 161,
  },
];

// RANDOM
/*
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}*/

// GENERAR OFERTAS
/*let result = [];

products.forEach((e) => {
  const hasOffer = randomIntFromInterval(0, 1);
  if (hasOffer === 1) {
    result.push({ ...e, offerPrice: Math.floor(e.price * 0.75) });
  } else {
    result.push(e);
  }
});

console.log(result);
*/

// Generar colores
/*
let result = [];

products.forEach(e => {
  const cantidadColores = randomIntFromInterval(2, 5);
  const shuffled = Object.keys(colors).sort(() => 0.5 - Math.random());
  const prodColors = shuffled.slice(0, cantidadColores);
  const prodFinalColors = prodColors.map((c) => colors[c]);
  result.push({...e, colors: prodFinalColors})
})

console.log(result)
*/
