/**
 * Länderflaggen – Kontinent-Navigation & Anzeige
 * inkl. Bundesländer-Unterrubrik für Deutschland
 */

/* ── Kontinentdaten ─────────────────────────────────── */
const CONTINENT_DATA = {
  africa: {
    label: 'Afrika',
    data: typeof AFRICA_COUNTRIES !== 'undefined' ? AFRICA_COUNTRIES : [],
    available: true
  },
  asia: {
    label: 'Asien',
    data: typeof ASIA_COUNTRIES !== 'undefined' ? ASIA_COUNTRIES : [],
    available: true
  },
  europe: {
    label: 'Europa',
    data: typeof EUROPE_COUNTRIES !== 'undefined' ? EUROPE_COUNTRIES : [],
    available: true
  },
  north_america: {
    label: 'Nordamerika',
    data: typeof NORTH_AMERICA_COUNTRIES !== 'undefined' ? NORTH_AMERICA_COUNTRIES : [],
    available: true
  },
  south_america: {
    label: 'Südamerika',
    data: typeof SOUTH_AMERICA_COUNTRIES !== 'undefined' ? SOUTH_AMERICA_COUNTRIES : [],
    available: true
  }
};

/* ── State ──────────────────────────────────────────── */
let activeContinent = 'africa';
let activeSubview   = 'countries'; // 'countries' | 'bundeslaender'
let countrySearch   = '';

/* ── DOM Refs ───────────────────────────────────────── */
const countriesGrid    = document.getElementById('countries-grid');
const countrySearchEl  = document.getElementById('country-search');
const countryCountEl   = document.getElementById('country-count');
const countryModal        = document.getElementById('country-modal');
const countryModalBody    = document.getElementById('country-modal-body');
const europeSubnav        = document.getElementById('europe-subnav');
const asiaSubnav          = document.getElementById('asia-subnav');
const northAmericaSubnav  = document.getElementById('north-america-subnav');

/* ── Helpers ────────────────────────────────────────── */
function formatPopulation(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace('.', ',') + ' Mrd.';
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(1).replace('.', ',') + ' Mio.';
  return n.toLocaleString('de-DE');
}

function flagUrl(code)   { return `https://flagcdn.com/w160/${code}.png`; }
function flagUrl2x(code) { return `https://flagcdn.com/w320/${code}.png`; }

/* ── Subnav ──────────────────────────────────────────── */
function updateSubnav() {
  if (europeSubnav) {
    if (activeContinent === 'europe' && CONTINENT_DATA.europe.available) {
      europeSubnav.classList.remove('hidden');
    } else {
      europeSubnav.classList.add('hidden');
    }
  }
  if (asiaSubnav) {
    if (activeContinent === 'asia' && CONTINENT_DATA.asia.available) {
      asiaSubnav.classList.remove('hidden');
    } else {
      asiaSubnav.classList.add('hidden');
    }
  }
  if (northAmericaSubnav) {
    if (activeContinent === 'north_america' && CONTINENT_DATA.north_america.available) {
      northAmericaSubnav.classList.remove('hidden');
    } else {
      northAmericaSubnav.classList.add('hidden');
    }
  }
}

/* ── Filtern ─────────────────────────────────────────── */
function filterList(list, searchFields) {
  if (!countrySearch) return list;
  const q = countrySearch.toLowerCase();
  return list.filter(item =>
    searchFields.some(field => (item[field] || '').toLowerCase().includes(q))
  );
}

