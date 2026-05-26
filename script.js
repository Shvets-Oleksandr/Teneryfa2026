const tripData = [
  {
    day: "Dzień 1 (16.06): Wulkaniczna Potęga",
    events: [
      {
        time: "09:30",
        title: "Odbiór auta - Plus Car",
        // TUTAJ wklejasz pełny link skopiowany z Google Maps:
        mapUrl: "https://maps.app.goo.gl/ea8hHftNR3X8BrY97",
        desc: "Las Chafiras. Sprawdź stan lakieru i poziom paliwa!",
        img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800",
      },
      {
        time: "10:30",
        title: "Vilaflor Pine Forest (Pino Gordo)",
        gps: "28.163351,-16.635443", // Parking tuż przy słynnej sośnie Pino Gordo
        desc: "Przystanek przy gigantycznej sośnie. Powietrze pachnie tu żywicą.",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800",
      },
      {
        time: "12:00",
        title: "Teide Teleférico",
        gps: "28.253942,-16.624176", // Dolna stacja kolejki i parking
        desc: "Wjazd kolejką na wulkan. Pamiętaj, że na górze jest zimno!",
        img: "https://images.unsplash.com/photo-1560945532-35393439972b?auto=format&fit=crop&w=800",
      },
      {
        time: "14:15",
        title: "Roques de García",
        gps: "28.223592,-16.629399", // Parking przy punkcie widokowym i skale "Palec Boży"
        desc: "Spacer wokół słynnych skał. Łatwa trasa dla każdego.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800",
      },
      {
        time: "16:30",
        title: "Mirador de Chipeque",
        gps: "28.400511,-16.460778", // Dokładny punkt widokowy na krawędzi platformy
        desc: "Panoramiczny widok na Teide ponad chmurami.",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800",
      },
    ],
  },
  {
    day: "Dzień 2 (17.06): Zachodnie Wybrzeże",
    events: [
      {
        time: "10:30",
        title: "Rejs z Los Gigantes",
        gps: "28.246101,-16.842502", // Port w Los Gigantes, skąd odpływają łodzie
        desc: "Delfiny, wieloryby i niesamowite klify widziane z oceanu.",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800",
      },
      {
        time: "13:30",
        title: "Basen Isla Cangrejo",
        gps: "28.239634,-16.841578", // Bezpośrednie zejście do naturalnego basenu
        desc: "Kąpiel w naturalnym basenie (tylko przy spokojnym morzu!).",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800",
      },
      {
        time: "15:00",
        title: "Plaża Abama",
        gps: "28.171455,-16.802355", // Parking dla gości plaży (stamtąd schodzi się w dół)
        desc: "Złoty piasek i spokojna zatoka na relaks.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
      },
    ],
  },
  {
    day: "Dzień 3 (18.06): Zoo i Północ",
    events: [
      {
        time: "10:00",
        title: "Loro Parque",
        gps: "28.407955,-16.564612", // Główny parking dla odwiedzających Loro Parque
        desc: "Pokazy orek, delfinów i pingwinarium.",
        img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800",
      },
      {
        time: "16:30",
        title: "Barranco de Ruiz",
        gps: "28.389144,-16.638421", // Strefa rekreacyjna i początek szlaku w wąwozie
        desc: "Malowniczy wąwóz – chwila oddechu w naturze.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
      },
    ],
  },
  {
    day: "Dzień 4 (19.06): Dzika Anaga i Teno",
    events: [
      {
        time: "10:00",
        title: "Camino Viejo al Pico del Inglés",
        gps: "28.532391,-16.267633", // Dokładne wejście do "zielonego tunelu" z drzew
        desc: "Słynny tunel w lesie laurowym (Anaga).",
        img: "https://images.unsplash.com/photo-1444333509402-1a40316e6417?auto=format&fit=crop&w=800",
      },
      {
        time: "13:00",
        title: "Mirador Altos de Baracán",
        gps: "28.339455,-16.852331", // Mała zatoczka parkingowa przy punkcie widokowym
        desc: "Góry Teno - granica między zieloną a suchą częścią wyspy.",
        img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800",
      },
      {
        time: "14:30",
        title: "Punta de Teno",
        gps: "28.371192,-16.852445", // Koordynaty samej latarni (pamiętaj o autobusie 369!)
        desc: "Latarnia morska. Wjazd tylko autobusem 369 z Buenavista!",
        img: "https://images.unsplash.com/photo-1500049241444-d5966d9b6028?auto=format&fit=crop&w=800",
      },
      {
        time: "20:00",
        title: "Zwrot auta (Las Chafiras)",
        gps: "28.058774,-16.613589", // Ponownie biuro Plus Car
        desc: "Zatankuj przed oddaniem! Koniec przygody.",
        img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800",
      },
    ],
  },
];

