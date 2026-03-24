/**
 * Deutschland – Bundesländer
 * Alle 16 Bundesländer mit Flaggen und Informationen
 * Stand: 2025
 */

const GERMANY_STATES = [
  {
    name: 'Baden-Württemberg',
    capital: 'Stuttgart',
    founded: 1952,
    population: 11300000,
    minister: 'Winfried Kretschmann (Grüne)',
    area: 35748,
    region: 'Südwestdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Baden-W%C3%BCrttemberg.svg',
    note: 'Wirtschaftsstärkstes Bundesland nach Bayern; Heimat von Daimler, Bosch, Porsche und der Schwarzwälder Kirschtorte.'
  },
  {
    name: 'Bayern',
    capital: 'München',
    founded: 1946,
    population: 13400000,
    minister: 'Markus Söder (CSU)',
    area: 70552,
    region: 'Süddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bavaria_%28striped%29.svg',
    note: 'Größtes Bundesland nach Fläche; Heimat des Oktoberfests, der Alpen und von BMW. Einziges Bundesland mit eigener Partei (CSU).'
  },
  {
    name: 'Berlin',
    capital: 'Berlin',
    founded: 1990,
    population: 3700000,
    minister: 'Kai Wegner (CDU)',
    area: 892,
    region: 'Nordostdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Berlin.svg',
    note: 'Hauptstadt und bevölkerungsreichste Stadt Deutschlands; Stadtstaat; bekannt für Kulturszene, Mauerfall und Brandenburger Tor.'
  },
  {
    name: 'Brandenburg',
    capital: 'Potsdam',
    founded: 1990,
    population: 2500000,
    minister: 'Dietmar Woidke (SPD)',
    area: 29654,
    region: 'Nordostdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Brandenburg.svg',
    note: 'Umgibt die Bundeshauptstadt Berlin; bekannt für das Schloss Sanssouci in Potsdam und die Seenlandschaft.'
  },
  {
    name: 'Bremen',
    capital: 'Bremen',
    founded: 1947,
    population: 680000,
    minister: 'Andreas Bovenschulte (SPD)',
    area: 419,
    region: 'Norddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Bremen.svg',
    note: 'Kleinstes Bundesland; besteht aus den Städten Bremen und Bremerhaven; bedeutender Seehandelsplatz seit dem Mittelalter.'
  },
  {
    name: 'Hamburg',
    capital: 'Hamburg',
    founded: 1946,
    population: 1900000,
    minister: 'Peter Tschentscher (SPD)',
    area: 755,
    region: 'Norddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hamburg.svg',
    note: 'Zweitgrößte Stadt Deutschlands; wichtigster Seehafen; "Tor zur Welt"; bekannt für die Speicherstadt (UNESCO) und die Reeperbahn.'
  },
  {
    name: 'Hessen',
    capital: 'Wiesbaden',
    founded: 1946,
    population: 6300000,
    minister: 'Boris Rhein (CDU)',
    area: 21115,
    region: 'Mitteldeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hesse.svg',
    note: 'Frankfurt am Main ist Europas wichtigstes Finanzzentrum mit dem Sitz der EZB; Heimat des Frankfurter Flughafens.'
  },
  {
    name: 'Mecklenburg-Vorpommern',
    capital: 'Schwerin',
    founded: 1990,
    population: 1600000,
    minister: 'Manuela Schwesig (SPD)',
    area: 23214,
    region: 'Norddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mecklenburg-Vorpommern.svg',
    note: 'Land der Seen und Ostseeküste; dünn besiedeltestes Bundesland; bekannt für Rügen, Usedom und die Hansestädte.'
  },
  {
    name: 'Niedersachsen',
    capital: 'Hannover',
    founded: 1946,
    population: 8000000,
    minister: 'Stephan Weil (SPD)',
    area: 47710,
    region: 'Norddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Lower_Saxony.svg',
    note: 'Zweitgrößtes Bundesland nach Fläche; Heimat von Volkswagen (Wolfsburg) und dem Harz-Gebirge.'
  },
  {
    name: 'Nordrhein-Westfalen',
    capital: 'Düsseldorf',
    founded: 1946,
    population: 18100000,
    minister: 'Hendrik Wüst (CDU)',
    area: 34113,
    region: 'Westdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Rhine-Westphalia.svg',
    note: 'Bevölkerungsreichstes Bundesland; industrielles Herz Deutschlands (Ruhrgebiet); Heimat von Köln, Düsseldorf und Dortmund.'
  },
  {
    name: 'Rheinland-Pfalz',
    capital: 'Mainz',
    founded: 1947,
    population: 4100000,
    minister: 'Alexander Schweitzer (SPD)',
    area: 19854,
    region: 'Westdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Rhineland-Palatinate.svg',
    note: 'Bedeutendstes Weinanbaugebiet Deutschlands; geprägt durch Rheintäler und den Pfälzerwald (UNESCO).'
  },
  {
    name: 'Saarland',
    capital: 'Saarbrücken',
    founded: 1957,
    population: 990000,
    minister: 'Anke Rehlinger (SPD)',
    area: 2569,
    region: 'Westdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saarland.svg',
    note: 'Kleinstes Flächenbundesland (ohne Stadtstaaten); nach dem Zweiten Weltkrieg zunächst von Frankreich verwaltet, 1957 zu Deutschland.'
  },
  {
    name: 'Sachsen',
    capital: 'Dresden',
    founded: 1990,
    population: 4000000,
    minister: 'Michael Kretschmer (CDU)',
    area: 18416,
    region: 'Ostdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saxony.svg',
    note: 'Kulturreichstes ostdeutsches Land; Dresden ("Elbflorenz") und Leipzig (Musikstadt); bedeutende Halbleiterindustrie.'
  },
  {
    name: 'Sachsen-Anhalt',
    capital: 'Magdeburg',
    founded: 1990,
    population: 2100000,
    minister: 'Reiner Haseloff (CDU)',
    area: 20452,
    region: 'Ostdeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Saxony-Anhalt.svg',
    note: 'Heimat von Lutherstadt Wittenberg (Reformationsort) und dem Bauhaus-Erbe in Dessau (UNESCO).'
  },
  {
    name: 'Schleswig-Holstein',
    capital: 'Kiel',
    founded: 1946,
    population: 2900000,
    minister: 'Daniel Günther (CDU)',
    area: 15804,
    region: 'Norddeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Schleswig-Holstein.svg',
    note: 'Einziges Bundesland mit Küste an zwei Meeren (Nord- und Ostsee); bekannt für den Nord-Ostsee-Kanal.'
  },
  {
    name: 'Thüringen',
    capital: 'Erfurt',
    founded: 1990,
    population: 2100000,
    minister: 'Mario Voigt (CDU)',
    area: 16202,
    region: 'Mitteldeutschland',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Thuringia.svg',
    note: '"Grünes Herz Deutschlands"; Heimat von Goethe (Weimar), Bach (Eisenach) und der Wartburg (UNESCO).'
  }
];