/* ── Grid rendern ────────────────────────────────────── */
function renderCountriesGrid() {
  updateSubnav();
  const continent = CONTINENT_DATA[activeContinent];

  // Unteransichten
  if (activeContinent === 'asia' && activeSubview === 'china_provinces') {
    renderChinaProvinces();
    return;
  }
  if (activeContinent === 'asia' && activeSubview === 'india_states') {
    renderIndiaStates();
    return;
  }
  if (activeContinent === 'europe' && activeSubview === 'bundeslaender') {
    renderBundeslaender();
    return;
  }
  if (activeContinent === 'north_america' && activeSubview === 'us_states') {
    renderUSStates();
    return;
  }
  if (activeContinent === 'north_america' && activeSubview === 'canada_provinces') {
    renderCanadaProvinces();
    return;
  }
  if (activeContinent === 'north_america' && activeSubview === 'central_america') {
    renderCentralAmerica();
    return;
  }
  if (activeContinent === 'north_america' && activeSubview === 'caribbean') {
    renderCaribbean();
    return;
  }

  // Kontinent nicht verfügbar
  if (!continent.available) {
    countriesGrid.innerHTML = `
      <div class="coming-soon">
        <div class="coming-soon-icon">🚧</div>
        <h3>${continent.label} – Kommt bald</h3>
        <p>Dieser Kontinent wird in einem weiteren Branch hinzugefügt.</p>
      </div>`;
    if (countryCountEl) countryCountEl.textContent = '';
    return;
  }

  const list = filterList(continent.data, ['name', 'capital', 'president', 'region']);
  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} ${list.length === 1 ? 'Land' : 'Länder'}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Keine Länder gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(c => `
    <div class="country-card" data-code="${c.code}" role="button" tabindex="0"
         aria-label="${c.name}">
      <div class="country-flag-wrap">
        <img
          src="${flagUrl(c.code)}"
          srcset="${flagUrl(c.code)} 1x, ${flagUrl2x(c.code)} 2x"
          alt="Flagge von ${c.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${c.name}</div>
        <div class="country-card-capital">🏛 ${c.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(c.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openCountryModal(card.dataset.code));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openCountryModal(card.dataset.code);
    });
  });
}

/* ── Bundesländer-Grid ───────────────────────────────── */
function renderBundeslaender() {
  const states = typeof GERMANY_STATES !== 'undefined' ? GERMANY_STATES : [];
  const list   = filterList(states, ['name', 'capital', 'minister', 'region']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} Bundesland${list.length !== 1 ? 'länder' : ''}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Kein Bundesland gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map((s, i) => `
    <div class="country-card" data-state-index="${i}" role="button" tabindex="0"
         aria-label="${s.name}">
      <div class="country-flag-wrap state-flag-wrap">
        <img
          src="${s.flagUrl}"
          alt="Flagge von ${s.name}"
          loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\'flag-fallback\'>${s.name[0]}</div>'"
        />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${s.name}</div>
        <div class="country-card-capital">🏛 ${s.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(s.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openStateModal(Number(card.dataset.stateIndex)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openStateModal(Number(card.dataset.stateIndex));
    });
  });
}

