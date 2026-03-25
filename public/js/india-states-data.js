/**
 * Indien – Bundesstaaten & Unionsterritorien
 * 28 Bundesstaaten + 8 Unionsterritorien
 * Stand: 2025
 */

const INDIA_STATES = [
  /* ── Bundesstaaten ─── */
  {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    founded: 1956,
    population: 49400000,
    cm: 'N. Chandrababu Naidu (TDP)',
    area: 162975,
    region: 'Südindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Bekannt als "Land der Reisfelder"; Amaravati ist eine neu geplante Hauptstadt am Ufer des Krishna-Flusses; bedeutender Produzent von Chilis und Reis.'
  },
  {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    founded: 1987,
    population: 1400000,
    cm: 'Pema Khandu (BJP)',
    area: 83743,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Östlichster Bundesstaat Indiens; "Land der aufgehenden Sonne"; grenzt an China, Bhutan und Myanmar; über 26 Hauptstämme mit eigenen Sprachen und Kulturen.'
  },
  {
    name: 'Assam',
    capital: 'Dispur',
    founded: 1950,
    population: 35600000,
    cm: 'Himanta Biswa Sarma (BJP)',
    area: 78438,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Größter Teeproduzent Indiens; Heimat des Kaziranga-Nationalparks mit dem größten Bestand an Panzernashörnern weltweit; liegt im Brahmaputra-Tal.'
  },
  {
    name: 'Bihar',
    capital: 'Patna',
    founded: 1936,
    population: 124800000,
    cm: 'Nitish Kumar (JDU)',
    area: 94163,
    region: 'Ostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Birthplace of Buddhism (Bodh Gaya) und Sikhismus (Guru Gobind Singh); Patna (antikes Pataliputra) war Hauptstadt des Maurya-Reiches; bedeutendes Agrarzentrum.'
  },
  {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    founded: 2000,
    population: 29400000,
    cm: 'Vishnu Deo Sai (BJP)',
    area: 135192,
    region: 'Zentralindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Reichste Mineralienreserven Indiens; etwa 44 % des Staatsgebiets sind bewaldet; Heimat zahlreicher Adivasi-Völker (Ureinwohner); bedeutende Stahlproduktion.'
  },
  {
    name: 'Goa',
    capital: 'Panaji',
    founded: 1961,
    population: 1500000,
    cm: 'Pramod Sawant (BJP)',
    area: 3702,
    region: 'Westindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Kleinster Bundesstaat Indiens; ehemals portugiesische Kolonie (bis 1961); beliebtestes Touristenziel mit Traumstränden; bekannt für seinen Karneval und seine indo-portugiesische Architektur.'
  },
  {
    name: 'Gujarat',
    capital: 'Gandhinagar',
    founded: 1960,
    population: 63900000,
    cm: 'Bhupendra Patel (BJP)',
    area: 196024,
    region: 'Westindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Geburtsort von Mahatma Gandhi; bedeutendste Industrieprovinz Indiens; Heimat der asiatischen Löwen im Gir-Nationalpark; größter Diamantenschleifstandort weltweit.'
  },
  {
    name: 'Haryana',
    capital: 'Chandigarh',
    founded: 1966,
    population: 28900000,
    cm: 'Nayab Singh Saini (BJP)',
    area: 44212,
    region: 'Nordindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Kurukshetra (Ort der Bhagavad Gita-Ereignisse) liegt hier; einer der wohlhabendsten Bundesstaaten; bedeutendes Automobilzentrum (Maruti Suzuki in Gurgaon/Gurugram).'
  },
  {
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    founded: 1971,
    population: 7300000,
    cm: 'Sukhvinder Singh Sukhu (INC)',
    area: 55673,
    region: 'Nordindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Im westlichen Himalaya gelegen; Shimla war Sommerhauptstadt des Britisch-Indischen Reiches; bekannt für Apfelanbau, Trekking und buddhistische Klöster.'
  },
  {
    name: 'Jharkhand',
    capital: 'Ranchi',
    founded: 2000,
    population: 38600000,
    cm: 'Hemant Soren (JMM)',
    area: 79716,
    region: 'Ostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Reichste Mineralienressourcen Indiens (Kohle, Eisen, Kupfer, Uran); bedeutende Adivasi-Bevölkerung (32 %); Betreiber des größten Stahlwerks Asiens in Jamshedpur (Tata Steel).'
  },
  {
    name: 'Karnataka',
    capital: 'Bengaluru',
    founded: 1956,
    population: 67600000,
    cm: 'Siddaramaiah (INC)',
    area: 191791,
    region: 'Südindien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Karnataka.svg',
    note: 'Bengaluru ist Indiens Silicon Valley mit dem größten IT-Sektor; Heimat des Mysore-Palastes und der Welterbestätte Hampi; größter Kaffee- und Seidenproduzent Indiens.'
  },
  {
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    founded: 1956,
    population: 35000000,
    cm: 'Pinarayi Vijayan (CPI-M)',
    area: 38852,
    region: 'Südindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Höchste Alphabetisierungsrate und HDI in Indien; bekannt für Ayurveda, Kathakali-Tanz, Backwater-Hausboote und Gewürzanbau; "Gottes eigenes Land".'
  },
  {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    founded: 1956,
    population: 85000000,
    cm: 'Mohan Yadav (BJP)',
    area: 308252,
    region: 'Zentralindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Größter Bundesstaat Indiens nach Fläche; Heimat des Kanha-Nationalparks (Vorbild für Kiplings "Das Dschungelbuch"); UNESCO-Welterbestätten in Khajuraho und Sanchi.'
  },
  {
    name: 'Maharashtra',
    capital: 'Mumbai',
    founded: 1960,
    population: 123000000,
    cm: 'Devendra Fadnavis (BJP)',
    area: 307713,
    region: 'Westindien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maharashtra.svg',
    note: 'Größter Bundesstaat nach Wirtschaftsleistung; Mumbai ist Indiens Finanz- und Filmhauptstadt (Bollywood); Heimat der Ellora- und Ajanta-Höhlen (UNESCO).'
  },
  {
    name: 'Manipur',
    capital: 'Imphal',
    founded: 1972,
    population: 3200000,
    cm: 'N. Biren Singh (BJP)',
    area: 22327,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Heimat der Polo-Sportart (hier erfunden); Loktak-See ist der größte Süßwassersee Nordostindiens mit schwimmenden Inseln (Phumdis); "Juwel Indiens".'
  },
  {
    name: 'Meghalaya',
    capital: 'Shillong',
    founded: 1972,
    population: 3500000,
    cm: 'Conrad Sangma (NPP)',
    area: 22429,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: '"Wohnort der Wolken"; Mawsynram ist eine der regenreichsten Orte der Welt; bekannt für lebende Brücken aus Wurzeln der Gummibäume; matrilineare Gesellschaftsstruktur.'
  },
  {
    name: 'Mizoram',
    capital: 'Aizawl',
    founded: 1987,
    population: 1300000,
    cm: 'Lalduhoma (ZPM)',
    area: 21081,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Über 87 % der Bevölkerung sind Christen (höchster Anteil in Indien); einer der am stärksten alphabetisierten Bundesstaaten; grenzt an Myanmar und Bangladesch.'
  },
  {
    name: 'Nagaland',
    capital: 'Kohima',
    founded: 1963,
    population: 2200000,
    cm: 'Neiphiu Rio (NDPP)',
    area: 16579,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Heimat von 16 Naga-Stämmen mit einzigartigen Traditionen; Kohima war Schauplatz einer entscheidenden WW2-Schlacht; bekannt für das jährliche Hornbill-Festival.'
  },
  {
    name: 'Odisha',
    capital: 'Bhubaneswar',
    founded: 1936,
    population: 46400000,
    cm: 'Mohan Majhi (BJP)',
    area: 155707,
    region: 'Ostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Bekannt als "Tempel-Land"; Konarak-Sonnentempel und Jagannath-Tempel in Puri sind UNESCO-Welterbe; Puri-Strand und Chilika-See (Asiens größte Küstenlagune).'
  },
  {
    name: 'Punjab',
    capital: 'Chandigarh',
    founded: 1966,
    population: 30100000,
    cm: 'Bhagwant Mann (AAP)',
    area: 50362,
    region: 'Nordindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: '"Land der fünf Flüsse"; Kornkammer Indiens (größter Weizenproduzent); Heimat des Goldenen Tempels in Amritsar (heiligster Ort des Sikhismus); teilt sich Chandigarh mit Haryana.'
  },
  {
    name: 'Rajasthan',
    capital: 'Jaipur',
    founded: 1949,
    population: 81000000,
    cm: 'Bhajan Lal Sharma (BJP)',
    area: 342239,
    region: 'Nordwestindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Größter Bundesstaat Indiens; "Land der Könige" mit zahlreichen Maharaja-Palästen und Forts; Thar-Wüste; Jaipur ("Pinke Stadt") ist UNESCO-Welterbe.'
  },
  {
    name: 'Sikkim',
    capital: 'Gangtok',
    founded: 1975,
    population: 700000,
    cm: 'Prem Singh Tamang (SKM)',
    area: 7096,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Kleinster Bundesstaat nach Fläche; erst 1975 Indien beigetreten; Heimat des Kangchendzönga (dritthöchster Berg der Welt); erster 100 % organischer Bundesstaat Indiens.'
  },
  {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    founded: 1950,
    population: 77800000,
    cm: 'M.K. Stalin (DMK)',
    area: 130058,
    region: 'Südindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Zweitgrößtes Automobilzentrum Indiens; "Dravidische Kulturhauptstatt" mit über 2.000 Jahre alter Tamil-Sprache; Heimat des Bharatanatyam-Tanzes und des Brihadeeswarar-Tempels (UNESCO).'
  },
  {
    name: 'Telangana',
    capital: 'Hyderabad',
    founded: 2014,
    population: 37000000,
    cm: 'A. Revanth Reddy (INC)',
    area: 112077,
    region: 'Südindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Jüngster Bundesstaat (gegr. 2014); Hyderabad ist bedeutendes IT- und Pharmzentrum ("Cyberabad"); bekannt für Hyderabadi Biryani und die historische Charminar-Moschee.'
  },
  {
    name: 'Tripura',
    capital: 'Agartala',
    founded: 1972,
    population: 4000000,
    cm: 'Manik Saha (BJP)',
    area: 10486,
    region: 'Nordostindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Kleiner Bundesstaat, fast vollständig von Bangladesch umgeben; bekannt für Tempel (Ujjayanta-Palast) und Bambuswälder; bedeutendes Gummi- und Teezentrum.'
  },
  {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    founded: 1950,
    population: 241000000,
    cm: 'Yogi Adityanath (BJP)',
    area: 240928,
    region: 'Nordindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Bevölkerungsreichster Bundesstaat Indiens; Heimat des Taj Mahal in Agra (UNESCO), der heiligen Stadt Varanasi am Ganges und des Geburtsorts von Ram (Ayodhya).'
  },
  {
    name: 'Uttarakhand',
    capital: 'Dehradun',
    founded: 2000,
    population: 11300000,
    cm: 'Pushkar Singh Dhami (BJP)',
    area: 53483,
    region: 'Nordindien',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: '"Land der Götter"; Heimat wichtiger hinduistischer Pilgerstätten (Char Dham: Badrinath, Kedarnath, Gangotri, Yamunotri); Quellgebiet des Ganges; bekannte Trekking-Destination.'
  },
  {
    name: 'West Bengal',
    capital: 'Kolkata',
    founded: 1947,
    population: 99600000,
    cm: 'Mamata Banerjee (AITC)',
    area: 88752,
    region: 'Ostindien',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_West_Bengal.svg',
    note: 'Kulturelles Zentrum Indiens; Kolkata (ehemals Kalkutta) war Hauptstadt Britisch-Indiens; Geburtsort von Rabindranath Tagore (Nobelpreis); Sundarban-Delta (UNESCO-Welterbe).'
  },

  /* ── Unionsterritorien ─── */
  {
    name: 'Andaman und Nikobar-Inseln',
    capital: 'Port Blair',
    founded: 1956,
    population: 400000,
    cm: 'D.K. Joshi (Lt. Gouverneur)',
    area: 8249,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Archipel im Indischen Ozean mit 572 Inseln; Zellulärgefängnis in Port Blair (britische Kolonialgeschichte); Heimat der Sentinelesen (unkontaktiertes Volk).'
  },
  {
    name: 'Chandigarh',
    capital: 'Chandigarh',
    founded: 1966,
    population: 1100000,
    cm: 'Banwarilal Purohit (Administrator)',
    area: 114,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Geplante Hauptstadt für Punjab und Haryana; vom Schweizer Architekten Le Corbusier entworfen; eine der am besten geplanten Städte Asiens mit hoher Lebensqualität.'
  },
  {
    name: 'Dadra und Nagar Haveli und Daman und Diu',
    capital: 'Daman',
    founded: 2020,
    population: 600000,
    cm: 'Praful Patel (Administrator)',
    area: 603,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Fusioniertes UT seit 2020; ehemals portugiesische Enklaven (bis 1961); bekannt für Strände, Festungen und günstige Steuern (daher viele Industriebetriebe).'
  },
  {
    name: 'Delhi (Nationales Hauptstadtgebiet)',
    capital: 'Neu-Delhi',
    founded: 1911,
    population: 33800000,
    cm: 'Rekha Gupta (Ministerpräsidentin, BJP); V.K. Saxena (Lt. Gouverneur)',
    area: 1484,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Nationale Hauptstadt und Regierungssitz Indiens; zweitbevölkerungsreichste Stadtregion der Welt; Heimat von Qutb Minar, Red Fort und Humayuns Grabmal (UNESCO).'
  },
  {
    name: 'Jammu und Kashmir',
    capital: 'Srinagar (Sommer) / Jammu (Winter)',
    founded: 2019,
    population: 13600000,
    cm: 'Manoj Sinha (Lt. Gouverneur)',
    area: 42241,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Ehemals Bundesstaat, seit 2019 UT; politisch umstrittene Region, auch von Pakistan und China beansprucht; Dal-See in Srinagar mit schwimmenden Hausbooten; "Paradies auf Erden".'
  },
  {
    name: 'Ladakh',
    capital: 'Leh',
    founded: 2019,
    population: 290000,
    cm: 'B.D. Mishra (Lt. Gouverneur)',
    area: 59146,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Höchstgelegenes bewohntes Gebiet Indiens; seit 2019 eigenes UT; Heimat tibetisch-buddhistischer Klöster; Grenzt an China und Pakistan; beliebtes Motorrad-Trekking-Ziel (Leh-Manali Highway).'
  },
  {
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    founded: 1956,
    population: 65000,
    cm: 'Praful Patel (Administrator)',
    area: 32,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Kleinstes UT Indiens; Archipel von 36 Koralleninseln im Arabischen Meer; hauptsächlich muslimische Bevölkerung; kristallklares Wasser und Korallenriffe; kein Tourismus in großem Maßstab.'
  },
  {
    name: 'Puducherry',
    capital: 'Puducherry',
    founded: 1962,
    population: 1400000,
    cm: 'N. Rangasamy (AINRC); K. Kailashnathan (Lt. Gouverneur)',
    area: 479,
    region: 'Unionsgebiet',
    flagUrl: 'https://flagcdn.com/w160/in.png',
    note: 'Ehemals französische Kolonie (bis 1962); bekannt für französische Kolonialarchitektur und das internationale Gemeinschaftsprojekt Auroville; Heimat des Sri Aurobindo Ashrams.'
  }
];