const packingItems = [
  "Paszporty / Dowody osobiste",
  "Prawo jazdy",
  "Kurtka/Bluza (na Teide)",
  "Buty trekkingowe",
  "Krem z filtrem 50 SPF",
  "Powerbank",
  "Ręczniki i stroje kąpielowe",
  "Maska do snurkowania",
  "Leki na chorobę lokomocyjną (kręte drogi!)",
];

function init() {
  renderTrip();
  renderPacking();
  startCountdown();
}

function renderTrip() {
  const app = document.getElementById("itinerary-app");
  app.innerHTML = "";
  const completed = JSON.parse(localStorage.getItem("tripCompleted") || "[]");

  tripData.forEach((day, dIdx) => {
    let html = `<div class="day-title"><h2>${day.day}</h2></div>`;
    day.events.forEach((ev, eIdx) => {
      const id = `ev-${dIdx}-${eIdx}`;
      const isDone = completed.includes(id) ? "completed" : "";

      const googleImagesUrl = `https://www.google.com/search?q=${encodeURIComponent(ev.title + " Tenerife")}&udm=2`;

      // NAWIGACJA: Przycisk kieruje bezpośrednio na Twój wklejony link z Google Maps
      const navUrl = ev.mapUrl;

      // EMBED: Przerabiamy zwykły link z Google Maps na wersję bezpieczną dla okienka iframe
      const encodedUrl = encodeURIComponent(ev.mapUrl);
      const iframeUrl = `https://maps.google.com/maps?q=${encodedUrl}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

      html += `
                <div class="event ${isDone}" id="${id}">
                    <div class="check-btn" onclick="toggleComplete('${id}')"></div>
                    <span class="time">${ev.time}</span>
                    <strong class="location-name">${ev.title}</strong>
                    <p>${ev.desc}</p>
                    
                    <div class="event-img-container" onclick="openLightbox('${ev.img}')">
                        <img src="${ev.img}" alt="${ev.title}">
                    </div>
                    
                    <a href="${googleImagesUrl}" target="_blank" class="google-search-link">
                        🔍 Zobacz więcej zdjęć z ${ev.title}
                    </a>

                    <div class="map-container">
                        <iframe 
                            src="${iframeUrl}" 
                            width="100%" 
                            height="200" 
                            style="border:0; border-radius: 8px;" 
                            allowfullscreen="" 
                            loading="lazy">
                        </iframe>
                    </div>

                    <div class="btn-group" style="margin-top:10px;">
                        <a href="${navUrl}" class="btn btn-map" target="_blank">
                            🚀 Uruchom Nawigację
                        </a>
                    </div>
                </div>`;
    });
    app.innerHTML += html;
  });
}

function renderPacking() {
  const list = document.getElementById("packing-list");
  list.innerHTML = "";
  const packed = JSON.parse(localStorage.getItem("packingItems") || "[]");

  packingItems.forEach((item, idx) => {
    const isPacked = packed.includes(idx) ? "checked" : "";
    list.innerHTML += `
            <div class="packing-item" onclick="togglePacking(${idx}, this)">
                <input type="checkbox" ${isPacked} onclick="event.stopPropagation(); togglePacking(${idx}, this.parentElement);"> ${item}
            </div>`;
  });
}

function toggleComplete(id) {
  const el = document.getElementById(id);
  el.classList.toggle("completed");
  let completed = JSON.parse(localStorage.getItem("tripCompleted") || "[]");
  if (el.classList.contains("completed")) {
    completed.push(id);
  } else {
    completed = completed.filter((i) => i !== id);
  }
  localStorage.setItem("tripCompleted", JSON.stringify(completed));
}

function togglePacking(idx, el) {
  const cb = el.querySelector("input");
  cb.checked = !cb.checked;
  let packed = JSON.parse(localStorage.getItem("packingItems") || "[]");
  if (cb.checked) {
    if (!packed.includes(idx)) packed.push(idx);
  } else {
    packed = packed.filter((i) => i !== idx);
  }
  localStorage.setItem("packingItems", JSON.stringify(packed));
}

function openLightbox(url) {
  document.getElementById("lightbox-img").src = url;
  document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function startCountdown() {
  const target = new Date("June 16, 2026 09:30:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    const countdownEl = document.getElementById("countdown");
    if (diff < 0) {
      countdownEl.innerText = "WAKACJE SIĘ ZACZĘŁY!";
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    countdownEl.innerText = `Do startu: ${d}d ${h}h ${m}m`;
  }, 1000);
}

window.onload = init;
