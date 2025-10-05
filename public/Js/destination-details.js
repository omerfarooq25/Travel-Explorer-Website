// Destination data for each card
// Add country codes to each destination for accurate weather API calls
const DESTINATIONS = {
  Paris: {
    title: "Paris, France",
    countryCode: "FR",
    images: [
      "https://plus.unsplash.com/premium_photo-1664297932771-0d588ec76e4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `Paris, the City of Lights, is renowned for its romantic ambiance, world-class art, and exquisite cuisine. Wander through charming streets, marvel at iconic landmarks, and immerse yourself in a vibrant culture that blends history and modernity.<br><br><strong>Culture:</strong> Parisian culture is a blend of elegance, intellectualism, and creativity. The city is famous for its café culture, fashion, literature, and art. Locals value good conversation, fine food, and the arts.<br><strong>What makes it special:</strong> Paris is the birthplace of haute couture, impressionist art, and the café society. Its museums, galleries, and theaters are world-renowned.<br><br><strong>Best time to visit:</strong> April to June and September to November, when the weather is mild and the city is less crowded.<br><strong>Main attractions:</strong> Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Montmartre, Seine River cruises, and charming cafés.<br><strong>Why visit:</strong> Experience breathtaking architecture, indulge in gourmet food, shop at chic boutiques, and enjoy lively festivals year-round.`,
    weather: "Weather: 18°C, Clear Sky",
    pricing:
      "Average trip cost: $1,500 (includes flights, accommodation, and meals for 5 days)",
    priceUSD: 1500,
    travel: "International flights, Metro, Buses, Trains, Taxis",
  },
  Tokyo: {
    title: "Tokyo, Japan",
    countryCode: "JP",
    images: [
      "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `Tokyo is a vibrant metropolis blending tradition and technology. Explore cherry blossoms, neon-lit streets, and ancient temples.<br><br><strong>Culture:</strong> Tokyo's culture is a fascinating mix of ancient traditions and cutting-edge innovation. Experience tea ceremonies, sumo wrestling, anime, and a deep respect for etiquette.<br><strong>What makes it special:</strong> Tokyo is the heart of Japanese pop culture, technology, and cuisine. The city is famous for its punctual trains, themed cafés, and vibrant festivals.<br><br><strong>Best time to visit:</strong> March to May (cherry blossom season) and October to November.<br><strong>Main attractions:</strong> Sensoji Temple, Shibuya Crossing, Tokyo Tower, Tsukiji Market, Akihabara.<br><strong>Why visit:</strong> Experience futuristic cityscapes, unique pop culture, and world-class cuisine.`,
    weather: "Weather: 22°C, Partly Cloudy",
    pricing: "Average trip cost: $1,800 (5 days)",
    priceUSD: 1800,
    travel: "International flights, Metro, Trains, Buses, Taxis",
  },
  NewYork: {
    title: "New York, USA",
    countryCode: "US",
    images: [
      "https://plus.unsplash.com/premium_photo-1694475364942-b755ad751a40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxuZXclMjB5b3JrJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `The city that never sleeps. Iconic for Times Square, Central Park, and world-class entertainment.<br><br><strong>Culture:</strong> New York is a melting pot of cultures, languages, and cuisines. The city is known for its fast pace, diversity, and creative energy. Broadway, jazz, and street art thrive here.<br><strong>What makes it special:</strong> NYC is the epicenter of finance, fashion, and the arts. Its skyline, food scene, and neighborhoods are legendary.<br><br><strong>Best time to visit:</strong> April to June, September to early November.<br><strong>Main attractions:</strong> Statue of Liberty, Central Park, Times Square, Broadway, Empire State Building.<br><strong>Why visit:</strong> Diverse culture, food, shopping, and endless things to do.`,
    weather: "Weather: 20°C, Sunny",
    pricing: "Average trip cost: $2,000 (5 days)",
    priceUSD: 2000,
    travel: "International flights, Subway, Buses, Taxis",
  },
  Sydney: {
    title: "Sydney, Australia",
    countryCode: "AU",
    images: [
      "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `Home to the Sydney Opera House and beautiful beaches. Enjoy surfing and vibrant city life.<br><br><strong>Culture:</strong> Sydney's culture is relaxed, outdoorsy, and multicultural. Locals love sports, the beach, and a good barbecue. The city hosts many festivals and art events.<br><strong>What makes it special:</strong> Sydney is famous for its harbor, surf culture, and friendly vibe. Its natural beauty and cosmopolitan lifestyle attract visitors worldwide.<br><br><strong>Best time to visit:</strong> September to November, March to May.<br><strong>Main attractions:</strong> Opera House, Harbour Bridge, Bondi Beach, Taronga Zoo.<br><strong>Why visit:</strong> Outdoor adventures, iconic landmarks, and laid-back lifestyle.`,
    weather: "Weather: 25°C, Sunny",
    pricing: "Average trip cost: $2,200 (5 days)",
    priceUSD: 2200,
    travel: "International flights, Trains, Ferries, Buses, Taxis",
  },
  CapeTown: {
    title: "Cape Town, South Africa",
    countryCode: "ZA",
    images: [
      "https://plus.unsplash.com/premium_photo-1697729775179-f9926eab0b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZSUyMHRvd24lMjB0YWJsZSUyMG1vdW50YWlufGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `A stunning coastal city with Table Mountain views and rich cultural heritage.<br><br><strong>Culture:</strong> Cape Town is a blend of African, European, and Asian influences. The city is known for its music, art, and vibrant township life. Local cuisine features seafood, braai (barbecue), and Cape Malay dishes.<br><strong>What makes it special:</strong> Cape Town's landscapes, biodiversity, and history are unique. It's a gateway to wine country and wildlife adventures.<br><br><strong>Best time to visit:</strong> March to May, September to November.<br><strong>Main attractions:</strong> Table Mountain, Robben Island, V&A Waterfront, Cape Point.<br><strong>Why visit:</strong> Scenic beauty, adventure sports, and diverse culture.`,
    weather: "Weather: 19°C, Windy",
    pricing: "Average trip cost: $1,700 (5 days)",
    priceUSD: 1700,
    travel: "International flights, Buses, Taxis, Car rentals",
  },
  Rio: {
    title: "Rio de Janeiro, Brazil",
    countryCode: "BR",
    images: [
      "https://images.unsplash.com/photo-1637600101556-6c149e6919a9?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `Famous for Carnival, Christ the Redeemer, and lively beaches like Copacabana.<br><br><strong>Culture:</strong> Rio's culture is colorful, musical, and full of life. Samba, bossa nova, and Carnival are at its heart. Locals (Cariocas) are known for their warmth and love of celebration.<br><strong>What makes it special:</strong> Rio's natural setting, music, and festive spirit are unmatched. The city pulses with energy and joy.<br><br><strong>Best time to visit:</strong> December to March.<br><strong>Main attractions:</strong> Christ the Redeemer, Sugarloaf Mountain, Copacabana Beach, Ipanema Beach.<br><strong>Why visit:</strong> Vibrant festivals, beautiful landscapes, and exciting nightlife.`,
    weather: "Weather: 28°C, Sunny",
    pricing: "Average trip cost: $1,600 (5 days)",
    priceUSD: 1600,
    travel: "International flights, Metro, Buses, Taxis",
  },
  Rome: {
    title: "Rome, Italy",
    countryCode: "IT",
    images: [
      "https://plus.unsplash.com/premium_photo-1661952706536-ab7f47e92c1c?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `The Eternal City, rich in history, architecture, and delicious Italian food.<br><br><strong>Culture:</strong> Rome is a living museum, where ancient traditions meet modern Italian life. Family, food, and faith are central. Enjoy lively piazzas, espresso bars, and centuries-old festivals.<br><strong>What makes it special:</strong> Rome's layers of history, art, and architecture are awe-inspiring. Every street tells a story.<br><br><strong>Best time to visit:</strong> April to June, September to October.<br><strong>Main attractions:</strong> Colosseum, Roman Forum, Vatican City, Trevi Fountain.<br><strong>Why visit:</strong> Ancient ruins, art, and authentic Italian cuisine.`,
    weather: "Weather: 21°C, Clear Sky",
    pricing: "Average trip cost: $1,900 (5 days)",
    priceUSD: 1900,
    travel: "International flights, Metro, Buses, Taxis",
  },
  Dubai: {
    title: "Dubai, UAE",
    countryCode: "AE",
    images: [
      "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `A futuristic city with luxury shopping, skyscrapers, and desert adventures.<br><br><strong>Culture:</strong> Dubai is a cosmopolitan hub where tradition meets innovation. Emirati hospitality, global cuisine, and a mix of Islamic and modern values shape the city.<br><strong>What makes it special:</strong> Dubai's rapid growth, luxury, and record-breaking attractions make it a city of superlatives.<br><br><strong>Best time to visit:</strong> November to March.<br><strong>Main attractions:</strong> Burj Khalifa, Dubai Mall, Palm Jumeirah, Desert Safari.<br><strong>Why visit:</strong> Modern architecture, shopping, and unique desert experiences.`,
    weather: "Weather: 33°C, Sunny",
    pricing: "Average trip cost: $2,500 (5 days)",
    priceUSD: 2500,
    travel: "International flights, Metro, Buses, Taxis",
  },
  London: {
    title: "London, UK",
    countryCode: "GB",
    images: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `A global city with royal history, museums, and vibrant theatre scene.<br><br><strong>Culture:</strong> London is a city of tradition and trendsetting. It is home to the monarchy, punk rock, and multicultural neighborhoods. Afternoon tea, football, and the arts are part of daily life.<br><strong>What makes it special:</strong> London is a crossroads of history and innovation, with something for everyone.<br><br><strong>Best time to visit:</strong> March to May.<br><strong>Main attractions:</strong> Tower Bridge, Buckingham Palace, British Museum, West End Theatre.<br><strong>Why visit:</strong> History, culture, and world-class entertainment.`,
    weather: "Weather: 16°C, Rainy",
    pricing: "Average trip cost: $2,100 (5 days)",
    priceUSD: 2100,
    travel: "International flights, Underground, Buses, Taxis",
  },
  Bangkok: {
    title: "Bangkok, Thailand",
    countryCode: "TH",
    images: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    ],
    desc: `A bustling city with ornate temples, street food, and lively markets.<br><br><strong>Culture:</strong> Bangkok is a city of contrasts, where ancient Buddhist traditions meet modern skyscrapers. The city is famous for its street food, night markets, and friendly locals.<br><strong>What makes it special:</strong> Bangkok's energy, flavors, and spiritual sites make it unforgettable.<br><br><strong>Best time to visit:</strong> November to February.<br><strong>Main attractions:</strong> Grand Palace, Wat Arun, Chatuchak Market, Floating Markets.<br><strong>Why visit:</strong> Vibrant street life, food, and culture.`,
    weather: "Weather: 30°C, Humid",
    pricing: "Average trip cost: $1,400 (5 days)",
    priceUSD: 1400,
    travel: "International flights, Skytrain, Buses, Taxis",
  },
};

// Convert USD amounts in a string to Indian Rupees (INR) using a fixed exchange rate.
// This replaces occurrences like "$1,500" with a localized INR string like "₹1,25,250".
function convertUSDStringToINR(str) {
  if (!str || typeof str !== "string") return str;
  // Approximate conversion rate (USD -> INR). Adjust if you want a different rate.
  const USD_TO_INR = 83.5;
  return str.replace(/\$([\d,]+(?:\.\d+)?)/g, function (_, num) {
    const usd = parseFloat(num.replace(/,/g, ""));
    if (isNaN(usd)) return _;
    const inr = Math.round(usd * USD_TO_INR);
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(inr);
  });
}

// Live exchange rate fetcher (USD -> INR) with caching and a safe fallback
let __cachedUsdToInrRate = null;
function getUSDToINRRate() {
  if (__cachedUsdToInrRate) return Promise.resolve(__cachedUsdToInrRate);
  const API = "https://api.exchangerate.host/latest?base=USD&symbols=INR";
  return fetch(API)
    .then((r) => r.json())
    .then((data) => {
      if (data && data.rates && data.rates.INR) {
        __cachedUsdToInrRate = Number(data.rates.INR);
        return __cachedUsdToInrRate;
      }
      __cachedUsdToInrRate = 83.5;
      return __cachedUsdToInrRate;
    })
    .catch(() => {
      __cachedUsdToInrRate = 83.5;
      return __cachedUsdToInrRate;
    });
}

// Render pricing showing both USD and INR (live rate when available)
function showPricing(dest) {
  const el = document.getElementById("detailsPricing");
  if (!el) return;
  let usd = dest.priceUSD;
  if (!usd) {
    const m = (dest.pricing || "").match(/\$([\d,]+(?:\.\d+)?)/);
    if (m) usd = parseFloat(m[1].replace(/,/g, ""));
  }
  if (!usd) {
    el.textContent = dest.pricing || "";
    return;
  }
  el.textContent = `Average trip cost: $${usd.toLocaleString(
    "en-US"
  )} — calculating INR...`;
  getUSDToINRRate().then((rate) => {
    const inr = Math.round(usd * rate);
    const usdStr = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usd);
    const inrStr = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(inr);
    el.textContent = `Average trip cost: ${usdStr} — ${inrStr} (approx.)`;
  });
}

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderDestinationDetails(destKey) {
  const dest = DESTINATIONS[destKey];
  if (!dest) return;
  document.getElementById("detailsTitle").textContent = dest.title;
  document.getElementById("detailsDesc").innerHTML = dest.desc;
  showPricing(dest);
  document.getElementById("detailsTravel").textContent = dest.travel;
  // Carousel images
  const carouselImages = document.getElementById("carouselImages");
  carouselImages.innerHTML = "";
  dest.images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = dest.title + " photo " + (i + 1);
    img.className = "carousel-img" + (i === 0 ? " active" : "");
    carouselImages.appendChild(img);
  });
  // Set background image to the first image of the destination
  document.body.style.background = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${dest.images[0]}') no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
  // Fetch real-time weather
  let cityName = dest.title.split(",")[0];
  fetchWeather(cityName, function (weatherText) {
    document.getElementById("detailsWeather").textContent = weatherText;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Render details for selected destination
  const destKey = getQueryParam("dest") || "Paris";
  renderDestinationDetails(destKey);

  // Add comment functionality (local only)
  document
    .getElementById("addCommentForm")
    .addEventListener("submit", function () {
      var user = document.getElementById("commentUser").value.trim();
      var text = document.getElementById("commentText").value.trim();
      if (user && text) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML =
          '<div class="comment-user">' +
          user +
          '</div><div class="comment-text">' +
          text +
          "</div>";
        document.getElementById("commentsList").appendChild(commentDiv);
        document.getElementById("commentUser").value = "";
        document.getElementById("commentText").value = "";
      }
    });

  // Carousel logic (single, robust version)
  function initCarousel() {
    var images = document.querySelectorAll(".carousel-img");
    var current = 0;
    var prevBtn = document.getElementById("carouselPrev");
    var nextBtn = document.getElementById("carouselNext");
    var carousel = document.querySelector(".carousel-images");
    var intervalId = null;
    function showImage(idx) {
      images.forEach(function (img, i) {
        img.classList.toggle("active", i === idx);
      });
      if (prevBtn) prevBtn.style.display = "flex";
      if (nextBtn) nextBtn.style.display = "flex";
    }
    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }
    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }
    function startAutoScroll() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(nextImage, 2000);
    }
    function stopAutoScroll() {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    }
    function resetAutoScroll() {
      stopAutoScroll();
      startAutoScroll();
    }
    if (prevBtn)
      prevBtn.onclick = function () {
        prevImage();
        resetAutoScroll();
      };
    if (nextBtn)
      nextBtn.onclick = function () {
        nextImage();
        resetAutoScroll();
      };
    if (carousel) {
      carousel.onmouseenter = stopAutoScroll;
      carousel.onmouseleave = startAutoScroll;
    }
    showImage(current);
    startAutoScroll();
  }
  setTimeout(initCarousel, 0);
});

  // --- OpenWeatherMap Real-Time Weather Integration ---
  const OPENWEATHERMAP_API_KEY = "3be48b0bb896f18e2bdb99b4a7ecfb00"; // User's OpenWeatherMap API key
  function fetchWeather(city, callback) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
    console.log("Weather API Query:", url); // Debug: show the query
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Weather API Response:", data); // Debug: show the response
        if (data && data.weather && data.weather[0] && data.main) {
          const weatherText = `Weather: ${Math.round(
            data.main.temp
          )}°C, ${data.weather[0].description.replace(/\b\w/g, (l) =>
            l.toUpperCase()
          )}`;
          callback(weatherText);
        } else {
          callback("Weather: Not available");
        }
      })
      .catch((err) => {
        console.log("Weather API Error:", err);
        callback("Weather: Not available");
      });
  }

  // Update renderDestinationDetails to use real-time weather (direct definition)
  function renderDestinationDetails(destKey) {
    const dest = DESTINATIONS[destKey];
    if (!dest) return;
    document.getElementById("detailsTitle").textContent = dest.title;
    document.getElementById("detailsDesc").innerHTML = dest.desc;
    showPricing(dest);
    document.getElementById("detailsTravel").textContent = dest.travel;
    // Set hero cover photo
    const heroImg = document.getElementById("detailsHeroImg");
    if (heroImg) {
      heroImg.src = dest.images[0];
      heroImg.alt = dest.title + " cover photo";
    }
    // Render gallery images (excluding the first image) as cards with overlay
    const gallery = document.getElementById("detailsGallery");
    if (gallery) {
      gallery.innerHTML = "";
      dest.images.slice(1).forEach((src, i) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        const img = document.createElement("img");
        img.src = src;
        img.alt = dest.title + " gallery photo " + (i + 1);
        const overlay = document.createElement("div");
        overlay.className = "gallery-overlay";
        const title = document.createElement("div");
        title.className = "gallery-title";
        title.textContent = dest.title.split(",")[0];
        overlay.appendChild(title);
        card.appendChild(img);
        card.appendChild(overlay);
        gallery.appendChild(card);
      });
    }
    // Set background image to the first image of the destination
    document.body.style.background = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${dest.images[0]}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    // Fetch real-time weather with city and country code
    let cityName = dest.title.split(",")[0].trim();
    let countryCode = dest.countryCode || "";
    let query = countryCode ? `${cityName},${countryCode}` : cityName;
    fetchWeather(query, function (weatherText) {
      document.getElementById("detailsWeather").textContent = weatherText;
    });
  }
