import { Product } from '../models';

const generateRandomPrice = (
  min: number,
  max: number,
  decimalPlaces: number = 2
): number => {
  const randomPrice = Math.random() * (max - min) + min;
  return parseFloat(randomPrice.toFixed(decimalPlaces));
};

const generarUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const listOfFakeProducts: Product[] = [
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  },
  {
    id: generarUUID(),
    amount: 0,
    price: generateRandomPrice(10, 200),
    name: 'product',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique ad. Atque dignissimos dicta modi molestias vel quasi architecto, molestiae accusamus cupiditate est, officiis quidem voluptatem exercitationem iste ad neque?',
    urlImage:
      'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
  },
];