/* ── US-Bundesstaaten-Grid ───────────────────────────── */
function renderUSStates() {
  const states = typeof USA_STATES !== 'undefined' ? USA_STATES : [];
  const list   = filterList(states, ['name', 'capital', 'governor', 'region']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} Bundesstaat${list.length !== 1 ? 'en' : ''}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Kein Bundesstaat gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(s => `
    <div class="country-card" data-us-state-index="${states.indexOf(s)}" role="button" tabindex="0"
         aria-label="${s.name}">
      <div class="country-flag-wrap state-flag-wrap">
        <img src="${s.flagUrl}" alt="Flagge von ${s.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'flag-fallback\\'>${s.name[0]}</div>'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${s.name}</div>
        <div class="country-card-capital">🏛 ${s.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(s.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card[data-us-state-index]').forEach(card => {
    card.addEventListener('click', () => openUSStateModal(Number(card.dataset.usStateIndex)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openUSStateModal(Number(card.dataset.usStateIndex));
    });
  });
}

/* ── Kanadische Provinzen-Grid ───────────────────────── */
function renderCanadaProvinces() {
  const provinces = typeof CANADA_PROVINCES !== 'undefined' ? CANADA_PROVINCES : [];
  const list      = filterList(provinces, ['name', 'capital', 'premier', 'region']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} Provinz${list.length !== 1 ? 'en/Territorien' : '/Territorium'}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Keine Provinz gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(p => `
    <div class="country-card" data-ca-province-index="${provinces.indexOf(p)}" role="button" tabindex="0"
         aria-label="${p.name}">
      <div class="country-flag-wrap state-flag-wrap">
        <img src="${p.flagUrl}" alt="Flagge von ${p.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'flag-fallback\\'>${p.name[0]}</div>'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${p.name}</div>
        <div class="country-card-capital">🏛 ${p.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(p.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card[data-ca-province-index]').forEach(card => {
    card.addEventListener('click', () => openCanadaProvinceModal(Number(card.dataset.caProvinceIndex)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openCanadaProvinceModal(Number(card.dataset.caProvinceIndex));
    });
  });
}

/* ── China-Provinzen-Grid ────────────────────────────── */
function renderChinaProvinces() {
  const provinces = typeof CHINA_PROVINCES !== 'undefined' ? CHINA_PROVINCES : [];
  const list = filterList(provinces, ['name', 'capital', 'governor', 'region']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} Verwaltungseinheit${list.length !== 1 ? 'en' : ''}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Keine Einheit gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(p => `
    <div class="country-card" data-cn-province-index="${provinces.indexOf(p)}" role="button" tabindex="0"
         aria-label="${p.name}">
      <div class="country-flag-wrap state-flag-wrap">
        <img src="${p.flagUrl}" alt="Flagge von ${p.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'flag-fallback\\'>${p.name[0]}</div>'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${p.name}</div>
        <div class="country-card-capital">🏛 ${p.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(p.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card[data-cn-province-index]').forEach(card => {
    card.addEventListener('click', () => openChinaProvinceModal(Number(card.dataset.cnProvinceIndex)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openChinaProvinceModal(Number(card.dataset.cnProvinceIndex));
    });
  });
}

/* ── Indien-Bundesstaaten-Grid ───────────────────────── */
function renderIndiaStates() {
  const states = typeof INDIA_STATES !== 'undefined' ? INDIA_STATES : [];
  const list = filterList(states, ['name', 'capital', 'cm', 'region']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} Bundesstaat${list.length !== 1 ? 'en/Territorien' : '/Territorium'}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Kein Bundesstaat gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(s => `
    <div class="country-card" data-in-state-index="${states.indexOf(s)}" role="button" tabindex="0"
         aria-label="${s.name}">
      <div class="country-flag-wrap state-flag-wrap">
        <img src="${s.flagUrl}" alt="Flagge von ${s.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'flag-fallback\\'>${s.name[0]}</div>'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${s.name}</div>
        <div class="country-card-capital">🏛 ${s.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(s.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card[data-in-state-index]').forEach(card => {
    card.addEventListener('click', () => openIndiaStateModal(Number(card.dataset.inStateIndex)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openIndiaStateModal(Number(card.dataset.inStateIndex));
    });
  });
}

/* ── Mittelamerika-Grid ──────────────────────────────── */
function renderCentralAmerica() {
  const all  = typeof NORTH_AMERICA_COUNTRIES !== 'undefined' ? NORTH_AMERICA_COUNTRIES : [];
  const central = all.filter(c => c.region === 'Mittelamerika');
  const list = filterList(central, ['name', 'capital', 'president']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} ${list.length === 1 ? 'Land' : 'Länder'}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Keine Länder gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(c => `
    <div class="country-card" data-code="${c.code}" role="button" tabindex="0"
         aria-label="${c.name}">
      <div class="country-flag-wrap">
        <img src="${flagUrl(c.code)}" srcset="${flagUrl(c.code)} 1x, ${flagUrl2x(c.code)} 2x"
             alt="Flagge von ${c.name}" loading="lazy" onerror="this.style.display='none'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${c.name}</div>
        <div class="country-card-capital">🏛 ${c.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(c.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openCountryModal(card.dataset.code));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openCountryModal(card.dataset.code);
    });
  });
}

/* ── Karibik-Grid ────────────────────────────────────── */
function renderCaribbean() {
  const all  = typeof NORTH_AMERICA_COUNTRIES !== 'undefined' ? NORTH_AMERICA_COUNTRIES : [];
  const caribbean = all.filter(c => c.region === 'Karibik');
  const list = filterList(caribbean, ['name', 'capital', 'president']);

  if (countryCountEl) {
    countryCountEl.textContent = `${list.length} ${list.length === 1 ? 'Land' : 'Länder'}`;
  }

  if (list.length === 0) {
    countriesGrid.innerHTML = '<p class="no-results">Keine Länder gefunden.</p>';
    return;
  }

  countriesGrid.innerHTML = list.map(c => `
    <div class="country-card" data-code="${c.code}" role="button" tabindex="0"
         aria-label="${c.name}">
      <div class="country-flag-wrap">
        <img src="${flagUrl(c.code)}" srcset="${flagUrl(c.code)} 1x, ${flagUrl2x(c.code)} 2x"
             alt="Flagge von ${c.name}" loading="lazy" onerror="this.style.display='none'" />
      </div>
      <div class="country-card-info">
        <div class="country-card-name">${c.name}</div>
        <div class="country-card-capital">🏛 ${c.capital}</div>
        <div class="country-card-pop">👥 ${formatPopulation(c.population)}</div>
      </div>
    </div>
  `).join('');

  countriesGrid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openCountryModal(card.dataset.code));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openCountryModal(card.dataset.code);
    });
  });
}

/* ── China-Provinz-Modal ─────────────────────────────── */
function openChinaProvinceModal(index) {
  const provinces = typeof CHINA_PROVINCES !== 'undefined' ? CHINA_PROVINCES : [];
  const p = provinces[index];
  if (!p) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${p.flagUrl}" alt="${p.name}"
           style="object-fit:contain;background:#f5f5f5;"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${p.name}</h2>
      <span class="cmodal-region-badge">🇨🇳 ${p.region}</span>
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Hauptstadt</div>
               <div class="cmodal-value">${p.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Gegründet</div>
               <div class="cmodal-value">${p.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(p.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${p.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Verwaltung</div>
               <div class="cmodal-value">${p.governor}</div></div>
        </div>
        ${p.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${p.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;
  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── Indien-Bundesstaat-Modal ────────────────────────── */
function openIndiaStateModal(index) {
  const states = typeof INDIA_STATES !== 'undefined' ? INDIA_STATES : [];
  const s = states[index];
  if (!s) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${s.flagUrl}" alt="${s.name}"
           style="object-fit:contain;background:#f5f5f5;"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${s.name}</h2>
      <span class="cmodal-region-badge">🇮🇳 ${s.region}</span>
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Hauptstadt</div>
               <div class="cmodal-value">${s.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Gegründet</div>
               <div class="cmodal-value">${s.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(s.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${s.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Ministerpräsident/in</div>
               <div class="cmodal-value">${s.cm}</div></div>
        </div>
        ${s.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${s.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;
  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── US-Bundesstaat-Modal ────────────────────────────── */
function openUSStateModal(index) {
  const states = typeof USA_STATES !== 'undefined' ? USA_STATES : [];
  const s = states[index];
  if (!s) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${s.flagUrl}" alt="Flagge von ${s.name}"
           style="object-fit:contain;background:#f5f5f5;"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${s.name}</h2>
      <span class="cmodal-region-badge">🇺🇸 ${s.region}</span>
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Hauptstadt</div>
               <div class="cmodal-value">${s.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Aufnahme in die Union</div>
               <div class="cmodal-value">${s.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(s.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${s.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Gouverneur/in</div>
               <div class="cmodal-value">${s.governor}</div></div>
        </div>
        ${s.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${s.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── Kanadische Provinz-Modal ────────────────────────── */
function openCanadaProvinceModal(index) {
  const provinces = typeof CANADA_PROVINCES !== 'undefined' ? CANADA_PROVINCES : [];
  const p = provinces[index];
  if (!p) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${p.flagUrl}" alt="Flagge von ${p.name}"
           style="object-fit:contain;background:#f5f5f5;"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${p.name}</h2>
      <span class="cmodal-region-badge">🍁 ${p.region}</span>
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Hauptstadt</div>
               <div class="cmodal-value">${p.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Beitritt zur Konföderation</div>
               <div class="cmodal-value">${p.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(p.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${p.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Premier/Premierministerin</div>
               <div class="cmodal-value">${p.premier}</div></div>
        </div>
        ${p.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${p.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── Zu Nordamerika-Unteransicht wechseln (aus Modal) ── */
function switchToAsiaSubview(subview) {
  closeCountryModal();
  activeSubview = subview;
  document.querySelectorAll('#asia-subnav .subnav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.subnav === subview);
  });
  countrySearch = '';
  if (countrySearchEl) countrySearchEl.value = '';
  renderCountriesGrid();
}

function switchToNorthAmericaSubview(subview) {
  closeCountryModal();
  activeSubview = subview;
  document.querySelectorAll('#north-america-subnav .subnav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.subnav === subview);
  });
  countrySearch = '';
  if (countrySearchEl) countrySearchEl.value = '';
  renderCountriesGrid();
}

/* ── Länder-Modal ────────────────────────────────────── */
function openCountryModal(code) {
  const country = CONTINENT_DATA[activeContinent].data.find(c => c.code === code);
  if (!country) return;

  let subviewFn = 'switchToBundeslaender()';
  if (activeContinent === 'asia' && country.subviewKey) {
    subviewFn = `switchToAsiaSubview('${country.subviewKey}')`;
  } else if (activeContinent === 'north_america' && country.subviewKey) {
    subviewFn = `switchToNorthAmericaSubview('${country.subviewKey}')`;
  }
  const subviewBtn = country.hasSubview ? `
    <button class="cmodal-subview-btn" onclick="${subviewFn}">
      ${country.subviewLabel || '🗺 Details anzeigen'}
    </button>` : '';

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${flagUrl2x(country.code)}" alt="Flagge von ${country.name}"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${country.name}</h2>
      <span class="cmodal-region-badge">${country.region}</span>
      ${subviewBtn}
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Hauptstadt</div>
               <div class="cmodal-value">${country.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Gründung</div>
               <div class="cmodal-value">${country.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(country.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${country.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Staatsoberhaupt</div>
               <div class="cmodal-value">${country.president}</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">🗣</span>
          <div><div class="cmodal-label">Amtssprachen</div>
               <div class="cmodal-value">${country.languages.join(', ')}</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">💰</span>
          <div><div class="cmodal-label">Währung</div>
               <div class="cmodal-value">${country.currency}</div></div>
        </div>
        ${country.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${country.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── Bundesland-Modal ────────────────────────────────── */
function openStateModal(index) {
  const states = typeof GERMANY_STATES !== 'undefined' ? GERMANY_STATES : [];
  const s = states[index];
  if (!s) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img src="${s.flagUrl}" alt="Flagge von ${s.name}"
           style="object-fit:contain;background:#f5f5f5;"
           onerror="this.style.display='none'" />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${s.name}</h2>
      <span class="cmodal-region-badge">🇩🇪 ${s.region}</span>
      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div><div class="cmodal-label">Landeshauptstadt</div>
               <div class="cmodal-value">${s.capital}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div><div class="cmodal-label">Gründung</div>
               <div class="cmodal-value">${s.founded}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div><div class="cmodal-label">Bevölkerung</div>
               <div class="cmodal-value">${formatPopulation(s.population)}</div></div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div><div class="cmodal-label">Fläche</div>
               <div class="cmodal-value">${s.area.toLocaleString('de-DE')} km²</div></div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div><div class="cmodal-label">Ministerpräsident/in</div>
               <div class="cmodal-value">${s.minister}</div></div>
        </div>
        ${s.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div><div class="cmodal-label">Wissenswertes</div>
               <div class="cmodal-value">${s.note}</div></div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

/* ── Direkt zu Bundesländern wechseln (aus Modal) ────── */
function switchToBundeslaender() {
  closeCountryModal();
  activeSubview = 'bundeslaender';
  document.querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
  const blBtn = document.querySelector('.subnav-btn[data-subnav="bundeslaender"]');
  if (blBtn) blBtn.classList.add('active');
  countrySearch = '';
  if (countrySearchEl) countrySearchEl.value = '';
  renderCountriesGrid();
}

/* ── Modal schließen ─────────────────────────────────── */
function closeCountryModal() { countryModal.classList.add('hidden'); }

document.getElementById('country-modal-close').addEventListener('click', closeCountryModal);
countryModal.addEventListener('click', e => { if (e.target === countryModal) closeCountryModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !countryModal.classList.contains('hidden')) closeCountryModal();
});

/* ── Kontinent-Buttons ───────────────────────────────── */
document.querySelectorAll('.continent-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeContinent = btn.dataset.continent;
    activeSubview   = 'countries';
    countrySearch   = '';
    if (countrySearchEl) countrySearchEl.value = '';
    // Subnav zurücksetzen
    document.querySelectorAll('.subnav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.subnav === 'countries');
    });
    renderCountriesGrid();
  });
});

/* ── Sub-Navigation (Europa & Nordamerika) ───────────── */
document.querySelectorAll('#asia-subnav .subnav-btn, #europe-subnav .subnav-btn, #north-america-subnav .subnav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Nur Buttons innerhalb desselben Subnavs zurücksetzen
    btn.closest('nav').querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSubview = btn.dataset.subnav;
    countrySearch = '';
    if (countrySearchEl) countrySearchEl.value = '';
    renderCountriesGrid();
  });
});

/* ── Suche ───────────────────────────────────────────── */
if (countrySearchEl) {
  countrySearchEl.addEventListener('input', () => {
    countrySearch = countrySearchEl.value.trim();
    renderCountriesGrid();
  });
}

/* ── Modus-Umschalter (ICS ↔ Länderflaggen) ─────────── */
const icsSection       = document.getElementById('ics-section');
const countriesSection = document.getElementById('countries-section');

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.mode === 'countries') {
      icsSection.classList.add('hidden');
      countriesSection.classList.remove('hidden');
      renderCountriesGrid();
    } else {
      countriesSection.classList.add('hidden');
      icsSection.classList.remove('hidden');
    }
  });
});
