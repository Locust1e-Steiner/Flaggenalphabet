/**
 * China – Verwaltungseinheiten
 * 22 Provinzen, 5 Autonome Regionen, 4 Regierungsunmittelbare Städte, 2 Sonderverwaltungsregionen
 * Stand: 2025
 * Hinweis: Chinas Provinzen haben keine offiziellen eigenen Flaggen (Einheitsstaat).
 */

const CHINA_PROVINCES = [
  /* ── Regierungsunmittelbare Städte ─── */
  {
    name: 'Peking (Beijing)',
    capital: 'Peking',
    founded: 1949,
    population: 21900000,
    governor: 'Yin Yong (Bürgermeister)',
    area: 16800,
    region: 'Regierungsunmittelbare Stadt',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Hauptstadt und politisches Zentrum Chinas; Heimat der Verbotenen Stadt, des Tiananmen-Platzes und der Olympiastätten von 2008.'
  },
  {
    name: 'Shanghai',
    capital: 'Shanghai',
    founded: 1949,
    population: 24900000,
    governor: 'Gong Zheng (Bürgermeister)',
    area: 6340,
    region: 'Regierungsunmittelbare Stadt',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Größte Stadt Chinas und wichtigstes Wirtschafts- und Finanzzentrum; Heimat des Bundes und des modernen Pudong-Viertels mit dem Oriental Pearl Tower.'
  },
  {
    name: 'Tianjin',
    capital: 'Tianjin',
    founded: 1949,
    population: 13900000,
    governor: 'Zhang Gong (Bürgermeister)',
    area: 11900,
    region: 'Regierungsunmittelbare Stadt',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Wichtiger Hafen- und Industriestandort nahe Peking; war im 19. Jahrhundert ein bedeutendes Handelszentrum mit europäischen Konzessionsgebieten.'
  },
  {
    name: 'Chongqing',
    capital: 'Chongqing',
    founded: 1997,
    population: 32000000,
    governor: 'Hu Henghua (Bürgermeister)',
    area: 82400,
    region: 'Regierungsunmittelbare Stadt',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Bevölkerungsreichste Verwaltungseinheit Chinas; liegt am Zusammenfluss von Yangtze und Jialing; Ausgangspunkt für die Drei-Schluchten-Kreuzfahrten.'
  },

  /* ── Provinzen ─── */
  {
    name: 'Anhui',
    capital: 'Hefei',
    founded: 1667,
    population: 61000000,
    governor: 'Wang Qingxian (Gouverneur)',
    area: 140100,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Bekannt für die malerischen Huangshan-Berge (Gelbe Berge), die Inspiration für traditionelle chinesische Tuschmalerei; Geburtsort des Taoismus.'
  },
  {
    name: 'Fujian',
    capital: 'Fuzhou',
    founded: 1949,
    population: 41000000,
    governor: 'Zhao Long (Gouverneur)',
    area: 121400,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Küstenprovinz gegenüber Taiwan; bedeutendes Auswanderungszentrum – viele Überseechinesen in Südostasien stammen aus Fujian; Heimat des Wuyishan UNESCO-Welterbes.'
  },
  {
    name: 'Gansu',
    capital: 'Lanzhou',
    founded: 1949,
    population: 25000000,
    governor: 'Liu Xinglong (Gouverneur)',
    area: 455000,
    region: 'Nordwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Schmale Provinz entlang der historischen Seidenstraße; beherbergt die weltberühmten Dunhuang-Grotten (Mogao-Höhlen) mit buddhistischen Wandmalereien.'
  },
  {
    name: 'Guangdong',
    capital: 'Guangzhou',
    founded: 1949,
    population: 130000000,
    governor: 'Wang Weizhong (Gouverneur)',
    area: 180000,
    region: 'Südchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Bevölkerungsreichste und wirtschaftsstärkste Provinz Chinas; umfasst die Megastädte Guangzhou, Shenzhen und Dongguan; Herzstück der Greater Bay Area.'
  },
  {
    name: 'Guizhou',
    capital: 'Guiyang',
    founded: 1949,
    population: 36000000,
    governor: 'Li Bingchao (Gouverneur)',
    area: 176000,
    region: 'Südwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Gebirgige Provinz mit vielfältigen ethnischen Minderheiten; Heimat des Huangguoshu-Wasserfalls, des größten in China; bekannt für Maotai-Schnaps.'
  },
  {
    name: 'Hainan',
    capital: 'Haikou',
    founded: 1988,
    population: 10000000,
    governor: 'Liu Xiaoming (Gouverneur)',
    area: 35400,
    region: 'Südchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Chinas einzige Tropeninsel-Provinz; seit 2018 im Aufbau als Freihandelszone; beliebtestes Reiseziel für chinesische Touristen mit tropischen Stränden.'
  },
  {
    name: 'Hebei',
    capital: 'Shijiazhuang',
    founded: 1949,
    population: 75000000,
    governor: 'Wang Zhengpu (Gouverneur)',
    area: 188000,
    region: 'Nordchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Umgibt die Hauptstadt Peking; beherbergt bedeutende Abschnitte der Chinesischen Mauer; Heimat der Sommerresidenz der Qing-Kaiserdynastie in Chengde.'
  },
  {
    name: 'Heilongjiang',
    capital: 'Harbin',
    founded: 1949,
    population: 31000000,
    governor: 'Liang Huiling (Gouverneurin)',
    area: 473000,
    region: 'Nordostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Nördlichste Provinz Chinas, grenzt an Russland; Harbin ist bekannt für das weltberühmte Internationales Eis- und Schneefestival (Januar/Februar).'
  },
  {
    name: 'Henan',
    capital: 'Zhengzhou',
    founded: 1949,
    population: 99000000,
    governor: 'Wang Kai (Gouverneur)',
    area: 167000,
    region: 'Zentralchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Wiege der chinesischen Zivilisation; Heimat des Shaolin-Klosters (Ursprung des Kung Fu) und der historischen Hauptstadt Luoyang mit den Longmen-Grotten.'
  },
  {
    name: 'Hubei',
    capital: 'Wuhan',
    founded: 1949,
    population: 58000000,
    governor: 'Wang Zhonglin (Gouverneur)',
    area: 186000,
    region: 'Zentralchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Heimat des Drei-Schluchten-Damms am Yangtze (größtes Wasserkraftwerk der Welt); Wuhan ist wichtiges Industrie- und Verkehrszentrum Zentralchinas.'
  },
  {
    name: 'Hunan',
    capital: 'Changsha',
    founded: 1949,
    population: 66000000,
    governor: 'Mao Weiming (Gouverneur)',
    area: 212000,
    region: 'Zentralchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Geburtsort von Mao Zedong; Heimat des Zhangjiajie-Nationalparks mit den Sandsteinsäulen, die als Vorbild für die schwebenden Berge in "Avatar" dienten.'
  },
  {
    name: 'Jiangsu',
    capital: 'Nanjing',
    founded: 1949,
    population: 85000000,
    governor: 'Xu Kunlin (Gouverneur)',
    area: 107000,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Eine der wohlhabendsten Provinzen Chinas; Nanjing war mehrfach Hauptstadt; beherbergt den Zhongshan-Mausoleum und die antike Stadtmauer aus der Ming-Dynastie.'
  },
  {
    name: 'Jiangxi',
    capital: 'Nanchang',
    founded: 1949,
    population: 45000000,
    governor: 'Ye Jianchun (Gouverneur)',
    area: 167000,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Heimat des Lushan-Gebirges und des Poyang-Sees (größter Süßwassersee Chinas); Nanchang war Schauplatz des Volksaufstands von 1927 (Beginn der Roten Armee).'
  },
  {
    name: 'Jilin',
    capital: 'Changchun',
    founded: 1949,
    population: 22000000,
    governor: 'Hu Yuting (Gouverneur)',
    area: 187000,
    region: 'Nordostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Teil des historischen Mandschureis; Changchun war Hauptstadt des japanischen Marionettenstaates Mandschukuo (1932–1945); bedeutendes Automobilzentrum (FAW-Volkswagen).'
  },
  {
    name: 'Liaoning',
    capital: 'Shenyang',
    founded: 1949,
    population: 42000000,
    governor: 'Li Le (Gouverneur)',
    area: 148000,
    region: 'Nordostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Industrielle Kernregion Nordostchinas ("Rust Belt"); Shenyang war Hauptstadt der Qing-Dynastie vor der Übernahme Pekings; beherbergt den Kaiserpalast von Shenyang.'
  },
  {
    name: 'Qinghai',
    capital: 'Xining',
    founded: 1949,
    population: 6000000,
    governor: 'Wu Xiaojun (Gouverneur)',
    area: 722000,
    region: 'Nordwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Heimat des Qinghai-Sees (größter Salzsee Chinas); Quellgebiet von Yangtze, Gelber Fluss und Mekong; einer der am dünnsten besiedelten Regionen Chinas.'
  },
  {
    name: 'Shaanxi',
    capital: "Xi'an",
    founded: 1949,
    population: 40000000,
    governor: 'Zhao Gang (Gouverneur)',
    area: 206000,
    region: 'Nordwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: "Xi'an (ehemals Chang'an) war Ausgangspunkt der Seidenstraße und Hauptstadt unter 13 Dynastien; Heimat der weltberühmten Terrakotta-Armee von Kaiser Qin Shi Huang."
  },
  {
    name: 'Shandong',
    capital: 'Jinan',
    founded: 1949,
    population: 102000000,
    governor: 'Zhou Nai Xiang (Gouverneur)',
    area: 158000,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Geburtsort von Konfuzius und Mengzi; Heimat des heiligen Berges Taishan und der Hafenstadt Qingdao (bekannt für Tsingtao-Bier, ehemals deutsches Pachtgebiet).'
  },
  {
    name: 'Shanxi',
    capital: 'Taiyuan',
    founded: 1949,
    population: 36000000,
    governor: 'Jin Zhuanglong (Gouverneur)',
    area: 156000,
    region: 'Nordchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Kohle-Hauptregion Chinas; Heimat des Pingyao-Altstadtviertels (UNESCO-Welterbe) und des Wutaishan, einem der vier heiligen buddhistischen Berge Chinas.'
  },
  {
    name: 'Sichuan',
    capital: 'Chengdu',
    founded: 1949,
    population: 84000000,
    governor: 'Huang Qiang (Gouverneur)',
    area: 486000,
    region: 'Südwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Heimat des Großen Roten Pandas und des Chengdu Research Base of Giant Panda Breeding; bekannt für seine scharfe Sichuan-Küche; Leshan-Riesenbuddha (UNESCO).'
  },
  {
    name: 'Yunnan',
    capital: 'Kunming',
    founded: 1949,
    population: 47000000,
    governor: 'Wang Yu (Gouverneur)',
    area: 394000,
    region: 'Südwestchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Vielfältigste Provinz Chinas mit 25 ethnischen Minderheiten; grenzt an Myanmar, Laos und Vietnam; Heimat des Steinwaldes Shilin und der Altstadt Lijiang (UNESCO).'
  },
  {
    name: 'Zhejiang',
    capital: 'Hangzhou',
    founded: 1949,
    population: 65000000,
    governor: 'Liu Jian (Gouverneur)',
    area: 105000,
    region: 'Ostchina',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Einer der wohlhabendsten Provinzen; Heimat des Alibaba-Konzerns (gegr. in Hangzhou); Westlake (Xi Hu) in Hangzhou ist eines der schönsten Landschaftsszenerien Chinas.'
  },

  /* ── Autonome Regionen ─── */
  {
    name: 'Guangxi (Autonome Region)',
    capital: 'Nanning',
    founded: 1958,
    population: 52000000,
    governor: 'Lan Tianli (Vorsitzender)',
    area: 236000,
    region: 'Autonome Region',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Autonome Region des Zhuang-Volkes (größte ethnische Minderheit Chinas); bekannt für die Karstlandschaften von Guilin und die Reisterrassen von Longji.'
  },
  {
    name: 'Innere Mongolei',
    capital: 'Hohhot',
    founded: 1947,
    population: 24000000,
    governor: 'Wang Lixia (Vorsitzende)',
    area: 1183000,
    region: 'Autonome Region',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Größte autonome Region Chinas; weite Steppengrasländer (Gobi-Wüste im Süden); Heimat mongolischer Nomaden; bedeutende Kohle- und Windenergiereserven.'
  },
  {
    name: 'Ningxia (Autonome Region)',
    capital: 'Yinchuan',
    founded: 1958,
    population: 7000000,
    governor: 'Zhang Yuxiang (Vorsitzender)',
    area: 66000,
    region: 'Autonome Region',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Autonome Region des Hui-Volkes (muslimische Minderheit); Heimat des Westxia-Mausoleum, einem der rätselhaftesten archäologischen Stätten Chinas.'
  },
  {
    name: 'Tibet (Xizang)',
    capital: 'Lhasa',
    founded: 1965,
    population: 3600000,
    governor: 'Yan Jinhai (Vorsitzender)',
    area: 1228400,
    region: 'Autonome Region',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Dach der Welt mit dem Potala-Palast in Lhasa (Residenz des Dalai Lama); höchste Hochebene der Erde; Heimat des tibetischen Buddhismus; seit 1951 Teil Chinas.'
  },
  {
    name: 'Xinjiang',
    capital: 'Ürümqi',
    founded: 1955,
    population: 25000000,
    governor: 'Erkin Tuniyaz (Vorsitzender)',
    area: 1664900,
    region: 'Autonome Region',
    flagUrl: 'https://flagcdn.com/w160/cn.png',
    note: 'Größte Verwaltungseinheit Chinas; Heimat der uigurischen Minderheit; historisches Zentrum der Seidenstraße; bedeutende Öl- und Gasvorkommen sowie Baumwollanbau.'
  },

  /* ── Sonderverwaltungsregionen ─── */
  {
    name: 'Hongkong',
    capital: 'Hongkong',
    founded: 1997,
    population: 7500000,
    governor: 'John Lee Ka-chiu (Verwaltungschef)',
    area: 1106,
    region: 'Sonderverwaltungsregion',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hong_Kong.svg',
    note: 'Ehemals britische Kronkolonie, seit 1997 nach dem Prinzip "Ein Land, zwei Systeme" Teil Chinas; globales Finanz- und Handelszentrum; eines der dichtbesiedelsten Gebiete weltweit.'
  },
  {
    name: 'Macau',
    capital: 'Macau',
    founded: 1999,
    population: 680000,
    governor: 'Sam Hou Fai (Verwaltungschef)',
    area: 33,
    region: 'Sonderverwaltungsregion',
    flagUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Macau.svg',
    note: 'Ehemals portugiesische Kolonie, seit 1999 SAR; weltgrößtes Glücksspielzentrum (höhere Spieleinnahmen als Las Vegas); UNESCO-Welterbe historisches Zentrum Macaus.'
  }
];
