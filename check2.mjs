import fs from 'node:fs';

const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Porsche_992_Turbo_S_1X7A6263.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/2021_BMW_M5_Competition_front.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Mercedes-AMG_GT_63_S_4MATIC%2B_E_Performance_IAA_2021_1X7A0068.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/60/Audi_e-tron_GT_IAA_2021_1X7A0168.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Lamborghini_Huracan_Evo_at_Salon_Prive_2020_01.jpg",
];

async function check() {
  for (const url of urls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      console.log(response.status + " " + url);
    } catch (e) {
      console.log("Error: " + e.message + " " + url);
    }
  }
}

check();
