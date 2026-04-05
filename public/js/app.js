/* ═══════════════════════════════════════════════
   LA GRIGLIATA - App per dividere i conti
   ═══════════════════════════════════════════════ */

// ── Funny Avatars Pool ──
const AVATAR_POOL = [
  '🐔','🐷','🐮','🐑','🦆','🐙','🦑','🦀','🐊','🦖',
  '🦕','🐢','🐸','🐧','🦩','🦜','🦚','🐝','🐛','🦋',
  '🐌','🐞','🦊','🐼','🐨','🦁','🐯','🐻','🦝','🦥',
  '🦧','🐒','🦃','🐉','🦄','🐲','🤡','🤠','🧙','🧛',
  '🧜','🧚','🧞','🥷','🦸','🦹','🧟','👻','👽','🤖',
  '🎃','💀','🥸','🤪','🥳','😎','🤓','🧐','🤯','🥶',
];

const COUPLE_AVATARS = ['💕','🔥','⚡','🌈','💫','🎪','🎭','🎯','🍕','🎸'];

const FUNNY_QUOTES = [
  "La carne non si paga da sola... o forse si? 🤔",
  "Amici come prima... poi arriva il conto! 😂",
  "Chi griglia non paga? Sbagliato! 🔥",
  "Il conto: dove le amicizie vengono messe alla prova 💪",
  "Oggi si mangia, domani si piange... al portafoglio 💸",
  "Carne al fuoco e soldi al vento! 🌬️",
  "La grigliata perfetta: bella compagnia e conti chiari! ✨",
  "Regola n°1: chi non paga, lava i piatti! 🍽️",
  "Prova del fuoco: dividere il conto equamente 🔥",
  "L'amicizia non ha prezzo... ma la grigliata si! 💰",
  "Stomaco pieno, portafoglio vuoto 😋",
  "Il BBQ unisce... il conto divide! 🍖",
];

const EXPENSE_REACTIONS = {
  huge: [
    { emoji: '😱', title: 'MAMMA MIA!', text: 'Hai comprato tutta la macelleria?' },
    { emoji: '🤑', title: 'SPENDACCIONE!', text: 'Col conto del ristorante spendevi meno!' },
    { emoji: '💳', title: 'LA CARTA PIANGE!', text: 'A questo punto fai un mutuo!' },
    { emoji: '🐋', title: 'SPESA BALENA!', text: 'Questa spesa si vede dallo spazio!' },
  ],
  big: [
    { emoji: '💸', title: 'BEL COLPO!', text: 'Il portafoglio ha sentito questo!' },
    { emoji: '🎰', title: 'ALL IN!', text: 'Stai giocando al casinò?' },
  ],
  tiny: [
    { emoji: '🐜', title: 'SPESINA!', text: 'Hai preso un pacchetto di stuzzicadenti?' },
    { emoji: '🔬', title: 'MICROSCOPICA!', text: 'Ci serve il microscopio per vederla!' },
  ],
  first: [
    { emoji: '🎉', title: 'FINALMENTE!', text: 'Ci stavamo preoccupando... Benvenuto tra chi paga!' },
    { emoji: '👏', title: 'ERA ORA!', text: 'Il portafoglio si è svegliato dal letargo!' },
  ],
};

const IDLE_ROASTS = [
  { emoji: '🦎', title: 'BRACCIA CORTE!', text: '{name} non ha ancora pagato NIENTE! Le braccia corte sono una malattia seria...' },
  { emoji: '🕷️', title: 'RAGNO IN TASCA!', text: '{name} ha un ragno nel portafoglio che non lascia uscire i soldi!' },
  { emoji: '🏃', title: 'SCAPPA!', text: '{name} è sparito/a quando era ora di pagare!' },
];

// ── Wishlist Fun Messages ──
const WISHLIST_ASSIGN_MESSAGES = [
  { emoji: '🫵', title: 'MISSIONE PER TE!', text: '{assignee}, {assigner} ti ha assegnato: "{item}". Accetti la sfida?' },
  { emoji: '📦', title: 'CONSEGNA SPECIALE!', text: '{assignee}, hai un pacco da ritirare: "{item}" (da parte di {assigner})!' },
  { emoji: '🎯', title: 'SEI STATO/A SCELTO/A!', text: '{assigner} crede in te per: "{item}". Non deludere la squadra!' },
  { emoji: '🦸', title: 'EROE/EROINA CERCASI!', text: '{assignee}, solo tu puoi salvare la grigliata portando: "{item}"!' },
];

const WISHLIST_ACCEPT_MESSAGES = [
  { emoji: '💪', title: 'CHE CAMPIONE!', text: '{name} ha accettato! La grigliata è salva!' },
  { emoji: '🦸', title: 'EROE/EROINA!', text: '{name} si sacrifica per il bene della grigliata!' },
  { emoji: '🏆', title: 'MVP!', text: '{name} è il/la Most Valuable Partecipante!' },
];

const WISHLIST_DECLINE_MESSAGES = [
  { emoji: '🏃', title: 'FUGA!', text: '{name} è scappato/a! Qualcun altro deve farsi avanti!' },
  { emoji: '😤', title: 'RIFIUTO!', text: '{name} ha detto NO! Chi sarà il prossimo coraggioso/a?' },
  { emoji: '🐔', title: 'CHICKEN!', text: '{name} ha fatto il/la gallina! Bawk bawk bawk!' },
];

const WISHLIST_SELF_CLAIM = [
  { emoji: '🦸', title: 'VOLONTARIO/A!', text: '{name} si è offerto/a volontario/a! Standing ovation!' },
  { emoji: '👑', title: 'RE/REGINA!', text: '{name} ha preso in mano la situazione! Chapeau!' },
  { emoji: '💎', title: 'GEMMA RARA!', text: '{name} è una persona speciale! Grazie di esistere!' },
];

// ── Default State ──
const DEFAULT_STATE = {
  participants: [
    { id: 'p1', name: 'Giorgia', coupleId: 'c1', avatar: '👸' },
    { id: 'p2', name: 'Vince', coupleId: 'c1', avatar: '🧔' },
    { id: 'p3', name: 'Marcone', coupleId: 'c2', avatar: '🦁' },
    { id: 'p4', name: 'Marta', coupleId: 'c2', avatar: '🦋' },
    { id: 'p5', name: 'Pillo', coupleId: 'c3', avatar: '🐧' },
    { id: 'p6', name: 'Rosa', coupleId: 'c3', avatar: '🌹' },
    { id: 'p7', name: 'Robi', coupleId: 'c4', avatar: '🤖' },
    { id: 'p8', name: 'Franci', coupleId: 'c4', avatar: '🦊' },
    { id: 'p9', name: 'Tiziana', coupleId: null, avatar: '🦄' },
  ],
  couples: [
    { id: 'c1', members: ['p1', 'p2'], avatar: '💕' },
    { id: 'c2', members: ['p3', 'p4'], avatar: '🔥' },
    { id: 'c3', members: ['p5', 'p6'], avatar: '⚡' },
    { id: 'c4', members: ['p7', 'p8'], avatar: '🌈' },
  ],
  expenses: [],
  chatMessages: [],
  shoppingList: [],
  wishlist: [],
  nextId: 10,
};

// ── State ──
let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
let stateVersion = 0;
let saveTimeout = null;
let isSaving = false;
let isLoading = false;
let hasLoadedServerState = false;
let lastLoadErrorMessage = '';

