// Unsplash API setup
const UNSPLASH_ACCESS_KEY = "QH6odDl_V2KEmfvC6zK7K-_3wrRASC4ytDFR26dGj1Y";
const searchForm = document.querySelector("#search form");
const searchInput = document.querySelector("#search input");
const destinationsGrid = document.getElementById("destinationsGrid");
const loadingSpinner = document.getElementById("loadingSpinner");
const errorMessage = document.getElementById("errorMessage");

// Render destination cards
function renderDestinations(destinations) {
  if (!destinationsGrid) return;
  destinationsGrid.innerHTML = "";
  destinations.forEach((dest) => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" />
      <div class="card-title">${dest.name}</div>
      <div class="card-desc">${dest.desc ? dest.desc : ""}</div>
      <button class="card-weather-btn" data-location="${
        dest.name
      }">Show Weather</button>
    `;
    destinationsGrid.appendChild(card);
  });
  document.querySelectorAll(".card-weather-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const location = e.target.getAttribute("data-location");
      fetchWeather(location);
    });
  });
  enableCardNavigation();
}

// Fetch images from Unsplash
async function fetchDestinations(query) {
  setLoading(true);
  hideError();
  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=6&client_id=${UNSPLASH_ACCESS_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch images");
    const data = await res.json();
    if (!data.results.length) throw new Error("No destinations found");
    const destinations = data.results.map((photo) => ({
      name: photo.alt_description ? photo.alt_description : query,
      image: photo.urls.regular,
      desc: photo.description || photo.alt_description || query,
    }));
    renderDestinations(destinations);
  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

// OpenWeatherMap API setup
const OPENWEATHER_API_KEY = "3be48b0bb896f18e2bdb99b4a7ecfb00";
const weatherModal = document.getElementById("weatherModal");
const weatherDetails = document.getElementById("weatherDetails");
const closeModal = document.getElementById("closeModal");

function showModal() {
  weatherModal.style.display = "flex";
}
function hideModal() {
  weatherModal.style.display = "none";
  weatherDetails.innerHTML = "";
}
closeModal.addEventListener("click", hideModal);
window.addEventListener("click", (e) => {
  if (e.target === weatherModal) hideModal();
});

// Fetch weather info from OpenWeatherMap
async function fetchWeather(location) {
  setLoading(true);
  hideError();
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location
    )}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather info not found");
    const data = await res.json();
    weatherDetails.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
    showModal();
  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

// Handle search form submit
if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      showError("Please enter a destination.");
      return;
    }
    fetchDestinations(query);
  });
}

// Make all destination cards open the details page on click
function enableCardNavigation() {
  document.querySelectorAll(".destination-card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", function (e) {
      if (e.target.classList.contains("card-weather-btn")) return;
      const destName = card.querySelector(".card-title")?.textContent || "";
      if (destName) {
        const destKey = destName
          .replace(/\s+/g, "")
          .replace(/[^a-zA-Z0-9]/g, "");
        window.location.href = `destination-details.html?dest=${encodeURIComponent(
          destKey
        )}`;
      }
    });
  });
}
