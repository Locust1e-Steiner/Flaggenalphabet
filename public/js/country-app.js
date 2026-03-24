/**
 * Länderflaggen – Kontinent-Navigation & Anzeige
 */

/* ── Kontinentdaten ─────────────────────────────────── */
const CONTINENT_DATA = {
  africa: {
    label: 'Afrika',
    data: typeof AFRICA_COUNTRIES !== 'undefined' ? AFRICA_COUNTRIES : [],
    available: true
  },
  asia:          { label: 'Asien',        data: [], available: false },
  europe:        { label: 'Europa',       data: [], available: false },
  north_america: { label: 'Nordamerika',  data: [], available: false },
  south_america: { label: 'Südamerika',   data: [], available: false }
};

/* ── State ──────────────────────────────────────────── */
let activeContinent  = 'africa';
let countrySearch    = '';

/* ── DOM Refs ───────────────────────────────────────── */
const countriesGrid    = document.getElementById('countries-grid');
const countrySearchEl  = document.getElementById('country-search');
const countryCountEl   = document.getElementById('country-count');
const countryModal     = document.getElementById('country-modal');
const countryModalBody = document.getElementById('country-modal-body');

/* ── Helpers ────────────────────────────────────────── */
function formatPopulation(n) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace('.', ',') + ' Mrd.';
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(1).replace('.', ',') + ' Mio.';
  return n.toLocaleString('de-DE');
}

function flagUrl(code) {
  return `https://flagcdn.com/w160/${code}.png`;
}

function flagUrl2x(code) {
  return `https://flagcdn.com/w320/${code}.png`;
}

/* ── Filtern ─────────────────────────────────────────── */
function filterCountries(list) {
  if (!countrySearch) return list;
  const q = countrySearch.toLowerCase();
  return list.filter(c =>
    c.name.toLowerCase().includes(q)        ||
    c.capital.toLowerCase().includes(q)     ||
    c.president.toLowerCase().includes(q)   ||
    c.region.toLowerCase().includes(q)
  );
}

/* ── Grid rendern ────────────────────────────────────── */
function renderCountriesGrid() {
  const continent = CONTINENT_DATA[activeContinent];

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

  const list = filterCountries(continent.data);
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

/* ── Modal ───────────────────────────────────────────── */
function openCountryModal(code) {
  const continent = CONTINENT_DATA[activeContinent];
  const country = continent.data.find(c => c.code === code);
  if (!country) return;

  countryModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img
        src="${flagUrl2x(country.code)}"
        alt="Flagge von ${country.name}"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="cmodal-info">
      <h2 class="cmodal-name">${country.name}</h2>
      <span class="cmodal-region-badge">${country.region}</span>

      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏛</span>
          <div>
            <div class="cmodal-label">Hauptstadt</div>
            <div class="cmodal-value">${country.capital}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div>
            <div class="cmodal-label">Unabhängigkeit</div>
            <div class="cmodal-value">${country.founded}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👥</span>
          <div>
            <div class="cmodal-label">Bevölkerung</div>
            <div class="cmodal-value">${formatPopulation(country.population)}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📐</span>
          <div>
            <div class="cmodal-label">Fläche</div>
            <div class="cmodal-value">${country.area.toLocaleString('de-DE')} km²</div>
          </div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">👤</span>
          <div>
            <div class="cmodal-label">Staatsoberhaupt</div>
            <div class="cmodal-value">${country.president}</div>
          </div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">🗣</span>
          <div>
            <div class="cmodal-label">Amtssprachen</div>
            <div class="cmodal-value">${country.languages.join(', ')}</div>
          </div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">💰</span>
          <div>
            <div class="cmodal-label">Währung</div>
            <div class="cmodal-value">${country.currency}</div>
          </div>
        </div>
        ${country.note ? `
        <div class="cmodal-item cmodal-item--full cmodal-note">
          <span class="cmodal-icon">ℹ️</span>
          <div>
            <div class="cmodal-label">Wissenswertes</div>
            <div class="cmodal-value">${country.note}</div>
          </div>
        </div>` : ''}
      </div>
      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  countryModal.classList.remove('hidden');
  document.getElementById('country-modal-close').focus();
}

function closeCountryModal() {
  countryModal.classList.add('hidden');
}

/* ── Event Listeners ────────────────────────────────── */
document.getElementById('country-modal-close').addEventListener('click', closeCountryModal);
countryModal.addEventListener('click', e => {
  if (e.target === countryModal) closeCountryModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !countryModal.classList.contains('hidden')) closeCountryModal();
});

// Kontinent-Buttons
document.querySelectorAll('.continent-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeContinent = btn.dataset.continent;
    countrySearch   = '';
    if (countrySearchEl) countrySearchEl.value = '';
    renderCountriesGrid();
  });
});

// Suche
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
