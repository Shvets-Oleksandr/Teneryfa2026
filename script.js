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
        time: "11:50 – 12:40",
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
        time: "13:10 – 15:15",
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
      "Choroba morska: Ocean w okolicach Los Gigantes bywa spokojny, ale na mniejszej łodzi i tak kołysze. Jeśli córka ma skłonności do choroby lokomocyjnej, warto podać jej lek odpowiednio wcześniej przed rejsem. Zawsze sprawdzaj stan oceanu przed wejściem do naturalnych basenów!Jeśli fale mocno uderzają o murek i woda w basenie gotuje się, zrezygnujcie z kąpieli z dzieckiem",
    dayChecklist: ["Ręczniki i stroje kąpielowe", "Krem przeciwsłoneczny"],
    events: [
      {
        time: "10:30 – 13:00",
        title: "Rejs z Los Gigantes",
        navUrl: "https://maps.app.goo.gl/uaSCPoX9rRTyucLi7",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.372622131209!2d-16.842199331479122!3d28.246615174399174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8de019bae3a7%3A0xa61c742adcc39302!2sCarpark!5e0!3m2!1spl!2spl!4v1780577670647!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Delfiny, wieloryby i niesamowite klify widziane z oceanu.",
        parkDesc:
          "W samym porcie jest płatny parking szlabanowy (Marina Puerto de Los Gigantes). Jest dość drogi, ale to najwygodniejsza opcja z dzieckiem, bo wysiadacie tuż przy łodziach. Alternatywa to darmowe miejsca przy ulicach wyżej (np. Calle Los Guíos), ale znalezienie wolnego miejsca graniczy z cudem, a podejścia są bardzo strome. Uważajcie na siebie i NIE ZOSTAWIAJCIE NICZEGO WARTOŚCIOWEGO w aucie!!!",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1780577822610!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDR2UFNVcWdF!2m2!1d28.24749954361874!2d-16.84416579214025!3f41.693896422317174!4f-20.214225314688434!5f0.5057130658680941" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "13:15 – 14:15",
        title: "Basen Isla Cangrejo",
        navUrl: "https://maps.app.goo.gl/BDe4Pbft2rcWVa5L8",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757.4370831085607!2d-16.84391151305992!3d28.241498762460218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8c402227708d%3A0x4f0639bbe252c212!2sCharco%20de%20Isla%20Cangrejo!5e0!3m2!1spl!2spl!4v1780578304055!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Kąpiel w naturalnym basenie (tylko przy spokojnym morzu!).",
        parkDesc:
          "Brak dedykowanego parkingu. Trzeba szukać darmowych miejsc wzdłuż ulicy Calle Callejon de la Arena lub sąsiednich w dzielnicy mieszkalnej. Stamtąd schodzi się pieszo w dół do oceanu.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1780578467969!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ01yOExwWnc.!2m2!1d28.24148187984822!2d-16.84313511592166!3f22.24607420309643!4f-15.263037940432767!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "15:00 – 18:00",
        title: "Plaża Abama",
        navUrl: "https://maps.app.goo.gl/ActAyRDB9NSLmzus8",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.1658447071877!2d-16.800722435453316!3d28.171871348132395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a91797b651469%3A0x92789fa7d7b23c2c!2sParking%20gratis!5e0!3m2!1spl!2spl!4v1780578713332!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        desc: "Złoty piasek i spokojna zatoka na relaks.",
        parkDesc:
          "Plaża znajduje się pod luksusowym hotelem Ritz-Carlton. Dla gości z zewnątrz przeznaczony jest darmowy parking publiczny (oznaczony jako Aparcamiento Playa Abama), znajdujący się przed wjazdem na teren hotelu. Ważne Z parkingu na plażę czeka Was około 10-15 minut spaceru asfaltową, dość stromą drogą w dół (w powrotnej drodze pod górę dla 5-latki może to być wyzwanie). Kiedyś kursowała tam hotelowa kolejka, ale obecnie jest tylko dla gości hotelu.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1780578817688!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzA1ckw3dWdF!2m2!1d28.17213839171249!2d-16.80531719217237!3f330.92512220217696!4f-6.7653196951178245!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
    ],
  },
  {
    day: "Dzień 3 (18.06): Zoo i Północ",
    dayTips:
      "Logistyka w Loro Parque: Przy wejściu koniecznie weźcie mapkę z godzinami pokazów (orki, delfiny, lwy morskie, papugi). Zaplanujcie dzień wokół nich, bo to główna atrakcja. Pokazy są tak skoordynowane, że da się zobaczyć wszystkie, ale między nimi trzeba przejść przez park. Na pokaz orek i delfinów warto przyjść 15-20 minut wcześniej, żeby zająć dobre miejsca (uwaga na 'Splash Zone' – tam można zostać całkowicie zmoczonym!). Jedzenie: W Loro Parque jedzenie jest dość drogie i typowo fast-foodowe. Można bez problemu wnieść własne przekąski i wodę dla dziecka. Bilety do Loro Parque warto mieć kupione wcześniej na telefonie.",
    dayChecklist: [
      "Bilety wstępu",
      "Wygodne buty do chodzenia",
      "Woda",
      "Jedzenie",
    ],
    events: [
      {
        time: "10:00 – 16:00",
        title: "Loro Parque",
        navUrl: "https://maps.app.goo.gl/PYQhDLc8uHAzqE718",
        desc: "Pokazy orek, delfinów i pingwinarium.",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.00008468281!2d-16.56595767026326!3d28.408685125742217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7f004df8573d%3A0x31046b12b67bffc2!2sFree%20Parking!5e0!3m2!1spl!2spl!4v1781198272929!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        parkDesc:
          "Gdzie parkować: Park posiada własny, duży parking płatny (ok. 5-7 EUR za dzień). Jeśli przyjedziecie na 10:00, bez problemu tam zaparkujecie. Alternatywa: Szukanie darmowych miejsc wzdłuż urokliwej plaży Playa de los Roques lub na ulicach dzielnicy Punta Brava, ale wiąże się to z dłuższym spacerem i stresem. Oficjalny parking to najlepsza opcja.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1781198573028!6m8!1m7!1sMPE0FgsxAt0JNT_TdyMWfA!2m2!1d28.40915289391945!2d-16.56642963535351!3f145.6297406585547!4f2.353445312042183!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "16:30 – 17:30",
        title: "Barranco de Ruiz",
        navUrl: "https://maps.app.goo.gl/62c2xuJYPZr18qLB8",
        desc: "Malowniczy wąwóz – chwila oddechu w naturze.",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.4830683386435!2d-16.62681594549143!3d28.391113487447374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7e07aabb9679%3A0x48cd619d56a3bb36!2sZona%20Recreativa%20Barranco%20de%20Ruiz!5e0!3m2!1spl!2spl!4v1781198980585!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        parkDesc:
          "Bezpośrednio przy drodze TF-5, przy strefie rekreacyjnej (Área Recreativa Barranco de Ruiz), znajduje się bezpłatny parking na kilkanaście aut.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1781199224385!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ05oOF9yV3c.!2m2!1d28.39116359353753!2d-16.62635150610592!3f219.70723724273304!4f-19.43750037089069!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
    ],
  },
  {
    day: "Dzień 4 (19.06): Dzika Anaga i Koniec Świata. Ostatni dzień - to najbardziej fotogeniczne miejsca Teneryfy.",
    dayTips:
      "Droga do Buenavista przez Masca (TF-436): Odcinek prowadzący przez góry Teno (w okolicach Mirador Altos de Baracán) jest niezwykle kręty, wąski i stromy. To wymagająca trasa dla kierowcy – jedźcie powoli, trzymajcie się swojej strony i trąbcie delikatnie przed zakrętami o zerowej widoczności. Jeśli nie czujesz się pewnie za kółkiem na bardzo stromych serpentynach, bezpieczniejszą (choć dłuższą) alternatywą jest dojazd do Buenavista od północnej strony (przez Icod de los Vinos i Garachico). Autobus 369 na Punta de Teno: Autobus kursuje mniej więcej co godzinę. Koniecznie miejcie przy sobie gotówkę w drobnych euro lub kartę płatniczą (można płacić kartą u kierowcy, ale w górach czasem ucieka zasięg terminala). Droga autobusem jedzie nad przepaściami i przez tunele – dla dziecka to dodatkowa atrakcja! Logistyka powrotu i tankowanie: Przed oddaniem auta w Las Chafiras musicie je zatankować do takiego samego stanu, jaki otrzymaliście (zazwyczaj do pełna). Tuż przy strefie przemysłowej w Las Chafiras, niedaleko biura Plus Car, znajduje się kilka dużych i tańszych stacji benzynowych (np. Shell, Petrol属性 lub Texaco). Zostawcie sobie na to 15 minut przed godziną 21:00.",
    dayChecklist: [
      "Sprawdzenie rozkładu autobusu 369",
      "Drobne na autobus 369",
      "Kurtka przeciwdeszczowa do Anagi",
      "Zatankowac auto, przed otdaniem",
    ],
    events: [
      {
        time: "10:00-11:00",
        title: "Camino Viejo al Pico del Inglés",
        navUrl: "https://maps.app.goo.gl/uWZxjZ86HHx8go1p8",
        desc: "Słynny tunel w lesie laurowym (Anaga).",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084.1819551146127!2d-16.26869204917081!3d28.534841920455058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cff706d04a7f%3A0x579c961684c8407c!2sCamino%20viejo%20al%20pico%20del%20ingl%C3%A9s!5e0!3m2!1spl!2spl!4v1781200065338!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        parkDesc:
          "Tuż obok słynnego 'tunelu' laurowego (który znajduje się na starej, zamkniętej dla ruchu drodze) jest mała zatoczka na kilka samochodów. Kawałek dalej jest duży parking przy samym punkcie widokowym Mirador del Pico del Inglés. Najlepiej zaparkować tam i podejść kawałek pieszo.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1781200181427!6m8!1m7!1s4G_7ns_4oDk_C6tp9OQc5Q!2m2!1d28.53497417410992!2d-16.26849986809447!3f67.34400213263203!4f5.4024135103315984!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "13:00 – 13:45",
        title: "Mirador Altos de Baracán",
        navUrl: "https://maps.app.goo.gl/xD84QKDYfACHeeKQ8",
        desc: "Góry Teno - granica między zieloną a suchą częścią wyspy.",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2088.262385649543!2d-16.85780271059659!3d28.327853946891867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a8a5c55de45db%3A0x26a504071cb03353!2sMirador%20Altos%20de%20Barac%C3%A1n!5e0!3m2!1spl!2spl!4v1781200488166!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        parkDesc:
          "Przy samej drodze TF-436 znajduje się wyznaczona, darmowa zatoczka parkingowa na kilkanaście samochodów.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1781200776074!6m8!1m7!1sCAoSHENJQUJJaEFEeWM1VU54YU1WbWZBbDFnQUFIOWU.!2m2!1d28.32785558144085!2d-16.85611236240211!3f323.53383919609!4f-21.36256660644436!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "14:30 – 17:30",
        title: "Punta de Teno (Buenavista del Norte – przesiadka na autobus)",
        navUrl: "https://maps.app.goo.gl/kNsuUhQ3DpuD589h9",
        desc: "Latarnia morska. Wjazd tylko autobusem 369 z Buenavista!",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.6544052299594!2d-16.848695953701405!3d28.370407962085626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a6145683db6e5%3A0x7aa96bdd3c55fa09!2sEstaci%C3%B3n%20de%20Guaguas%20Buenavista%20del%20Norte!5e0!3m2!1spl!2spl!4v1781201127091!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        parkDesc:
          "Ponieważ wjazd na Punta de Teno autem prywatnym jest w ciągu dnia zamknięty, samochód musicie zostawić w miejscowości Buenavista del Norte. Najwygodniej zaparkować na bezpłatnym parkingu tuż przy dworcu autobusowym (Estación de Autobuses de Buenavista del Norte) lub przy okolicznych ulicach. Stamtąd wsiadacie w autobus linii 369.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1781201283789!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2F1YXVUSnc.!2m2!1d28.34215003701121!2d-16.92251477662954!3f261.0674575293815!4f-3.976811102200628!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      },
      {
        time: "20:00 – 21:00",
        title: "Zwrot auta (Las Chafiras)",
        navUrl: "https://maps.app.goo.gl/Nf6jSo78UeVdhBuW8",
        desc: "Zatankuj przed oddaniem! Koniec przygody.",
        mapIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6689.727159084362!2d-16.61190766941786!3d28.052311007519783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f3dad2b9597%3A0x4eea3c0821d4c87d!2sPlus%20Car%20Rent%20a%20Car!5e0!3m2!1spl!2spl!4v1779957042671!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

        parkDesc: "Zwrot na placu głównym Plus Car.",
        streetViewIframe:
          '<iframe src="https://www.google.com/maps/embed?pb=!4v1779956448827!6m8!1m7!1skoU8Ux49h08DzRwC8grNKw!2m2!1d28.05206661827112!2d-16.608422317487!3f356.05751310964!4f-4.870469298641979!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
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
