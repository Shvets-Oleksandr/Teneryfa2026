const GOOGLE_API_KEY = "TWÓJ_KLUCZ_API_TUTAJ";

const tripData = [
  {
    day: "Dzień 1 (16.06): Wulkaniczna Potęga",
    events: [
      {
        time: "09:30",
        title: "Odbiór auta - Plus Car",
        // 1. Link do nawigacji (z paska przeglądarki)
        navUrl: "https://maps.app.goo.gl/Nf6jSo78UeVdhBuW8",
        // 2. Link z kodu iframe (tylko to, co jest wewnątrz src="...")
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6689.727159084362!2d-16.61190766941786!3d28.052311007519783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f3dad2b9597%3A0x4eea3c0821d4c87d!2sPlus%20Car%20Rent%20a%20Car!5e0!3m2!1spl!2spl!4v1779957042671!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Las Chafiras. Sprawdź stan lakieru i poziom paliwa!",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779956448827!6m8!1m7!1skoU8Ux49h08DzRwC8grNKw!2m2!1d28.05206661827112!2d-16.608422317487!3f356.05751310964!4f-4.870469298641979!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "10:30",
        title: "Vilaflor Pine Forest (Pino Gordo)",
        navUrl: "https://maps.app.goo.gl/wAcZaEWiSVViuBJZ8",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.9130699843902!2d-16.638059326978762!3d28.16508611857211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9b7b314eaf23%3A0xda05f7de2ab25f57!2sPino%20Gordo!5e0!3m2!1spl!2spl!4v1779957440727!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Przystanek przy gigantycznej sośnie. Powietrze pachnie tu żywicą.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779954022116!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHEzT3loWnc.!2m2!1d28.16529898293365!2d-16.6369230194622!3f214.21439015738676!4f-10.389507572186076!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "12:00",
        title: "Teide Teleférico",
        navUrl: "https://maps.app.goo.gl/KjXmGivRZSqspM1bA",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.4082036784416!2d-16.625360260850254!3d28.25563670365553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8385d9ab9637%3A0x4aaebf1d939f900a!2sAparcamiento%20del%20telef%C3%A9rico%20del%20Pico%20del%20Teide!5e0!3m2!1spl!2spl!4v1779957613119!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Wjazd kolejką na wulkan. Pamiętaj, że na górze jest zimno!",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779957825283!6m8!1m7!1s7AMJLwurxOQ6sChtLlgK4Q!2m2!1d28.25617163481968!2d-16.62314821441575!3f352.9328356105298!4f0.1081054031439237!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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

      // 1. PRZYGOTOWANIE KONTENERA STREET VIEW
      let streetViewContent = "";
      if (ev.streetViewIframe && ev.streetViewIframe.trim() !== "") {
        streetViewContent = ev.streetViewIframe
          .replace(/width="\d+"/, 'width="100%"')
          .replace(/height="\d+"/, 'height="220"');
      } else if (ev.img && ev.img.trim() !== "") {
        streetViewContent = `<div class="event-img-container" onclick="openLightbox('${ev.img}')">
                                <img src="${ev.img}" alt="${ev.title}">
                             </div>`;
      } else {
        streetViewContent = `<div class="event-img-container">
                                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800" alt="Tenerife">
                             </div>`;
      }

      // 2. PRZYGOTOWANIE KONTENERA ZWYKŁEJ MAPY
      let mapContent = "";
      if (ev.mapIframe && ev.mapIframe.trim() !== "") {
        mapContent = ev.mapIframe
          .replace(/width="\d+"/, 'width="100%"')
          .replace(/height="\d+"/, 'height="200"');
      } else {
        mapContent = `<p style="color: #666; font-size: 13px; padding: 10px;">Brak podglądu mapy</p>`;
      }

      html += `
                <div class="event ${isDone}" id="${id}">
                    <div class="check-btn" onclick="toggleComplete('${id}')"></div>
                    <span class="time">${ev.time}</span>
                    <strong class="location-name">${ev.title}</strong>
                    <p>${ev.desc}</p>
                    
                    <div class="streetview-container" style="border-radius: 8px; overflow: hidden; margin-bottom: 10px; background: #eee;">
                        ${streetViewContent}
                    </div>
                    
                    <a href="${googleImagesUrl}" target="_blank" class="google-search-link">
                        🔍 Zobacz więcej zdjęć z ${ev.title}
                    </a>

                    <div class="map-container" style="border-radius: 8px; overflow: hidden; background: #eee; margin-top: 10px;">
                        ${mapContent}
                    </div>

                    <div class="btn-group" style="margin-top:10px;">
                        <a href="${ev.navUrl}" class="btn btn-map" target="_blank">
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