function showServerLoadGuard(message) {
  let overlay = document.getElementById('serverLoadGuard');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'serverLoadGuard';
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '9999',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      background: 'rgba(10, 14, 18, 0.82)',
      backdropFilter: 'blur(10px)',
    });
    overlay.innerHTML = `
      <div style="max-width: 34rem; width: 100%; background: #121a23; color: #f5f8fb; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 1.25rem 1.1rem; box-shadow: 0 24px 80px rgba(0,0,0,0.45);">
        <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.4rem;">Modalità protetta</div>
        <div data-guard-message style="color: rgba(245,248,251,0.76); line-height: 1.45; margin-bottom: 0.9rem;"></div>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <button type="button" data-guard-reload style="border:none; border-radius:999px; padding:0.72rem 1rem; font-weight:700; background:#ff8b36; color:#111;">Ricarica pagina</button>
        </div>
      </div>
    `;
    overlay.querySelector('[data-guard-reload]').addEventListener('click', () => window.location.reload());
    document.body.appendChild(overlay);
  }
  overlay.querySelector('[data-guard-message]').textContent =
    message || 'Non sono riuscito a caricare lo stato dal server. Per sicurezza il salvataggio è bloccato finché non ricarichi la pagina con il server di nuovo raggiungibile.';
  overlay.style.display = 'flex';
}

function hideServerLoadGuard() {
  const overlay = document.getElementById('serverLoadGuard');
  if (overlay) overlay.style.display = 'none';
}

// ── API Layer ──
async function loadStateFromServer() {
  try {
    const res = await fetch('/api/state');
    if (!res.ok) throw new Error('Failed to load state');
    const { state: serverState, version } = await res.json();
    stateVersion = version;
    hasLoadedServerState = true;
    lastLoadErrorMessage = '';
    if (serverState) {
      // Merge with defaults to handle missing fields
      state = { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...serverState };
      if (!state.wishlist) state.wishlist = [];
    }
    hideServerLoadGuard();
    return true;
  } catch (e) {
    hasLoadedServerState = false;
    lastLoadErrorMessage = e?.message || 'Failed to load state';
    console.warn('Failed to load from server, using defaults:', e);
    return false;
  }
}

async function saveStateToServer() {
  if (!hasLoadedServerState) {
    console.warn('Blocked save because initial server state load did not succeed.');
    if (lastLoadErrorMessage) showServerLoadGuard(`Il server non ha caricato correttamente i dati (${lastLoadErrorMessage}). Per evitare di sovrascrivere il database con i valori di default, il salvataggio è bloccato finché non ricarichi la pagina.`);
    return false;
  }
  if (isSaving) return;
  isSaving = true;
  try {
    const res = await fetch('/api/state', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state }),
    });
    if (res.ok) {
      const { version } = await res.json();
      stateVersion = version;
    }
  } catch (e) {
    console.warn('Failed to save to server:', e);
  }
  isSaving = false;
  return true;
}

function debouncedSave() {
  if (!hasLoadedServerState) return;
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => saveStateToServer(), 300);
}

// Poll for changes from other devices
async function pollForChanges() {
  if (isLoading || isSaving) return;
  try {
    const res = await fetch('/api/state/version');
    if (!res.ok) return;
    const { version } = await res.json();
    if (version > stateVersion) {
      isLoading = true;
      await loadStateFromServer();
      isLoading = false;
      renderAll();
      renderChat();
    }
  } catch (e) {
    // Silently ignore polling errors
  }
}

function genId() {
  return 'id_' + (state.nextId++);
}

// ── Calculation Engine ──
function getPersonExpenses(personId) {
  return state.expenses.filter(e => e.personId === personId);
}

function getPersonTotal(personId) {
  return getPersonExpenses(personId).reduce((s, e) => s + e.amount, 0);
}

function getTotalExpenses() {
  return state.expenses.reduce((s, e) => s + e.amount, 0);
}

function getPerPersonShare() {
  const total = getTotalExpenses();
  const count = state.participants.length;
  return count > 0 ? total / count : 0;
}

function getPersonBalance(personId) {
  return getPersonTotal(personId) - getPerPersonShare();
}

function getCoupleTotal(coupleId) {
  const couple = state.couples.find(c => c.id === coupleId);
  if (!couple) return 0;
  return couple.members.reduce((s, pid) => s + getPersonTotal(pid), 0);
}

function getCoupleShare(coupleId) {
  const couple = state.couples.find(c => c.id === coupleId);
  if (!couple) return 0;
  return getPerPersonShare() * couple.members.length;
}

function getCoupleBalance(coupleId) {
  return getCoupleTotal(coupleId) - getCoupleShare(coupleId);
}

function getCoupleName(coupleId) {
  const couple = state.couples.find(c => c.id === coupleId);
  if (!couple) return '';
  const names = couple.members.map(pid => {
    const p = state.participants.find(pp => pp.id === pid);
    return p ? p.name : '?';
  });
  return names.join(' & ');
}

// Settlement: minimize transactions between units (couples as 1, singles as 1)
function calculateSettlements() {
  const units = [];

  state.couples.forEach(c => {
    const balance = getCoupleBalance(c.id);
    units.push({
      id: c.id, type: 'couple', name: getCoupleName(c.id),
      avatar: c.avatar, balance: Math.round(balance * 100) / 100,
    });
  });

  state.participants.filter(p => !p.coupleId).forEach(p => {
    const balance = getPersonBalance(p.id);
    units.push({
      id: p.id, type: 'single', name: p.name,
      avatar: p.avatar, balance: Math.round(balance * 100) / 100,
    });
  });

  const debtors = units.filter(u => u.balance < -0.01).map(u => ({ ...u, amount: Math.abs(u.balance) }));
  const creditors = units.filter(u => u.balance > 0.01).map(u => ({ ...u, amount: u.balance }));
  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const transactions = [];
  let di = 0, ci = 0;
  while (di < debtors.length && ci < creditors.length) {
    const d = debtors[di], c = creditors[ci];
    const amount = Math.min(d.amount, c.amount);
    if (amount > 0.01) {
      transactions.push({
        from: { name: d.name, avatar: d.avatar },
        to: { name: c.name, avatar: c.avatar },
        amount: Math.round(amount * 100) / 100,
      });
    }
    d.amount -= amount;
    c.amount -= amount;
    if (d.amount < 0.01) di++;
    if (c.amount < 0.01) ci++;
  }

  return transactions;
}

// ── Badges / Titles ──
function getPersonBadge(personId) {
  const total = getPersonTotal(personId);
  const totals = state.participants.map(p => ({ id: p.id, total: getPersonTotal(p.id) }));
  if (totals.length === 0) return null;

  const maxSpender = totals.reduce((a, b) => a.total > b.total ? a : b);
  const minSpender = totals.reduce((a, b) => a.total < b.total ? a : b);
  const share = getPerPersonShare();
  const closestToShare = totals.reduce((a, b) =>
    Math.abs(a.total - share) < Math.abs(b.total - share) ? a : b
  );

  if (total > 0 && maxSpender.id === personId && total > share * 1.3) {
    return { text: '👑 Re della Griglia', class: 'badge-king' };
  }
  if (getTotalExpenses() > 0 && minSpender.id === personId && total === 0) {
    return { text: '🦎 Braccino Corto', class: 'badge-cheap' };
  }
  if (getTotalExpenses() > 0 && closestToShare.id === personId && total > 0 && Math.abs(total - share) < share * 0.1) {
    return { text: '🎯 Lo Svizzero', class: 'badge-swiss' };
  }
  return null;
}

// ── Fun Features ──
let quoteInterval;

