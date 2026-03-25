/**
 * Australien – Länderdaten & Bundesstaaten/Territorien
 * Stand: 2025
 */

/* ── Australien (Land) ───────────────────────────────── */
const AUSTRALIA_COUNTRIES = [
  {
    name: 'Australien',
    code: 'au',
    capital: 'Canberra',
    founded: 1901,
    population: 26500000,
    president: 'Anthony Albanese (Premierminister); König Charles III. (Staatsoberhaupt)',
    languages: ['Englisch'],
    currency: 'Australischer Dollar (AUD)',
    area: 7692024,
    region: 'Ozeanien',
    note: 'Sechstgrößtes Land der Welt nach Fläche; einziges Land, das einen gesamten Kontinent umfasst. Bekannt für einzigartige Tierwelt (Känguru, Koala, Schnabeltier) und das Great Barrier Reef.',
    hasSubview: true,
    subviewKey: 'australia_states',
    subviewLabel: '🏛 Alle Bundesstaaten & Territorien anzeigen'
  }
];

/* ── Australische Bundesstaaten & Territorien ─────────── */
const AUSTRALIA_STATES = [
  {
    name: 'New South Wales',
    capital: 'Sydney',
    founded: 1788,
    population: 8300000,
    premier: 'Chris Minns (Labor)',
    area: 809444,
    region: 'Ostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_South_Wales.svg',
    note: 'Bevölkerungsreichster Bundesstaat Australiens. Heimat der Oper Sydney, der Harbour Bridge und des Blue Mountains-Nationalparks. Als erste britische Kolonie 1788 gegründet.'
  },
  {
    name: 'Victoria',
    capital: 'Melbourne',
    founded: 1851,
    population: 7000000,
    premier: 'Jacinta Allan (Labor)',
    area: 237629,
    region: 'Südostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Victoria_(Australia).svg',
    note: 'Melbourne gilt als Kulturhauptstadt Australiens und wurde mehrfach zur lebenswertesten Stadt der Welt gekürt. Kleinster Festlandstaat nach Fläche; Heimat des Melbourne Cup Pferderennens.'
  },
  {
    name: 'Queensland',
    capital: 'Brisbane',
    founded: 1859,
    population: 5500000,
    premier: 'David Crisafulli (Liberal National Party)',
    area: 1852642,
    region: 'Nordostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Queensland.svg',
    note: 'Zweitgrößter Bundesstaat nach Fläche. Heimat des Great Barrier Reef, des größten Korallenriffs der Welt, und des Daintree-Regenwalds – einem der ältesten tropischen Regenwälder der Erde.'
  },
  {
    name: 'South Australia',
    capital: 'Adelaide',
    founded: 1836,
    population: 1900000,
    premier: 'Peter Malinauskas (Labor)',
    area: 1044353,
    region: 'Südaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Australia.svg',
    note: 'Bekannt als „Festival State" dank zahlreicher internationaler Kulturveranstaltungen. Berühmte Weinregionen wie das Barossa Valley und McLaren Vale; Heimat der antiken Flindersberg-Kette.'
  },
  {
    name: 'Western Australia',
    capital: 'Perth',
    founded: 1829,
    population: 3000000,
    premier: 'Roger Cook (Labor)',
    area: 2529875,
    region: 'Westaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Western_Australia.svg',
    note: 'Flächengrößter Bundesstaat – mit 2,5 Mio. km² größer als Westeuropa. Heimat des Ningaloo Riffs, der Kimberley-Schluchten und bedeutender Eisenerz- und Goldvorkommen.'
  },
  {
    name: 'Tasmania',
    capital: 'Hobart',
    founded: 1825,
    population: 570000,
    premier: 'Jeremy Rockliff (Liberal)',
    area: 90758,
    region: 'Inselstaat',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tasmania.svg',
    note: 'Einziger australischer Inselstaat; liegt 240 km südlich des Festlandes über die Bass-Straße. Bekannt für unberührte Wildnis, den Tasmanischen Teufel und hochwertige Lebensmittel- und Weinproduktion.'
  },
  {
    name: 'Australian Capital Territory',
    capital: 'Canberra',
    founded: 1911,
    population: 470000,
    premier: 'Andrew Barr (Labor, Chief Minister)',
    area: 2358,
    region: 'Südostaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Australian_Capital_Territory.svg',
    note: 'Heimat der Bundeshauptstadt Canberra, die 1913 als Kompromiss zwischen Sydney und Melbourne gegründet wurde. Beherbergt das Parlament, zahlreiche Nationalmuseen und die Australian National University.'
  },
  {
    name: 'Northern Territory',
    capital: 'Darwin',
    founded: 1911,
    population: 260000,
    premier: 'Lia Finocchiaro (Country Liberal Party, Chief Minister)',
    area: 1349129,
    region: 'Nordaustralien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Northern_Territory.svg',
    note: 'Heimat von Uluru (Ayers Rock), dem heiligen Felsen der Anangu. Über 30 % der Bevölkerung sind Indigene Australier – einer der höchsten Anteile in ganz Australien. Noch kein vollwertiger Bundesstaat.'
  }
];
