// sorting.js
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Easy"],
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];
 

function hikeTemplate(hike) {
    return `
    
            <div class="hike-card">
                <div class="hike-content">
                    <h2>${hike.name}</h2>
                    <p class="distance">Distance: ${hike.distance}</p>
                    <div class="hike-tags">
                        ${hike.tags.map(tagsTemplate).join("")}
                    </div>
                    <p class="description">${hike.description}</p>
                    ${difficultyTemplate(hike.difficulty)}
                </div>
            </div>
`
}

function tagsTemplate(tag){
    return`
        <button class="tags">${tag}</button>
    `
}

const hikeContainer = document.querySelector("#hike-container");

function renderHikes(hikes) {
    hikeContainer.innerHTML = hikes.map(hikeTemplate).join("");

}

function difficultyTemplate(rating){
    let html = 
    `
    
    <span class="rating"
    role="img"
    aria-label="Difficulty: ${rating} out of 5"
    >
    Difficulty:
`

for (let i = 0; i<5; i++){
    if(i < rating){
        html += '<span aria-hidden="true" class="icon-boot">🥾</span>'
    }
        else {
            html += `<span aria-hidden="true" class="icon-empty">▫️</span>`
        }

}
html += `</span>`

return html


}

const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");

function searchHikes() {
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        showRandomHike();
        return;
    }

    const matchingHikes = hikes.filter(hike =>
        hike.name.toLowerCase().includes(searchText) ||
        hike.description.toLowerCase().includes(searchText) ||
        hike.tags.join(" ").toLowerCase().includes(searchText)
  );

  const sortedHikes = matchingHikes.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

  renderHikes(sortedHikes);
}

searchButton.addEventListener("click", searchHikes);
searchInput.addEventListener("input", searchHikes);

function showRandomHike() {
  const randomIndex = Math.floor(Math.random() * hikes.length);
  const randomHike = hikes[randomIndex];

  renderHikes([randomHike]);
}

showRandomHike();

