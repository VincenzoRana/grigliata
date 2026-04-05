const AVATAR_POOL = [
  "👸", "🧔", "🦁", "🦋", "🐧", "🌹", "🤖", "🦊", "🦄", "🐔",
  "🐷", "🐮", "🐑", "🦆", "🐙", "🦑", "🦀", "🐊", "🦖", "🦕",
  "🐢", "🐸", "🦩", "🦜", "🦚", "🐝", "🐛", "🐌", "🐞", "🐼",
  "🐨", "🐯", "🐻", "🦝", "🦥", "🦧", "🐒", "🦃", "🐉", "🐲",
  "🤡", "🤠", "🧙", "🧛", "🧜", "🧚", "🧞", "🥷", "🦸", "🦹",
  "🧟", "👻", "👽", "🤯", "🥶", "🥳", "😎", "🤓", "🧐", "🤪",
  "🥸", "💀", "🎃", "🤑", "🫣", "🤩", "🥹", "😈"
];

const COUPLE_AVATARS = ["💕", "🔥", "⚡", "🌈", "💫", "🎪", "🎭", "🎯", "🍕", "🎸"];

const EMOJI_LIST = [
  "👸", "🧔", "🦁", "🦋", "🐧", "🌹", "🤖", "🦊", "🦄", "🐔",
  "🐷", "🐮", "🐑", "🦆", "🐙", "🦑", "🦀", "🐊", "🦖", "🦕",
  "🐢", "🐸", "🦩", "🦜", "🦚", "🐝", "🐛", "🐌", "🐞", "🐼",
  "🐨", "🐯", "🐻", "🦝", "🦥", "🦧", "🐒", "🦃", "🐉", "🐲",
  "🤡", "🤠", "🧙", "🧛", "🧜", "🧚", "🧞", "🥷", "🦸", "🦹",
  "🧟", "👻", "👽", "🤯", "🥶", "🥳", "😎", "🤓", "🧐", "🤪",
  "🥸", "💀", "🎃", "🤑", "🫣", "🤩", "🥹", "😈", "💕", "🔥",
  "⚡", "🌈", "💫", "🎪", "🎭", "🎯", "🍕", "🎸", "🌺", "🍖",
  "🦴", "🥩", "🌽", "🍺", "🧊", "🍋"
];

const QUIZ_QUESTIONS = [
  {
    id: "quiz_1",
    question: "Quanto conviene lasciare riposare la carne dopo la griglia?",
    options: ["Zero, si mangia subito", "Qualche minuto", "Almeno mezz'ora", "Solo se è pollo"],
    correct: 1,
    explanation: "Qualche minuto aiuta i succhi a redistribuirsi. Meno corse, meno lago nel piatto."
  },
  {
    id: "quiz_2",
    question: "Cosa salva una grigliata quando tutti hanno fame e nessuno parte con la spesa?",
    options: ["Un gruppo WhatsApp", "Una lista chiara e una wishlist coperta", "Una preghiera", "Più ketchup"],
    correct: 1,
    explanation: "La logistica batte l'improvvisazione. Sempre."
  },
  {
    id: "quiz_3",
    question: "Per il reflex di cottura, qual è la mossa più nobile?",
    options: ["Girare tutto ogni 5 secondi", "Toccare e schiacciare la carne", "Aspettare il momento giusto", "Chiedere al cugino che improvvisa"],
    correct: 2,
    explanation: "La pazienza è una skill, anche davanti alla brace."
  },
  {
    id: "quiz_4",
    question: "Se una persona anticipa tanto più della quota, in questa app che succede?",
    options: ["Sparisce il debito", "Riceve soldi dagli altri", "Diventa admin", "Ottiene carne gratis"],
    correct: 1,
    explanation: "Il regolamento serve esattamente a questo: redistribuire in modo pulito."
  },
  {
    id: "quiz_5",
    question: "Qual è il vero superpotere della carbonella?",
    options: ["Rendere tutto immediato", "Scaldare solo quando la guardi", "Creare calore stabile se la gestisci bene", "Sostituire il sale"],
    correct: 2,
    explanation: "Brace gestita bene, cottura serena."
  },
  {
    id: "quiz_6",
    question: "Quando una wishlist è davvero utile?",
    options: ["Quando resta nei sogni", "Quando dice chi porta cosa", "Quando è scritta in rima", "Quando contiene solo dessert"],
    correct: 1,
    explanation: "La wishlist riduce doppioni, buchi e discussioni inutili."
  },
  {
    id: "quiz_7",
    question: "In una grigliata ben organizzata, la chat serve soprattutto a:",
    options: ["Fare flame", "Mandare sticker di fuoco", "Coordinare cambi e imprevisti", "Cambiare il menù ogni dieci minuti"],
    correct: 2,
    explanation: "Un po' di caos va bene, ma la chat deve aiutare."
  },
  {
    id: "quiz_8",
    question: "Qual è l'ingrediente più raro in una divisione conti tra amici?",
    options: ["La maionese", "La precisione", "Il limone", "La salsiccia piccante"],
    correct: 1,
    explanation: "La precisione costa poco e salva amicizie."
  }
];

const PARTY_CHALLENGES = [
  { title: "Pinza d'oro", text: "Nomina il/la maestro/a della pinza del gruppo e fagli/le servire il primo giro." },
  { title: "Sfida marinatura", text: "Chi ha fatto l'ultima spesa deve inventare il claim pubblicitario della carne di stasera." },
  { title: "Giro applausi", text: "Il gruppo deve applaudire chi sta anticipando di più come se avesse appena vinto un premio." },
  { title: "Toast obbligatorio", text: "Fai fare un brindisi a chi ha commentato l'ultima spesa con il dettaglio più utile." },
  { title: "Giudice del pane", text: "Scegli una persona che dovrà dare il voto ufficiale al pane della serata." },
  { title: "Missione ghiaccio", text: "Chi pesca la sfida deve nominare due persone per un controllo scorte lampo." }
];

const LOCAL_KEYS = {
  activeParticipantId: "grigliata.activeParticipantId",
  primaryTab: "grigliata.primaryTab",
  orgTab: "grigliata.orgTab"
};

const DEFAULT_STATE = {
  participants: [
    { id: "p1", name: "Giorgia", coupleId: "c1", avatar: "👸" },
    { id: "p2", name: "Vince", coupleId: "c1", avatar: "🧔" },
    { id: "p3", name: "Marcone", coupleId: "c2", avatar: "🦁" },
    { id: "p4", name: "Marta", coupleId: "c2", avatar: "🦋" },
    { id: "p5", name: "Pillo", coupleId: "c3", avatar: "🐧" },
    { id: "p6", name: "Rosa", coupleId: "c3", avatar: "🌹" },
    { id: "p7", name: "Robi", coupleId: "c4", avatar: "🤖" },
    { id: "p8", name: "Franci", coupleId: "c4", avatar: "🦊" },
    { id: "p9", name: "Tiziana", coupleId: null, avatar: "🦄" }
  ],
  couples: [
    { id: "c1", members: ["p1", "p2"], avatar: "💕" },
    { id: "c2", members: ["p3", "p4"], avatar: "🔥" },
    { id: "c3", members: ["p5", "p6"], avatar: "⚡" },
    { id: "c4", members: ["p7", "p8"], avatar: "🌈" }
  ],
  expenses: [],
  chatMessages: [],
  shoppingList: [],
  wishlist: [],
  games: {
    grillMaster: { statsByPlayer: {} },
    bbqQuiz: { statsByPlayer: {} },
    partyChallenges: { current: null, drawsByPlayer: {} }
  },
  nextId: 10
};

let state = cloneDefaultState();
let stateVersion = 0;
let saveTimeout = null;
let isSaving = false;
let isLoading = false;
let activePrimaryTab = "spese";
let activeOrgTab = "wishlist";
let activeBalanceView = "person";
let activeParticipantId = null;
let expandedExpenseId = null;
let emojiPickerTarget = null;
let emojiPickerIsCouple = false;

const grillGame = {
  intervalId: null,
  running: false,
  position: 12,
  velocity: 1.25,
  status: "Pronto a giocare."
};

const quizState = {
  askedIds: [],
  currentQuestionId: null,
  selectedIndex: null,
  locked: false,
  feedback: ""
};

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function normalizeState(serverState) {
  const next = cloneDefaultState();
  if (!serverState || typeof serverState !== "object") return next;

  next.participants = Array.isArray(serverState.participants)
    ? serverState.participants.map((p, index) => ({
        id: p.id || `legacy_participant_${index}`,
        name: typeof p.name === "string" && p.name.trim() ? p.name.trim() : `Partecipante ${index + 1}`,
        coupleId: p.coupleId || null,
        avatar: p.avatar || AVATAR_POOL[index % AVATAR_POOL.length]
      }))
    : next.participants;

  const participantIds = new Set(next.participants.map(participant => participant.id));

  next.couples = Array.isArray(serverState.couples)
    ? serverState.couples
        .filter(c => Array.isArray(c.members) && c.members.length === 2 && c.members.every(memberId => participantIds.has(memberId)))
        .map((c, index) => ({
          id: c.id || `legacy_couple_${index}`,
          members: c.members.slice(0, 2),
          avatar: c.avatar || COUPLE_AVATARS[index % COUPLE_AVATARS.length]
        }))
    : next.couples;

  const validCoupleIds = new Set(next.couples.map(couple => couple.id));
  next.participants = next.participants.map(participant => ({
    ...participant,
    coupleId: participant.coupleId && validCoupleIds.has(participant.coupleId) ? participant.coupleId : null
  }));

  next.expenses = Array.isArray(serverState.expenses)
    ? serverState.expenses.map((expense, index) => ({
        id: expense.id || `legacy_expense_${index}`,
        personId: expense.personId || next.participants[0]?.id || null,
        description: typeof expense.description === "string" ? expense.description : "Spesa",
        amount: Number(expense.amount) > 0 ? Number(expense.amount) : 0,
        timestamp: Number(expense.timestamp) || Date.now(),
        comments: Array.isArray(expense.comments)
          ? expense.comments.map((comment, commentIndex) => ({
              id: comment.id || `legacy_comment_${index}_${commentIndex}`,
              authorId: comment.authorId || null,
              text: typeof comment.text === "string" ? comment.text : "",
              timestamp: Number(comment.timestamp) || Date.now()
            })).filter(comment => comment.text.trim())
          : []
      }))
    : [];

  next.chatMessages = Array.isArray(serverState.chatMessages)
    ? serverState.chatMessages.map((message, index) => ({
        id: message.id || `legacy_chat_${index}`,
        authorId: message.authorId || null,
        text: typeof message.text === "string" ? message.text : "",
        timestamp: Number(message.timestamp) || Date.now()
      })).filter(message => message.text.trim())
    : [];

  next.shoppingList = Array.isArray(serverState.shoppingList)
    ? serverState.shoppingList.map((item, index) => ({
        id: item.id || `legacy_shop_${index}`,
        text: typeof item.text === "string" ? item.text : "",
        authorId: item.authorId || null,
        checked: Boolean(item.checked),
        timestamp: Number(item.timestamp) || Date.now()
      })).filter(item => item.text.trim())
    : [];

  next.wishlist = Array.isArray(serverState.wishlist)
    ? serverState.wishlist.map((item, index) => ({
        id: item.id || `legacy_wish_${index}`,
        text: typeof item.text === "string" ? item.text : "",
        requestedById: item.requestedById || null,
        assignedToId: item.assignedToId || null,
        assignedById: item.assignedById || null,
        status: ["open", "pending", "claimed", "accepted", "declined"].includes(item.status) ? item.status : "open",
        timestamp: Number(item.timestamp) || Date.now()
      })).filter(item => item.text.trim())
    : [];

  const games = serverState.games && typeof serverState.games === "object" ? serverState.games : {};
  next.games = {
    grillMaster: {
      statsByPlayer: games.grillMaster && typeof games.grillMaster.statsByPlayer === "object"
        ? games.grillMaster.statsByPlayer
        : {}
    },
    bbqQuiz: {
      statsByPlayer: games.bbqQuiz && typeof games.bbqQuiz.statsByPlayer === "object"
        ? games.bbqQuiz.statsByPlayer
        : {}
    },
    partyChallenges: {
      current: games.partyChallenges && games.partyChallenges.current
        ? {
            title: games.partyChallenges.current.title || "",
            text: games.partyChallenges.current.text || "",
            drawnById: games.partyChallenges.current.drawnById || null,
            timestamp: Number(games.partyChallenges.current.timestamp) || Date.now()
          }
        : null,
      drawsByPlayer: games.partyChallenges && typeof games.partyChallenges.drawsByPlayer === "object"
        ? games.partyChallenges.drawsByPlayer
        : {}
    }
  };

  next.nextId = Number(serverState.nextId) > 0 ? Number(serverState.nextId) : next.nextId;
  return next;
}

