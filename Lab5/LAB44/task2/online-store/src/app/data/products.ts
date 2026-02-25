import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Наушники QCY Crossky Link T22 черный',
    description: 'Беспроводные наушники для повседневного использования. Подходят для звонков и музыки, удобная посадка.',
    price: 13990,
    rating: 4.7,
    images: [
      'assets/images/1_1.jpg',
      'assets/images/1_2.jpg',
      'assets/images/1_3.jpg',
      'assets/images/1_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/qcy-crossky-link-t22-chernyi-112329555/',
    categoryId: 3, // Headphones
    likes: 0,
  },
  {
    id: 2,
    name: 'Внешний аккумулятор Magnetic link Power Bank 5000 мАч белый',
    description: 'Компактный power bank на каждый день. Удобно брать с собой в дорогу и на учебу.',
    price: 7990,
    rating: 4.5,
    images: [
      'assets/images/2_1.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-magnetic-link-power-bank-5000-mach-belyi-101614085/',
    categoryId: 4, // Tablets (временно) или сделай отдельную категорию Accessories, но по заданию их ровно 4
    likes: 0,
  },
  {
    id: 3,
    name: 'Внешний аккумулятор Usams US-CD165 30000 мАч серый',
    description: 'Ёмкий power bank для нескольких устройств. Подходит для поездок и длительного использования.',
    price: 24990,
    rating: 4.6,
    images: [
      'assets/images/3_1.jpg',
      'assets/images/3_2.jpg',
      'assets/images/3_3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/usams-us-cd165-30000-mach-seryi-106769632/',
    categoryId: 4, // временно
    likes: 0,
  },
  {
    id: 4,
    name: 'Наушники Realme Buds Air 5 Pro бежевый',
    description: 'TWS-наушники с качественным звуком. Подходят для музыки, учёбы и звонков.',
    price: 39990,
    rating: 4.9,
    images: [
      'assets/images/4_1.jpg',
      'assets/images/4_2.jpg',
      'assets/images/4_3.jpg',
      'assets/images/4_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-realme-buds-air-5-pro-bezhevyi-115152645/',
    categoryId: 3, // Headphones
    likes: 0,
  },
  {
    id: 5,
    name: 'Внешний аккумулятор Capsule mini POWER BANK 10000 мАч черный',
    description: 'Универсальный power bank на 10000 мАч. Хватает на несколько зарядок телефона.',
    price: 9990,
    rating: 4.5,
    images: [
      'assets/images/5_1.jpg',
      'assets/images/5_2.jpg',
      'assets/images/5_3.jpg',
      'assets/images/5_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-capsule-mini-power-bank-10000-mach-chernyi-115396794/',
    categoryId: 4, // временно
    likes: 0,
  },
  {
    id: 6,
    name: 'Наушники S20 черный',
    description: 'Недорогие беспроводные наушники. Простое подключение, удобны для повседневных задач.',
    price: 5990,
    rating: 4.3,
    images: [
      'assets/images/6_1.jpg',
      'assets/images/6_2.jpg',
      'assets/images/6_3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-s20-chernyi-114727344/',
    categoryId: 3, // Headphones
    likes: 0,
  },
  {
    id: 7,
    name: 'Смартфон TP-LINK Neffos X20 32Gb черный',
    description: 'Базовый смартфон для связи и мессенджеров. Подходит для повседневного использования.',
    price: 29990,
    rating: 4.7,
    images: [
      'assets/images/7_1.jpg',
      'assets/images/7_2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/tp-link-neffos-x20-32gb-chernyi-1005096/',
    categoryId: 1, // Smartphones
    likes: 0,
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo Legion Slim 5 16APH8 16" / 16GB / SSD 1TB / DOS',
    description: 'Мощный ноутбук для игр и сложных задач. Большой экран, быстрый SSD и хорошая производительность.',
    price: 699990,
    rating: 4.8,
    images: [
      'assets/images/8_1.jpg',
      'assets/images/8_2.jpg',
      'assets/images/8_3.jpg',
      'assets/images/8_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16aph8-16-16-gb-ssd-1024-gb-dos-82y9001mrk-113140518/',
    categoryId: 2, // Laptops
    likes: 0,
  },
  {
    id: 9,
    name: 'Ноутбук ABEND TK-E157 15.6" / 16GB / SSD 512GB / Win 11 Pro',
    description: 'Универсальный ноутбук для учёбы и работы. Windows 11 Pro, SSD и 16 ГБ памяти.',
    price: 209990,
    rating: 4.4,
    images: [
      'assets/images/9_1.jpg',
      'assets/images/9_2.jpg',
      'assets/images/9_3.jpg',
      'assets/images/9_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/abend-tk-e157-15-6-16-gb-ssd-512-gb-win-11-pro-657879325-143182824/',
    categoryId: 2, // Laptops
    likes: 0,
  },
  {
    id: 10,
    name: 'Ноутбук ULTRON SMART N100 15.6" / 16GB / SSD 512GB / Win 11',
    description: 'Ноутбук для учёбы и повседневных задач. Большой экран, быстрый SSD и 16 ГБ ОЗУ.',
    price: 189990,
    rating: 4.6,
    images: [
      'assets/images/10_1.jpg',
      'assets/images/10_2.jpg',
      'assets/images/10_3.jpg',
      'assets/images/10_4.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/ultron-smart-n100-15-6-16-gb-ssd-512-gb-win-11-00330-80000-00000-aa831-136748512/',
    categoryId: 2, // Laptops
    likes: 0,
  },
    {
    id: 11,
    name: 'Смартфон Samsung Galaxy A14 4GB/64GB черный',
    description: 'Доступный смартфон для повседневных задач, соцсетей и обучения.',
    price: 69990,
    rating: 4.7,
    images: ['assets/images/11_1.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a14-4-gb-64-gb-chernyi-108176308/',
    categoryId: 1,
    likes: 0,
  },
  {
    id: 12,
    name: 'Смартфон Xiaomi Redmi 12 8GB/256GB синий',
    description: 'Популярный смартфон с хорошей камерой и батареей.',
    price: 94990,
    rating: 4.8,
    images: ['assets/images/12_1.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-8-gb-256-gb-sinii-113558943/',
    categoryId: 1,
    likes: 0,
  },
  {
    id: 13,
    name: 'Смартфон Apple iPhone 11 128GB черный',
    description: 'Надёжный iPhone для фото, видео и повседневного использования.',
    price: 219990,
    rating: 4.9,
    images: ['assets/images/13_1.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-chernyi-100692703/',
    categoryId: 1,
    likes: 0,
  },
  {
    id: 14,
    name: 'Смартфон Realme C53 6GB/128GB золотой',
    description: 'Смартфон с большим экраном и хорошей автономностью.',
    price: 79990,
    rating: 4.6,
    images: ['assets/images/14_1.jpg'],
    link: 'https://kaspi.kz/shop/p/realme-c53-6-gb-128-gb-zolotoi-114532034/',
    categoryId: 1,
    likes: 0,
  },

  {
    id: 15,
    name: 'Ноутбук HP 15s-eq2025ur 15.6" / 8GB / SSD 256GB',
    description: 'Отличный ноутбук для учебы и офиса.',
    price: 179990,
    rating: 4.6,
    images: ['assets/images/15_1.jpg'],
    link: 'https://kaspi.kz/shop/p/hp-15s-eq2025ur-15-6-8-gb-ssd-256-gb-113498888/',
    categoryId: 2,
    likes: 0,
  },
  {
    id: 16,
    name: 'Ноутбук ASUS VivoBook 15 X1500EA 15.6"',
    description: 'Лёгкий и удобный ноутбук для повседневных задач.',
    price: 199990,
    rating: 4.7,
    images: ['assets/images/16_1.jpg'],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1500ea-15-6-8-gb-ssd-512-gb-113346222/',
    categoryId: 2,
    likes: 0,
  },

  {
    id: 17,
    name: 'Наушники JBL Tune 510BT черный',
    description: 'Популярные Bluetooth наушники с чистым звуком.',
    price: 24990,
    rating: 4.8,
    images: ['assets/images/17_1.jpg'],
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-100473729/',
    categoryId: 3,
    likes: 0,
  },
  {
    id: 18,
    name: 'Наушники Apple AirPods 2 белый',
    description: 'Классические беспроводные наушники Apple.',
    price: 64990,
    rating: 4.9,
    images: ['assets/images/18_1.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-airpods-2-belyi-100456501/',
    categoryId: 3,
    likes: 0,
  },

  {
    id: 19,
    name: 'Планшет Samsung Galaxy Tab A8 10.5 64GB',
    description: 'Планшет для учебы, видео и интернета.',
    price: 129990,
    rating: 4.6,
    images: ['assets/images/19_1.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-10-5-64gb-seryi-103517532/',
    categoryId: 4,
    likes: 0,
  },
  {
    id: 20,
    name: 'Планшет Xiaomi Redmi Pad 6GB/128GB',
    description: 'Отличный планшет для просмотра фильмов и учебы.',
    price: 139990,
    rating: 4.7,
    images: ['assets/images/20_1.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-6-gb-128-gb-seryi-108509998/',
    categoryId: 4,
    likes: 0,
  }
];
;