function startFunnyQuotes() {
  const el = document.getElementById('funnyQuote');
  if (!el) return;
  el.textContent = FUNNY_QUOTES[Math.floor(Math.random() * FUNNY_QUOTES.length)];
  quoteInterval = setInterval(() => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = FUNNY_QUOTES[Math.floor(Math.random() * FUNNY_QUOTES.length)];
      el.style.opacity = '1';
    }, 300);
  }, 8000);
}

function showFunModal(emoji, title, text, btnText = 'OK! 😂') {
  const overlay = document.getElementById('funModalOverlay');
  overlay.querySelector('.modal-emoji').textContent = emoji;
  overlay.querySelector('.modal-title').textContent = title;
  overlay.querySelector('.modal-text').textContent = text;
  overlay.querySelector('.modal-btn').textContent = btnText;
  overlay.querySelector('.modal-btn').onclick = closeFunModal;
  // Remove any extra buttons from previous modals
  overlay.querySelectorAll('.modal-extra-btn').forEach(b => b.remove());
  overlay.classList.add('show');
}

function closeFunModal() {
  document.getElementById('funModalOverlay').classList.remove('show');
}

function getExpenseReaction(amount, personId) {
  const personExpenses = getPersonExpenses(personId);
  if (personExpenses.length === 0) {
    const r = EXPENSE_REACTIONS.first;
    return r[Math.floor(Math.random() * r.length)];
  }
  if (amount >= 80) return EXPENSE_REACTIONS.huge[Math.floor(Math.random() * EXPENSE_REACTIONS.huge.length)];
  if (amount >= 40) return EXPENSE_REACTIONS.big[Math.floor(Math.random() * EXPENSE_REACTIONS.big.length)];
  if (amount <= 3 && amount > 0) return EXPENSE_REACTIONS.tiny[Math.floor(Math.random() * EXPENSE_REACTIONS.tiny.length)];
  return null;
}

