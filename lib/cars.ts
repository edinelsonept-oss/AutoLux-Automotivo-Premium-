export interface CarSpecs {
  acceleration: string;
  topSpeed: string;
  power: string;
}

export interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  mileage: number;
  image: string;
  specs: CarSpecs;
}

export const CARS: Car[] = [
  {
    id: 1,
    name: "911 Turbo S",
    brand: "Porsche",
    price: 1550000,
    mileage: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/1280px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
    specs: {
      acceleration: "2.7s",
      topSpeed: "330 km/h",
      power: "650 cv"
    }
  },
  {
    id: 2,
    name: "AMG GT 63 S",
    brand: "Mercedes-Benz",
    price: 1350000,
    mileage: 1200,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/1280px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
    specs: {
      acceleration: "3.2s",
      topSpeed: "315 km/h",
      power: "639 cv"
    }
  },
  {
    id: 3,
    name: "M5 CS",
    brand: "BMW",
    price: 1200000,
    mileage: 800,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/1280px-2018_BMW_M5_Automatic_4.4.jpg",
    specs: {
      acceleration: "3.0s",
      topSpeed: "305 km/h",
      power: "635 cv"
    }
  },
  {
    id: 4,
    name: "RS e-tron GT",
    brand: "Audi",
    price: 1100000,
    mileage: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Audi_e-tron_GT_IMG_5689.jpg/1280px-Audi_e-tron_GT_IMG_5689.jpg",
    specs: {
      acceleration: "3.3s",
      topSpeed: "250 km/h",
      power: "598 cv"
    }
  },
  {
    id: 5,
    name: "F8 Tributo",
    brand: "Ferrari",
    price: 3200000,
    mileage: 2500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg/1280px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg",
    specs: {
      acceleration: "2.9s",
      topSpeed: "340 km/h",
      power: "720 cv"
    }
  },
  {
    id: 6,
    name: "Huracán EVO",
    brand: "Lamborghini",
    price: 2800000,
    mileage: 1500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2017_Lamborghini_Huracan_LP610.jpg/1280px-2017_Lamborghini_Huracan_LP610.jpg",
    specs: {
      acceleration: "2.9s",
      topSpeed: "325 km/h",
      power: "640 cv"
    }
  }
];