function loadPreferences() {
  const storedPrimary = localStorage.getItem(LOCAL_KEYS.primaryTab);
  const storedOrg = localStorage.getItem(LOCAL_KEYS.orgTab);
  activePrimaryTab = ["spese", "regolamento", "organizzazione"].includes(storedPrimary) ? storedPrimary : "spese";
  activeOrgTab = ["wishlist", "lista", "chat", "gruppo", "giochi", "admin"].includes(storedOrg) ? storedOrg : "wishlist";
  activeParticipantId = localStorage.getItem(LOCAL_KEYS.activeParticipantId);
}

function persistActiveParticipant() {
  if (activeParticipantId) localStorage.setItem(LOCAL_KEYS.activeParticipantId, activeParticipantId);
  else localStorage.removeItem(LOCAL_KEYS.activeParticipantId);
}

function ensureActiveParticipant() {
  const exists = state.participants.some(p => p.id === activeParticipantId);
  if (!exists) activeParticipantId = state.participants[0]?.id || null;
  persistActiveParticipant();
}

function getActiveParticipant() {
  return state.participants.find(p => p.id === activeParticipantId) || null;
}

function formatMoney(value) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value || 0);
}

function formatDateTime(timestamp) {
  const normalizedTimestamp = typeof timestamp === "string" && /^\d{4}-\d{2}-\d{2} /.test(timestamp)
    ? `${timestamp.replace(" ", "T")}Z`
    : timestamp;
  const date = new Date(normalizedTimestamp);
  if (Number.isNaN(date.getTime())) return "data sconosciuta";
  return date.toLocaleString("it-IT", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value == null ? "" : String(value);
  return div.innerHTML;
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function personById(personId) {
  return state.participants.find(p => p.id === personId) || null;
}

function labelForPerson(personId, fallback = "Ex partecipante") {
  const person = personById(personId);
  return person ? `${person.avatar} ${person.name}` : fallback;
}

function genId() {
  return `id_${state.nextId++}`;
}

async function loadStateFromServer() {
  try {
    const res = await fetch("/api/state");
    if (!res.ok) throw new Error("Failed to load state");
    const payload = await res.json();
    stateVersion = payload.version;
    state = normalizeState(payload.state);
    ensureActiveParticipant();
    return true;
  } catch (error) {
    console.warn("Failed to load from server, using defaults:", error);
    state = cloneDefaultState();
    ensureActiveParticipant();
    return false;
  }
}

async function saveStateToServer() {
  if (isSaving || isLoading) return;
  isSaving = true;
  try {
    const res = await fetch("/api/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state })
    });
    if (res.ok) {
      const payload = await res.json();
      stateVersion = payload.version;
    }
  } catch (error) {
    console.warn("Failed to save state:", error);
  }
  isSaving = false;
}

function scheduleSave() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => saveStateToServer(), 280);
}

async function pollForChanges() {
  if (isLoading || isSaving) return;
  try {
    const res = await fetch("/api/state/version");
    if (!res.ok) return;
    const payload = await res.json();
    if (payload.version > stateVersion) {
      isLoading = true;
      await loadStateFromServer();
      isLoading = false;
      renderAll();
      if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
        renderBackups();
      }
      showToast("Dati aggiornati", "Ho ricaricato le ultime modifiche arrivate da un altro dispositivo.", "warning");
    }
  } catch {
    // Ignore polling failures.
  }
}

function getPersonExpenses(personId) {
  return state.expenses.filter(expense => expense.personId === personId);
}

function getPersonTotal(personId) {
  return getPersonExpenses(personId).reduce((sum, expense) => sum + expense.amount, 0);
}

function getTotalExpenses() {
  return state.expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function getPerPersonShare() {
  return state.participants.length > 0 ? getTotalExpenses() / state.participants.length : 0;
}

function getPersonBalance(personId) {
  return getPersonTotal(personId) - getPerPersonShare();
}

function getCouple(coupleId) {
  return state.couples.find(couple => couple.id === coupleId) || null;
}

function getCoupleName(coupleId) {
  const couple = getCouple(coupleId);
  if (!couple) return "";
  return couple.members.map(personId => personById(personId)?.name || "?").join(" & ");
}

function getCoupleTotal(coupleId) {
  const couple = getCouple(coupleId);
  if (!couple) return 0;
  return couple.members.reduce((sum, personId) => sum + getPersonTotal(personId), 0);
}

function getCoupleShare(coupleId) {
  const couple = getCouple(coupleId);
  if (!couple) return 0;
  return getPerPersonShare() * couple.members.length;
}

function getCoupleBalance(coupleId) {
  return getCoupleTotal(coupleId) - getCoupleShare(coupleId);
}

function getUnits() {
  const units = [];
  state.couples.forEach(couple => {
    units.push({
      id: couple.id,
      type: "couple",
      name: getCoupleName(couple.id),
      avatar: couple.avatar,
      balance: round2(getCoupleBalance(couple.id))
    });
  });
  state.participants
    .filter(participant => !participant.coupleId)
    .forEach(participant => {
      units.push({
        id: participant.id,
        type: "single",
        name: participant.name,
        avatar: participant.avatar,
        balance: round2(getPersonBalance(participant.id))
      });
    });
  return units;
}

function calculateSettlements() {
  const units = getUnits();
  const debtors = units.filter(unit => unit.balance < -0.01).map(unit => ({ ...unit, amount: Math.abs(unit.balance) }));
  const creditors = units.filter(unit => unit.balance > 0.01).map(unit => ({ ...unit, amount: unit.balance }));
  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const transactions = [];
  let debtorIndex = 0;
  let creditorIndex = 0;

  while (debtorIndex < debtors.length && creditorIndex < creditors.length) {
    const debtor = debtors[debtorIndex];
    const creditor = creditors[creditorIndex];
    const amount = Math.min(debtor.amount, creditor.amount);
    if (amount > 0.01) {
      transactions.push({
        from: { name: debtor.name, avatar: debtor.avatar },
        to: { name: creditor.name, avatar: creditor.avatar },
        amount: round2(amount)
      });
    }
    debtor.amount -= amount;
    creditor.amount -= amount;
    if (debtor.amount < 0.01) debtorIndex++;
    if (creditor.amount < 0.01) creditorIndex++;
  }

  return transactions;
}

function getWishlistStats() {
  const total = state.wishlist.length;
  const covered = state.wishlist.filter(item => item.status === "claimed" || item.status === "accepted").length;
  const pending = state.wishlist.filter(item => item.status === "pending").length;
  const open = total - covered - pending;
  const coverage = total > 0 ? Math.round((covered / total) * 100) : 0;
  return { total, covered, pending, open, coverage };
}

function getExpenseCommentCount() {
  return state.expenses.reduce((sum, expense) => sum + expense.comments.length, 0);
}

function getPersonBadge(personId) {
  if (state.participants.length === 0) return null;
  const totals = state.participants.map(participant => ({
    id: participant.id,
    total: getPersonTotal(participant.id)
  }));
  const share = getPerPersonShare();
  const maxSpender = totals.reduce((best, current) => current.total > best.total ? current : best, totals[0]);
  const minSpender = totals.reduce((best, current) => current.total < best.total ? current : best, totals[0]);
  const closest = totals.reduce((best, current) => {
    return Math.abs(current.total - share) < Math.abs(best.total - share) ? current : best;
  }, totals[0]);

  if (maxSpender.id === personId && maxSpender.total > share * 1.25 && share > 0) {
    return { text: "MVP brace", tone: "chip-positive" };
  }
  if (minSpender.id === personId && minSpender.total === 0 && getTotalExpenses() > 0) {
    return { text: "Nessuno scontrino", tone: "chip-negative" };
  }
  if (closest.id === personId && closest.total > 0 && share > 0 && Math.abs(closest.total - share) <= share * 0.08) {
    return { text: "Quota zen", tone: "chip-neutral" };
  }
  return null;
}

function round2(value) {
  return Math.round((value || 0) * 100) / 100;
}

function scrollControlIntoView(control) {
  if (!control) return;
  control.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
}

function setTabButtonState(button, isActive) {
  button.classList.toggle("active", isActive);
  button.setAttribute("aria-selected", String(isActive));
  button.tabIndex = isActive ? 0 : -1;
}

function setPanelState(panel, isActive) {
  panel.classList.toggle("active", isActive);
  panel.hidden = !isActive;
}

function setupArrowKeyNavigation(container, itemSelector, onActivate) {
  if (!container) return;
  container.addEventListener("keydown", event => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;

    const items = Array.from(container.querySelectorAll(itemSelector));
    const currentIndex = items.indexOf(document.activeElement);
    if (currentIndex === -1 || items.length < 2) return;

    event.preventDefault();

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % items.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + items.length) % items.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = items.length - 1;

    const nextItem = items[nextIndex];
    nextItem.focus();
    onActivate(nextItem);
  });
}

