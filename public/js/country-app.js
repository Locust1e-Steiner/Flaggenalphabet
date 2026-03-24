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
  asia: { label: 'Asien', data: [], available: false },
  europe: {
    label: 'Europa',
    data: typeof EUROPE_COUNTRIES !== 'undefined' ? EUROPE_COUNTRIES : [],
    available: true
  },
  north_america: { label: 'Nordamerika', data: [], available: false },
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
const countryModal     = document.getElementById('country-modal');
const countryModalBody = document.getElementById('country-modal-body');
const europeSubnav     = document.getElementById('europe-subnav');

/* ── Helpers ────────────────────────────────────────── */
function formatPopulation(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace('.', ',') + ' Mrd.';
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(1).replace('.', ',') + ' Mio.';
  return n.toLocaleString('de-DE');
}

function flagUrl(code)   { return `https://flagcdn.com/w160/${code}.png`; }
function flagUrl2x(code) { return `https://flagcdn.com/w320/${code}.png`; }

/* ── Subnav (Bundesländer) ───────────────────────────── */
function updateSubnav() {
  if (!europeSubnav) return;
  if (activeContinent === 'europe' && CONTINENT_DATA.europe.available) {
    europeSubnav.classList.remove('hidden');
  } else {
    europeSubnav.classList.add('hidden');
    activeSubview = 'countries';
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

  // Bundesländer-Ansicht
  if (activeContinent === 'europe' && activeSubview === 'bundeslaender') {
    renderBundeslaender();
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

/* ── Länder-Modal ────────────────────────────────────── */
function openCountryModal(code) {
  const country = CONTINENT_DATA[activeContinent].data.find(c => c.code === code);
  if (!country) return;

  const subviewBtn = country.hasSubview ? `
    <button class="cmodal-subview-btn" onclick="switchToBundeslaender()">
      ${country.subviewLabel || '🗺 Bundesländer anzeigen'}
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

/* ── Europa Sub-Navigation (Länder / Bundesländer) ───── */
document.querySelectorAll('.subnav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
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
