const tripData = [
  {
    day: "Dzień 1 (16.06): Wulkaniczna Potęga",
    // PORADY DLA CAŁEGO DNIA 1
    dayTips:
      "Droga powrotna przez pasmo grzbietowe (w stronę Chipeque) jest piękna, ale długa. Wyjedźcie z Las Chafiras z przynajmniej połową baku – na terenie parku narodowego jest tylko jedna, droga stacja benzynowa (przy hotelu Parador).",
    // CHECKLISTA DLA DNIA 1
    dayChecklist: [
      "Ciepłe ubrania (na górnej stacji Teide w czerwcu potrafi być tylko kilka stopni i mocno wieje!)",
      "Cukierki lub coś do picia dla córki na zatkane uszy w kolejce",
      "Zatankowanie auta do min. połowy baku",
    ],
    events: [
      {
        time: "09:00 – 09:30",
        title: "Odbiór auta - Plus Car",
        navUrl: "https://maps.app.goo.gl/Nf6jSo78UeVdhBuW8",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6689.727159084362!2d-16.61190766941786!3d28.052311007519783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f3dad2b9597%3A0x4eea3c0821d4c87d!2sPlus%20Car%20Rent%20a%20Car!5e0!3m2!1spl!2spl!4v1779957042671!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Las Chafiras. Sprawdź stan lakieru i poziom paliwa!",
        parkDesc: "Parking na terenie biura Plus Car",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779956448827!6m8!1m7!1skoU8Ux49h08DzRwC8grNKw!2m2!1d28.05206661827112!2d-16.608422317487!3f356.05751310964!4f-4.870469298641979!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "10:30 – 11:15",
        title: "Vilaflor Pine Forest (Pino Gordo)",
        navUrl: "https://maps.app.goo.gl/wAcZaEWiSVViuBJZ8",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.9130699843902!2d-16.638059326978762!3d28.16508611857211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9b7b314eaf23%3A0xda05f7de2ab25f57!2sPino%20Gordo!5e0!3m2!1spl!2spl!4v1779957440727!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Przystanek przy gigantycznej sośnie. Powietrze pachnie tu żywicą.",
        parkDesc:
          "Bezpośrednio przy drodze TF-21 znajduje się zatoczka parkingowa na kilka samochodów (tuż przy samym drzewie). Jeśli będzie pełna, 200 metrów dalej jest kolejny punkt widokowy z miejscami postojowymi. Parkowanie jest darmowe.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779954022116!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHEzT3loWnc.!2m2!1d28.16529898293365!2d-16.6369230194622!3f214.21439015738676!4f-10.389507572186076!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "12:00 – 14:00",
        title: "Teide Teleférico",
        navUrl: "https://maps.app.goo.gl/KjXmGivRZSqspM1bA",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.4082036784416!2d-16.625360260850254!3d28.25563670365553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8385d9ab9637%3A0x4aaebf1d939f900a!2sAparcamiento%20del%20telef%C3%A9rico%20del%20Pico%20del%20Teide!5e0!3m2!1spl!2spl!4v1779957613119!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Wjazd kolejką na wulkan. Pamiętaj, że na górze jest zimno!",
        parkDesc:
          "Przy dolnej stacji kolejki jest duży, bezpłatny parking. Porada: Parking zapełnia się błyskawicznie. Ponieważ macie wjazd na 12:00, bądźcie na miejscu minimum 30-40 minut wcześniej. Jeśli zabraknie miejsc na głównym placu, ludzie parkują wzdłuż drogi, co oznacza dodatkowy spacer pod górę z dzieckiem.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779957825283!6m8!1m7!1s7AMJLwurxOQ6sChtLlgK4Q!2m2!1d28.25617163481968!2d-16.62314821441575!3f352.9328356105298!4f0.1081054031439237!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "14:15 – 15:30",
        title: "Roques de García",
        navUrl: "https://maps.app.goo.gl/qcjeJbV65DpmFgP48",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.4318129542407!2d-16.631052757166195!3d28.22457045487444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a85878499b799%3A0xbb1dc27f743f7f40!2sSendero%20Roques%20de%20Garc%C3%ADa!5e0!3m2!1spl!2spl!4v1780484890737!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Spacer wokół słynnych skał. Łatwa trasa dla każdego.",
        parkDesc:
          "Duży darmowy parking znajduje się przy punkcie widokowym Mirador de la Ruleta (naprzeciwko hotelu Parador). Porada: To jedno z najbardziej zatłoczonych miejsc w parku. Rotacja aut jest jednak duża – jeśli nie ma miejsca, warto postać 5 minut i poczekać, aż ktoś wyjedzie.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1780485146282!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ253YUdEd0FF!2m2!1d28.22523223911946!2d-16.63149800841395!3f20.440599466119195!4f-5.01314213450901!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "16:30 – 17:15",
        title: "Mirador de Chipeque",
        navUrl: "https://maps.app.goo.gl/BjgkSan7F9Mac6a99",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.823965690339!2d-16.464499769426382!3d28.37478534459868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc402b6cadcf9a23%3A0x936ea81287b57298!2sMirador%20de%20Chipeque!5e0!3m2!1spl!2spl!4v1780485396068!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Panoramiczny widok na Teide ponad chmurami.",
        parkDesc:
          "Bezpośrednio przy punkcie widokowym jest szutrowy, darmowy plac na kilkanaście aut. Zazwyczaj nie ma problemu z miejscem.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1780485903886!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0VwODNtMHdF!2m2!1d28.37398932082786!2d-16.46390155859214!3f242.95439515274214!4f4.386538531311459!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
    ],
  },
  {
    day: "Dzień 2 (17.06): Zachodnie Wybrzeże",
    dayTips:
      "Zawsze sprawdzaj stan oceanu przed wejściem do naturalnych basenów!",
    dayChecklist: ["Ręczniki i stroje kąpielowe", "Krem przeciwsłoneczny"],
    events: [
      {
        time: "10:30",
        title: "Rejs z Los Gigantes",
        navUrl: "https://maps.google.com/?q=28.246101,-16.842502",
        desc: "Delfiny, wieloryby i niesamowite klify widziane z oceanu.",
        parkDesc: "Parking w porcie Los Gigantes (płatny).",
        img: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800",
      },
      {
        time: "13:30",
        title: "Basen Isla Cangrejo",
        navUrl: "https://maps.google.com/?q=28.239634,-16.841578",
        desc: "Kąpiel w naturalnym basenie (tylko przy spokojnym morzu!).",
        parkDesc: "Parkowanie przy wąskich uliczkach mieszkalnych.",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800",
      },
      {
        time: "15:00",
        title: "Plaża Abama",
        navUrl: "https://maps.google.com/?q=28.171455,-16.802355",
        desc: "Złoty piasek i spokojna zatoka na relaks.",
        parkDesc:
          "Bezpłatny parking dla gości plaży przy hotelu Ritz-Carlton, skąd schodzi się na dół pieszo lub zjeżdża kolejką.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
      },
    ],
  },
  {
    day: "Dzień 3 (18.06): Zoo i Północ",
    dayTips: "Bilety do Loro Parque warto mieć kupione wcześniej na telefonie.",
    dayChecklist: ["Bilety wstępu", "Wygodne buty do chodzenia"],
    events: [
      {
        time: "10:00",
        title: "Loro Parque",
        navUrl: "https://maps.google.com/?q=28.407955,-16.564612",
        desc: "Pokazy orek, delfinów i pingwinarium.",
        parkDesc: "Główny, duży parking płatny przy zoo.",
        img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800",
      },
      {
        time: "16:30",
        title: "Barranco de Ruiz",
        navUrl: "https://maps.google.com/?q=28.389144,-16.638421",
        desc: "Malowniczy wąwóz – chwila oddechu w naturze.",
        parkDesc: "Mały, bezpłatny parking przy strefie rekreacyjnej.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
      },
    ],
  },
  {
    day: "Dzień 4 (19.06): Dzika Anaga i Teno",
    dayTips:
      "Pamiętaj o restrykcjach wjazdu na Punta de Teno – kluczowy jest autobus 369.",
    dayChecklist: [
      "Sprawdzenie rozkładu autobusu 369",
      "Kurtka przeciwdeszczowa do Anagi",
    ],
    events: [
      {
        time: "10:00",
        title: "Camino Viejo al Pico del Inglés",
        navUrl: "https://maps.google.com/?q=28.532391,-16.267633",
        desc: "Słynny tunel w lesie laurowym (Anaga).",
        parkDesc: "Zatoczka na 2-3 samochody bezpośrednio przy wejściu.",
        img: "https://images.unsplash.com/photo-1444333509402-1a40316e6417?auto=format&fit=crop&w=800",
      },
      {
        time: "13:00",
        title: "Mirador Altos de Baracán",
        navUrl: "https://maps.google.com/?q=28.339455,-16.852331",
        desc: "Góry Teno - granica między zieloną a suchą częścią wyspy.",
        parkDesc: "Mała zatoczka parkingowa na kilka aut.",
        img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800",
      },
      {
        time: "14:30",
        title: "Punta de Teno",
        navUrl: "https://maps.google.com/?q=28.371192,-16.852445",
        desc: "Latarnia morska. Wjazd tylko autobusem 369 z Buenavista!",
        parkDesc:
          "Auto zostawiacie na dworcu w Buenavista del Norte i stamtąd jedziecie autobusem publicznym.",
        img: "https://images.unsplash.com/photo-1500049241444-d5966d9b6028?auto=format&fit=crop&w=800",
      },
      {
        time: "20:00",
        title: "Zwrot auta (Las Chafiras)",
        navUrl: "https://maps.google.com/?q=28.058774,-16.613589",
        desc: "Zatankuj przed oddaniem! Koniec przygody.",
        parkDesc: "Zwrot na placu głównym Plus Car.",
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
  const dayStates = JSON.parse(
    localStorage.getItem("dayCollapseStates") || "{}",
  );
  const dayChecked = JSON.parse(
    localStorage.getItem("dayChecklistStates") || "{}",
  );

  // Paleta kolorów dla poszczególnych dni, żeby się nie gubić
  const dayColors = ["#0056b3", "#28a745", "#fd7e14", "#6f42c1"];

  tripData.forEach((day, dIdx) => {
    const color = dayColors[dIdx % dayColors.length];
    const isCollapsed = dayStates[dIdx] === true; // domyślnie rozwinięte, jeśli true - zwinięte
    const displayStyle = isCollapsed ? 'style="display:none;"' : "";
    const arrowIcon = isCollapsed ? "🔽" : "🔼";

    // Nagłówek dnia jako przycisk do rozwijania
    let html = `
      <div class="day-wrapper" style="border-left: 5px solid ${color}; margin-bottom: 25px; background: #fff; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <div class="day-title" onclick="toggleDay(${dIdx})" style="background: ${color}10; color: ${color}; padding: 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
          <h2 style="margin:0; font-size: 1.3rem;">${day.day}</h2>
          <span style="font-size: 1.2rem;">${arrowIcon}</span>
        </div>
        
        <div id="day-content-${dIdx}" ${displayStyle} style="padding: 15px;">
    `;

    // DODAWANIE SEKCJI PORAD I CHECKLISTY DNIA (jeśli istnieją w danych)
    if (day.dayTips || day.dayChecklist) {
      let checklistHtml = "";
      if (day.dayChecklist) {
        day.dayChecklist.forEach((checkItem, cIdx) => {
          const checkKey = `day-${dIdx}-check-${cIdx}`;
          const isItemChecked = dayChecked[checkKey] ? "checked" : "";
          checklistHtml += `
            <label style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; cursor: pointer; font-size: 14px;">
              <input type="checkbox" ${isItemChecked} onchange="toggleDayChecklist('${checkKey}')" style="margin-top: 3px;">
              <span>${checkItem}</span>
            </label>
          `;
        });
      }

      html += `
        <details style="background: #fff3cd; border: 1px solid #ffeeba; border-radius: 8px; padding: 12px; margin-bottom: 20px;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; user-select: none;">💡 Porady i przygotowanie na ten dzień (Rozwiń)</summary>
          <p style="margin: 8px 0; font-size: 14px; color: #856404; line-height: 1.4;">${day.dayTips || ""}</p>
          ${checklistHtml ? '<div style="margin-top: 10px; border-top: 1px solid #ffeeba; padding-top: 10px;">' + checklistHtml + "</div>" : ""}
        </details>
      `;
    }

    // GENEROWANIE ATRAKCJI W DANYM DNIU
    day.events.forEach((ev, eIdx) => {
      const id = `ev-${dIdx}-${eIdx}`;
      const isDone = completed.includes(id) ? "completed" : "";

      const googleImagesUrl = `https://www.google.com/search?q=${encodeURIComponent(ev.title + " Tenerife")}&udm=2`;

      // Przygotowanie widoku Street View z kodu iframe lub zdjęcia
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

      // Przygotowanie podglądu zwykłej mapy
      let mapContent = "";
      if (ev.mapIframe && ev.mapIframe.trim() !== "") {
        mapContent = ev.mapIframe
          .replace(/width="\d+"/, 'width="100%"')
          .replace(/height="\d+"/, 'height="200"');
      }

      html += `
                <div class="event ${isDone}" id="${id}" style="border-bottom: 1px dashed #eee; padding-bottom: 20px; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                      <div>
                        <span class="time" style="background: ${color}; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${ev.time}</span>
                        <strong class="location-name" style="display:block; font-size: 1.15rem; margin-top: 5px; color: #333;">${ev.title}</strong>
                      </div>
                      <div class="check-btn" onclick="toggleComplete('${id}')"></div>
                    </div>
                    
                    <p style="font-size: 15px; color: #444; line-height: 1.5; margin: 12px 0 8px 0;">
                      📍 <strong>Opis miejsca:</strong> ${ev.desc}
                    </p>
                    
                    ${
                      ev.parkDesc
                        ? `
                    <div class="parking-box" style="background: #f1f3f5; border-left: 4px solid #495057; padding: 10px 12px; border-radius: 0 8px 8px 0; margin-bottom: 15px; font-size: 14px; color: #343a40; line-height: 1.45;">
                      🚗 <strong>Parking i dojazd:</strong> ${ev.parkDesc}
                    </div>
                    `
                        : ""
                    }
                    
                    ${
                      streetViewContent
                        ? `
                    <div class="streetview-container" style="border-radius: 8px; overflow: hidden; margin-bottom: 10px; background: #eee; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);">
                        ${streetViewContent}
                    </div>
                    `
                        : ""
                    }
                    
                    <a href="${googleImagesUrl}" target="_blank" class="google-search-link" style="display: inline-block; margin-bottom: 12px; font-size: 13px; color: #007bff; text-decoration: none;">
                        🔍 Zobacz więcej zdjęć z ${ev.title}
                    </a>

                    ${
                      mapContent
                        ? `
                    <div class="map-container" style="border-radius: 8px; overflow: hidden; background: #eee; margin-top: 5px; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);">
                        ${mapContent}
                    </div>
                    `
                        : ""
                    }

                    <div class="btn-group" style="margin-top:12px;">
                        <a href="${ev.navUrl}" class="btn btn-map" target="_blank" style="background: ${color}; text-align: center; display: block; color: #fff; padding: 10px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
                            🚀 Uruchom Nawigację (Google Maps)
                        </a>
                    </div>
                </div>`;
    });

    html += `
        </div>
      </div>
    `;
    app.innerHTML += html;
  });
}

// FUNKCJA OBSŁUGUJĄCA ZWIJANIE I ROZWIJANIE DNI
function toggleDay(dIdx) {
  const content = document.getElementById(`day-content-${dIdx}`);
  const dayStates = JSON.parse(
    localStorage.getItem("dayCollapseStates") || "{}",
  );

  if (content.style.display === "none") {
    content.style.display = "block";
    dayStates[dIdx] = false; // rozwijamy
  } else {
    content.style.display = "none";
    dayStates[dIdx] = true; // zwijamy
  }

  localStorage.setItem("dayCollapseStates", JSON.stringify(dayStates));
  renderTrip(); // Odświeżamy widok, żeby strzałki 🔽/🔼 zmieniły kierunek
}

// FUNKCJA OBSŁUGUJĄCA CHECKLISTĘ WEWNĄTRZ DNI
function toggleDayChecklist(key) {
  const dayChecked = JSON.parse(
    localStorage.getItem("dayChecklistStates") || "{}",
  );
  dayChecked[key] = !dayChecked[key];
  localStorage.setItem("dayChecklistStates", JSON.stringify(dayChecked));
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
