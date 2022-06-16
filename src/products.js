const PRODUCTS = [
    {
      name: 'apple',
      pluralName: 'apples',
      image: 'images/apple.png',
      priceText: '$0.25 each',
  
      price: (quantity) => {
        return quantity * 25;
      }
    },
    {
      name: 'banana',
      pluralName: 'bananas',
      image: 'images/banana.png',
      priceText: '$0.15 each',
      price: (quantity) => {
        return quantity * 15;
      }
    },
    {
      name: 'orange',
      pluralName: 'oranges',
      image: 'images/orange.png',
      priceText: '$0.30 each',
      price: (quantity) => {
        return quantity * 30;
      }
    },
    {
      name: 'papaya',
      pluralName: 'papayas',
      image: 'images/papaya.png',
      priceText: '$0.50 each',
      dealText: '3 for $1',
      price: (quantity) => {
        let odds = quantity % 3;
        return (((quantity - odds)/3) * 100) + (odds * 50);
      }
    },
    {
      name: 'pomegranate',
      pluralName: 'pomegranates',
      image: 'images/pomegranate.png',
      priceText: '$0.65 each',
      name: 'kiwi',
      pluralName: 'kiwis',
      image: 'images/kiwi.jpeg',
      priceText: '$0.50 each',
      dealText: '3 for $1',
      price: (quantity) => {
        let odds = quantity % 3;
        return (((quantity - odds)/3) * 100) + (odds * 50);
      }
    },
    {
      name: 'melon',
      pluralName: 'melons',
      image: 'images/melon.jpg',
      priceText: '$0.95 each',
      price: (quantity) => {
        return quantity * 65;
      }
    },
  ];

  export const products = PRODUCTS ;