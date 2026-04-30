const titles = [
  "Porsche 911",
  "Mercedes-AMG GT",
  "BMW M5",
  "Audi e-tron GT",
  "Ferrari F8",
  "Lamborghini Huracán"
];

async function getImages() {
  for (const title of titles) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const pages = data.query.pages;
      const firstPage = Object.values(pages)[0];
      if (firstPage.thumbnail) {
        console.log(`Title: ${title} -> URL: ${firstPage.thumbnail.source}`);
      } else {
        console.log(`Title: ${title} -> No image found`);
      }
    } catch (e) {
      console.log(`Error for ${title}: ${e.message}`);
    }
  }
}

getImages();