function setPrimaryTab(tabName) {
  activePrimaryTab = tabName;
  localStorage.setItem(LOCAL_KEYS.primaryTab, activePrimaryTab);
  renderTabVisibility();
  scrollControlIntoView(document.querySelector(`.primary-tab[data-tab="${activePrimaryTab}"]`));
  if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
    renderBackups();
  }
}

function setOrgTab(tabName) {
  activeOrgTab = tabName;
  localStorage.setItem(LOCAL_KEYS.orgTab, activeOrgTab);
  renderTabVisibility();
  scrollControlIntoView(document.querySelector(`.sub-tab[data-org-tab="${activeOrgTab}"]`));
  if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
    renderBackups();
  }
}

function renderTabVisibility() {
  document.querySelectorAll(".primary-tab").forEach(button => {
    setTabButtonState(button, button.dataset.tab === activePrimaryTab);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    setPanelState(panel, panel.id === `tab-${activePrimaryTab}`);
  });

  document.querySelectorAll(".sub-tab").forEach(button => {
    setTabButtonState(button, button.dataset.orgTab === activeOrgTab);
  });
  document.querySelectorAll(".org-panel").forEach(panel => {
    setPanelState(panel, panel.id === `org-${activeOrgTab}`);
  });

  document.querySelectorAll("#balanceViewToggle button").forEach(button => {
    const isActive = button.dataset.view === activeBalanceView;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderAll() {
  ensureActiveParticipant();
  renderTabVisibility();
  renderHero();
  renderExpenseForm();
  renderSpendingLeaderboard();
  renderExpenses();
  renderRegulation();
  renderWishlist();
  renderShoppingList();
  renderChat();
  renderGroupSummary();
  renderParticipants();
  renderGames();
}

function renderHero() {
  const heroStats = document.getElementById("heroStats");
  const wishlistStats = getWishlistStats();
  const transactions = calculateSettlements();
  heroStats.innerHTML = [
    renderStatCard(formatMoney(getTotalExpenses()), "Totale spese"),
    renderStatCard(formatMoney(getPerPersonShare()), "Quota a testa"),
    renderStatCard(String(transactions.length), "Trasferimenti minimi"),
    renderStatCard(`${wishlistStats.coverage}%`, "Wishlist coperta")
  ].join("");

  const identitySwitcher = document.getElementById("identitySwitcher");
  const activePerson = getActiveParticipant();
  document.getElementById("activeIdentityPill").textContent = activePerson
    ? `${activePerson.avatar} ${activePerson.name}`
    : "Aggiungi il gruppo";

  if (state.participants.length === 0) {
    identitySwitcher.innerHTML = `<div class="empty-state"><strong>Nessun partecipante.</strong><br>Aggiungi prima il gruppo per sbloccare profili, commenti e giochi.</div>`;
  } else {
    identitySwitcher.innerHTML = state.participants.map(participant => `
      <button class="identity-chip ${participant.id === activeParticipantId ? "active" : ""}" type="button" onclick="setActiveParticipant('${participant.id}')">
        <span class="avatar">${participant.avatar}</span>
        <span>${escapeHtml(participant.name)}</span>
      </button>
    `).join("");
  }

  const activeLabel = activePerson ? `${activePerson.avatar} ${activePerson.name}` : "Seleziona un profilo";
  setText("wishlistIdentityPill", activePerson ? `Richiesta da ${activeLabel}` : "Richiede un profilo");
  setText("shoppingIdentityPill", activePerson ? `Aggiungi come ${activeLabel}` : "Richiede un profilo");
  setText("chatIdentityPill", activePerson ? `Scrivi come ${activeLabel}` : "Richiede un profilo");
  setText("gamesIdentityPill", activePerson ? `Gioca come ${activeLabel}` : "Richiede un profilo");
}

function renderStatCard(value, label) {
  return `
    <div class="stat-card">
      <p class="stat-value">${escapeHtml(value)}</p>
      <div class="stat-label">${escapeHtml(label)}</div>
    </div>
  `;
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function setActiveParticipant(participantId) {
  activeParticipantId = participantId;
  persistActiveParticipant();
  prefillExpenseForActiveUser();
  renderAll();
  showToast("Profilo attivo aggiornato", `Da ora le azioni rapide vengono fatte come ${labelForPerson(participantId)}.`, "good");
}

function renderExpenseForm() {
  const select = document.getElementById("expensePersonSelect");
  const currentValue = select.value;
  select.innerHTML = state.participants.map(participant => `
    <option value="${participant.id}">${participant.avatar} ${escapeHtml(participant.name)}</option>
  `).join("");

  const defaultValue = state.participants.some(participant => participant.id === currentValue)
    ? currentValue
    : activeParticipantId || state.participants[0]?.id || "";
  select.value = defaultValue;

  const activePerson = getActiveParticipant();
  setText("expenseActionHint", activePerson ? `Commenti veloci come ${activePerson.avatar} ${activePerson.name}` : "Prima aggiungi il gruppo");
}

function prefillExpenseForActiveUser() {
  const select = document.getElementById("expensePersonSelect");
  if (select && activeParticipantId) {
    select.value = activeParticipantId;
  }
}

function renderSpendingLeaderboard() {
  const container = document.getElementById("spendingLeaderboard");
  if (state.participants.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Gruppo vuoto.</strong><br>Vai in Organizzazione > Gruppo e aggiungi i partecipanti.</div>`;
    setText("spendingMeta", "");
    return;
  }

  const rows = [...state.participants]
    .sort((a, b) => getPersonTotal(b.id) - getPersonTotal(a.id))
    .map(participant => {
      const badge = getPersonBadge(participant.id);
      return `
        <div class="leaderboard-row">
          <div class="leaderboard-main">
            <span class="avatar">${participant.avatar}</span>
            <div>
              <strong>${escapeHtml(participant.name)}</strong>
              <div class="leaderboard-meta">
                Saldo ${formatMoney(getPersonBalance(participant.id))}
                ${badge ? ` · <span class="${badge.tone}">${escapeHtml(badge.text)}</span>` : ""}
              </div>
            </div>
          </div>
          <strong>${formatMoney(getPersonTotal(participant.id))}</strong>
        </div>
      `;
    }).join("");

  container.innerHTML = rows;
  setText("spendingMeta", `${state.expenses.length} spese • ${getExpenseCommentCount()} commenti`);
}

function renderExpenses() {
  const container = document.getElementById("expensesList");
  if (state.participants.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Serve il gruppo prima delle spese.</strong><br>Aggiungi i partecipanti e poi torna qui.</div>`;
    return;
  }

  if (state.expenses.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Nessuna spesa ancora.</strong><br>Usa il form qui sopra per registrare il primo acquisto.</div>`;
    return;
  }

  const expenses = [...state.expenses].sort((a, b) => b.timestamp - a.timestamp);
  container.innerHTML = expenses.map(renderExpenseCard).join("");
}

function renderExpenseCard(expense) {
  const payer = personById(expense.personId);
  const balance = getPersonBalance(expense.personId);
  const isExpanded = expandedExpenseId === expense.id;
  const comments = expense.comments || [];

  return `
    <article class="expense-card">
      <div class="expense-head">
        <div class="expense-main">
          <span class="avatar">${payer ? payer.avatar : "👤"}</span>
          <div>
            <h3 class="expense-title">${escapeHtml(expense.description)}</h3>
            <div class="expense-subtitle">
              Pagato da ${payer ? `${payer.avatar} ${escapeHtml(payer.name)}` : "utente sconosciuto"} · ${formatDateTime(expense.timestamp)}
            </div>
          </div>
        </div>
        <div class="expense-amount">${formatMoney(expense.amount)}</div>
      </div>

      <div class="expense-meta-row">
        <div class="chip-row">
          <span class="small-chip chip-neutral">${comments.length} comment${comments.length === 1 ? "o" : "i"}</span>
          <span class="small-chip ${balance >= 0 ? "chip-positive" : "chip-negative"}">
            Saldo ${balance >= 0 ? "positivo" : "negativo"}: ${formatMoney(balance)}
          </span>
        </div>

        <div class="expense-actions">
          <button class="link-btn" type="button" onclick="toggleExpenseComments('${expense.id}')">${isExpanded ? "Nascondi commenti" : "Apri commenti"}</button>
          <button class="link-btn" type="button" onclick="editExpense('${expense.id}')">Modifica</button>
          <button class="link-btn danger" type="button" onclick="confirmDeleteExpense('${expense.id}')">Elimina</button>
        </div>
      </div>

      ${isExpanded ? renderExpenseComments(expense) : ""}
    </article>
  `;
}

function renderExpenseComments(expense) {
  const comments = expense.comments || [];
  const activePerson = getActiveParticipant();
  const inputDisabled = !activePerson ? "disabled" : "";
  const commentRows = comments.length > 0
    ? comments.map(comment => `
        <div class="comment-item">
          <span class="avatar">${personById(comment.authorId)?.avatar || "👤"}</span>
          <div class="comment-body">
            <div class="comment-author">
              <span>${escapeHtml(labelForPerson(comment.authorId))}</span>
              <span class="comment-time">${formatDateTime(comment.timestamp)}</span>
            </div>
            <p class="comment-text">${escapeHtml(comment.text)}</p>
          </div>
        </div>
      `).join("")
    : `<div class="empty-state">Nessun commento ancora. Usa questo spazio per note, rimborsi, extra o dettagli utili.</div>`;

  return `
    <div class="comment-thread">
      <div class="comment-list">${commentRows}</div>
      <div class="comment-form">
        <label class="field">
          <span>${activePerson ? `Commenta come ${activePerson.avatar} ${activePerson.name}` : "Serve un profilo attivo per commentare"}</span>
          <textarea id="commentInput-${expense.id}" rows="3" placeholder="Aggiungi un dettaglio utile su questa spesa..." ${inputDisabled}></textarea>
        </label>
        <div class="form-actions">
          <button class="btn btn-secondary" type="button" onclick="addExpenseComment('${expense.id}')" ${inputDisabled}>Aggiungi commento</button>
        </div>
      </div>
    </div>
  `;
}

function collapseAllExpenseComments() {
  expandedExpenseId = null;
  renderExpenses();
}

function toggleExpenseComments(expenseId) {
  expandedExpenseId = expandedExpenseId === expenseId ? null : expenseId;
  renderExpenses();
}

function renderRegulation() {
  const transactions = calculateSettlements();
  const settlementStats = document.getElementById("settlementStats");
  const transferTotal = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  settlementStats.innerHTML = [
    renderStatCard(formatMoney(transferTotal), "Valore da regolare"),
    renderStatCard(String(transactions.length), "Passaggi necessari"),
    renderStatCard(formatMoney(getPerPersonShare()), "Quota attuale"),
    renderStatCard(`${getUnits().length}`, "Unità coinvolte")
  ].join("");

  const settlementsContent = document.getElementById("settlementsContent");
  if (getTotalExpenses() === 0) {
    settlementsContent.innerHTML = `<div class="empty-state"><strong>Niente da regolare.</strong><br>Aggiungi almeno una spesa per vedere il piano di rimborso.</div>`;
    setText("settlementsMeta", "");
  } else if (transactions.length === 0) {
    settlementsContent.innerHTML = `<div class="empty-state"><strong>Tutti pari.</strong><br>Per ora non serve nessun trasferimento. Miracolo operativo.</div>`;
    setText("settlementsMeta", "Zero trasferimenti");
  } else {
    settlementsContent.innerHTML = `<div class="settlement-list">${transactions.map(transaction => `
      <div class="settlement-item">
        <div class="settlement-direction">
          <div class="settlement-party">
            <span class="avatar">${transaction.from.avatar}</span>
            <strong>${escapeHtml(transaction.from.name)}</strong>
          </div>
          <div class="settlement-arrow">→</div>
          <div class="settlement-party">
            <span class="avatar">${transaction.to.avatar}</span>
            <strong>${escapeHtml(transaction.to.name)}</strong>
          </div>
        </div>
        <div class="settlement-amount">${formatMoney(transaction.amount)}</div>
      </div>
    `).join("")}</div>`;
    setText("settlementsMeta", `Totale ${formatMoney(transferTotal)}`);
  }

  const balancesContent = document.getElementById("balancesContent");
  if (getTotalExpenses() === 0) {
    balancesContent.innerHTML = `<div class="empty-state"><strong>Nessun saldo disponibile.</strong><br>Le quote compariranno qui non appena arriva la prima spesa.</div>`;
    return;
  }

  if (activeBalanceView === "person") {
    const rows = [...state.participants]
      .sort((a, b) => getPersonBalance(b.id) - getPersonBalance(a.id))
      .map(participant => renderBalanceItem({
        avatar: participant.avatar,
        name: participant.name,
        subtitle: `Ha anticipato ${formatMoney(getPersonTotal(participant.id))} su una quota di ${formatMoney(getPerPersonShare())}`,
        balance: getPersonBalance(participant.id),
        positiveLabel: "Riceve",
        negativeLabel: "Deve dare"
      }))
      .join("");
    balancesContent.innerHTML = `<div class="balance-list">${rows}</div>`;
  } else {
    const rows = getUnits()
      .sort((a, b) => b.balance - a.balance)
      .map(unit => renderBalanceItem({
        avatar: unit.avatar,
        name: unit.name,
        subtitle: unit.type === "couple"
          ? `Quota coppia su ${formatMoney(getPerPersonShare() * 2)}`
          : `Quota singola su ${formatMoney(getPerPersonShare())}`,
        balance: unit.balance,
        positiveLabel: unit.type === "couple" ? "Ricevono" : "Riceve",
        negativeLabel: unit.type === "couple" ? "Devono dare" : "Deve dare"
      }))
      .join("");
    balancesContent.innerHTML = `<div class="balance-list">${rows}</div>`;
  }
}

function renderBalanceItem({ avatar, name, subtitle, balance, positiveLabel, negativeLabel }) {
  const balanceClass = balance > 0.01 ? "tone-positive" : balance < -0.01 ? "tone-negative" : "tone-warning";
  const label = balance > 0.01 ? positiveLabel : balance < -0.01 ? negativeLabel : "Pari";
  return `
    <div class="balance-item">
      <div class="balance-main">
        <span class="avatar">${avatar}</span>
        <div>
          <strong>${escapeHtml(name)}</strong>
          <div class="balance-meta">${escapeHtml(subtitle)}</div>
        </div>
      </div>
      <div class="balance-value ${balanceClass}">
        <div>${label}</div>
        <strong>${formatMoney(balance)}</strong>
      </div>
    </div>
  `;
}

function renderWishlist() {
  const stats = getWishlistStats();
  const progressWrap = document.getElementById("wishlistProgressWrap");
  progressWrap.innerHTML = `
    <div class="card-head">
      <div>
        <p class="eyebrow">Copertura</p>
        <h2>Quanto siamo messi bene</h2>
      </div>
      <div class="active-pill">${stats.coverage}%</div>
    </div>
    <div class="wishlist-progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: ${stats.coverage}%"></div>
      </div>
      <div class="summary-list">
        <div class="summary-item"><strong>${stats.covered}</strong><span class="leaderboard-meta">cose prese in carico</span></div>
        <div class="summary-item"><strong>${stats.pending}</strong><span class="leaderboard-meta">in attesa di risposta</span></div>
        <div class="summary-item"><strong>${stats.open}</strong><span class="leaderboard-meta">ancora scoperte</span></div>
      </div>
    </div>
  `;

  const container = document.getElementById("wishlistContent");
  if (state.wishlist.length === 0) {
    container.innerHTML = `<div class="card"><div class="empty-state"><strong>Wishlist vuota.</strong><br>Inizia aggiungendo ciò che serve davvero alla grigliata.</div></div>`;
    return;
  }

  const grouped = {
    open: [],
    pending: [],
    claimed: [],
    accepted: [],
    declined: []
  };

  state.wishlist
    .slice()
    .sort((a, b) => a.timestamp - b.timestamp)
    .forEach(item => grouped[item.status].push(item));

  const sections = [
    ["open", "Da assegnare"],
    ["pending", "In attesa"],
    ["claimed", "Prese in carico"],
    ["accepted", "Confermate"],
    ["declined", "Rifiutate"]
  ]
    .filter(([status]) => grouped[status].length > 0)
    .map(([status, label]) => `
      <div class="card">
        <div class="card-head">
          <div>
            <p class="eyebrow">Wishlist</p>
            <h2>${escapeHtml(label)}</h2>
          </div>
        </div>
        ${grouped[status].map(renderWishlistItem).join("")}
      </div>
    `)
    .join("");

  container.innerHTML = sections;
}

function renderWishlistItem(item) {
  const requester = personById(item.requestedById);
  const assignee = personById(item.assignedToId);
  const assigner = personById(item.assignedById);
  const activePerson = getActiveParticipant();
  let actions = `
    <button class="link-btn danger" type="button" onclick="confirmRemoveWishlistItem('${item.id}')">Rimuovi</button>
  `;

  if (item.status === "open" || item.status === "declined") {
    actions = `
      <button class="link-btn" type="button" onclick="claimWishlistItem('${item.id}')">Ci penso io</button>
      <button class="link-btn" type="button" onclick="assignWishlistItem('${item.id}')">Assegna a...</button>
      <button class="link-btn danger" type="button" onclick="confirmRemoveWishlistItem('${item.id}')">Rimuovi</button>
    `;
  } else if (item.status === "pending") {
    if (activePerson && activePerson.id === item.assignedToId) {
      actions = `
        <button class="link-btn" type="button" onclick="respondWishlistItem('${item.id}', true)">Accetto</button>
        <button class="link-btn danger" type="button" onclick="respondWishlistItem('${item.id}', false)">Rifiuto</button>
      `;
    } else {
      actions = `
        <span class="wishlist-state pending">In attesa di ${assignee ? `${assignee.avatar} ${escapeHtml(assignee.name)}` : "..."}</span>
        <button class="link-btn danger" type="button" onclick="confirmRemoveWishlistItem('${item.id}')">Rimuovi</button>
      `;
    }
  } else if (item.status === "claimed" || item.status === "accepted") {
    actions = `
      <span class="wishlist-state ${item.status}">
        ${assignee ? `${assignee.avatar} ${escapeHtml(assignee.name)}` : "👤"} ${item.status === "accepted" ? "ha confermato" : "ci pensa"}
      </span>
      <button class="link-btn danger" type="button" onclick="confirmRemoveWishlistItem('${item.id}')">Rimuovi</button>
    `;
  }

  return `
    <article class="wishlist-item ${item.status}">
      <div class="wishlist-header">
        <div class="wishlist-main">
          <span class="avatar">${stateEmojiForWishlist(item.status)}</span>
          <div>
            <strong class="wishlist-item-title">${escapeHtml(item.text)}</strong>
            <div class="wishlist-meta">
              Richiesto da ${requester ? `${requester.avatar} ${escapeHtml(requester.name)}` : "👤 utente sconosciuto"}
              ${assigner && item.status === "pending" ? ` · assegnato da ${assigner.avatar} ${escapeHtml(assigner.name)}` : ""}
            </div>
          </div>
        </div>
        <span class="wishlist-state ${item.status}">${wishlistStatusLabel(item.status)}</span>
      </div>
      <div class="wishlist-actions">${actions}</div>
    </article>
  `;
}

function stateEmojiForWishlist(status) {
  return {
    open: "🎁",
    pending: "⏳",
    claimed: "💪",
    accepted: "✅",
    declined: "😮‍💨"
  }[status] || "🎁";
}

function wishlistStatusLabel(status) {
  return {
    open: "Da coprire",
    pending: "In attesa",
    claimed: "Presa in carico",
    accepted: "Confermata",
    declined: "Rifiutata"
  }[status] || "Aperta";
}

function renderShoppingList() {
  const container = document.getElementById("shoppingListContent");
  const total = state.shoppingList.length;
  const done = state.shoppingList.filter(item => item.checked).length;
  setText("shoppingMeta", total > 0 ? `${done}/${total} completati` : "");

  if (total === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Lista vuota.</strong><br>Aggiungi gli acquisti da fare e spuntali quando sono sistemati.</div>`;
    return;
  }

  container.innerHTML = state.shoppingList
    .slice()
    .sort((a, b) => Number(a.checked) - Number(b.checked) || a.timestamp - b.timestamp)
    .map((item, index) => `
      <div class="shopping-item ${item.checked ? "checked" : ""}">
        <div class="shopping-main">
          <button class="shopping-check ${item.checked ? "checked" : ""}" type="button" onclick="toggleShoppingItem(${index})">${item.checked ? "✓" : ""}</button>
          <div>
            <div class="shopping-title">${escapeHtml(item.text)}</div>
            <div class="shopping-meta">Aggiunto da ${escapeHtml(labelForPerson(item.authorId))}</div>
          </div>
        </div>
        <button class="link-btn danger" type="button" onclick="removeShoppingItem(${index})">Rimuovi</button>
      </div>
    `).join("");
}

function renderChat() {
  const container = document.getElementById("chatMessages");
  if (state.participants.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Niente chat senza gruppo.</strong><br>Aggiungi prima i partecipanti.</div>`;
    return;
  }

  if (state.chatMessages.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Silenzio operativo.</strong><br>Scrivi il primo messaggio al gruppo.</div>`;
    return;
  }

  container.innerHTML = state.chatMessages
    .slice()
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(message => {
      const author = personById(message.authorId);
      const self = author && author.id === activeParticipantId;
      return `
        <div class="chat-bubble ${self ? "self" : "other"}">
          ${self ? "" : `<div class="chat-author">${author ? `${author.avatar} ${escapeHtml(author.name)}` : "👤 Ex partecipante"}</div>`}
          <div class="chat-text">${escapeHtml(message.text)}</div>
          <div class="chat-time">${formatTime(message.timestamp)}</div>
        </div>
      `;
    }).join("");

  container.scrollTop = container.scrollHeight;
}

function renderGroupSummary() {
  const container = document.getElementById("groupSummary");
  const singles = state.participants.filter(participant => !participant.coupleId).length;
  const nonSpenders = state.participants.filter(participant => getPersonTotal(participant.id) === 0).length;

  container.innerHTML = `
    <div class="group-kpi-grid">
      <div class="group-kpi">
        <span class="group-kpi-value">${state.participants.length}</span>
        <span class="leaderboard-meta">partecipanti totali</span>
      </div>
      <div class="group-kpi">
        <span class="group-kpi-value">${state.couples.length}</span>
        <span class="leaderboard-meta">coppie registrate</span>
      </div>
      <div class="group-kpi">
        <span class="group-kpi-value">${singles}</span>
        <span class="leaderboard-meta">singoli/e</span>
      </div>
      <div class="group-kpi">
        <span class="group-kpi-value">${nonSpenders}</span>
        <span class="leaderboard-meta">persone senza spese</span>
      </div>
    </div>
  `;
}

function renderParticipants() {
  const container = document.getElementById("participantsList");
  const singles = state.participants.filter(participant => !participant.coupleId);

  document.getElementById("couplePartnerSelect").innerHTML = `
    <option value="">Nessuno, resta singolo/a</option>
    ${singles.map(participant => `<option value="${participant.id}">${participant.avatar} ${escapeHtml(participant.name)}</option>`).join("")}
  `;

  if (state.participants.length === 0) {
    container.innerHTML = `<div class="card"><div class="empty-state"><strong>Ancora nessuno nel gruppo.</strong><br>Usa il form qui sopra per iniziare.</div></div>`;
    return;
  }

  const coupleBlocks = state.couples.map(couple => {
    const memberA = personById(couple.members[0]);
    const memberB = personById(couple.members[1]);
    if (!memberA || !memberB) return "";
    return `
      <div class="couple-card">
        <div class="couple-row">
          <div class="participant-main">
            <button class="icon-btn" type="button" onclick="openEmojiPicker('${couple.id}', true)">
              <span class="avatar couple">${couple.avatar}</span>
            </button>
            <div>
              <strong>${escapeHtml(memberA.name)} &amp; ${escapeHtml(memberB.name)}</strong>
              <div class="participant-meta">Coppia registrata per i conti</div>
            </div>
          </div>
          <div class="participant-actions">
            <button class="link-btn danger" type="button" onclick="confirmBreakCouple('${couple.id}')">Separa</button>
          </div>
        </div>
        ${renderParticipantEditor(memberA)}
        ${renderParticipantEditor(memberB)}
      </div>
    `;
  }).join("");

  const singleBlocks = singles.map(participant => renderParticipantCard(participant)).join("");

  container.innerHTML = `
    ${coupleBlocks ? `<div class="participant-group"><div class="card-head"><div><p class="eyebrow">Gruppo</p><h2>Coppie</h2></div></div>${coupleBlocks}</div>` : ""}
    ${singleBlocks ? `<div class="participant-group"><div class="card-head"><div><p class="eyebrow">Gruppo</p><h2>Singoli</h2></div></div>${singleBlocks}</div>` : ""}
  `;
}

function renderParticipantEditor(participant) {
  return `
    <div class="participant-card">
      <div class="participant-row">
        <div class="participant-main">
          <button class="icon-btn" type="button" onclick="openEmojiPicker('${participant.id}')">
            <span class="avatar">${participant.avatar}</span>
          </button>
          <div class="field-grow">
            <input value="${escapeAttr(participant.name)}" onchange="renamePerson('${participant.id}', this.value)" aria-label="Nome di ${escapeAttr(participant.name)}">
          </div>
        </div>
        <div class="participant-actions">
          <button class="link-btn danger" type="button" onclick="confirmRemovePerson('${participant.id}')">Rimuovi</button>
        </div>
      </div>
    </div>
  `;
}

function renderParticipantCard(participant) {
  return `
    <div class="participant-card">
      <div class="participant-row">
        <div class="participant-main">
          <button class="icon-btn" type="button" onclick="openEmojiPicker('${participant.id}')">
            <span class="avatar">${participant.avatar}</span>
          </button>
          <div class="field-grow">
            <input value="${escapeAttr(participant.name)}" onchange="renamePerson('${participant.id}', this.value)" aria-label="Nome di ${escapeAttr(participant.name)}">
            <div class="participant-meta">Saldo attuale ${formatMoney(getPersonBalance(participant.id))}</div>
          </div>
        </div>
        <div class="participant-actions">
          <button class="link-btn danger" type="button" onclick="confirmRemovePerson('${participant.id}')">Rimuovi</button>
        </div>
      </div>
    </div>
  `;
}

function renderGames() {
  ensureQuizQuestion();
  updateGrillUi();
  renderQuizCard();
  renderPartyChallenge();
  renderGamesLeaderboard();
}

function ensureQuizQuestion() {
  if (quizState.currentQuestionId && QUIZ_QUESTIONS.some(question => question.id === quizState.currentQuestionId)) return;
  nextQuizQuestion();
}

function renderQuizCard() {
  const container = document.getElementById("quizCard");
  const question = QUIZ_QUESTIONS.find(item => item.id === quizState.currentQuestionId);
  if (!question) {
    container.innerHTML = `<div class="empty-state">Nessuna domanda disponibile.</div>`;
    return;
  }

  const stats = getActiveParticipant()
    ? getQuizStatsForPlayer(activeParticipantId)
    : { correct: 0, answered: 0, bestStreak: 0 };

  container.innerHTML = `
    <div class="quiz-card">
      <div class="summary-list">
        <div class="summary-item"><strong>${stats.correct}</strong><span class="leaderboard-meta">risposte corrette</span></div>
        <div class="summary-item"><strong>${stats.bestStreak}</strong><span class="leaderboard-meta">miglior streak</span></div>
      </div>
      <p class="quiz-question">${escapeHtml(question.question)}</p>
      <div class="quiz-options">
        ${question.options.map((option, index) => {
          let extraClass = "";
          if (quizState.locked) {
            if (index === question.correct) extraClass = "correct";
            else if (index === quizState.selectedIndex) extraClass = "wrong";
          }
          return `
            <button class="quiz-option ${extraClass}" type="button" onclick="answerQuiz(${index})" ${quizState.locked ? "disabled" : ""}>
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="game-status">${escapeHtml(quizState.feedback || "Rispondi e vediamo se meriti la fascia da sommelier della brace.")}</div>
      <div class="form-actions">
        <button class="btn btn-secondary" type="button" onclick="nextQuizQuestion()">Nuova domanda</button>
      </div>
    </div>
  `;
}

function renderPartyChallenge() {
  const container = document.getElementById("partyChallengeCard");
  const current = state.games.partyChallenges.current;
  if (!current) {
    container.innerHTML = `<div class="challenge-card"><h3>Nessuna sfida attiva</h3><p>Pesca una missione per dare un piccolo twist alla serata.</p></div>`;
    return;
  }

  const drawer = personById(current.drawnById);
  container.innerHTML = `
    <div class="challenge-card">
      <h3>${escapeHtml(current.title)}</h3>
      <p>${escapeHtml(current.text)}</p>
      <p class="leaderboard-meta" style="margin-top: 10px;">
        Pescata da ${drawer ? `${drawer.avatar} ${escapeHtml(drawer.name)}` : "👤 utente sconosciuto"} · ${formatDateTime(current.timestamp)}
      </p>
    </div>
  `;
}

function renderGamesLeaderboard() {
  const container = document.getElementById("gamesLeaderboard");
  if (state.participants.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Nessun giocatore.</strong><br>Aggiungi il gruppo per aprire la Hall of Flame.</div>`;
    return;
  }

  const rows = state.participants
    .map(participant => {
      const grillStats = getGrillStatsForPlayer(participant.id);
      const quizStats = getQuizStatsForPlayer(participant.id);
      const draws = getChallengeDrawsForPlayer(participant.id);
      const score = grillStats.best + quizStats.correct * 12 + quizStats.bestStreak * 4 + draws * 3;
      return {
        participant,
        grillStats,
        quizStats,
        draws,
        score
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ participant, grillStats, quizStats, draws, score }) => `
      <div class="game-score-row">
        <div class="game-score-main">
          <span class="avatar">${participant.avatar}</span>
          <div>
            <strong>${escapeHtml(participant.name)}</strong>
            <div class="game-score-meta">
              Grill ${grillStats.best} · Quiz ${quizStats.correct} giuste · Sfide ${draws}
            </div>
          </div>
        </div>
        <strong>${score}</strong>
      </div>
    `)
    .join("");

  container.innerHTML = rows;
}

function getGrillStatsForPlayer(playerId) {
  return {
    best: Number(state.games.grillMaster.statsByPlayer[playerId]?.best) || 0,
    plays: Number(state.games.grillMaster.statsByPlayer[playerId]?.plays) || 0,
    perfects: Number(state.games.grillMaster.statsByPlayer[playerId]?.perfects) || 0
  };
}

function getQuizStatsForPlayer(playerId) {
  return {
    correct: Number(state.games.bbqQuiz.statsByPlayer[playerId]?.correct) || 0,
    answered: Number(state.games.bbqQuiz.statsByPlayer[playerId]?.answered) || 0,
    currentStreak: Number(state.games.bbqQuiz.statsByPlayer[playerId]?.currentStreak) || 0,
    bestStreak: Number(state.games.bbqQuiz.statsByPlayer[playerId]?.bestStreak) || 0
  };
}

function getChallengeDrawsForPlayer(playerId) {
  return Number(state.games.partyChallenges.drawsByPlayer[playerId]) || 0;
}

function updateGrillUi() {
  const cursor = document.getElementById("grillCursor");
  if (cursor) cursor.style.left = `${grillGame.position}%`;
  setText("grillStatus", grillGame.status);
  const startBtn = document.getElementById("grillStartBtn");
  const stopBtn = document.getElementById("grillStopBtn");
  if (startBtn) startBtn.disabled = grillGame.running;
  if (stopBtn) stopBtn.disabled = !grillGame.running;
}

function startGrillGame() {
  const activePerson = requireActiveParticipant("giocare a Grill Master");
  if (!activePerson || grillGame.running) return;

  if (grillGame.intervalId) clearInterval(grillGame.intervalId);
  grillGame.running = true;
  grillGame.position = 12;
  grillGame.velocity = 1.25;
  grillGame.status = `${activePerson.avatar} ${activePerson.name}, aspetta il punto perfetto e poi gira la bistecca.`;
  updateGrillUi();

  grillGame.intervalId = setInterval(() => {
    grillGame.position += grillGame.velocity;
    if (grillGame.position >= 96 || grillGame.position <= 4) {
      grillGame.velocity *= -1;
      grillGame.position = Math.max(4, Math.min(96, grillGame.position));
    }
    updateGrillUi();
  }, 16);
}

function stopGrillGame() {
  if (!grillGame.running) return;
  const activePerson = requireActiveParticipant("salvare il punteggio di Grill Master");
  if (!activePerson) return;

  clearInterval(grillGame.intervalId);
  grillGame.intervalId = null;
  grillGame.running = false;

  const distance = Math.abs(grillGame.position - 50);
  const score = Math.max(0, Math.round(100 - distance * 4.3));
  const perfect = distance <= 4;
  const stats = state.games.grillMaster.statsByPlayer[activePerson.id] || { best: 0, plays: 0, perfects: 0 };
  stats.best = Math.max(stats.best || 0, score);
  stats.plays = (stats.plays || 0) + 1;
  stats.perfects = (stats.perfects || 0) + (perfect ? 1 : 0);
  state.games.grillMaster.statsByPlayer[activePerson.id] = stats;

  if (perfect) {
    grillGame.status = `Perfetta. ${activePerson.name} ha centrato la zona d'oro con ${score} punti.`;
    spawnConfetti();
    showToast("Grill Master", `${activePerson.name} ha girato la bistecca al momento giusto. ${score} punti.`, "good");
  } else if (score >= 70) {
    grillGame.status = `Quasi da manuale: ${score} punti. Carne salva, ego pure.`;
    showToast("Bella cottura", `${activePerson.name} porta a casa ${score} punti.`, "good");
  } else {
    grillGame.status = `Cottura rivedibile: ${score} punti. La prossima gira un filo più tardi.`;
    showToast("Brace nervosa", `${activePerson.name} ha fatto ${score} punti. C'è margine.`, "warning");
  }

  scheduleSave();
  renderGames();
}

function answerQuiz(optionIndex) {
  const activePerson = requireActiveParticipant("giocare allo Spiedino Quiz");
  if (!activePerson || quizState.locked) return;

  const question = QUIZ_QUESTIONS.find(item => item.id === quizState.currentQuestionId);
  if (!question) return;

  quizState.locked = true;
  quizState.selectedIndex = optionIndex;
  const correct = optionIndex === question.correct;
  const stats = state.games.bbqQuiz.statsByPlayer[activePerson.id] || {
    correct: 0,
    answered: 0,
    currentStreak: 0,
    bestStreak: 0
  };
  stats.answered = (stats.answered || 0) + 1;
  if (correct) {
    stats.correct = (stats.correct || 0) + 1;
    stats.currentStreak = (stats.currentStreak || 0) + 1;
    stats.bestStreak = Math.max(stats.bestStreak || 0, stats.currentStreak);
    quizState.feedback = `Giusta. ${question.explanation}`;
    showToast("Risposta corretta", `${activePerson.name} allunga lo streak a ${stats.currentStreak}.`, "good");
    if (stats.currentStreak > 0 && stats.currentStreak % 3 === 0) spawnConfetti();
  } else {
    stats.currentStreak = 0;
    quizState.feedback = `Nope. ${question.explanation}`;
    showToast("Risposta sbagliata", `${activePerson.name} si ferma qui.`, "warning");
  }

  state.games.bbqQuiz.statsByPlayer[activePerson.id] = stats;
  scheduleSave();
  renderQuizCard();
  renderGamesLeaderboard();
}

function nextQuizQuestion() {
  const pool = QUIZ_QUESTIONS.filter(question => !quizState.askedIds.includes(question.id));
  const nextPool = pool.length > 0 ? pool : QUIZ_QUESTIONS;
  const next = nextPool[Math.floor(Math.random() * nextPool.length)];
  if (!next) return;
  if (pool.length === 0) quizState.askedIds = [];
  quizState.askedIds.push(next.id);
  quizState.currentQuestionId = next.id;
  quizState.selectedIndex = null;
  quizState.locked = false;
  quizState.feedback = "";
  renderQuizCard();
}

function drawPartyChallenge() {
  const activePerson = requireActiveParticipant("pescare una sfida");
  if (!activePerson) return;

  const currentTitle = state.games.partyChallenges.current?.title;
  const options = PARTY_CHALLENGES.filter(challenge => challenge.title !== currentTitle);
  const chosen = (options.length > 0 ? options : PARTY_CHALLENGES)[Math.floor(Math.random() * (options.length > 0 ? options.length : PARTY_CHALLENGES.length))];

  state.games.partyChallenges.current = {
    title: chosen.title,
    text: chosen.text,
    drawnById: activePerson.id,
    timestamp: Date.now()
  };
  state.games.partyChallenges.drawsByPlayer[activePerson.id] = getChallengeDrawsForPlayer(activePerson.id) + 1;

  scheduleSave();
  renderPartyChallenge();
  renderGamesLeaderboard();
  showToast("Sfida BBQ", `${activePerson.name} ha pescato "${chosen.title}".`, "good");
}

function addExpense() {
  const personId = document.getElementById("expensePersonSelect").value;
  const description = document.getElementById("expenseDescInput").value.trim();
  const amount = Number(document.getElementById("expenseAmountInput").value);
  const quickComment = document.getElementById("expenseCommentInput").value.trim();

  if (!personId || !description || !Number.isFinite(amount) || amount <= 0) {
    showToast("Spesa incompleta", "Servono pagatore, descrizione e importo valido.", "bad");
    return;
  }

  const expense = {
    id: genId(),
    personId,
    description,
    amount: round2(amount),
    timestamp: Date.now(),
    comments: []
  };

  if (quickComment) {
    const activePerson = getActiveParticipant();
    expense.comments.push({
      id: genId(),
      authorId: activePerson?.id || personId,
      text: quickComment,
      timestamp: Date.now()
    });
  }

  state.expenses.push(expense);
  expandedExpenseId = quickComment ? expense.id : expandedExpenseId;

  document.getElementById("expenseDescInput").value = "";
  document.getElementById("expenseAmountInput").value = "";
  document.getElementById("expenseCommentInput").value = "";

  scheduleSave();
  renderAll();
  showToast("Spesa registrata", `${labelForPerson(personId)} ha anticipato ${formatMoney(expense.amount)} per "${description}".`, "good");
}

function addExpenseComment(expenseId) {
  const activePerson = requireActiveParticipant("commentare una spesa");
  if (!activePerson) return;
  const expense = state.expenses.find(item => item.id === expenseId);
  const input = document.getElementById(`commentInput-${expenseId}`);
  if (!expense || !input) return;

  const text = input.value.trim();
  if (!text) {
    showToast("Commento vuoto", "Scrivi un testo prima di inviarlo.", "warning");
    return;
  }

  expense.comments.push({
    id: genId(),
    authorId: activePerson.id,
    text,
    timestamp: Date.now()
  });

  input.value = "";
  scheduleSave();
  renderExpenses();
  renderSpendingLeaderboard();
  showToast("Commento aggiunto", `Nota salvata come ${activePerson.avatar} ${activePerson.name}.`, "good");
}

function editExpense(expenseId) {
  const expense = state.expenses.find(item => item.id === expenseId);
  if (!expense) return;

  openModal({
    title: "Modifica spesa",
    text: "Aggiorna importo, descrizione o persona che ha anticipato.",
    bodyHtml: `
      <div class="stack-form">
        <label class="field">
          <span>Descrizione</span>
          <input id="modalExpenseDesc" value="${escapeAttr(expense.description)}">
        </label>
        <div class="field-grid">
          <label class="field">
            <span>Importo</span>
            <input id="modalExpenseAmount" type="number" step="0.01" min="0" value="${expense.amount}">
          </label>
          <label class="field">
            <span>Pagatore</span>
            <select id="modalExpensePerson">
              ${state.participants.map(participant => `
                <option value="${participant.id}" ${participant.id === expense.personId ? "selected" : ""}>
                  ${participant.avatar} ${escapeHtml(participant.name)}
                </option>
              `).join("")}
            </select>
          </label>
        </div>
      </div>
    `,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Salva",
        className: "btn-primary",
        onClick: () => {
          const description = document.getElementById("modalExpenseDesc").value.trim();
          const amount = Number(document.getElementById("modalExpenseAmount").value);
          const personId = document.getElementById("modalExpensePerson").value;
          if (!description || !personId || !Number.isFinite(amount) || amount <= 0) {
            showToast("Modifica incompleta", "Controlla i campi prima di salvare.", "bad");
            return false;
          }
          expense.description = description;
          expense.amount = round2(amount);
          expense.personId = personId;
          scheduleSave();
          renderAll();
          showToast("Spesa aggiornata", "Le modifiche sono state salvate.", "good");
          return true;
        }
      }
    ]
  });
}

function confirmDeleteExpense(expenseId) {
  const expense = state.expenses.find(item => item.id === expenseId);
  if (!expense) return;
  openModal({
    title: "Eliminare questa spesa?",
    text: `Verranno eliminati anche i ${expense.comments.length} commenti collegati.`,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Elimina spesa",
        className: "btn-danger",
        onClick: () => {
          state.expenses = state.expenses.filter(item => item.id !== expenseId);
          if (expandedExpenseId === expenseId) expandedExpenseId = null;
          scheduleSave();
          renderAll();
          showToast("Spesa eliminata", `"${expense.description}" è sparita dal feed.`, "warning");
          return true;
        }
      }
    ]
  });
}

