/**
 * Südamerika – Länderdaten
 * Alle 12 souveränen Staaten Südamerikas
 * Stand: 2025
 */

const SOUTH_AMERICA_COUNTRIES = [
  {
    name: 'Argentinien',
    code: 'ar',
    capital: 'Buenos Aires',
    founded: 1816,
    population: 46000000,
    president: 'Javier Milei',
    languages: ['Spanisch'],
    currency: 'Argentinischer Peso (ARS)',
    area: 2780400,
    region: 'Südliches Südamerika',
    note: 'Zweitgrößtes Land Südamerikas; Heimat von Tango, Messi und der Pampas-Steppe. Unabhängigkeit von Spanien 1816.'
  },
  {
    name: 'Bolivien',
    code: 'bo',
    capital: 'Sucre (konstitutionell) / La Paz (Regierungssitz)',
    founded: 1825,
    population: 12000000,
    president: 'Luis Arce',
    languages: ['Spanisch', 'Quechua', 'Aymara'],
    currency: 'Boliviano (BOB)',
    area: 1098581,
    region: 'Zentrales Südamerika',
    note: 'Eines der wenigen Binnenländer Südamerikas; La Paz ist mit 3.640 m eine der höchstgelegenen Hauptstädte der Welt.'
  },
  {
    name: 'Brasilien',
    code: 'br',
    capital: 'Brasília',
    founded: 1822,
    population: 215000000,
    president: 'Luiz Inácio Lula da Silva',
    languages: ['Portugiesisch'],
    currency: 'Brasilianischer Real (BRL)',
    area: 8515767,
    region: 'Östliches Südamerika',
    note: 'Größtes Land Südamerikas und fünftgrößtes der Welt; Heimat des Amazonas-Regenwaldes und des Karnevals in Rio.'
  },
  {
    name: 'Chile',
    code: 'cl',
    capital: 'Santiago',
    founded: 1818,
    population: 19000000,
    president: 'Gabriel Boric',
    languages: ['Spanisch'],
    currency: 'Chilenischer Peso (CLP)',
    area: 756102,
    region: 'Westliches Südamerika',
    note: 'Längstes Land der Welt (4.300 km); von der Atacama-Wüste bis zur Antarktis. Größter Kupferproduzent weltweit.'
  },
  {
    name: 'Ecuador',
    code: 'ec',
    capital: 'Quito',
    founded: 1830,
    population: 18000000,
    president: 'Daniel Noboa',
    languages: ['Spanisch', 'Kichwa'],
    currency: 'US-Dollar (USD)',
    area: 283561,
    region: 'Nordwestliches Südamerika',
    note: 'Liegt direkt am Äquator (daher der Name); Heimat der Galápagos-Inseln, die Darwin zu seiner Evolutionstheorie inspirierten.'
  },
  {
    name: 'Guyana',
    code: 'gy',
    capital: 'Georgetown',
    founded: 1966,
    population: 800000,
    president: 'Irfaan Ali',
    languages: ['Englisch'],
    currency: 'Guyanischer Dollar (GYD)',
    area: 214969,
    region: 'Nördliches Südamerika',
    note: 'Einziger englischsprachiger Staat Südamerikas; seit 2019 bedeutender Ölproduzent durch große Offshore-Funde.'
  },
  {
    name: 'Kolumbien',
    code: 'co',
    capital: 'Bogotá',
    founded: 1810,
    population: 52000000,
    president: 'Gustavo Petro',
    languages: ['Spanisch'],
    currency: 'Kolumbianischer Peso (COP)',
    area: 1141748,
    region: 'Nördliches Südamerika',
    note: 'Einziges Land Südamerikas mit Küste an Atlantik und Pazifik; größter Kaffeeexporteur Lateinamerikas.'
  },
  {
    name: 'Paraguay',
    code: 'py',
    capital: 'Asunción',
    founded: 1811,
    population: 7000000,
    president: 'Santiago Peña',
    languages: ['Spanisch', 'Guaraní'],
    currency: 'Guaraní (PYG)',
    area: 406752,
    region: 'Zentrales Südamerika',
    note: 'Eines der zwei Binnenländer Südamerikas; Guaraní ist neben Spanisch offizielle Amtssprache und wird von 90 % gesprochen.'
  },
  {
    name: 'Peru',
    code: 'pe',
    capital: 'Lima',
    founded: 1821,
    population: 33000000,
    president: 'Dina Boluarte',
    languages: ['Spanisch', 'Quechua', 'Aymara'],
    currency: 'Nuevo Sol (PEN)',
    area: 1285216,
    region: 'Westliches Südamerika',
    note: 'Heimat der Inka-Zivilisation und von Machu Picchu; drittgrößtes Land Südamerikas und bedeutender Kupfer- und Goldproduzent.'
  },
  {
    name: 'Suriname',
    code: 'sr',
    capital: 'Paramaribo',
    founded: 1975,
    population: 600000,
    president: 'Chan Santokhi',
    languages: ['Niederländisch', 'Sranan Tongo'],
    currency: 'Surinamischer Dollar (SRD)',
    area: 163820,
    region: 'Nördliches Südamerika',
    note: 'Kleinster souveräner Staat Südamerikas; einziger niederländischsprachiger Staat auf dem Kontinent.'
  },
  {
    name: 'Uruguay',
    code: 'uy',
    capital: 'Montevideo',
    founded: 1828,
    population: 3500000,
    president: 'Yamandú Orsi',
    languages: ['Spanisch'],
    currency: 'Uruguayischer Peso (UYU)',
    area: 176215,
    region: 'Südliches Südamerika',
    note: 'Gilt als eines der stabilsten und fortschrittlichsten Länder Lateinamerikas; erstes Land weltweit, das Cannabis legalisierte.'
  },
  {
    name: 'Venezuela',
    code: 've',
    capital: 'Caracas',
    founded: 1811,
    population: 28000000,
    president: 'Nicolás Maduro',
    languages: ['Spanisch'],
    currency: 'Bolívar Soberano (VES)',
    area: 916445,
    region: 'Nördliches Südamerika',
    note: 'Größte nachgewiesene Ölreserven der Welt; der Engelssturz (979 m) ist der höchste Wasserfall der Erde.'
  }
];
