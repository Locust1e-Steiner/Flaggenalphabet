/**
 * Reedereien – App-Logik
 * Render, Suche, Filter, Modal
 */

/* ── State ──────────────────────────────────────────── */
let activeRegion    = 'all'; // all | europa | asien
let reedereiSearch  = '';

/* ── DOM Refs ───────────────────────────────────────── */
const reedereienGrid    = document.getElementById('reedereien-grid');
const reedereiSearchEl  = document.getElementById('reederei-search');
const reedereiCountEl   = document.getElementById('reederei-count');
const reedereiModal     = document.getElementById('reederei-modal');
const reedereiModalBody = document.getElementById('reederei-modal-body');

/* ── Hilfsfunktionen ────────────────────────────────── */
function rFlagUrl(code)   { return `https://flagcdn.com/w160/${code}.png`; }
function rFlagUrl2x(code) { return `https://flagcdn.com/w320/${code}.png`; }

/* ── Reedereien Grid rendern ────────────────────────── */
function renderReedereienGrid() {
  if (!reedereienGrid) return;

  const query = reedereiSearch.toLowerCase();

  const filtered = REEDEREIEN.filter(r => {
    const matchRegion = activeRegion === 'all' ||
      r.region.toLowerCase() === activeRegion;
    const matchSearch = !query ||
      r.name.toLowerCase().includes(query) ||
      r.shortName.toLowerCase().includes(query) ||
      r.country.toLowerCase().includes(query) ||
      r.headquarters.toLowerCase().includes(query) ||
      r.specialization.toLowerCase().includes(query) ||
      r.flagStates.some(f => f.toLowerCase().includes(query));
    return matchRegion && matchSearch;
  });

  if (reedereiCountEl) {
    reedereiCountEl.textContent =
      filtered.length === 1 ? '1 Reederei' : `${filtered.length} Reedereien`;
  }

  if (filtered.length === 0) {
    reedereienGrid.innerHTML = '<p class="no-results">Keine Reederei gefunden.</p>';
    return;
  }

  reedereienGrid.innerHTML = filtered.map(r => `
    <div class="reederei-card"
         tabindex="0"
         role="button"
         aria-label="${r.name} – Details anzeigen"
         onclick="openReedereiModal('${r.id}')"
         onkeydown="if(event.key==='Enter'||event.key===' ')openReedereiModal('${r.id}')">
      <div class="reederei-flag-wrap">
        <img
          src="${rFlagUrl(r.mainFlagCode)}"
          srcset="${rFlagUrl2x(r.mainFlagCode)} 2x"
          alt="Flagge ${r.country}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
      </div>
      <div class="reederei-card-info">
        <div class="reederei-card-name">${r.name}</div>
        <div class="reederei-card-country">
          ${r.country} &middot; gegr. ${r.founded}
        </div>
        <div class="reederei-card-meta">
          <span class="fleet-size-badge">&#9875; ${r.fleetSize.toLocaleString('de-DE')} Schiffe</span>
          <span class="specialization-badge spec-${r.specialization.toLowerCase()}">${r.specialization}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Modal öffnen ───────────────────────────────────── */
function openReedereiModal(id) {
  const r = REEDEREIEN.find(x => x.id === id);
  if (!r || !reedereiModal) return;

  const shipsRows = r.ships.map(s => `
    <tr>
      <td>${s.type}</td>
      <td class="ship-count">${s.count.toLocaleString('de-DE')}</td>
    </tr>
  `).join('');

  const flagStatesList = r.flagStates
    .map(f => `<span class="flag-state-tag">${f}</span>`)
    .join('');

  reedereiModalBody.innerHTML = `
    <div class="cmodal-flag">
      <img
        src="${rFlagUrl(r.mainFlagCode)}"
        srcset="${rFlagUrl2x(r.mainFlagCode)} 2x"
        alt="Flagge ${r.country}"
        onerror="this.style.display='none'"
      />
    </div>
    <div class="cmodal-info">
      <div class="cmodal-name">${r.name}</div>
      <span class="cmodal-region-badge reederei-badge">${r.region} &middot; ${r.specialization}</span>

      <div class="cmodal-grid">
        <div class="cmodal-item">
          <span class="cmodal-icon">🏢</span>
          <div>
            <div class="cmodal-label">Hauptsitz</div>
            <div class="cmodal-value">${r.headquarters}, ${r.country}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">📅</span>
          <div>
            <div class="cmodal-label">Gründungsjahr</div>
            <div class="cmodal-value">${r.founded}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">👤</span>
          <div>
            <div class="cmodal-label">CEO</div>
            <div class="cmodal-value">${r.ceo}</div>
          </div>
        </div>
        <div class="cmodal-item">
          <span class="cmodal-icon">⚓</span>
          <div>
            <div class="cmodal-label">Flottengröße</div>
            <div class="cmodal-value">${r.fleetSize.toLocaleString('de-DE')} Schiffe</div>
          </div>
        </div>
        <div class="cmodal-item cmodal-item--full">
          <span class="cmodal-icon">🚩</span>
          <div>
            <div class="cmodal-label">Flaggenstaaten</div>
            <div class="cmodal-value flag-states-wrap">${flagStatesList}</div>
          </div>
        </div>
      </div>

      <div class="ship-type-section">
        <div class="cmodal-label" style="margin-bottom:.5rem;">Flotte nach Schiffstyp</div>
        <table class="ship-type-table">
          <thead>
            <tr><th>Schiffstyp</th><th>Anzahl</th></tr>
          </thead>
          <tbody>
            ${shipsRows}
          </tbody>
        </table>
      </div>

      ${r.note ? `
      <div class="cmodal-note" style="margin-top:1rem;">
        <div class="cmodal-icon" style="margin-bottom:.3rem;">💡</div>
        <div class="cmodal-value">${r.note}</div>
      </div>` : ''}

      <p class="cmodal-disclaimer">Stand: 2025 – Angaben können sich geändert haben.</p>
    </div>
  `;

  reedereiModal.classList.remove('hidden');
}

/* ── Modal schließen ────────────────────────────────── */
function closeReedereiModal() {
  if (reedereiModal) reedereiModal.classList.add('hidden');
}

document.getElementById('reederei-modal-close')
  .addEventListener('click', closeReedereiModal);
reedereiModal.addEventListener('click', e => {
  if (e.target === reedereiModal) closeReedereiModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && reedereiModal && !reedereiModal.classList.contains('hidden')) {
    closeReedereiModal();
  }
});

/* ── Region-Filter ──────────────────────────────────── */
document.querySelectorAll('#reederei-region-nav .subnav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#reederei-region-nav .subnav-btn')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeRegion = btn.dataset.region;
    reedereiSearch = '';
    if (reedereiSearchEl) reedereiSearchEl.value = '';
    renderReedereienGrid();
  });
});

/* ── Suche ───────────────────────────────────────────── */
if (reedereiSearchEl) {
  reedereiSearchEl.addEventListener('input', () => {
    reedereiSearch = reedereiSearchEl.value.trim();
    renderReedereienGrid();
  });
}

/* ── Initialer Render (wird aufgerufen wenn Modus aktiv) */
function initReedereien() {
  activeRegion   = 'all';
  reedereiSearch = '';
  if (reedereiSearchEl) reedereiSearchEl.value = '';
  document.querySelectorAll('#reederei-region-nav .subnav-btn')
    .forEach(b => b.classList.toggle('active', b.dataset.region === 'all'));
  renderReedereienGrid();
}