function addPerson() {
  const name = document.getElementById("newPersonName").value.trim();
  const partnerId = document.getElementById("couplePartnerSelect").value;
  if (!name) {
    showToast("Nome mancante", "Serve almeno un nome per aggiungere il partecipante.", "bad");
    return;
  }

  const newParticipant = {
    id: genId(),
    name,
    coupleId: null,
    avatar: AVATAR_POOL[Math.floor(Math.random() * AVATAR_POOL.length)]
  };
  state.participants.push(newParticipant);

  if (partnerId) {
    const partner = personById(partnerId);
    if (partner && !partner.coupleId) {
      const coupleId = genId();
      partner.coupleId = coupleId;
      newParticipant.coupleId = coupleId;
      state.couples.push({
        id: coupleId,
        members: [partner.id, newParticipant.id],
        avatar: COUPLE_AVATARS[Math.floor(Math.random() * COUPLE_AVATARS.length)]
      });
    }
  }

  if (!activeParticipantId) activeParticipantId = newParticipant.id;
  persistActiveParticipant();

  document.getElementById("newPersonName").value = "";
  scheduleSave();
  renderAll();
  showToast("Partecipante aggiunto", `${newParticipant.avatar} ${newParticipant.name} è entrato/a nel gruppo.`, "good");
}