function spawnConfetti() {
  const colors = ['#FF6B35', '#FFB347', '#FF6F61', '#2ECC71', '#3498DB', '#9B59B6', '#F1C40F'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.5 + 's';
    piece.style.animationDuration = (1.5 + Math.random()) + 's';
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

function spawnFloatingParticles() {
  const emojis = ['🍖','🥩','🌽','🍗','🔥','🥓','🧅','🫑','🍕','🧀'];
  for (let i = 0; i < 5; i++) {
    const p = document.createElement('div');
    p.className = 'meat-particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = (Math.random() * 90 + 5) + '%';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.animationDuration = (12 + Math.random() * 8) + 's';
    document.querySelector('.app-wrap').appendChild(p);
  }
}

// ── Rendering ──
function renderAll() {
  renderExpenses();
  renderBalances();
  renderSettlements();
  renderParticipants();
  renderChatAuthorSelect();
  renderShoppingList();
  renderWishlist();
  debouncedSave();
}

function renderExpenses() {
  const container = document.getElementById('expensesList');
  const total = getTotalExpenses();
  const share = getPerPersonShare();
  const count = state.expenses.length;

  document.getElementById('statTotal').textContent = '€' + total.toFixed(2);
  document.getElementById('statShare').textContent = '€' + share.toFixed(2);
  document.getElementById('statCount').textContent = count;
  document.getElementById('statPeople').textContent = state.participants.length;

  let html = '';
  state.participants.forEach(p => {
    const expenses = getPersonExpenses(p.id);
    const pTotal = getPersonTotal(p.id);
    const balance = getPersonBalance(p.id);
    const badge = getPersonBadge(p.id);

    html += `<div class="card">
      <div class="person-row">
        <div class="person-avatar" onclick="openEmojiPicker('${p.id}')">${p.avatar}</div>
        <div class="person-info">
          <div class="person-name">${p.name}
            ${badge ? `<span class="person-badge ${badge.class}">${badge.text}</span>` : ''}
          </div>
          <div class="person-spent">Speso: €${pTotal.toFixed(2)}</div>
        </div>
        <div class="person-balance ${balance > 0.01 ? 'balance-positive' : balance < -0.01 ? 'balance-negative' : 'balance-zero'}">
          ${balance > 0.01 ? '+' : ''}€${balance.toFixed(2)}
        </div>
      </div>`;

    if (expenses.length > 0) {
      expenses.forEach(e => {
        html += `<div class="expense-item">
          <div class="expense-desc">${escapeHtml(e.description)}</div>
          <div class="expense-amount">€${e.amount.toFixed(2)}</div>
          <div class="expense-actions">
            <button onclick="editExpense('${e.id}')" title="Modifica">✏️</button>
            <button class="delete" onclick="deleteExpense('${e.id}')" title="Elimina">🗑️</button>
          </div>
        </div>`;
      });
    }
    html += '</div>';
  });

  if (state.participants.length === 0) {
    html = `<div class="empty-state">
      <div class="empty-emoji">👥</div>
      <p>Nessun partecipante!<br>Vai alla tab "Gruppo" per aggiungerne.</p>
    </div>`;
  }

  container.innerHTML = html;

  const select = document.getElementById('expensePersonSelect');
  if (select) {
    const currentVal = select.value;
    select.innerHTML = state.participants.map(p =>
      `<option value="${p.id}">${p.avatar} ${p.name}</option>`
    ).join('');
    if (currentVal && state.participants.find(p => p.id === currentVal)) {
      select.value = currentVal;
    }
  }
}

function renderBalances() {
  const container = document.getElementById('balancesContent');
  const viewMode = document.querySelector('#balancesPanel .view-toggle button.active')?.dataset?.view || 'person';
  let html = '';

  if (viewMode === 'person') {
    html += '<div class="section-title">Saldo per persona</div>';
    const sorted = [...state.participants].sort((a, b) => getPersonBalance(b.id) - getPersonBalance(a.id));
    sorted.forEach(p => {
      const total = getPersonTotal(p.id);
      const balance = getPersonBalance(p.id);
      const badge = getPersonBadge(p.id);
      html += `<div class="card">
        <div class="person-row">
          <div class="person-avatar">${p.avatar}</div>
          <div class="person-info">
            <div class="person-name">${p.name}
              ${badge ? `<span class="person-badge ${badge.class}">${badge.text}</span>` : ''}
            </div>
            <div class="person-spent">Ha speso €${total.toFixed(2)} su €${getPerPersonShare().toFixed(2)} di quota</div>
          </div>
          <div class="person-balance ${balance > 0.01 ? 'balance-positive' : balance < -0.01 ? 'balance-negative' : 'balance-zero'}">
            ${balance > 0.01 ? 'Riceve' : balance < -0.01 ? 'Deve dare' : 'Pari'}
            <br><strong>${balance > 0.01 ? '+' : ''}€${balance.toFixed(2)}</strong>
          </div>
        </div>
      </div>`;
    });
  } else {
    html += '<div class="section-title">Saldo per coppia / singolo</div>';
    state.couples.forEach(c => {
      const total = getCoupleTotal(c.id);
      const share = getCoupleShare(c.id);
      const balance = getCoupleBalance(c.id);
      const name = getCoupleName(c.id);
      html += `<div class="card">
        <div class="person-row">
          <div class="person-avatar" style="background: linear-gradient(135deg, #FFD1DC, #FFB6C1);">${c.avatar}</div>
          <div class="person-info">
            <div class="person-name">${name}</div>
            <div class="person-spent">Speso insieme: €${total.toFixed(2)} su €${share.toFixed(2)} di quota coppia</div>
          </div>
          <div class="person-balance ${balance > 0.01 ? 'balance-positive' : balance < -0.01 ? 'balance-negative' : 'balance-zero'}">
            ${balance > 0.01 ? 'Ricevono' : balance < -0.01 ? 'Devono dare' : 'Pari'}
            <br><strong>${balance > 0.01 ? '+' : ''}€${balance.toFixed(2)}</strong>
          </div>
        </div>
      </div>`;
    });
    state.participants.filter(p => !p.coupleId).forEach(p => {
      const total = getPersonTotal(p.id);
      const balance = getPersonBalance(p.id);
      html += `<div class="card">
        <div class="person-row">
          <div class="person-avatar">${p.avatar}</div>
          <div class="person-info">
            <div class="person-name">${p.name} <span style="font-size:0.7rem;color:#A1887F">(singolo/a)</span></div>
            <div class="person-spent">Ha speso €${total.toFixed(2)} su €${getPerPersonShare().toFixed(2)} di quota</div>
          </div>
          <div class="person-balance ${balance > 0.01 ? 'balance-positive' : balance < -0.01 ? 'balance-negative' : 'balance-zero'}">
            ${balance > 0.01 ? 'Riceve' : balance < -0.01 ? 'Deve dare' : 'Pari'}
            <br><strong>${balance > 0.01 ? '+' : ''}€${balance.toFixed(2)}</strong>
          </div>
        </div>
      </div>`;
    });
  }

  if (getTotalExpenses() === 0) {
    html = `<div class="empty-state">
      <div class="empty-emoji">🧾</div>
      <p>Nessuna spesa inserita ancora!<br>Vai alla tab "Spese" per iniziare.</p>
    </div>`;
  }

  container.innerHTML = html;
}

function renderSettlements() {
  const container = document.getElementById('settlementsContent');
  const transactions = calculateSettlements();

  if (getTotalExpenses() === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-emoji">🤝</div>
      <p>Niente da regolare ancora!<br>Aggiungete qualche spesa prima.</p>
    </div>`;
    return;
  }

  if (transactions.length === 0) {
    container.innerHTML = `<div class="card" style="text-align:center; padding:2rem;">
      <div style="font-size:3rem; margin-bottom:0.5rem;">🎉</div>
      <div style="font-size:1.2rem; font-weight:700; color:#2E7D32;">Tutti pari!</div>
      <div style="color:#A1887F; margin-top:0.3rem;">Nessun trasferimento necessario. Miracolo!</div>
    </div>`;
    return;
  }

  let html = `<div class="card" style="background: linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,183,77,0.05));">
    <div class="card-title">🏦 Piano di regolamento</div>
    <p style="font-size:0.8rem; color:#A1887F; margin-bottom:0.8rem;">
      Le coppie sono considerate come un'unica entità. Servono solo <strong>${transactions.length}</strong> trasferiment${transactions.length === 1 ? 'o' : 'i'}!
    </p>`;

  transactions.forEach(t => {
    html += `<div class="settlement-item">
      <div class="settlement-from">
        <span style="font-size:1.3rem;">${t.from.avatar}</span>
        <span>${t.from.name}</span>
      </div>
      <div class="settlement-arrow">➡️</div>
      <div class="settlement-to">
        <span style="font-size:1.3rem;">${t.to.avatar}</span>
        <span>${t.to.name}</span>
      </div>
      <div class="settlement-amount">€${t.amount.toFixed(2)}</div>
    </div>`;
  });

  html += '</div>';
  html += `<button class="btn btn-primary" onclick="celebrateSettlement()" style="width:100%; margin-top:0.5rem; justify-content:center;">
    🎉 Festeggia il pareggio!
  </button>`;

  container.innerHTML = html;
}

function renderParticipants() {
  const container = document.getElementById('participantsList');
  let html = '';

  if (state.couples.length > 0) {
    html += '<div class="section-title">❤️ Coppie</div>';
    state.couples.forEach(c => {
      const p1 = state.participants.find(p => p.id === c.members[0]);
      const p2 = state.participants.find(p => p.id === c.members[1]);
      if (!p1 || !p2) return;

      html += `<div class="card">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
          <div class="person-avatar" onclick="openEmojiPicker('${c.id}', true)" style="background:linear-gradient(135deg,#FFD1DC,#FFB6C1);">${c.avatar}</div>
          <span style="font-weight:700; color:#D35400;">Coppia</span>
          <button class="btn btn-danger btn-sm" onclick="breakCouple('${c.id}')" style="margin-left:auto;">💔 Separa</button>
        </div>
        <div class="participant-card">
          <div class="person-avatar" onclick="openEmojiPicker('${p1.id}')">${p1.avatar}</div>
          <div class="person-info">
            <input value="${escapeHtml(p1.name)}" onchange="renamePerson('${p1.id}', this.value)" />
          </div>
          <button class="btn btn-danger btn-icon btn-sm" onclick="removePerson('${p1.id}')" title="Rimuovi">✕</button>
        </div>
        <div class="participant-card">
          <div class="person-avatar" onclick="openEmojiPicker('${p2.id}')">${p2.avatar}</div>
          <div class="person-info">
            <input value="${escapeHtml(p2.name)}" onchange="renamePerson('${p2.id}', this.value)" />
          </div>
          <button class="btn btn-danger btn-icon btn-sm" onclick="removePerson('${p2.id}')" title="Rimuovi">✕</button>
        </div>
      </div>`;
    });
  }

  const singles = state.participants.filter(p => !p.coupleId);
  if (singles.length > 0) {
    html += '<div class="section-title">👤 Singoli</div>';
    singles.forEach(p => {
      html += `<div class="participant-card">
        <div class="person-avatar" onclick="openEmojiPicker('${p.id}')">${p.avatar}</div>
        <div class="person-info">
          <input value="${escapeHtml(p.name)}" onchange="renamePerson('${p.id}', this.value)" />
        </div>
        <button class="btn btn-danger btn-icon btn-sm" onclick="removePerson('${p.id}')" title="Rimuovi">✕</button>
      </div>`;
    });
  }

  container.innerHTML = html;

  const coupleSelect = document.getElementById('couplePartnerSelect');
  if (coupleSelect) {
    coupleSelect.innerHTML = '<option value="">Nessuno (singolo)</option>' +
      singles.map(p => `<option value="${p.id}">${p.avatar} ${p.name}</option>`).join('');
  }
}

function renderChatAuthorSelect() {
  const options = state.participants.map(p =>
    `<option value="${p.id}">${p.avatar} ${p.name}</option>`
  ).join('');

  ['chatAuthorSelect', 'wishlistAuthorSelect'].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = options;
    if (currentVal && state.participants.find(p => p.id === currentVal)) {
      select.value = currentVal;
    }
  });
}

function renderChat() {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  if (state.chatMessages.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding:1rem;">
      <div class="empty-emoji">💬</div>
      <p>Nessun messaggio!<br>Iniziate a chiacchierare!</p>
    </div>`;
    return;
  }

  let html = '';
  state.chatMessages.forEach(msg => {
    const p = state.participants.find(pp => pp.id === msg.authorId);
    const name = p ? p.name : 'Anonimo';
    const avatar = p ? p.avatar : '👤';
    const time = new Date(msg.timestamp).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    const isCurrentUser = document.getElementById('chatAuthorSelect')?.value === msg.authorId;

    html += `<div class="chat-bubble ${isCurrentUser ? 'self' : 'other'}">
      ${!isCurrentUser ? `<div class="chat-author">${avatar} ${name}</div>` : ''}
      <div>${escapeHtml(msg.text)}</div>
      <div class="chat-time">${time}</div>
    </div>`;
  });

  container.innerHTML = html;
  container.scrollTop = container.scrollHeight;
}

function renderShoppingList() {
  const container = document.getElementById('shoppingListContent');
  if (!container) return;

  if (state.shoppingList.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding:0.5rem;">
      <p style="font-size:0.85rem;">Niente nella lista!<br>Aggiungete cose da comprare! 🛒</p>
    </div>`;
    return;
  }

  let html = '';
  state.shoppingList.forEach((item, i) => {
    const author = state.participants.find(p => p.id === item.authorId);
    html += `<div class="shopping-item">
      <div class="shopping-check ${item.checked ? 'checked' : ''}" onclick="toggleShoppingItem(${i})">
        ${item.checked ? '✓' : ''}
      </div>
      <div class="shopping-text ${item.checked ? 'checked' : ''}">${escapeHtml(item.text)}</div>
      <div class="shopping-author">${author ? author.avatar : '👤'}</div>
      <button onclick="removeShoppingItem(${i})" style="border:none; background:none; cursor:pointer; font-size:0.8rem; opacity:0.5;">✕</button>
    </div>`;
  });

  container.innerHTML = html;
}

// ── Wishlist Rendering ──
function renderWishlist() {
  const container = document.getElementById('wishlistContent');
  if (!container) return;

  if (!state.wishlist) state.wishlist = [];

  // Stats
  const total = state.wishlist.length;
  const covered = state.wishlist.filter(w => w.status === 'claimed' || w.status === 'accepted').length;
  const pending = state.wishlist.filter(w => w.status === 'pending').length;
  const open = state.wishlist.filter(w => w.status === 'open' || w.status === 'declined').length;
  const pct = total > 0 ? Math.round((covered / total) * 100) : 0;

  let html = '';

  // Progress bar
  if (total > 0) {
    html += `<div class="card wishlist-progress-card">
      <div class="wishlist-progress-header">
        <span class="wishlist-progress-title">🎯 Copertura Wishlist</span>
        <span class="wishlist-progress-pct">${pct}%</span>
      </div>
      <div class="wishlist-progress-bar">
        <div class="wishlist-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="wishlist-progress-stats">
        <span>✅ ${covered} coperte</span>
        <span>⏳ ${pending} in attesa</span>
        <span>❓ ${open} scoperte</span>
      </div>
    </div>`;
  }

  // Fun message based on coverage
  if (total > 0) {
    let funMsg = '';
    if (pct === 100) funMsg = '🎉 Tutto coperto! Siete una macchina da grigliata!';
    else if (pct >= 75) funMsg = '💪 Quasi tutto coperto! Ancora uno sforzo!';
    else if (pct >= 50) funMsg = '🔥 A metà strada! Chi si offre per il resto?';
    else if (pct >= 25) funMsg = '😅 Siamo messi malino... servono volontari!';
    else funMsg = '🆘 Emergenza grigliata! Nessuno porta niente?!';

    if (funMsg) {
      html += `<div class="wishlist-fun-msg">${funMsg}</div>`;
    }
  }

  // Items grouped by status
  const statusOrder = ['open', 'declined', 'pending', 'claimed', 'accepted'];
  const statusLabels = {
    open: '❓ Da assegnare',
    declined: '😤 Rifiutate (cercasi eroi!)',
    pending: '⏳ In attesa di risposta',
    claimed: '💪 Prese in carico',
    accepted: '✅ Confermate',
  };

  const grouped = {};
  state.wishlist.forEach(item => {
    const key = item.status === 'declined' ? 'open' : item.status;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  });

  // Open/declined items first
  statusOrder.forEach(status => {
    const items = grouped[status];
    if (!items || items.length === 0) return;

    html += `<div class="section-title">${statusLabels[status]}</div>`;
    items.forEach(item => {
      html += renderWishlistItem(item);
    });
  });

  if (total === 0) {
    html = `<div class="empty-state">
      <div class="empty-emoji">🎁</div>
      <p>Nessun desiderio ancora!<br>Cosa vorresti alla grigliata?</p>
    </div>`;
  }

  container.innerHTML = html;
}

function renderWishlistItem(item) {
  const requester = state.participants.find(p => p.id === item.requestedById);
  const assignee = item.assignedToId ? state.participants.find(p => p.id === item.assignedToId) : null;
  const assigner = item.assignedById ? state.participants.find(p => p.id === item.assignedById) : null;
  const currentUser = document.getElementById('wishlistAuthorSelect')?.value;

  const requesterName = requester ? requester.name : 'Anonimo';
  const requesterAvatar = requester ? requester.avatar : '👤';

  let statusClass = 'wishlist-status-' + item.status;
  let statusEmoji = '';
  let actionButtons = '';

  switch (item.status) {
    case 'open':
    case 'declined':
      statusEmoji = item.status === 'declined' ? '😤' : '❓';
      actionButtons = `
        <button class="btn btn-primary btn-sm" onclick="claimWishlistItem('${item.id}')">🙋 Ci penso io!</button>
        <button class="btn btn-secondary btn-sm" onclick="assignWishlistItem('${item.id}')">🫵 Assegna a...</button>
      `;
      break;
    case 'pending':
      statusEmoji = '⏳';
      if (assignee && currentUser === item.assignedToId) {
        actionButtons = `
          <button class="btn btn-primary btn-sm" onclick="respondWishlistItem('${item.id}', true)">✅ Accetto!</button>
          <button class="btn btn-danger btn-sm" onclick="respondWishlistItem('${item.id}', false)">❌ No grazie!</button>
        `;
      } else {
        actionButtons = `<span class="wishlist-pending-text">In attesa di ${assignee ? assignee.name : '...'}</span>`;
      }
      break;
    case 'claimed':
      statusEmoji = '💪';
      actionButtons = `<span class="wishlist-claimed-text">${assignee ? assignee.avatar : '👤'} ${assignee ? assignee.name : '?'} ci pensa!</span>`;
      break;
    case 'accepted':
      statusEmoji = '✅';
      actionButtons = `<span class="wishlist-accepted-text">${assignee ? assignee.avatar : '👤'} ${assignee ? assignee.name : '?'} ha accettato!</span>`;
      break;
  }

  return `<div class="card wishlist-item ${statusClass}">
    <div class="wishlist-item-header">
      <div class="wishlist-item-emoji">${statusEmoji}</div>
      <div class="wishlist-item-info">
        <div class="wishlist-item-text">${escapeHtml(item.text)}</div>
        <div class="wishlist-item-meta">
          Desiderato da ${requesterAvatar} ${requesterName}
          ${assigner && item.status === 'pending' ? ` · Assegnato da ${assigner.avatar} ${assigner.name}` : ''}
        </div>
      </div>
      <button onclick="removeWishlistItem('${item.id}')" class="wishlist-remove-btn" title="Rimuovi">✕</button>
    </div>
    <div class="wishlist-item-actions">${actionButtons}</div>
  </div>`;
}

// ── Backup Rendering ──
async function renderBackups() {
  const container = document.getElementById('backupsList');
  if (!container) return;

  try {
    const res = await fetch('/api/backups');
    const { backups } = await res.json();

    if (backups.length === 0) {
      container.innerHTML = `<div class="empty-state" style="padding:0.5rem;">
        <p style="font-size:0.85rem;">Nessun backup ancora.<br>Crea il primo! 💾</p>
      </div>`;
      return;
    }

    let html = '';
    backups.forEach(b => {
      const date = new Date(b.created_at + 'Z').toLocaleString('it-IT');
      html += `<div class="backup-item">
        <div class="backup-info">
          <div class="backup-desc">${escapeHtml(b.description)}</div>
          <div class="backup-date">${date}</div>
        </div>
        <div class="backup-actions">
          <button class="btn btn-secondary btn-sm" onclick="restoreBackup(${b.id})" title="Ripristina">🔄</button>
          <button class="btn btn-danger btn-sm" onclick="deleteBackup(${b.id})" title="Elimina">🗑️</button>
        </div>
      </div>`;
    });

    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = '<p style="color:#C62828; font-size:0.8rem;">Errore nel caricamento dei backup.</p>';
  }
}

// ── Event Handlers ──
function addExpense() {
  const personId = document.getElementById('expensePersonSelect').value;
  const desc = document.getElementById('expenseDescInput').value.trim();
  const amountStr = document.getElementById('expenseAmountInput').value;
  const amount = parseFloat(amountStr);

  if (!personId || !desc || isNaN(amount) || amount <= 0) {
    showFunModal('🤨', 'EHM...', 'Compila tutti i campi! Importo, descrizione... non è difficile!', 'OK, scusa!');
    return;
  }

  const reaction = getExpenseReaction(amount, personId);

  state.expenses.push({
    id: genId(),
    personId,
    description: desc,
    amount,
    timestamp: Date.now(),
  });

  document.getElementById('expenseDescInput').value = '';
  document.getElementById('expenseAmountInput').value = '';

  renderAll();

  if (reaction) {
    setTimeout(() => showFunModal(reaction.emoji, reaction.title, reaction.text), 300);
  }
}

function deleteExpense(expenseId) {
  state.expenses = state.expenses.filter(e => e.id !== expenseId);
  renderAll();
}

function editExpense(expenseId) {
  const expense = state.expenses.find(e => e.id === expenseId);
  if (!expense) return;

  const overlay = document.getElementById('editModalOverlay');
  overlay.innerHTML = `<div class="edit-modal">
    <h3>✏️ Modifica Spesa</h3>
    <label>Descrizione</label>
    <input id="editDescInput" value="${escapeHtml(expense.description)}" />
    <label>Importo (€)</label>
    <input id="editAmountInput" type="number" step="0.01" min="0" value="${expense.amount}" />
    <div class="btn-row">
      <button class="btn btn-secondary" onclick="closeEditModal()">Annulla</button>
      <button class="btn btn-primary" onclick="saveExpenseEdit('${expenseId}')">Salva 💾</button>
    </div>
  </div>`;
  overlay.classList.add('show');
}

function saveExpenseEdit(expenseId) {
  const expense = state.expenses.find(e => e.id === expenseId);
  if (!expense) return;
  const desc = document.getElementById('editDescInput').value.trim();
  const amount = parseFloat(document.getElementById('editAmountInput').value);
  if (desc) expense.description = desc;
  if (!isNaN(amount) && amount > 0) expense.amount = amount;
  closeEditModal();
  renderAll();
}

function closeEditModal() {
  document.getElementById('editModalOverlay').classList.remove('show');
}

function addPerson() {
  const name = document.getElementById('newPersonName').value.trim();
  if (!name) {
    showFunModal('🤔', 'E IL NOME?', 'Anche i fantasmi hanno un nome... scrivine uno!', 'Hai ragione!');
    return;
  }

  const partnerId = document.getElementById('couplePartnerSelect').value;
  const avatar = AVATAR_POOL[Math.floor(Math.random() * AVATAR_POOL.length)];
  const newPerson = { id: genId(), name, coupleId: null, avatar };

  state.participants.push(newPerson);

  if (partnerId) {
    const partner = state.participants.find(p => p.id === partnerId);
    if (partner && !partner.coupleId) {
      const coupleId = genId();
      const coupleAvatar = COUPLE_AVATARS[Math.floor(Math.random() * COUPLE_AVATARS.length)];
      newPerson.coupleId = coupleId;
      partner.coupleId = coupleId;
      state.couples.push({ id: coupleId, members: [partner.id, newPerson.id], avatar: coupleAvatar });
      showFunModal('💕', 'NUOVA COPPIA!', `${partner.name} e ${name} sono ufficialmente una coppia! Awww! 🥰`, 'Auguri! 🎉');
    }
  } else {
    showFunModal('🎉', 'BENVENUTO/A!', `${name} si è unito/a alla grigliata! Più siamo meglio è!`, 'Evvai! 🍖');
  }

  document.getElementById('newPersonName').value = '';
  renderAll();
}

function removePerson(personId) {
  const person = state.participants.find(p => p.id === personId);
  if (!person) return;

  if (person.coupleId) {
    const couple = state.couples.find(c => c.id === person.coupleId);
    if (couple) {
      const partnerId = couple.members.find(id => id !== personId);
      const partner = state.participants.find(p => p.id === partnerId);
      if (partner) partner.coupleId = null;
      state.couples = state.couples.filter(c => c.id !== couple.id);
    }
  }

  state.expenses = state.expenses.filter(e => e.personId !== personId);
  state.participants = state.participants.filter(p => p.id !== personId);

  showFunModal('👋', 'ADDIO!', `${person.name} ci ha lasciato... più carne per noi! 🍖`, 'Ciao ciao!');
  renderAll();
}

function renamePerson(personId, newName) {
  const person = state.participants.find(p => p.id === personId);
  if (person && newName.trim()) {
    person.name = newName.trim();
    renderAll();
  }
}

function breakCouple(coupleId) {
  const couple = state.couples.find(c => c.id === coupleId);
  if (!couple) return;

  couple.members.forEach(pid => {
    const p = state.participants.find(pp => pp.id === pid);
    if (p) p.coupleId = null;
  });

  state.couples = state.couples.filter(c => c.id !== coupleId);
  showFunModal('💔', 'SEPARAZIONE!', 'Si sono separati! Almeno per i conti... 😅', 'Capita!');
  renderAll();
}

function makeCouple() {
  const singles = state.participants.filter(p => !p.coupleId);
  if (singles.length < 2) {
    showFunModal('🤷', 'IMPOSSIBILE!', 'Servono almeno 2 persone single per fare una coppia!', 'Logico!');
    return;
  }

  const overlay = document.getElementById('editModalOverlay');
  overlay.innerHTML = `<div class="edit-modal">
    <h3>💕 Crea Coppia</h3>
    <label>Persona 1</label>
    <select id="couplePerson1">
      ${singles.map(p => `<option value="${p.id}">${p.avatar} ${p.name}</option>`).join('')}
    </select>
    <label>Persona 2</label>
    <select id="couplePerson2">
      ${singles.map(p => `<option value="${p.id}">${p.avatar} ${p.name}</option>`).join('')}
    </select>
    <div class="btn-row">
      <button class="btn btn-secondary" onclick="closeEditModal()">Annulla</button>
      <button class="btn btn-primary" onclick="saveMakeCouple()">Unisci! 💕</button>
    </div>
  </div>`;
  if (singles.length >= 2) {
    setTimeout(() => { document.getElementById('couplePerson2').value = singles[1].id; }, 0);
  }
  overlay.classList.add('show');
}

function saveMakeCouple() {
  const p1Id = document.getElementById('couplePerson1').value;
  const p2Id = document.getElementById('couplePerson2').value;
  if (p1Id === p2Id) {
    showFunModal('🤦', 'EHM...', 'Non puoi fare coppia con te stesso/a! Dai, scegli due persone diverse!', 'Oops!');
    return;
  }
  const p1 = state.participants.find(p => p.id === p1Id);
  const p2 = state.participants.find(p => p.id === p2Id);
  if (!p1 || !p2) return;

  const coupleId = genId();
  const coupleAvatar = COUPLE_AVATARS[Math.floor(Math.random() * COUPLE_AVATARS.length)];
  p1.coupleId = coupleId;
  p2.coupleId = coupleId;
  state.couples.push({ id: coupleId, members: [p1Id, p2Id], avatar: coupleAvatar });

  closeEditModal();
  showFunModal('💕', 'NUOVA COPPIA!', `${p1.name} e ${p2.name} adesso sono una coppia! Awww! 🥰`, 'Che bello!');
  renderAll();
}

// ── Emoji Picker ──
let emojiPickerTarget = null;
let emojiPickerIsCouple = false;

function openEmojiPicker(targetId, isCouple = false) {
  emojiPickerTarget = targetId;
  emojiPickerIsCouple = isCouple;
  document.getElementById('emojiPickerOverlay').classList.add('show');
}

function selectEmoji(emoji) {
  if (emojiPickerIsCouple) {
    const couple = state.couples.find(c => c.id === emojiPickerTarget);
    if (couple) couple.avatar = emoji;
  } else {
    const person = state.participants.find(p => p.id === emojiPickerTarget);
    if (person) person.avatar = emoji;
  }
  document.getElementById('emojiPickerOverlay').classList.remove('show');
  renderAll();
}

function closeEmojiPicker() {
  document.getElementById('emojiPickerOverlay').classList.remove('show');
}

// ── Chat ──
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const authorId = document.getElementById('chatAuthorSelect').value;
  const text = input.value.trim();
  if (!text || !authorId) return;

  state.chatMessages.push({
    id: genId(),
    authorId,
    text,
    timestamp: Date.now(),
  });

  input.value = '';
  renderChat();
  debouncedSave();

  const lower = text.toLowerCase();
  if (lower.includes('birra') || lower.includes('birre')) {
    setTimeout(() => showFunModal('🍺', 'BIRRA!', 'Qualcuno ha detto birra? Questo si che è un piano!', 'Cin cin!'), 500);
  } else if (lower.includes('vegetarian') || lower.includes('insalata') || lower.includes('verdur')) {
    setTimeout(() => showFunModal('🥬', 'AHAHAH!', 'Verdure alla GRIGLIATA? Coraggioso/a!', 'Perché no! 🤷'), 500);
  }
}

// ── Shopping List ──
function addShoppingItem() {
  const input = document.getElementById('shoppingInput');
  const authorId = document.getElementById('chatAuthorSelect')?.value || state.participants[0]?.id;
  const text = input.value.trim();
  if (!text) return;

  state.shoppingList.push({ text, authorId, checked: false, timestamp: Date.now() });
  input.value = '';
  renderShoppingList();
  debouncedSave();
}

function toggleShoppingItem(index) {
  if (state.shoppingList[index]) {
    state.shoppingList[index].checked = !state.shoppingList[index].checked;
    renderShoppingList();
    debouncedSave();
  }
}

function removeShoppingItem(index) {
  state.shoppingList.splice(index, 1);
  renderShoppingList();
  debouncedSave();
}

// ── Wishlist Event Handlers ──
function addWishlistItem() {
  const input = document.getElementById('wishlistInput');
  const authorId = document.getElementById('wishlistAuthorSelect')?.value;
  const text = input.value.trim();
  if (!text || !authorId) {
    showFunModal('🤨', 'EHM...', 'Scrivi cosa vorresti alla grigliata!', 'OK!');
    return;
  }

  const author = state.participants.find(p => p.id === authorId);
  state.wishlist.push({
    id: genId(),
    text,
    requestedById: authorId,
    assignedToId: null,
    assignedById: null,
    status: 'open',
    timestamp: Date.now(),
  });

  input.value = '';
  renderAll();

  showFunModal('🎁', 'DESIDERIO AGGIUNTO!', `${author ? author.name : 'Qualcuno'} vuole: "${text}". Chi si offre? 🤔`, 'Vediamo chi si fa avanti!');
}

function claimWishlistItem(itemId) {
  const item = state.wishlist.find(w => w.id === itemId);
  if (!item) return;

  const currentUser = document.getElementById('wishlistAuthorSelect')?.value;
  if (!currentUser) return;

  const person = state.participants.find(p => p.id === currentUser);
  item.assignedToId = currentUser;
  item.assignedById = currentUser;
  item.status = 'claimed';

  renderAll();

  const msg = WISHLIST_SELF_CLAIM[Math.floor(Math.random() * WISHLIST_SELF_CLAIM.length)];
  showFunModal(msg.emoji, msg.title, msg.text.replace('{name}', person ? person.name : '???'));
}

function assignWishlistItem(itemId) {
  const item = state.wishlist.find(w => w.id === itemId);
  if (!item) return;

  const currentUser = document.getElementById('wishlistAuthorSelect')?.value;
  const others = state.participants.filter(p => p.id !== currentUser);

  if (others.length === 0) {
    showFunModal('🤷', 'NESSUNO!', 'Non ci sono altre persone a cui assegnarlo!', 'OK!');
    return;
  }

  const overlay = document.getElementById('editModalOverlay');
  overlay.innerHTML = `<div class="edit-modal">
    <h3>🫵 Assegna a qualcuno!</h3>
    <p style="font-size:0.85rem; color:#8D6E63; margin-bottom:0.8rem;">Chi deve portare: <strong>${escapeHtml(item.text)}</strong>?</p>
    <label>Scegli il/la fortunato/a</label>
    <select id="assignTargetSelect">
      ${others.map(p => `<option value="${p.id}">${p.avatar} ${p.name}</option>`).join('')}
    </select>
    <div class="btn-row">
      <button class="btn btn-secondary" onclick="closeEditModal()">Ci penso...</button>
      <button class="btn btn-primary" onclick="confirmAssignWishlist('${itemId}')">Assegna! 🎯</button>
    </div>
  </div>`;
  overlay.classList.add('show');
}

function confirmAssignWishlist(itemId) {
  const item = state.wishlist.find(w => w.id === itemId);
  if (!item) return;

  const targetId = document.getElementById('assignTargetSelect').value;
  const currentUser = document.getElementById('wishlistAuthorSelect')?.value;
  const assignee = state.participants.find(p => p.id === targetId);
  const assigner = state.participants.find(p => p.id === currentUser);

  item.assignedToId = targetId;
  item.assignedById = currentUser;
  item.status = 'pending';

  closeEditModal();
  renderAll();

  const msg = WISHLIST_ASSIGN_MESSAGES[Math.floor(Math.random() * WISHLIST_ASSIGN_MESSAGES.length)];
  const text = msg.text
    .replace('{assignee}', assignee ? assignee.name : '???')
    .replace('{assigner}', assigner ? assigner.name : '???')
    .replace('{item}', item.text);
  showFunModal(msg.emoji, msg.title, text);
}

function respondWishlistItem(itemId, accept) {
  const item = state.wishlist.find(w => w.id === itemId);
  if (!item) return;

  const person = state.participants.find(p => p.id === item.assignedToId);
  const name = person ? person.name : '???';

  if (accept) {
    item.status = 'accepted';
    renderAll();
    spawnConfetti();
    const msg = WISHLIST_ACCEPT_MESSAGES[Math.floor(Math.random() * WISHLIST_ACCEPT_MESSAGES.length)];
    showFunModal(msg.emoji, msg.title, msg.text.replace('{name}', name));
  } else {
    item.status = 'declined';
    item.assignedToId = null;
    item.assignedById = null;
    renderAll();
    const msg = WISHLIST_DECLINE_MESSAGES[Math.floor(Math.random() * WISHLIST_DECLINE_MESSAGES.length)];
    showFunModal(msg.emoji, msg.title, msg.text.replace('{name}', name));
  }
}

function removeWishlistItem(itemId) {
  state.wishlist = state.wishlist.filter(w => w.id !== itemId);
  renderAll();
}

// ── Backup Event Handlers ──
async function createBackup() {
  const desc = document.getElementById('backupDescInput')?.value?.trim() || '';
  try {
    const res = await fetch('/api/backups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: desc || undefined }),
    });
    if (res.ok) {
      document.getElementById('backupDescInput').value = '';
      showFunModal('💾', 'BACKUP CREATO!', 'I tuoi dati sono al sicuro! Puoi grigliare tranquillo!', 'Perfetto!');
      renderBackups();
    }
  } catch (e) {
    showFunModal('😱', 'ERRORE!', 'Non sono riuscito a creare il backup... riprova!', 'OK!');
  }
}

async function restoreBackup(backupId) {
  const overlay = document.getElementById('funModalOverlay');
  overlay.querySelector('.modal-emoji').textContent = '⚠️';
  overlay.querySelector('.modal-title').textContent = 'RIPRISTINARE?';
  overlay.querySelector('.modal-text').textContent = 'Vuoi tornare indietro nel tempo? Lo stato attuale verrà salvato automaticamente come backup.';

  const btn = overlay.querySelector('.modal-btn');
  btn.textContent = 'SI, RIPRISTINA! 🔄';
  btn.onclick = async () => {
    closeFunModal();
    try {
      const res = await fetch(`/api/backups/${backupId}/restore`, { method: 'POST' });
      if (res.ok) {
        const { version } = await res.json();
        stateVersion = version;
        await loadStateFromServer();
        renderAll();
        renderChat();
        renderBackups();
        showFunModal('🎉', 'RIPRISTINATO!', 'Viaggio nel tempo completato! Tutto come prima!', 'Grazie!');
      }
    } catch (e) {
      showFunModal('😱', 'ERRORE!', 'Ripristino fallito... riprova!', 'OK!');
    }
  };

  // Add cancel button
  const existingCancel = overlay.querySelector('.modal-extra-btn');
  if (existingCancel) existingCancel.remove();
  const cancel = document.createElement('button');
  cancel.className = 'btn btn-secondary modal-extra-btn';
  cancel.textContent = 'No, annulla!';
  cancel.style.marginRight = '0.5rem';
  cancel.onclick = closeFunModal;
  btn.parentNode.insertBefore(cancel, btn);

  overlay.classList.add('show');
}

async function deleteBackup(backupId) {
  try {
    await fetch(`/api/backups/${backupId}`, { method: 'DELETE' });
    renderBackups();
  } catch (e) { /* ignore */ }
}

// ── Fun settlement celebration ──
function celebrateSettlement() {
  spawnConfetti();
  showFunModal('🎉', 'EVVIVA!', 'I conti sono fatti! Adesso potete tornare ad essere amici! 🤣🍖🔥', 'ALLA PROSSIMA! 🥳');
}

// ── Periodic roasts for non-spenders ──
function checkForRoasts() {
  if (getTotalExpenses() === 0) return;
  const nonSpenders = state.participants.filter(p => getPersonTotal(p.id) === 0);
  if (nonSpenders.length > 0 && Math.random() < 0.15) {
    const person = nonSpenders[Math.floor(Math.random() * nonSpenders.length)];
    const roast = IDLE_ROASTS[Math.floor(Math.random() * IDLE_ROASTS.length)];
    showFunModal(roast.emoji, roast.title, roast.text.replace('{name}', person.name));
  }
}

// ── Tab Navigation ──
function switchTab(tabName) {
  document.querySelectorAll('.app-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  document.querySelectorAll('.app-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tabName));

  if (tabName === 'chat') renderChat();
  if (tabName === 'saldi') renderBalances();
  if (tabName === 'regola') renderSettlements();
  if (tabName === 'wishlist') renderWishlist();
  if (tabName === 'persone') renderBackups();
}

function switchBalanceView(view) {
  document.querySelectorAll('#balancesPanel .view-toggle button').forEach(b =>
    b.classList.toggle('active', b.dataset.view === view)
  );
  renderBalances();
}

// ── Reset ──
function resetAll() {
  const overlay = document.getElementById('funModalOverlay');
  overlay.querySelector('.modal-emoji').textContent = '⚠️';
  overlay.querySelector('.modal-title').textContent = 'SICURO/A?';
  overlay.querySelector('.modal-text').textContent = 'Vuoi cancellare TUTTO e ricominciare da capo? (Un backup automatico verrà creato)';

  const btn = overlay.querySelector('.modal-btn');
  btn.textContent = 'SI, RESET! 💥';
  btn.onclick = async () => {
    // Auto-backup before reset
    await fetch('/api/backups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: 'Auto-backup prima del reset' }),
    });
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    closeFunModal();
    renderAll();
    renderChat();
    showFunModal('🔄', 'RESET!', 'Tutto azzerato! Si ricomincia! (Il backup è stato salvato)', 'Via! 🍖');
  };

  const existingCancel = overlay.querySelector('.modal-extra-btn');
  if (existingCancel) existingCancel.remove();
  const cancel = document.createElement('button');
  cancel.className = 'btn btn-secondary modal-extra-btn';
  cancel.textContent = 'No, aspetta!';
  cancel.style.marginRight = '0.5rem';
  cancel.onclick = closeFunModal;
  btn.parentNode.insertBefore(cancel, btn);

  overlay.classList.add('show');
}

// ── Utility ──
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', async () => {
  // Load state from server
  const loaded = await loadStateFromServer();
  if (!loaded) {
    showServerLoadGuard(`Non sono riuscito a caricare lo stato dal server (${lastLoadErrorMessage || 'errore sconosciuto'}). Ti mostro i valori di default ma il salvataggio resta bloccato per proteggere il database.`);
  }

  // Tab clicks
  document.querySelectorAll('.app-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Balance view toggle
  document.querySelectorAll('#balancesPanel .view-toggle button').forEach(btn => {
    btn.addEventListener('click', () => switchBalanceView(btn.dataset.view));
  });

  // Fun modal close
  document.getElementById('funModalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('funModalOverlay')) closeFunModal();
  });

  // Emoji picker close on backdrop click
  document.getElementById('emojiPickerOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('emojiPickerOverlay')) closeEmojiPicker();
  });

  // Edit modal close on backdrop click
  document.getElementById('editModalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('editModalOverlay')) closeEditModal();
  });

  // Chat enter key
  document.getElementById('chatInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); sendChatMessage(); }
  });

  // Shopping input enter key
  document.getElementById('shoppingInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addShoppingItem(); }
  });

  // Expense enter key on amount input
  document.getElementById('expenseAmountInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addExpense(); }
  });

  // Wishlist enter key
  document.getElementById('wishlistInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addWishlistItem(); }
  });

  // Start fun
  startFunnyQuotes();
  spawnFloatingParticles();
  renderAll();
  renderChat();

  // Periodic roast check
  setInterval(checkForRoasts, 45000);

  // Poll for changes from other devices every 5 seconds
  setInterval(pollForChanges, 5000);
});
