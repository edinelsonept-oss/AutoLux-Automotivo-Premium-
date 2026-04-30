const https = require('https');

const imageIds = [
  "1503376712349-a1c259fd7ce6", // Porsche
  "1618843479313-40f8afb4b4d8", // Mercedes? 404'd before
  "1617531653332-bd46c24f2068", // Mercedes AMGT GT
  "1558981420-c532902e58b4", // BMW? 404'd before
  "1556189250-581ba1782250", // BMW
  "1603386329225-868f9b1ee6c9", // Audi
  "1583121274602-3e2820c69888", // Ferrari? 404'd before
  "1592198084033-aade902d1aae", // Ferrari
  "1580273916550-e323be2ae537", // Lambo? 404'd before
  "1544833058-e70f66b0439f", // Lambo 404
  "1621007947382-d896fd2a23eb", // Lamborghini
];

async function checkIds() {
  for (const id of imageIds) {
    const url = `https://images.unsplash.com/photo-${id}`;
    https.get(url, (res) => {
      console.log(`${id}: ${res.statusCode}`);
    }).on('error', (e) => {
      console.log(`${id}: ${e.message}`);
    });
  }
}

checkIds();