function renamePerson(personId, newName) {
  const person = personById(personId);
  if (!person) return;
  const trimmed = newName.trim();
  if (!trimmed) {
    renderParticipants();
    return;
  }
  person.name = trimmed;
  scheduleSave();
  renderAll();
}

function confirmRemovePerson(personId) {
  const person = personById(personId);
  if (!person) return;
  const relatedExpenses = getPersonExpenses(personId).length;
  openModal({
    title: "Rimuovere partecipante?",
    text: `${person.name} verrà tolto/a dal gruppo. Le sue ${relatedExpenses} spese verranno eliminate.`,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Rimuovi",
        className: "btn-danger",
        onClick: () => {
          removePerson(personId);
          return true;
        }
      }
    ]
  });
}

function removePerson(personId) {
  const person = personById(personId);
  if (!person) return;

  if (person.coupleId) {
    const couple = getCouple(person.coupleId);
    if (couple) {
      couple.members.forEach(memberId => {
        const member = personById(memberId);
        if (member) member.coupleId = null;
      });
      state.couples = state.couples.filter(item => item.id !== couple.id);
    }
  }

  state.expenses = state.expenses.filter(expense => expense.personId !== personId);
  state.participants = state.participants.filter(item => item.id !== personId);
  if (activeParticipantId === personId) {
    activeParticipantId = state.participants[0]?.id || null;
    persistActiveParticipant();
  }

  scheduleSave();
  renderAll();
  showToast("Partecipante rimosso", `${person.name} non fa più parte del gruppo attivo.`, "warning");
}

