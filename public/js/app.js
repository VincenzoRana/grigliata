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
  nextId: 10,
};

// ── State ──
let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem('grigliata_state');
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  localStorage.setItem('grigliata_state', JSON.stringify(state));
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

  // Add couples as units
  state.couples.forEach(c => {
    const balance = getCoupleBalance(c.id);
    units.push({
      id: c.id,
      type: 'couple',
      name: getCoupleName(c.id),
      avatar: c.avatar,
      balance: Math.round(balance * 100) / 100,
    });
  });

  // Add singles as units
  state.participants
    .filter(p => !p.coupleId)
    .forEach(p => {
      const balance = getPersonBalance(p.id);
      units.push({
        id: p.id,
        type: 'single',
        name: p.name,
        avatar: p.avatar,
        balance: Math.round(balance * 100) / 100,
      });
    });

  // Separate debtors and creditors
  const debtors = units.filter(u => u.balance < -0.01).map(u => ({ ...u, amount: Math.abs(u.balance) }));
  const creditors = units.filter(u => u.balance > 0.01).map(u => ({ ...u, amount: u.balance }));

  // Sort by amount descending
  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const transactions = [];
  let di = 0, ci = 0;

  while (di < debtors.length && ci < creditors.length) {
    const d = debtors[di];
    const c = creditors[ci];
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
  overlay.classList.add('show');
}

function closeFunModal() {
  document.getElementById('funModalOverlay').classList.remove('show');
}

function getExpenseReaction(amount, personId) {
  const personExpenses = getPersonExpenses(personId);
  // First expense for this person
  if (personExpenses.length === 0) {
    const r = EXPENSE_REACTIONS.first;
    return r[Math.floor(Math.random() * r.length)];
  }
  if (amount >= 80) {
    const r = EXPENSE_REACTIONS.huge;
    return r[Math.floor(Math.random() * r.length)];
  }
  if (amount >= 40) {
    const r = EXPENSE_REACTIONS.big;
    return r[Math.floor(Math.random() * r.length)];
  }
  if (amount <= 3 && amount > 0) {
    const r = EXPENSE_REACTIONS.tiny;
    return r[Math.floor(Math.random() * r.length)];
  }
  return null; // No reaction for normal amounts
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
  saveState();
}

function renderExpenses() {
  const container = document.getElementById('expensesList');
  const total = getTotalExpenses();
  const share = getPerPersonShare();
  const count = state.expenses.length;

  // Stats
  document.getElementById('statTotal').textContent = '€' + total.toFixed(2);
  document.getElementById('statShare').textContent = '€' + share.toFixed(2);
  document.getElementById('statCount').textContent = count;
  document.getElementById('statPeople').textContent = state.participants.length;

  // Group expenses by person
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

  // Update expense form select
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
    // Couples
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
    // Singles
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

  transactions.forEach((t, i) => {
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

  // Couples section
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

  // Singles section
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

  // Couple partner select: show only singles
  const coupleSelect = document.getElementById('couplePartnerSelect');
  if (coupleSelect) {
    coupleSelect.innerHTML = '<option value="">Nessuno (singolo)</option>' +
      singles.map(p => `<option value="${p.id}">${p.avatar} ${p.name}</option>`).join('');
  }
}

function renderChatAuthorSelect() {
  const select = document.getElementById('chatAuthorSelect');
  if (!select) return;
  const currentVal = select.value;
  select.innerHTML = state.participants.map(p =>
    `<option value="${p.id}">${p.avatar} ${p.name}</option>`
  ).join('');
  if (currentVal && state.participants.find(p => p.id === currentVal)) {
    select.value = currentVal;
  }
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

  // Get reaction before adding expense
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

  // Show fun reaction
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
  document.getElementById('editModalTitle').textContent = '✏️ Modifica Spesa';
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
      state.couples.push({
        id: coupleId,
        members: [partner.id, newPerson.id],
        avatar: coupleAvatar,
      });
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

  // Remove from couple
  if (person.coupleId) {
    const couple = state.couples.find(c => c.id === person.coupleId);
    if (couple) {
      const partnerId = couple.members.find(id => id !== personId);
      const partner = state.participants.find(p => p.id === partnerId);
      if (partner) partner.coupleId = null;
      state.couples = state.couples.filter(c => c.id !== couple.id);
    }
  }

  // Remove expenses
  state.expenses = state.expenses.filter(e => e.personId !== personId);
  // Remove person
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
  let html = `<div class="edit-modal">
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
  overlay.innerHTML = html;
  // Default second select to second person
  if (singles.length >= 2) {
    document.getElementById('couplePerson2').value = singles[1].id;
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
  const overlay = document.getElementById('emojiPickerOverlay');
  overlay.classList.add('show');
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
  saveState();

  // Fun auto-responses for certain keywords
  const lower = text.toLowerCase();
  if (lower.includes('birra') || lower.includes('birre')) {
    setTimeout(() => {
      showFunModal('🍺', 'BIRRA!', 'Qualcuno ha detto birra? Questo si che è un piano!', 'Cin cin!');
    }, 500);
  } else if (lower.includes('vegetarian') || lower.includes('insalata') || lower.includes('verdur')) {
    setTimeout(() => {
      showFunModal('🥬', 'AHAHAH!', 'Verdure alla GRIGLIATA? Coraggioso/a!', 'Perché no! 🤷');
    }, 500);
  }
}

// ── Shopping List ──
function addShoppingItem() {
  const input = document.getElementById('shoppingInput');
  const authorId = document.getElementById('chatAuthorSelect')?.value || state.participants[0]?.id;
  const text = input.value.trim();
  if (!text) return;

  state.shoppingList.push({
    text,
    authorId,
    checked: false,
    timestamp: Date.now(),
  });

  input.value = '';
  renderShoppingList();
  saveState();
}

function toggleShoppingItem(index) {
  if (state.shoppingList[index]) {
    state.shoppingList[index].checked = !state.shoppingList[index].checked;
    renderShoppingList();
    saveState();
  }
}

function removeShoppingItem(index) {
  state.shoppingList.splice(index, 1);
  renderShoppingList();
  saveState();
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
}

function switchBalanceView(view) {
  document.querySelectorAll('#balancesPanel .view-toggle button').forEach(b =>
    b.classList.toggle('active', b.dataset.view === view)
  );
  renderBalances();
}

// ── Reset ──
function resetAll() {
  showFunModal('⚠️', 'SICURO/A?', 'Vuoi cancellare TUTTO e ricominciare da capo?', 'SI, RESET! 💥');
  // Override modal button to do the reset
  const btn = document.querySelector('#funModalOverlay .modal-btn');
  const originalClick = btn.onclick;
  btn.onclick = () => {
    localStorage.removeItem('grigliata_state');
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    closeFunModal();
    renderAll();
    renderChat();
    showFunModal('🔄', 'RESET!', 'Tutto azzerato! Si ricomincia!', 'Via! 🍖');
  };
  // Add cancel button
  const cancel = document.createElement('button');
  cancel.className = 'btn btn-secondary';
  cancel.textContent = 'No, aspetta!';
  cancel.style.marginRight = '0.5rem';
  cancel.onclick = () => { closeFunModal(); };
  btn.parentNode.insertBefore(cancel, btn);
}

// ── Utility ──
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
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

  // Start fun
  startFunnyQuotes();
  spawnFloatingParticles();
  renderAll();
  renderChat();

  // Periodic roast check
  setInterval(checkForRoasts, 45000);
});