function confirmBreakCouple(coupleId) {
  const name = getCoupleName(coupleId);
  openModal({
    title: "Separare la coppia?",
    text: `${name} torneranno a essere due unità separate per i conti.`,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Separa",
        className: "btn-danger",
        onClick: () => {
          breakCouple(coupleId);
          return true;
        }
      }
    ]
  });
}

function breakCouple(coupleId) {
  const couple = getCouple(coupleId);
  if (!couple) return;
  couple.members.forEach(memberId => {
    const member = personById(memberId);
    if (member) member.coupleId = null;
  });
  state.couples = state.couples.filter(item => item.id !== coupleId);
  scheduleSave();
  renderAll();
  showToast("Coppia separata", "Per i conti tornano a essere due unità indipendenti.", "warning");
}

function makeCouple() {
  const singles = state.participants.filter(participant => !participant.coupleId);
  if (singles.length < 2) {
    showToast("Coppia impossibile", "Servono almeno due persone singole.", "warning");
    return;
  }

  openModal({
    title: "Crea coppia",
    text: "Scegli due persone singole da unire nei conti.",
    bodyHtml: `
      <div class="field-grid">
        <label class="field">
          <span>Persona 1</span>
          <select id="modalCoupleA">
            ${singles.map(person => `<option value="${person.id}">${person.avatar} ${escapeHtml(person.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Persona 2</span>
          <select id="modalCoupleB">
            ${singles.map(person => `<option value="${person.id}">${person.avatar} ${escapeHtml(person.name)}</option>`).join("")}
          </select>
        </label>
      </div>
    `,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Crea coppia",
        className: "btn-primary",
        onClick: () => {
          const personAId = document.getElementById("modalCoupleA").value;
          const personBId = document.getElementById("modalCoupleB").value;
          if (!personAId || !personBId || personAId === personBId) {
            showToast("Selezione non valida", "Scegli due persone diverse.", "bad");
            return false;
          }
          const personA = personById(personAId);
          const personB = personById(personBId);
          if (!personA || !personB || personA.coupleId || personB.coupleId) {
            showToast("Operazione non valida", "Una delle persone selezionate non è più disponibile.", "bad");
            return false;
          }
          const coupleId = genId();
          personA.coupleId = coupleId;
          personB.coupleId = coupleId;
          state.couples.push({
            id: coupleId,
            members: [personAId, personBId],
            avatar: COUPLE_AVATARS[Math.floor(Math.random() * COUPLE_AVATARS.length)]
          });
          scheduleSave();
          renderAll();
          showToast("Nuova coppia", `${personA.name} e ${personB.name} ora sono uniti nei conti.`, "good");
          return true;
        }
      }
    ]
  });

  const second = singles[1];
  if (second) document.getElementById("modalCoupleB").value = second.id;
}

function addShoppingItem() {
  const activePerson = requireActiveParticipant("aggiungere alla lista della spesa");
  if (!activePerson) return;
  const input = document.getElementById("shoppingInput");
  const text = input.value.trim();
  if (!text) {
    showToast("Elemento vuoto", "Scrivi cosa manca davvero.", "warning");
    return;
  }

  state.shoppingList.push({
    id: genId(),
    text,
    authorId: activePerson.id,
    checked: false,
    timestamp: Date.now()
  });
  input.value = "";
  scheduleSave();
  renderShoppingList();
  showToast("Lista aggiornata", `${activePerson.name} ha aggiunto "${text}".`, "good");
}

function toggleShoppingItem(index) {
  const item = state.shoppingList[index];
  if (!item) return;
  item.checked = !item.checked;
  scheduleSave();
  renderShoppingList();
}

function removeShoppingItem(index) {
  const item = state.shoppingList[index];
  if (!item) return;
  state.shoppingList.splice(index, 1);
  scheduleSave();
  renderShoppingList();
  showToast("Elemento rimosso", `"${item.text}" è stato tolto dalla lista.`, "warning");
}

function sendChatMessage() {
  const activePerson = requireActiveParticipant("scrivere in chat");
  if (!activePerson) return;
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  state.chatMessages.push({
    id: genId(),
    authorId: activePerson.id,
    text,
    timestamp: Date.now()
  });
  input.value = "";
  scheduleSave();
  renderChat();

  const normalized = text.toLowerCase();
  if (normalized.includes("birra")) {
    showToast("Chat utile", "Parola chiave rilevata: birra. Finalmente si parla seriamente.", "good");
  }
}

function addWishlistItem() {
  const activePerson = requireActiveParticipant("aggiungere alla wishlist");
  if (!activePerson) return;
  const input = document.getElementById("wishlistInput");
  const text = input.value.trim();
  if (!text) {
    showToast("Wishlist vuota", "Scrivi prima cosa vorresti portare o trovare.", "warning");
    return;
  }

  state.wishlist.push({
    id: genId(),
    text,
    requestedById: activePerson.id,
    assignedToId: null,
    assignedById: null,
    status: "open",
    timestamp: Date.now()
  });
  input.value = "";
  scheduleSave();
  renderWishlist();
  showToast("Wishlist aggiornata", `${activePerson.name} ha aggiunto "${text}".`, "good");
}

function claimWishlistItem(itemId) {
  const activePerson = requireActiveParticipant("prendere in carico una voce wishlist");
  if (!activePerson) return;
  const item = state.wishlist.find(entry => entry.id === itemId);
  if (!item) return;
  item.assignedToId = activePerson.id;
  item.assignedById = activePerson.id;
  item.status = "claimed";
  scheduleSave();
  renderWishlist();
  showToast("Voce presa in carico", `${activePerson.name} si occupa di "${item.text}".`, "good");
}

function assignWishlistItem(itemId) {
  const activePerson = requireActiveParticipant("assegnare una voce wishlist");
  if (!activePerson) return;
  const item = state.wishlist.find(entry => entry.id === itemId);
  if (!item) return;
  const options = state.participants.filter(participant => participant.id !== activePerson.id);
  if (options.length === 0) {
    showToast("Nessun altro disponibile", "Sei da solo/a nel gruppo attivo.", "warning");
    return;
  }

  openModal({
    title: "Assegna voce wishlist",
    text: `Chi deve occuparsi di "${item.text}"?`,
    bodyHtml: `
      <label class="field">
        <span>Partecipante</span>
        <select id="modalWishlistAssignee">
          ${options.map(participant => `<option value="${participant.id}">${participant.avatar} ${escapeHtml(participant.name)}</option>`).join("")}
        </select>
      </label>
    `,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Assegna",
        className: "btn-primary",
        onClick: () => {
          const targetId = document.getElementById("modalWishlistAssignee").value;
          const target = personById(targetId);
          if (!target) {
            showToast("Assegnazione fallita", "Il partecipante scelto non è valido.", "bad");
            return false;
          }
          item.assignedToId = target.id;
          item.assignedById = activePerson.id;
          item.status = "pending";
          scheduleSave();
          renderWishlist();
          showToast("Voce assegnata", `${target.name} ora deve rispondere per "${item.text}".`, "good");
          return true;
        }
      }
    ]
  });
}

function respondWishlistItem(itemId, accepted) {
  const activePerson = requireActiveParticipant("rispondere a una assegnazione");
  if (!activePerson) return;
  const item = state.wishlist.find(entry => entry.id === itemId);
  if (!item || item.assignedToId !== activePerson.id) return;

  if (accepted) {
    item.status = "accepted";
    spawnConfetti();
    showToast("Assegnazione accettata", `${activePerson.name} ha confermato "${item.text}".`, "good");
  } else {
    item.status = "declined";
    item.assignedToId = null;
    item.assignedById = null;
    showToast("Assegnazione rifiutata", `${activePerson.name} ha rimesso "${item.text}" tra le voci aperte.`, "warning");
  }

  scheduleSave();
  renderWishlist();
}

function confirmRemoveWishlistItem(itemId) {
  const item = state.wishlist.find(entry => entry.id === itemId);
  if (!item) return;
  openModal({
    title: "Rimuovere voce wishlist?",
    text: `"${item.text}" sparirà dall'organizzazione del gruppo.`,
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Rimuovi",
        className: "btn-danger",
        onClick: () => {
          state.wishlist = state.wishlist.filter(entry => entry.id !== itemId);
          scheduleSave();
          renderWishlist();
          showToast("Voce rimossa", `"${item.text}" è uscita dalla wishlist.`, "warning");
          return true;
        }
      }
    ]
  });
}

async function renderBackups() {
  const container = document.getElementById("backupsList");
  container.innerHTML = `<div class="empty-state">Caricamento backup...</div>`;
  try {
    const res = await fetch("/api/backups");
    const payload = await res.json();
    if (!Array.isArray(payload.backups) || payload.backups.length === 0) {
      container.innerHTML = `<div class="empty-state"><strong>Nessun backup disponibile.</strong><br>Crea il primo snapshot quando vuoi.</div>`;
      return;
    }

    container.innerHTML = payload.backups.map(backup => `
      <div class="backup-item">
        <div class="backup-info">
          <div><strong>${escapeHtml(backup.description)}</strong></div>
          <div class="backup-date">${formatDateTime(backup.created_at)}</div>
        </div>
        <div class="backup-actions">
          <button class="link-btn" type="button" onclick="confirmRestoreBackup(${backup.id})">Ripristina</button>
          <button class="link-btn danger" type="button" onclick="confirmDeleteBackup(${backup.id})">Elimina</button>
        </div>
      </div>
    `).join("");
  } catch {
    container.innerHTML = `<div class="empty-state"><strong>Errore nel caricamento.</strong><br>Non riesco a leggere i backup dal server.</div>`;
  }
}

async function createBackup() {
  const description = document.getElementById("backupDescInput").value.trim();
  try {
    const res = await fetch("/api/backups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: description || undefined })
    });
    if (!res.ok) throw new Error("Backup failed");
    document.getElementById("backupDescInput").value = "";
    renderBackups();
    showToast("Backup creato", "Snapshot salvato correttamente sul server.", "good");
  } catch {
    showToast("Backup fallito", "Non sono riuscito a creare il backup.", "bad");
  }
}

function confirmRestoreBackup(backupId) {
  openModal({
    title: "Ripristinare questo backup?",
    text: "Lo stato attuale verrà salvato automaticamente prima del ripristino.",
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Ripristina",
        className: "btn-danger",
        onClick: async () => {
          try {
            const res = await fetch(`/api/backups/${backupId}/restore`, { method: "POST" });
            if (!res.ok) throw new Error("Restore failed");
            const payload = await res.json();
            stateVersion = payload.version;
            await loadStateFromServer();
            renderAll();
            await renderBackups();
            showToast("Backup ripristinato", "Stato precedente ricaricato correttamente.", "good");
            return true;
          } catch {
            showToast("Ripristino fallito", "Non sono riuscito a completare il ripristino.", "bad");
            return false;
          }
        }
      }
    ]
  });
}

function confirmDeleteBackup(backupId) {
  openModal({
    title: "Eliminare questo backup?",
    text: "Questa azione rimuove definitivamente lo snapshot selezionato.",
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Elimina",
        className: "btn-danger",
        onClick: async () => {
          try {
            await fetch(`/api/backups/${backupId}`, { method: "DELETE" });
            renderBackups();
            showToast("Backup eliminato", "Snapshot rimosso.", "warning");
            return true;
          } catch {
            showToast("Eliminazione fallita", "Non sono riuscito a eliminare il backup.", "bad");
            return false;
          }
        }
      }
    ]
  });
}

function resetAll() {
  openModal({
    title: "Reset completo?",
    text: "Verrà creato un backup automatico e poi tutto tornerà allo stato iniziale.",
    actions: [
      { label: "Annulla", className: "btn-secondary" },
      {
        label: "Resetta tutto",
        className: "btn-danger",
        onClick: async () => {
          try {
            await fetch("/api/backups", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ description: "Auto-backup prima del reset" })
            });
          } catch {
            // Keep going even if the backup creation fails.
          }

          state = cloneDefaultState();
          activeParticipantId = state.participants[0]?.id || null;
          persistActiveParticipant();
          expandedExpenseId = null;
          nextQuizQuestion();
          scheduleSave();
          renderAll();
          if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
            renderBackups();
          }
          showToast("Reset completato", "Tutto azzerato e pronto a ripartire.", "warning");
          return true;
        }
      }
    ]
  });
}

function celebrateSettlement() {
  if (getTotalExpenses() === 0) {
    showToast("Ancora presto", "Prima servono un po' di spese da regolare.", "warning");
    return;
  }
  if (calculateSettlements().length === 0) {
    spawnConfetti();
    showToast("Pareggio perfetto", "Nessun trasferimento necessario. Potete tornare amici subito.", "good");
  } else {
    spawnConfetti();
    showToast("Regolamento pronto", "Il piano è chiaro. Ora manca solo eseguire i bonifici.", "good");
  }
}

function openModal({ title, text = "", bodyHtml = "", actions = [] }) {
  const overlay = document.getElementById("modalOverlay");
  const shell = document.getElementById("modalShell");
  shell.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    ${text ? `<p>${escapeHtml(text)}</p>` : ""}
    ${bodyHtml}
    <div class="modal-actions">
      ${actions.map((action, index) => `
        <button class="btn ${action.className || "btn-secondary"}" type="button" data-modal-action="${index}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";

  shell.querySelectorAll("[data-modal-action]").forEach(button => {
    const action = actions[Number(button.dataset.modalAction)];
    button.addEventListener("click", async () => {
      const result = action.onClick ? await action.onClick() : true;
      if (result !== false) closeModal();
    });
  });

  const firstInput = shell.querySelector("input, select, textarea, button");
  if (firstInput) firstInput.focus();
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.hidden = true;
  document.body.style.overflow = "";
}

function showToast(title, text, tone = "") {
  const region = document.getElementById("toastRegion");
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`.trim();
  toast.innerHTML = `
    <div class="avatar">🔥</div>
    <div class="toast-body">
      <p class="toast-title">${escapeHtml(title)}</p>
      <p class="toast-text">${escapeHtml(text)}</p>
    </div>
  `;
  region.appendChild(toast);
  setTimeout(() => toast.remove(), 3400);
}

function spawnConfetti() {
  const colors = ["#d85b28", "#f0b045", "#3f9867", "#4580ca", "#f7d462", "#bf3d2f"];
  for (let index = 0; index < 42; index++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    piece.style.transform = `translateY(0) rotate(${Math.random() * 180}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2200);
  }
}

function requireActiveParticipant(actionLabel) {
  const activePerson = getActiveParticipant();
  if (!activePerson) {
    showToast("Profilo richiesto", `Prima devi selezionare chi sta usando l'app per ${actionLabel}.`, "warning");
    if (activePrimaryTab !== "organizzazione") setPrimaryTab("organizzazione");
    if (activeOrgTab !== "gruppo") setOrgTab("gruppo");
    return null;
  }
  return activePerson;
}

function openEmojiPicker(targetId, isCouple = false) {
  emojiPickerTarget = targetId;
  emojiPickerIsCouple = isCouple;
  document.getElementById("emojiPickerOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function selectEmoji(emoji) {
  if (emojiPickerIsCouple) {
    const couple = getCouple(emojiPickerTarget);
    if (couple) couple.avatar = emoji;
  } else {
    const person = personById(emojiPickerTarget);
    if (person) person.avatar = emoji;
  }
  scheduleSave();
  renderAll();
  closeEmojiPicker();
}

function closeEmojiPicker() {
  document.getElementById("emojiPickerOverlay").hidden = true;
  document.body.style.overflow = "";
}

function populateEmojiGrid() {
  const grid = document.getElementById("emojiGrid");
  grid.innerHTML = EMOJI_LIST.map(emoji => `
    <button class="emoji-option" type="button" onclick="selectEmoji('${emoji}')">${emoji}</button>
  `).join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  loadPreferences();
  populateEmojiGrid();

  await loadStateFromServer();
  ensureActiveParticipant();

  document.querySelectorAll(".primary-tab").forEach(button => {
    button.addEventListener("click", () => setPrimaryTab(button.dataset.tab));
  });

  document.querySelectorAll(".sub-tab").forEach(button => {
    button.addEventListener("click", () => setOrgTab(button.dataset.orgTab));
  });

  setupArrowKeyNavigation(document.querySelector(".primary-nav"), ".primary-tab", button => {
    setPrimaryTab(button.dataset.tab);
  });

  setupArrowKeyNavigation(document.querySelector(".sub-nav"), ".sub-tab", button => {
    setOrgTab(button.dataset.orgTab);
  });

  document.querySelectorAll("#balanceViewToggle button").forEach(button => {
    button.addEventListener("click", () => {
      activeBalanceView = button.dataset.view;
      renderTabVisibility();
      renderRegulation();
    });
  });

  setupArrowKeyNavigation(document.getElementById("balanceViewToggle"), "button", button => {
    activeBalanceView = button.dataset.view;
    renderTabVisibility();
    renderRegulation();
  });

  document.getElementById("modalOverlay").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeModal();
  });

  document.getElementById("emojiPickerOverlay").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeEmojiPicker();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!document.getElementById("modalOverlay").hidden) {
      closeModal();
      return;
    }
    if (!document.getElementById("emojiPickerOverlay").hidden) {
      closeEmojiPicker();
    }
  });

  const expenseAmountInput = document.getElementById("expenseAmountInput");
  const expenseDescInput = document.getElementById("expenseDescInput");
  [expenseDescInput, expenseAmountInput].forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        addExpense();
      }
    });
  });

  document.getElementById("chatInput").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendChatMessage();
    }
  });

  document.getElementById("shoppingInput").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      addShoppingItem();
    }
  });

  document.getElementById("wishlistInput").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      addWishlistItem();
    }
  });

  nextQuizQuestion();
  renderAll();

  if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
    renderBackups();
  }

  setInterval(pollForChanges, 5000);
});
