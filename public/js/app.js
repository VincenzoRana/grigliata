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
  section: "grigliata.section",
  // Legacy (still read for migration):
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
    partyChallenges: { current: null, drawsByPlayer: {} },
    reactionFlame: { statsByPlayer: {} },
    memoryFlame: { statsByPlayer: {} },
    tapFire: { statsByPlayer: {} },
    sausageJump: { statsByPlayer: {} },
    braceCatcher: { statsByPlayer: {} },
    sausageSnake: { statsByPlayer: {} },
    skewerStack: { statsByPlayer: {} },
    whackBurger: { statsByPlayer: {} },
    tongPrecision: { statsByPlayer: {} },
    marinadeMatch: { statsByPlayer: {} },
    holdCook: { statsByPlayer: {} },
    calcCheck: { statsByPlayer: {} },
    countSausage: { statsByPlayer: {} },
    reactions: {}
  },
  nextId: 10
};

let state = cloneDefaultState();
let stateVersion = 0;
let saveTimeout = null;
let isSaving = false;
let isLoading = false;
let activeSection = "home";
// Legacy aliases kept until all references are migrated:
let activePrimaryTab = "home";
let activeOrgTab = "wishlist";
const SECTIONS = ["home", "spese", "regolamento", "lista", "chat", "wishlist", "gruppo", "giochi", "impostazioni", "dev"];
let activeBalanceView = "person";
let activeParticipantId = null;
let profileSelectionPromptOpen = false;
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

const reactionGame = {
  phase: "idle", // idle | waiting | ready | done
  startTime: 0,
  reactionMs: 0,
  timeoutId: null,
  lastResult: null, // "ok" | "false-start" | null
};

const memoryGame = {
  sequence: [],
  userInput: [],
  phase: "idle", // idle | showing | input | failed | success
  timeoutIds: [],
};

const tapFireGame = {
  phase: "idle", // idle | playing | done
  score: 0,
  timeLeft: 0,
  activeCell: -1,
  tickIntervalId: null,
  flameIntervalId: null,
  endTimeoutId: null,
  startedAt: 0,
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
        timestamp: Number(message.timestamp) || Date.now(),
        reactions: message.reactions && typeof message.reactions === "object" ? message.reactions : {}
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
    },
    reactionFlame: {
      statsByPlayer: games.reactionFlame && typeof games.reactionFlame.statsByPlayer === "object"
        ? games.reactionFlame.statsByPlayer
        : {}
    },
    memoryFlame: {
      statsByPlayer: games.memoryFlame && typeof games.memoryFlame.statsByPlayer === "object"
        ? games.memoryFlame.statsByPlayer
        : {}
    },
    tapFire: {
      statsByPlayer: games.tapFire && typeof games.tapFire.statsByPlayer === "object"
        ? games.tapFire.statsByPlayer
        : {}
    },
    sausageJump:   { statsByPlayer: (games.sausageJump   && typeof games.sausageJump.statsByPlayer   === "object") ? games.sausageJump.statsByPlayer   : {} },
    braceCatcher:  { statsByPlayer: (games.braceCatcher  && typeof games.braceCatcher.statsByPlayer  === "object") ? games.braceCatcher.statsByPlayer  : {} },
    sausageSnake:  { statsByPlayer: (games.sausageSnake  && typeof games.sausageSnake.statsByPlayer  === "object") ? games.sausageSnake.statsByPlayer  : {} },
    skewerStack:   { statsByPlayer: (games.skewerStack   && typeof games.skewerStack.statsByPlayer   === "object") ? games.skewerStack.statsByPlayer   : {} },
    whackBurger:   { statsByPlayer: (games.whackBurger   && typeof games.whackBurger.statsByPlayer   === "object") ? games.whackBurger.statsByPlayer   : {} },
    tongPrecision: { statsByPlayer: (games.tongPrecision && typeof games.tongPrecision.statsByPlayer === "object") ? games.tongPrecision.statsByPlayer : {} },
    marinadeMatch: { statsByPlayer: (games.marinadeMatch && typeof games.marinadeMatch.statsByPlayer === "object") ? games.marinadeMatch.statsByPlayer : {} },
    holdCook:      { statsByPlayer: (games.holdCook      && typeof games.holdCook.statsByPlayer      === "object") ? games.holdCook.statsByPlayer      : {} },
    calcCheck:     { statsByPlayer: (games.calcCheck     && typeof games.calcCheck.statsByPlayer     === "object") ? games.calcCheck.statsByPlayer     : {} },
    countSausage:  { statsByPlayer: (games.countSausage  && typeof games.countSausage.statsByPlayer  === "object") ? games.countSausage.statsByPlayer  : {} },
    reactions: games.reactions && typeof games.reactions === "object"
      ? games.reactions
      : {}
  };

  next.nextId = Number(serverState.nextId) > 0 ? Number(serverState.nextId) : next.nextId;
  return next;
}

function loadPreferences() {
  const storedSection = localStorage.getItem(LOCAL_KEYS.section);
  if (storedSection && SECTIONS.includes(storedSection)) {
    activeSection = storedSection;
  } else {
    // Migrate from legacy keys
    const legacyPrimary = localStorage.getItem(LOCAL_KEYS.primaryTab);
    const legacyOrg = localStorage.getItem(LOCAL_KEYS.orgTab);
    if (legacyPrimary === "spese" || legacyPrimary === "regolamento") {
      activeSection = legacyPrimary;
    } else if (legacyPrimary === "organizzazione" && legacyOrg) {
      activeSection = legacyOrg === "admin" ? "impostazioni" : legacyOrg;
    } else {
      activeSection = "home";
    }
  }
  activePrimaryTab = activeSection;
  activeParticipantId = localStorage.getItem(LOCAL_KEYS.activeParticipantId);
}

function persistActiveSection() {
  localStorage.setItem(LOCAL_KEYS.section, activeSection);
}

function persistActiveParticipant() {
  if (activeParticipantId) localStorage.setItem(LOCAL_KEYS.activeParticipantId, activeParticipantId);
  else localStorage.removeItem(LOCAL_KEYS.activeParticipantId);
}

function setProfileSelectionLock(locked) {
  const appShell = document.querySelector(".app-shell");
  if (appShell) {
    if ("inert" in appShell) {
      appShell.inert = locked;
    }
    appShell.setAttribute("aria-hidden", locked ? "true" : "false");
  }
  document.body.classList.toggle("profile-selection-locked", locked);
}

function ensureActiveParticipant() {
  const exists = activeParticipantId && state.participants.some(p => p.id === activeParticipantId);
  if (!exists) activeParticipantId = null;
  persistActiveParticipant();
  setProfileSelectionLock(!activeParticipantId && state.participants.length > 0);
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
    const prior = state ? JSON.parse(JSON.stringify(state)) : null;
    const res = await fetch("/api/state");
    if (!res.ok) throw new Error("Failed to load state");
    const payload = await res.json();
    stateVersion = payload.version;
    state = normalizeState(payload.state);
    ensureActiveParticipant();

    let mustReSave = false;
    // Protect chat against last-writer-wins races
    if (prior && prior.chatMessages && prior.chatMessages.length) {
      const serverIds = new Set(state.chatMessages.map(m => m.id));
      const orphans = prior.chatMessages.filter(m => m && m.id && !serverIds.has(m.id));
      if (orphans.length) {
        state.chatMessages = [...state.chatMessages, ...orphans]
          .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        mustReSave = true;
      }
    }
    // Protect game stats: merge per-player records, keeping the best of both sides.
    if (prior && prior.games) {
      if (mergeGameStats(prior.games, state.games)) mustReSave = true;
    }
    if (mustReSave) scheduleSave();
    return true;
  } catch (error) {
    console.warn("Failed to load from server, using defaults:", error);
    state = cloneDefaultState();
    ensureActiveParticipant();
    return false;
  }
}

// Merges game stats from `local` (prior local state) into `server` (state just
// loaded from server), keeping the best of both sides per-player per-field.
// Returns true if the merge introduced changes we need to re-save.
function mergeGameStats(local, server) {
  let dirty = false;
  const pickMax = (a, b) => Math.max(Number(a) || 0, Number(b) || 0);
  // Lower is better; 0 is considered "no record yet".
  const pickMinNonZero = (a, b) => {
    const la = Number(a) || 0, lb = Number(b) || 0;
    if (la && lb) return Math.min(la, lb);
    return la || lb;
  };

  const mergeMap = (localMap, serverMap, fields, minFields = []) => {
    const ids = new Set([...Object.keys(localMap || {}), ...Object.keys(serverMap || {})]);
    for (const id of ids) {
      const l = (localMap && localMap[id]) || {};
      const s = (serverMap && serverMap[id]) || {};
      if (!serverMap[id]) serverMap[id] = {};
      for (const f of fields) {
        const merged = pickMax(l[f], s[f]);
        if (merged !== (Number(s[f]) || 0)) dirty = true;
        serverMap[id][f] = merged;
      }
      for (const f of minFields) {
        const merged = pickMinNonZero(l[f], s[f]);
        if (merged !== (Number(s[f]) || 0)) dirty = true;
        serverMap[id][f] = merged;
      }
    }
  };

  // Grill Master: all fields are "higher is better"
  mergeMap(local.grillMaster?.statsByPlayer, server.grillMaster.statsByPlayer,
    ["best", "plays", "perfects"]);
  // Quiz: counters and bestStreak; currentStreak kept from server
  mergeMap(local.bbqQuiz?.statsByPlayer, server.bbqQuiz.statsByPlayer,
    ["correct", "answered", "bestStreak"]);
  // Reaction: lower is better for "best"; plays and falseStarts are counters
  mergeMap(local.reactionFlame?.statsByPlayer, server.reactionFlame.statsByPlayer,
    ["plays", "falseStarts"], ["best"]);
  // Memory: higher is better
  mergeMap(local.memoryFlame?.statsByPlayer, server.memoryFlame.statsByPlayer,
    ["best", "plays"]);
  // Tap Fire: higher is better
  if (server.tapFire) {
    mergeMap(local.tapFire?.statsByPlayer, server.tapFire.statsByPlayer,
      ["best", "plays"]);
  }
  // New games (higher is better by default)
  const higherIsBetter = ["sausageJump", "braceCatcher", "sausageSnake", "skewerStack",
                          "whackBurger", "tongPrecision", "holdCook", "calcCheck", "countSausage"];
  for (const key of higherIsBetter) {
    if (server[key]) mergeMap(local[key]?.statsByPlayer, server[key].statsByPlayer, ["best", "plays"]);
  }
  // Marinade Match: lower is better (time to finish)
  if (server.marinadeMatch) {
    mergeMap(local.marinadeMatch?.statsByPlayer, server.marinadeMatch.statsByPlayer,
      ["plays"], ["best"]);
  }
  // Party challenges: scalar count per player (take max)
  {
    const ids = new Set([
      ...Object.keys(local.partyChallenges?.drawsByPlayer || {}),
      ...Object.keys(server.partyChallenges.drawsByPlayer || {}),
    ]);
    for (const id of ids) {
      const merged = pickMax(
        local.partyChallenges?.drawsByPlayer?.[id],
        server.partyChallenges.drawsByPlayer[id]
      );
      if (merged !== (Number(server.partyChallenges.drawsByPlayer[id]) || 0)) dirty = true;
      server.partyChallenges.drawsByPlayer[id] = merged;
    }
  }
  return dirty;
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

async function flushSave() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = null;
  await saveStateToServer();
}

async function pollForChanges() {
  if (isLoading || isSaving) return;

  // Flush any pending local changes BEFORE checking remote — otherwise a
  // poll+load could overwrite unsaved local state (e.g. a chat message
  // typed in the last 280ms).
  if (saveTimeout) {
    clearTimeout(saveTimeout);
    saveTimeout = null;
    await saveStateToServer();
  }

  try {
    const res = await fetch("/api/state/version");
    if (!res.ok) return;
    const payload = await res.json();
    if (payload.version > stateVersion) {
      showSyncIndicator(true);
      isLoading = true;
      await loadStateFromServer();
      isLoading = false;
      renderAll();
      if (activeSection === "impostazioni") renderBackups();
      showSyncIndicator(false);
    }
  } catch {
    showSyncIndicator(false);
  }
}

function showSyncIndicator(on) {
  let el = document.getElementById("syncIndicator");
  if (!el) {
    el = document.createElement("div");
    el.id = "syncIndicator";
    el.className = "sync-indicator";
    el.innerHTML = '<span class="sync-spinner" aria-hidden="true"></span>';
    document.body.appendChild(el);
  }
  el.classList.toggle("visible", on);
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

function setSection(name) {
  if (!SECTIONS.includes(name)) return;
  activeSection = name;
  activePrimaryTab = name; // legacy alias
  persistActiveSection();
  renderTabVisibility();
  scrollControlIntoView(document.querySelector(`.primary-tab[data-section="${activeSection}"]`));
  if (activeSection === "impostazioni") renderBackups();
  document.body.dataset.section = activeSection;
  if (typeof updateBottomNavActive === "function") updateBottomNavActive();
  if (typeof renderHome === "function" && activeSection === "home") renderHome();
}

// Legacy aliases (for old callers still using these)
function setPrimaryTab(tabName) { setSection(tabName); }
function setOrgTab(tabName) { setSection(tabName); }

function renderTabVisibility() {
  document.querySelectorAll(".primary-tab").forEach(button => {
    setTabButtonState(button, button.dataset.section === activeSection);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    setPanelState(panel, panel.id === `tab-${activeSection}`);
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
  renderIdentity();
  renderHome();
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
  openProfileSelectionPrompt();
}

function renderIdentity() {
  const identitySwitcher = document.getElementById("identitySwitcher");
  const activePerson = getActiveParticipant();
  const pill = document.getElementById("activeIdentityPill");
  if (pill) {
    pill.textContent = activePerson
      ? `${activePerson.avatar} ${activePerson.name}`
      : "Seleziona un profilo";
  }

  if (!identitySwitcher) return;
  if (state.participants.length === 0) {
    identitySwitcher.innerHTML = `<div class="empty-state"><strong>Nessun partecipante.</strong><br>Aggiungi prima il gruppo per sbloccare profili, commenti e giochi.</div>`;
  } else {
    identitySwitcher.innerHTML = state.participants.map(participant => `
      <button class="identity-chip ${participant.id === activeParticipantId ? "active" : ""}" type="button" data-participant-id="${participant.id}" onclick="setActiveParticipant('${participant.id}')">
        <span class="avatar">${participant.avatar}</span>
        <span>${escapeHtml(participant.name)}</span>
        <span class="push-badge" aria-hidden="true" title="App installata con notifiche attive"></span>
      </button>
    `).join("");
    if (typeof renderIdentityBadges === "function") renderIdentityBadges();
  }
}

function renderHome() {
  const activePerson = getActiveParticipant();
  const wishlistStats = getWishlistStats();
  const transactions = calculateSettlements();

  // Greeting
  const greetingAvatar = document.getElementById("dashboardGreetingAvatar");
  const greetingName = document.getElementById("dashboardGreetingName");
  const greetingSub = document.getElementById("dashboardGreetingSub");
  if (greetingAvatar) greetingAvatar.textContent = activePerson ? activePerson.avatar : "👤";
  if (greetingName) greetingName.textContent = activePerson ? activePerson.name : "Partecipante";
  if (greetingSub) {
    const n = state.participants.length;
    greetingSub.textContent = activePerson
      ? `Gruppo di ${n} ${n === 1 ? "persona" : "persone"} · stai segnando tutto come ${activePerson.avatar} ${activePerson.name}.`
      : "Seleziona il tuo profilo per iniziare a segnare le spese.";
  }

  // Stats
  const statsEl = document.getElementById("dashboardStats");
  if (statsEl) {
    statsEl.innerHTML = [
      renderStatCard(formatMoney(getTotalExpenses()), "Totale spese"),
      renderStatCard(formatMoney(getPerPersonShare()), "Quota a testa"),
      renderStatCard(String(transactions.length), "Trasferimenti minimi"),
      renderStatCard(`${wishlistStats.coverage}%`, "Wishlist coperta"),
    ].join("");
  }

  // Personal balance
  const balEl = document.getElementById("dashboardPersonalBalance");
  const balTitle = document.getElementById("dashboardPersonalBalanceTitle");
  const balCard = document.getElementById("dashboardPersonalBalanceCard");
  if (balEl && balTitle && balCard) {
    if (!activePerson) {
      balCard.hidden = true;
    } else {
      balCard.hidden = false;
      const paid = getPersonTotal(activePerson.id);
      const share = getPerPersonShare();
      const balance = paid - share;
      let tone = "neutral";
      let title = "Sei in pari";
      let body = `Hai anticipato <strong>${formatMoney(paid)}</strong> · Quota <strong>${formatMoney(share)}</strong>. Sei in pari, bravo.`;
      if (balance > 0.01) {
        tone = "positive";
        title = `Devi ricevere ${formatMoney(balance)}`;
        body = `Hai anticipato <strong>${formatMoney(paid)}</strong> · Quota <strong>${formatMoney(share)}</strong>. Il gruppo ti deve <strong>${formatMoney(balance)}</strong>.`;
      } else if (balance < -0.01) {
        tone = "negative";
        title = `Devi dare ${formatMoney(Math.abs(balance))}`;
        body = `Hai anticipato <strong>${formatMoney(paid)}</strong> · Quota <strong>${formatMoney(share)}</strong>. Devi ancora tirar fuori <strong>${formatMoney(Math.abs(balance))}</strong>.`;
      }
      balTitle.textContent = title;
      balEl.innerHTML = `<p class="card-copy tone-${tone}">${body}</p>`;
    }
  }

  // Recent activity feed
  renderDashboardActivity();
}

function renderDashboardActivity() {
  const container = document.getElementById("dashboardActivity");
  if (!container) return;

  const events = [];
  for (const exp of state.expenses) {
    events.push({
      ts: exp.timestamp,
      icon: "💰",
      title: `${labelForPerson(exp.personId)} ha aggiunto una spesa`,
      text: `${escapeHtml(exp.description)} · ${formatMoney(exp.amount)}`,
      section: "spese",
    });
    for (const c of (exp.comments || [])) {
      events.push({
        ts: c.timestamp,
        icon: "💬",
        title: `${labelForPerson(c.authorId)} ha commentato una spesa`,
        text: `"${escapeHtml(exp.description)}": ${escapeHtml(c.text)}`,
        section: "spese",
      });
    }
  }
  for (const msg of state.chatMessages) {
    events.push({
      ts: msg.timestamp,
      icon: "💬",
      title: `${labelForPerson(msg.authorId)} in chat`,
      text: escapeHtml(msg.text),
      section: "chat",
    });
  }
  for (const item of state.shoppingList) {
    events.push({
      ts: item.timestamp,
      icon: "📝",
      title: `${labelForPerson(item.authorId)} ha aggiunto alla lista`,
      text: escapeHtml(item.text),
      section: "lista",
    });
  }
  for (const item of state.wishlist) {
    events.push({
      ts: item.timestamp,
      icon: "🎁",
      title: `${labelForPerson(item.requestedById)} ha aggiunto alla wishlist`,
      text: escapeHtml(item.text),
      section: "wishlist",
    });
  }

  if (events.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Nessuna attività ancora.</strong><br>Aggiungi una spesa o scrivi in chat per vedere qualcosa qui.</div>`;
    return;
  }

  events.sort((a, b) => (b.ts || 0) - (a.ts || 0));
  const recent = events.slice(0, 6);
  container.innerHTML = `<div class="activity-feed">${recent.map(e => `
    <button class="activity-item" type="button" onclick="navigateTo('${e.section}')">
      <span class="activity-icon" aria-hidden="true">${e.icon}</span>
      <div class="activity-body">
        <div class="activity-title">${e.title}</div>
        <div class="activity-text">${e.text}</div>
        <div class="activity-time">${formatRelativeTime(e.ts)}</div>
      </div>
    </button>
  `).join("")}</div>`;
}

function formatRelativeTime(ts) {
  if (!ts) return "";
  const diff = Date.now() - ts;
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return "pochi secondi fa";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min fa`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} ${hr === 1 ? "ora" : "ore"} fa`;
  const d = Math.floor(hr / 24);
  if (d < 7) return `${d} ${d === 1 ? "giorno" : "giorni"} fa`;
  return new Date(ts).toLocaleDateString("it-IT", { day: "numeric", month: "short" });
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
  const participant = personById(participantId);
  if (!participant) {
    activeParticipantId = null;
    persistActiveParticipant();
    setProfileSelectionLock(state.participants.length > 0);
    renderAll();
    return;
  }
  activeParticipantId = participantId;
  persistActiveParticipant();
  setProfileSelectionLock(false);
  prefillExpenseForActiveUser();
  renderAll();
  if (typeof updatePushUI === "function") updatePushUI();
  if (typeof updateSubscriptionParticipant === "function") updateSubscriptionParticipant();
  showToast("Profilo attivo aggiornato", `Da ora le azioni rapide vengono fatte come ${labelForPerson(participantId)}.`, "good");
  profileSelectionPromptOpen = false;
}

function renderExpenseForm() {
  const select = document.getElementById("expensePersonSelect");
  if (!select) return;
  const currentValue = select.value;
  const hasCurrentValue = state.participants.some(participant => participant.id === currentValue);
  const activePerson = getActiveParticipant();
  select.innerHTML = `
    <option value="" ${!hasCurrentValue && !activePerson ? "selected" : ""} disabled>Seleziona un profilo</option>
    ${state.participants.map(participant => `
      <option value="${participant.id}" ${participant.id === (hasCurrentValue ? currentValue : activePerson?.id) ? "selected" : ""}>
        ${participant.avatar} ${escapeHtml(participant.name)}
      </option>
    `).join("")}
  `;

  const defaultValue = hasCurrentValue ? currentValue : activePerson?.id || "";
  select.value = defaultValue;

  setText("expenseActionHint", activePerson ? `Commenti veloci come ${activePerson.avatar} ${activePerson.name}` : "Seleziona un profilo per registrare la spesa");
}

function prefillExpenseForActiveUser() {
  const select = document.getElementById("expensePersonSelect");
  if (select) {
    select.value = activeParticipantId || "";
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

let lastChatRenderSig = "";
let chatReactionPickerMsgId = null;
const CHAT_REACTION_EMOJIS = ["❤️", "😂", "👍", "🔥", "😮", "😢"];

function toggleChatReactionPicker(messageId) {
  chatReactionPickerMsgId = chatReactionPickerMsgId === messageId ? null : messageId;
  lastChatRenderSig = ""; // force re-render
  renderChat();
}

function toggleChatReaction(messageId, emoji) {
  const activePerson = getActiveParticipant();
  if (!activePerson) {
    showToast("Serve un profilo", "Seleziona prima chi sei per reagire.", "warning");
    return;
  }
  const message = state.chatMessages.find(m => m.id === messageId);
  if (!message) return;
  if (!message.reactions) message.reactions = {};
  if (!message.reactions[emoji]) message.reactions[emoji] = [];
  const list = message.reactions[emoji];
  const idx = list.indexOf(activePerson.id);
  if (idx >= 0) {
    list.splice(idx, 1);
    if (list.length === 0) delete message.reactions[emoji];
  } else {
    list.push(activePerson.id);
  }
  // Close picker after reacting
  chatReactionPickerMsgId = null;
  lastChatRenderSig = ""; // force re-render
  scheduleSave();
  renderChat();
  // Notify author if adding
  if (idx < 0 && message.authorId !== activePerson.id) {
    const author = personById(message.authorId);
    if (author) {
      notifyOthers(
        `${emoji} reazione in chat`,
        `${activePerson.name} ha reagito ${emoji} al tuo messaggio.`,
        "chat-reaction",
        "/#chat"
      );
    }
  }
}

function renderChat() {
  const container = document.getElementById("chatMessages");
  if (state.participants.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Niente chat senza gruppo.</strong><br>Aggiungi prima i partecipanti.</div>`;
    lastChatRenderSig = "empty-no-group";
    return;
  }

  if (state.chatMessages.length === 0) {
    container.innerHTML = `<div class="empty-state"><strong>Silenzio operativo.</strong><br>Scrivi il primo messaggio al gruppo.</div>`;
    lastChatRenderSig = "empty-no-msgs";
    return;
  }

  const sorted = state.chatMessages.slice().sort((a, b) => a.timestamp - b.timestamp);
  const reactionsSig = sorted.map(m => {
    const r = m.reactions || {};
    return Object.keys(r).length ? Object.entries(r).map(([e, ids]) => `${e}${ids.length}`).join("") : "";
  }).join("|");
  const sig = `${activeParticipantId}|${chatReactionPickerMsgId}|${sorted.map(m => m.id + ":" + m.timestamp).join(",")}|${reactionsSig}`;
  if (sig === lastChatRenderSig) return;

  const nearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 120;

  container.innerHTML = sorted.map(message => {
    const author = personById(message.authorId);
    const self = author && author.id === activeParticipantId;
    const reactions = message.reactions || {};
    const hasReactions = Object.keys(reactions).some(e => reactions[e]?.length > 0);
    const pickerOpen = chatReactionPickerMsgId === message.id;

    // Render existing reactions
    let reactionsHtml = "";
    if (hasReactions) {
      const chips = Object.entries(reactions)
        .filter(([, ids]) => ids && ids.length > 0)
        .map(([emoji, ids]) => {
          const myReaction = activeParticipantId && ids.includes(activeParticipantId);
          return `<button class="chat-reaction-chip ${myReaction ? "mine" : ""}" type="button" onclick="toggleChatReaction('${message.id}', '${emoji}')">${emoji} ${ids.length}</button>`;
        }).join("");
      reactionsHtml = `<div class="chat-reactions">${chips}</div>`;
    }

    // Reaction picker (preset emojis)
    let pickerHtml = "";
    if (pickerOpen) {
      pickerHtml = `<div class="chat-reaction-picker">${CHAT_REACTION_EMOJIS.map(e =>
        `<button class="chat-reaction-picker-btn" type="button" onclick="toggleChatReaction('${message.id}', '${e}')">${e}</button>`
      ).join("")}</div>`;
    }

    return `
      <div class="chat-bubble ${self ? "self" : "other"}" data-msg-id="${message.id}">
        ${self ? "" : `<div class="chat-author">${author ? `${author.avatar} ${escapeHtml(author.name)}` : "👤 Ex partecipante"}</div>`}
        <div class="chat-text">${escapeHtml(message.text)}</div>
        <div class="chat-bottom">
          <span class="chat-time">${formatTime(message.timestamp)}</span>
          <button class="chat-react-btn" type="button" onclick="toggleChatReactionPicker('${message.id}')" title="Reagisci" aria-label="Reagisci">☺</button>
        </div>
        ${pickerHtml}
        ${reactionsHtml}
      </div>
    `;
  }).join("");
  lastChatRenderSig = sig;

  if (nearBottom) container.scrollTop = container.scrollHeight;
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
  updateReactionUi();
  updateMemoryUi();
  updateTapFireUi();
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

  // Compute per-game leaders (gold medals)
  const players = state.participants.map(p => ({ p, ...computeGameStats(p.id) }));
  const leaders = {
    grill:    topPlayerByMetric(players, x => x.grillStats.best),
    quiz:     topPlayerByMetric(players, x => x.quizStats.correct),
    reaction: topPlayerByMetric(players, x => x.reactionStats.best, true), // lower = better
    memory:   topPlayerByMetric(players, x => x.memoryStats.best),
    tapfire:  topPlayerByMetric(players, x => x.tapFireStats.best),
  };
  for (const [key, reg] of Object.entries(GAMES_REGISTRY)) {
    leaders[key] = topPlayerByMetric(players, x => x[key]?.best || 0, reg.lowerIsBetter);
  }

  const reactionEmojis = ["🔥", "👏", "💪", "🎯", "😱"];
  const reactionsMap = state.games.reactions || {};

  const rows = players
    .sort((a, b) => b.score - a.score)
    .map((row, rankIdx) => {
      const { p } = row;
      const medals = [];
      if (leaders.grill    === p.id) medals.push('<span class="medal" title="Re della Griglia">🥇🍖</span>');
      if (leaders.quiz     === p.id) medals.push('<span class="medal" title="Sommelier">🥇🧠</span>');
      if (leaders.reaction === p.id) medals.push('<span class="medal" title="Fulmine">🥇⚡</span>');
      if (leaders.memory   === p.id) medals.push('<span class="medal" title="Memoria">🥇🧩</span>');
      if (leaders.tapfire  === p.id) medals.push('<span class="medal" title="Cacciatore di Braci">🥇🔥</span>');
      for (const [key, reg] of Object.entries(GAMES_REGISTRY)) {
        if (leaders[key] === p.id && (row[key]?.best || 0) > 0) {
          medals.push(`<span class="medal" title="${reg.label}">🥇${reg.icon}</span>`);
        }
      }
      const rankBadge = rankIdx === 0 ? '🥇' : rankIdx === 1 ? '🥈' : rankIdx === 2 ? '🥉' : `#${rankIdx + 1}`;

      // Compact stat pills (only show games the player has actually played)
      const pills = [];
      if (row.grillStats.best    > 0) pills.push(`🍖 ${row.grillStats.best}`);
      if (row.quizStats.correct  > 0) pills.push(`🧠 ${row.quizStats.correct}`);
      if (row.reactionStats.best > 0) pills.push(`⚡ ${row.reactionStats.best}ms`);
      if (row.memoryStats.best   > 0) pills.push(`🧩 ${row.memoryStats.best}`);
      if (row.tapFireStats.best  > 0) pills.push(`🔥 ${row.tapFireStats.best}`);
      for (const [key, reg] of Object.entries(GAMES_REGISTRY)) {
        const v = row[key]?.best || 0;
        if (v > 0) {
          const display = reg.lowerIsBetter ? `${(v/1000).toFixed(1)}s` : String(v);
          pills.push(`${reg.icon} ${display}`);
        }
      }
      if (row.draws > 0) pills.push(`🎯 ${row.draws}`);

      const playerReactions = reactionsMap[p.id] || {};
      const selfIsMe = activeParticipantId === p.id;
      const reactionsHtml = reactionEmojis.map(emoji => {
        const reactors = playerReactions[emoji] || [];
        const count = reactors.length;
        const mineOn = activeParticipantId && reactors.includes(activeParticipantId);
        return `<button class="reaction-chip ${mineOn ? "on" : ""} ${selfIsMe ? "disabled" : ""}" type="button" ${selfIsMe ? "disabled" : ""} onclick="togglePlayerReaction('${p.id}', '${emoji}')">${emoji}${count > 0 ? ` <span>${count}</span>` : ""}</button>`;
      }).join("");

      return `
      <div class="game-score-row">
        <div class="game-score-main">
          <span class="rank-badge">${rankBadge}</span>
          <span class="avatar">${p.avatar}</span>
          <div>
            <div class="game-score-name">
              <strong>${escapeHtml(p.name)}</strong>
              ${medals.length ? `<span class="medals">${medals.join("")}</span>` : ""}
            </div>
            ${pills.length ? `<div class="stat-pills">${pills.map(p => `<span class="stat-pill">${p}</span>`).join("")}</div>` : '<div class="game-score-meta">Ancora nessun punteggio</div>'}
            <div class="reaction-chips">${reactionsHtml}</div>
          </div>
        </div>
        <strong class="game-score-total">${row.score}</strong>
      </div>
    `;
    })
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

// Unified registry for the many simple games
const GAMES_REGISTRY = {
  sausageJump:   { label: "Salsiccia Jump",    icon: "🌭", weight: 3 },
  braceCatcher:  { label: "Brace Catcher",     icon: "🥩", weight: 4 },
  sausageSnake:  { label: "Serpente alla Brace", icon: "🐍", weight: 5 },
  skewerStack:   { label: "Spiedino Stack",    icon: "🍢", weight: 6 },
  whackBurger:   { label: "Scotti la Carne",   icon: "🔨", weight: 3 },
  tongPrecision: { label: "Pinza d'Oro",       icon: "🎯", weight: 1 },
  marinadeMatch: { label: "Marinatura Mixer",  icon: "🃏", weight: 0, lowerIsBetter: true },
  holdCook:      { label: "Cottura a Puntino", icon: "🧑‍🍳", weight: 2 },
  calcCheck:     { label: "Calcola il Conto",  icon: "🧮", weight: 8 },
  countSausage:  { label: "Conta le Salsicce", icon: "🔢", weight: 10 },
};

function getSimpleGameStatsForPlayer(gameKey, playerId) {
  const raw = state.games?.[gameKey]?.statsByPlayer?.[playerId];
  return { best: Number(raw?.best) || 0, plays: Number(raw?.plays) || 0 };
}

function recordSimpleGameScore(gameKey, score) {
  const person = getActiveParticipant();
  if (!person) return false;
  const reg = GAMES_REGISTRY[gameKey];
  if (!reg) return false;
  const bag = state.games[gameKey];
  if (!bag) return false;
  const stats = bag.statsByPlayer[person.id] || { best: 0, plays: 0 };
  stats.plays = (stats.plays || 0) + 1;
  const current = stats.best || 0;
  const isRecord = reg.lowerIsBetter
    ? (current === 0 || score < current)
    : (score > current);
  if (isRecord && score > 0) stats.best = score;
  bag.statsByPlayer[person.id] = stats;
  scheduleSave();
  renderGamesLeaderboard();
  const formatted = reg.lowerIsBetter ? `${(score / 1000).toFixed(1)}s` : String(score);
  if (isRecord && score > 0) {
    spawnConfetti();
    showToast(`Nuovo record - ${reg.label}`, `${person.name}: ${formatted}`, "good");
  } else {
    showToast(reg.label, `${person.name}: ${formatted}`, "good");
  }
  return isRecord;
}

function computeGameStats(playerId) {
  const grillStats = getGrillStatsForPlayer(playerId);
  const quizStats = getQuizStatsForPlayer(playerId);
  const draws = getChallengeDrawsForPlayer(playerId);
  const reactionStats = getReactionStatsForPlayer(playerId);
  const memoryStats = getMemoryStatsForPlayer(playerId);
  const tapFireStats = getTapFireStatsForPlayer(playerId);
  // Refined score weights — each game contributes comparably when maxed out.
  const reactionScore = reactionStats.best > 0 ? Math.max(0, Math.round((500 - reactionStats.best) / 5)) : 0;
  let score =
      grillStats.best            // 0–100
    + quizStats.correct * 10     // ~100 per 10 correct answers
    + quizStats.bestStreak * 5   // bonus for streaks
    + reactionScore              // 0–70
    + memoryStats.best * 8       // 8 per sequence step
    + tapFireStats.best * 3      // 3 per tap
    + draws * 3;                 // minor bonus for party draws
  // Extra games
  const extras = {};
  for (const [key, reg] of Object.entries(GAMES_REGISTRY)) {
    const stats = getSimpleGameStatsForPlayer(key, playerId);
    extras[key] = stats;
    if (reg.lowerIsBetter) {
      // marinadeMatch: faster = better. 60s=0pt, 10s=50pt
      if (stats.best > 0) score += Math.max(0, Math.round((60000 - stats.best) / 1000));
    } else {
      score += stats.best * reg.weight;
    }
  }
  return { grillStats, quizStats, draws, reactionStats, memoryStats, tapFireStats, ...extras, score };
}

function topPlayerByMetric(playersWithStats, metricFn, lowerIsBetter = false) {
  let best = null;
  let bestVal = lowerIsBetter ? Infinity : -Infinity;
  for (const row of playersWithStats) {
    const v = Number(metricFn(row)) || 0;
    if (v === 0) continue; // skip no-record players
    if (lowerIsBetter ? v < bestVal : v > bestVal) {
      bestVal = v;
      best = row.p.id;
    }
  }
  return best;
}

// ── Reactions on leaderboard rows ──
function togglePlayerReaction(playerId, emoji) {
  const activePerson = getActiveParticipant();
  if (!activePerson) {
    showToast("Serve un profilo", "Seleziona prima chi sei per lasciare una reazione.", "warning");
    return;
  }
  if (activePerson.id === playerId) {
    showToast("Senza esagerare", "Non puoi reagire ai tuoi stessi punteggi.", "warning");
    return;
  }
  if (!state.games.reactions) state.games.reactions = {};
  if (!state.games.reactions[playerId]) state.games.reactions[playerId] = {};
  const list = state.games.reactions[playerId][emoji] || [];
  const idx = list.indexOf(activePerson.id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(activePerson.id);
  }
  if (list.length === 0) {
    delete state.games.reactions[playerId][emoji];
    if (Object.keys(state.games.reactions[playerId]).length === 0) {
      delete state.games.reactions[playerId];
    }
  } else {
    state.games.reactions[playerId][emoji] = list;
  }
  scheduleSave();
  renderGamesLeaderboard();
  // Notify only when adding
  if (idx < 0) {
    const target = personById(playerId);
    if (target) {
      notifyOthers(
        `${emoji} nuova reazione`,
        `${activePerson.name} ti ha reagito ${emoji} sulla classifica!`,
        "reaction",
        "/#giochi"
      );
    }
  }
}

function getReactionStatsForPlayer(playerId) {
  const raw = state.games.reactionFlame?.statsByPlayer?.[playerId];
  return {
    best: Number(raw?.best) || 0,        // ms, 0 = not played
    plays: Number(raw?.plays) || 0,
    falseStarts: Number(raw?.falseStarts) || 0,
  };
}

function getMemoryStatsForPlayer(playerId) {
  const raw = state.games.memoryFlame?.statsByPlayer?.[playerId];
  return {
    best: Number(raw?.best) || 0,        // longest sequence
    plays: Number(raw?.plays) || 0,
  };
}

// ── Reazione Brace ──
function updateReactionUi() {
  const pad = document.getElementById("reactionPad");
  const text = document.getElementById("reactionPadText");
  const time = document.getElementById("reactionPadTime");
  const status = document.getElementById("reactionStatus");
  if (!pad || !text || !time || !status) return;

  pad.dataset.phase = reactionGame.phase;
  const activePerson = getActiveParticipant();
  const stats = activePerson ? getReactionStatsForPlayer(activePerson.id) : null;
  const bestLabel = stats && stats.best > 0 ? `Miglior tempo: ${stats.best} ms` : "Ancora nessun record";

  switch (reactionGame.phase) {
    case "idle":
      text.textContent = "Tocca per iniziare";
      time.textContent = "";
      status.textContent = activePerson ? `${bestLabel}. Metti a fuoco il pollice.` : "Seleziona un profilo per tenere traccia del record.";
      break;
    case "waiting":
      text.textContent = "Aspetta…";
      time.textContent = "";
      status.textContent = "Non toccare ancora. Concentrati sul colore.";
      break;
    case "ready":
      text.textContent = "TOCCA!";
      time.textContent = "";
      status.textContent = "Vai, vai, vai!";
      break;
    case "done":
      if (reactionGame.lastResult === "false-start") {
        text.textContent = "Troppo presto!";
        time.textContent = "Falso start";
        status.textContent = `Hai toccato prima del verde. Tocca ancora per ritentare. ${bestLabel}.`;
      } else {
        text.textContent = "Tocca per riprovare";
        time.textContent = `${reactionGame.reactionMs} ms`;
        const tag = reactionGame.reactionMs < 220 ? "Fulmine" : reactionGame.reactionMs < 300 ? "Ottimo riflesso" : reactionGame.reactionMs < 400 ? "Buon tempo" : "Migliorabile";
        status.textContent = `${tag}. ${bestLabel}.`;
      }
      break;
  }
}

function handleReactionTap() {
  const activePerson = requireActiveParticipant("giocare a Reazione Brace");
  if (!activePerson) return;

  const phase = reactionGame.phase;
  if (phase === "idle" || phase === "done") {
    // Start a new round
    reactionGame.phase = "waiting";
    reactionGame.lastResult = null;
    updateReactionUi();
    const wait = 1200 + Math.random() * 3200;
    if (reactionGame.timeoutId) clearTimeout(reactionGame.timeoutId);
    reactionGame.timeoutId = setTimeout(() => {
      reactionGame.phase = "ready";
      reactionGame.startTime = performance.now();
      updateReactionUi();
    }, wait);
  } else if (phase === "waiting") {
    // False start
    if (reactionGame.timeoutId) clearTimeout(reactionGame.timeoutId);
    reactionGame.timeoutId = null;
    reactionGame.phase = "done";
    reactionGame.lastResult = "false-start";
    updateReactionUi();
    const stats = state.games.reactionFlame.statsByPlayer[activePerson.id] || { best: 0, plays: 0, falseStarts: 0 };
    stats.falseStarts = (stats.falseStarts || 0) + 1;
    state.games.reactionFlame.statsByPlayer[activePerson.id] = stats;
    scheduleSave();
    showToast("Falso start", `${activePerson.name}, calma. Hai anticipato il verde.`, "warning");
  } else if (phase === "ready") {
    const ms = Math.round(performance.now() - reactionGame.startTime);
    reactionGame.reactionMs = ms;
    reactionGame.phase = "done";
    reactionGame.lastResult = "ok";
    const stats = state.games.reactionFlame.statsByPlayer[activePerson.id] || { best: 0, plays: 0, falseStarts: 0 };
    stats.plays = (stats.plays || 0) + 1;
    const isRecord = !stats.best || ms < stats.best;
    if (isRecord) stats.best = ms;
    state.games.reactionFlame.statsByPlayer[activePerson.id] = stats;
    scheduleSave();
    updateReactionUi();
    renderGamesLeaderboard();
    if (isRecord) {
      spawnConfetti();
      showToast("Nuovo record", `${activePerson.name}: ${ms} ms. Reazione di un puma affamato.`, "good");
    } else {
      showToast("Reazione Brace", `${activePerson.name}: ${ms} ms. Il tuo record è ${stats.best} ms.`, "good");
    }
  }
}

// ── Memoria Brace ──
const MEMORY_TILE_COUNT = 4;

function clearMemoryTimeouts() {
  for (const id of memoryGame.timeoutIds) clearTimeout(id);
  memoryGame.timeoutIds = [];
}

function updateMemoryUi() {
  const status = document.getElementById("memoryStatus");
  const btn = document.getElementById("memoryStartBtn");
  const grid = document.getElementById("memoryGrid");
  if (!status || !btn || !grid) return;

  grid.dataset.phase = memoryGame.phase;
  const activePerson = getActiveParticipant();
  const stats = activePerson ? getMemoryStatsForPlayer(activePerson.id) : null;
  const bestLabel = stats && stats.best > 0 ? `Record: sequenza di ${stats.best}` : "Ancora nessun record";

  switch (memoryGame.phase) {
    case "idle":
      btn.textContent = "Inizia sequenza";
      btn.disabled = false;
      status.textContent = activePerson ? `${bestLabel}. Pronto a memorizzare?` : "Seleziona un profilo per tenere traccia del record.";
      break;
    case "showing":
      btn.textContent = "Guarda la sequenza";
      btn.disabled = true;
      status.textContent = `Guarda bene: sequenza di ${memoryGame.sequence.length}.`;
      break;
    case "input":
      btn.textContent = "Ripeti la sequenza";
      btn.disabled = true;
      status.textContent = `Tocco ${memoryGame.userInput.length + 1} di ${memoryGame.sequence.length}. Vai.`;
      break;
    case "failed":
      btn.textContent = "Riprova";
      btn.disabled = false;
      status.textContent = `Sequenza rotta al colpo ${memoryGame.userInput.length}. ${bestLabel}.`;
      break;
    case "success":
      btn.textContent = "Continua (+1 passo)";
      btn.disabled = false;
      status.textContent = `Hai superato ${memoryGame.sequence.length}. ${bestLabel}.`;
      break;
  }
}

function lightMemoryTile(index, duration = 450) {
  const tile = document.querySelector(`.memory-tile[data-tile="${index}"]`);
  if (!tile) return;
  tile.classList.add("lit");
  setTimeout(() => tile.classList.remove("lit"), duration);
}

function showMemorySequence() {
  clearMemoryTimeouts();
  memoryGame.phase = "showing";
  updateMemoryUi();
  const stepMs = Math.max(360, 700 - memoryGame.sequence.length * 20);
  memoryGame.sequence.forEach((tile, i) => {
    const id = setTimeout(() => lightMemoryTile(tile, stepMs - 120), i * stepMs + 300);
    memoryGame.timeoutIds.push(id);
  });
  const endId = setTimeout(() => {
    memoryGame.phase = "input";
    memoryGame.userInput = [];
    updateMemoryUi();
  }, memoryGame.sequence.length * stepMs + 400);
  memoryGame.timeoutIds.push(endId);
}

function startMemoryGame() {
  const activePerson = requireActiveParticipant("giocare a Memoria Brace");
  if (!activePerson) return;
  clearMemoryTimeouts();
  // If resuming from success, keep sequence and add one more; else start fresh
  if (memoryGame.phase === "success") {
    memoryGame.sequence.push(Math.floor(Math.random() * MEMORY_TILE_COUNT));
  } else {
    memoryGame.sequence = [Math.floor(Math.random() * MEMORY_TILE_COUNT)];
  }
  memoryGame.userInput = [];
  showMemorySequence();
}

function handleMemoryTile(index) {
  if (memoryGame.phase !== "input") return;
  const activePerson = getActiveParticipant();
  if (!activePerson) return;

  lightMemoryTile(index, 240);
  memoryGame.userInput.push(index);
  const i = memoryGame.userInput.length - 1;
  if (memoryGame.userInput[i] !== memoryGame.sequence[i]) {
    // Failed
    memoryGame.phase = "failed";
    const reached = memoryGame.sequence.length - 1;
    const stats = state.games.memoryFlame.statsByPlayer[activePerson.id] || { best: 0, plays: 0 };
    stats.plays = (stats.plays || 0) + 1;
    const isRecord = reached > (stats.best || 0);
    if (isRecord) stats.best = reached;
    state.games.memoryFlame.statsByPlayer[activePerson.id] = stats;
    scheduleSave();
    updateMemoryUi();
    renderGamesLeaderboard();
    document.getElementById("memoryGrid")?.classList.add("fail-flash");
    setTimeout(() => document.getElementById("memoryGrid")?.classList.remove("fail-flash"), 500);
    if (isRecord && reached > 0) {
      spawnConfetti();
      showToast("Nuovo record", `${activePerson.name} è arrivato/a a ${reached}. Memoria da lepre.`, "good");
    } else {
      showToast("Memoria Brace", `${activePerson.name} si ferma a ${reached}.`, "warning");
    }
  } else if (memoryGame.userInput.length === memoryGame.sequence.length) {
    // Round complete — record this depth and auto-continue
    const depth = memoryGame.sequence.length;
    const stats = state.games.memoryFlame.statsByPlayer[activePerson.id] || { best: 0, plays: 0 };
    const isRecord = depth > (stats.best || 0);
    if (isRecord) stats.best = depth;
    state.games.memoryFlame.statsByPlayer[activePerson.id] = stats;
    scheduleSave();
    memoryGame.phase = "success";
    updateMemoryUi();
    renderGamesLeaderboard();
    if (isRecord) {
      spawnConfetti();
      showToast("Nuovo record", `${activePerson.name}: sequenza di ${depth}. Testa limpida.`, "good");
    }
    // Auto-advance to next round after a short pause
    const advId = setTimeout(() => {
      if (memoryGame.phase === "success") {
        memoryGame.sequence.push(Math.floor(Math.random() * MEMORY_TILE_COUNT));
        memoryGame.userInput = [];
        showMemorySequence();
      }
    }, 900);
    memoryGame.timeoutIds.push(advId);
  } else {
    updateMemoryUi();
  }
}

// ── Braci in Fuga (Tap Fire) ──
const TAPFIRE_DURATION_SECONDS = 15;

function getTapFireStatsForPlayer(playerId) {
  const raw = state.games.tapFire?.statsByPlayer?.[playerId];
  return {
    best: Number(raw?.best) || 0,
    plays: Number(raw?.plays) || 0,
  };
}

function updateTapFireUi() {
  const grid = document.getElementById("tapFireGrid");
  const btn = document.getElementById("tapFireStartBtn");
  const status = document.getElementById("tapFireStatus");
  if (!grid || !btn || !status) return;

  grid.dataset.state = tapFireGame.phase;
  setText("tapFireScore", String(tapFireGame.score));
  setText("tapFireTimer", String(Math.max(0, tapFireGame.timeLeft)));
  btn.disabled = tapFireGame.phase === "playing";
  btn.textContent = tapFireGame.phase === "playing" ? "In corso…" : "Accendi la brace";

  // highlight active cell
  grid.querySelectorAll(".tapfire-cell").forEach(cell => {
    const idx = Number(cell.dataset.cell);
    cell.classList.toggle("lit", idx === tapFireGame.activeCell && tapFireGame.phase === "playing");
  });

  const activePerson = getActiveParticipant();
  const stats = activePerson ? getTapFireStatsForPlayer(activePerson.id) : null;
  const bestLabel = stats && stats.best > 0 ? `Record: ${stats.best}` : "Ancora nessun record";
  if (tapFireGame.phase === "idle") {
    status.textContent = activePerson ? `${bestLabel}. ${TAPFIRE_DURATION_SECONDS}s a tua disposizione.` : "Seleziona un profilo per salvare il record.";
  } else if (tapFireGame.phase === "playing") {
    status.textContent = `Dai gas! Punti ${tapFireGame.score} · ${tapFireGame.timeLeft}s rimasti.`;
  } else {
    status.textContent = `Fine: ${tapFireGame.score} punti. ${bestLabel}.`;
  }
}

function moveTapFireFlame() {
  // pick a new random cell different from the current one
  let next = tapFireGame.activeCell;
  while (next === tapFireGame.activeCell) {
    next = Math.floor(Math.random() * 9);
  }
  tapFireGame.activeCell = next;
  updateTapFireUi();
}

function clearTapFireTimers() {
  if (tapFireGame.tickIntervalId) clearInterval(tapFireGame.tickIntervalId);
  if (tapFireGame.flameIntervalId) clearInterval(tapFireGame.flameIntervalId);
  if (tapFireGame.endTimeoutId) clearTimeout(tapFireGame.endTimeoutId);
  tapFireGame.tickIntervalId = null;
  tapFireGame.flameIntervalId = null;
  tapFireGame.endTimeoutId = null;
}

function startTapFire() {
  const activePerson = requireActiveParticipant("giocare a Braci in Fuga");
  if (!activePerson || tapFireGame.phase === "playing") return;
  clearTapFireTimers();
  tapFireGame.phase = "playing";
  tapFireGame.score = 0;
  tapFireGame.timeLeft = TAPFIRE_DURATION_SECONDS;
  tapFireGame.activeCell = Math.floor(Math.random() * 9);
  tapFireGame.startedAt = Date.now();
  updateTapFireUi();

  tapFireGame.tickIntervalId = setInterval(() => {
    tapFireGame.timeLeft = Math.max(0, Math.ceil((tapFireGame.startedAt + TAPFIRE_DURATION_SECONDS * 1000 - Date.now()) / 1000));
    updateTapFireUi();
  }, 200);
  // Flame jumps on its own every ~900ms to prevent sitting and waiting
  tapFireGame.flameIntervalId = setInterval(() => moveTapFireFlame(), 900);
  tapFireGame.endTimeoutId = setTimeout(() => finishTapFire(), TAPFIRE_DURATION_SECONDS * 1000);
}

function handleTapFireCell(index) {
  if (tapFireGame.phase !== "playing") return;
  if (index === tapFireGame.activeCell) {
    tapFireGame.score += 1;
    moveTapFireFlame();
  } else {
    tapFireGame.score = Math.max(0, tapFireGame.score - 1);
    updateTapFireUi();
  }
}

function finishTapFire() {
  if (tapFireGame.phase !== "playing") return;
  clearTapFireTimers();
  tapFireGame.phase = "done";
  tapFireGame.activeCell = -1;
  tapFireGame.timeLeft = 0;
  const activePerson = getActiveParticipant();
  if (activePerson) {
    const stats = state.games.tapFire.statsByPlayer[activePerson.id] || { best: 0, plays: 0 };
    stats.plays = (stats.plays || 0) + 1;
    const isRecord = tapFireGame.score > (stats.best || 0);
    if (isRecord) stats.best = tapFireGame.score;
    state.games.tapFire.statsByPlayer[activePerson.id] = stats;
    scheduleSave();
    if (isRecord && tapFireGame.score > 0) {
      spawnConfetti();
      showToast("Nuovo record", `${activePerson.name}: ${tapFireGame.score} punti a Braci in Fuga.`, "good");
    } else {
      showToast("Braci in Fuga", `${activePerson.name}: ${tapFireGame.score} punti. Record ${stats.best}.`, "good");
    }
    renderGamesLeaderboard();
  }
  updateTapFireUi();
}

// ═════════════════════════════════════════════════════════════════════
// ── ARCADE GAMES ──────────────────────────────────────────────────────
// ═════════════════════════════════════════════════════════════════════

// Swipe-gesture helper. Attaches to an element and calls onSwipe(direction)
// with "up" / "down" / "left" / "right". Threshold in px.
function addSwipeHandler(el, onSwipe, { threshold = 24, preventScroll = false } = {}) {
  if (!el) return;
  let startX = 0, startY = 0, startT = 0, active = false;
  el.addEventListener("pointerdown", (e) => {
    active = true;
    startX = e.clientX;
    startY = e.clientY;
    startT = performance.now();
  });
  el.addEventListener("pointermove", (e) => {
    if (!active || !preventScroll) return;
    if (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10) {
      e.preventDefault();
    }
  }, { passive: !preventScroll });
  el.addEventListener("pointerup", (e) => {
    if (!active) return;
    active = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const dt = performance.now() - startT;
    if (dt > 700) return; // too slow = not a swipe
    const adx = Math.abs(dx), ady = Math.abs(dy);
    if (Math.max(adx, ady) < threshold) return;
    if (adx > ady) onSwipe(dx > 0 ? "right" : "left");
    else onSwipe(dy > 0 ? "down" : "up");
  });
  el.addEventListener("pointercancel", () => { active = false; });
  el.addEventListener("pointerleave", () => { active = false; });
}

// ── Salsiccia Jump (2D runner) ──
const sjumpGame = {
  phase: "idle", score: 0, playerY: 0, playerVy: 0, obstacles: [],
  lastFrame: 0, speed: 3, spawnCooldown: 0, rafId: null,
};

function startSausageJump() {
  const p = requireActiveParticipant("giocare a Salsiccia Jump");
  if (!p || sjumpGame.phase === "playing") return;
  sjumpGame.phase = "playing";
  sjumpGame.score = 0;
  sjumpGame.playerY = 0;
  sjumpGame.playerVy = 0;
  sjumpGame.obstacles = [];
  sjumpGame.speed = 3;
  sjumpGame.spawnCooldown = 800;
  sjumpGame.lastFrame = 0;
  setText("sjumpStatus", "Tocca per saltare! ⏵");
  document.getElementById("sjumpStartBtn").disabled = true;
  document.getElementById("sjumpStartBtn").textContent = "In corso…";
  sjumpLoop();
}

function sjumpJump() {
  if (sjumpGame.phase !== "playing") return;
  if (sjumpGame.playerY <= 0.1) sjumpGame.playerVy = -14;
}

function sjumpLoop(ts) {
  if (sjumpGame.phase !== "playing") return;
  if (!ts) ts = performance.now();
  const dt = sjumpGame.lastFrame ? Math.min(32, ts - sjumpGame.lastFrame) : 16;
  sjumpGame.lastFrame = ts;
  const stepF = dt / 16;
  // Physics
  sjumpGame.playerVy += 0.9 * stepF;
  sjumpGame.playerY += sjumpGame.playerVy * stepF;
  if (sjumpGame.playerY > 0) { sjumpGame.playerY = 0; sjumpGame.playerVy = 0; }
  // Move + spawn obstacles
  for (const o of sjumpGame.obstacles) o.x -= sjumpGame.speed * stepF;
  sjumpGame.spawnCooldown -= dt;
  if (sjumpGame.spawnCooldown <= 0) {
    sjumpGame.obstacles.push({ x: 300, passed: false });
    sjumpGame.spawnCooldown = Math.max(650, 1200 + Math.random() * 500 - sjumpGame.score * 15);
  }
  // Score & cleanup
  sjumpGame.obstacles = sjumpGame.obstacles.filter(o => {
    if (o.x < -30) { if (!o.passed) sjumpGame.score += 1; return false; }
    return true;
  });
  // Collision: player at x=28..54, obstacle at x..x+22
  for (const o of sjumpGame.obstacles) {
    if (o.x < 58 && o.x > 10 && sjumpGame.playerY > -28) {
      return endSausageJump();
    }
  }
  sjumpGame.speed = 3 + Math.min(4, sjumpGame.score * 0.1);
  sjumpRender();
  sjumpGame.rafId = requestAnimationFrame(sjumpLoop);
}

function sjumpRender() {
  const player = document.getElementById("sjumpPlayer");
  if (player) player.style.transform = `translateY(${sjumpGame.playerY}px)`;
  setText("sjumpScore", String(sjumpGame.score));
  const obsEl = document.getElementById("sjumpObstacles");
  if (obsEl) {
    obsEl.innerHTML = sjumpGame.obstacles.map(o =>
      `<div class="sjump-flame" style="left:${o.x}px">🔥</div>`).join("");
  }
}

function endSausageJump() {
  if (sjumpGame.rafId) cancelAnimationFrame(sjumpGame.rafId);
  sjumpGame.rafId = null;
  sjumpGame.phase = "done";
  document.getElementById("sjumpStartBtn").disabled = false;
  document.getElementById("sjumpStartBtn").textContent = "Rigioca";
  setText("sjumpStatus", `Fine: ${sjumpGame.score} salti.`);
  recordSimpleGameScore("sausageJump", sjumpGame.score);
}

// ── Brace Catcher ──
const catcherGame = {
  phase: "idle", score: 0, playerX: 50, items: [], lastFrame: 0,
  rafId: null, endAt: 0, spawnCooldown: 0,
};

function startBraceCatcher() {
  const p = requireActiveParticipant("giocare a Brace Catcher");
  if (!p || catcherGame.phase === "playing") return;
  catcherGame.phase = "playing";
  catcherGame.score = 0;
  catcherGame.playerX = 50;
  catcherGame.items = [];
  catcherGame.lastFrame = 0;
  catcherGame.endAt = performance.now() + 30000;
  catcherGame.spawnCooldown = 600;
  document.getElementById("catcherStartBtn").disabled = true;
  document.getElementById("catcherStartBtn").textContent = "In corso…";
  setText("catcherStatus", "Para tutto quello che riesci!");
  catcherLoop();
}

function catcherHandleStageTap(ev) {
  if (catcherGame.phase !== "playing") return;
  const stage = document.getElementById("catcherStage");
  if (!stage) return;
  const rect = stage.getBoundingClientRect();
  const x = ev.clientX - rect.left;
  const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
  catcherGame.playerX = pct;
}

function catcherLoop(ts) {
  if (catcherGame.phase !== "playing") return;
  if (!ts) ts = performance.now();
  const dt = catcherGame.lastFrame ? Math.min(40, ts - catcherGame.lastFrame) : 16;
  catcherGame.lastFrame = ts;
  const stepF = dt / 16;
  if (ts >= catcherGame.endAt) return endBraceCatcher();
  // Move items
  for (const it of catcherGame.items) it.y += it.vy * stepF;
  catcherGame.spawnCooldown -= dt;
  if (catcherGame.spawnCooldown <= 0) {
    catcherGame.items.push({
      x: 8 + Math.random() * 84,
      y: -10,
      vy: 3 + Math.random() * 3 + catcherGame.score * 0.1,
      emoji: ["🥩", "🌽", "🍖", "🌶️", "🍺"][Math.floor(Math.random() * 5)],
    });
    catcherGame.spawnCooldown = Math.max(300, 900 - catcherGame.score * 20);
  }
  // Check catches
  catcherGame.items = catcherGame.items.filter(it => {
    if (it.y >= 88 && Math.abs(it.x - catcherGame.playerX) < 10) {
      catcherGame.score += 1; return false;
    }
    if (it.y > 110) return false;
    return true;
  });
  // Render
  const p = document.getElementById("catcherPlayer");
  if (p) p.style.left = catcherGame.playerX + "%";
  const items = document.getElementById("catcherItems");
  if (items) {
    items.innerHTML = catcherGame.items.map(it =>
      `<div class="catcher-item" style="left:${it.x}%;top:${it.y}%">${it.emoji}</div>`).join("");
  }
  setText("catcherScore", String(catcherGame.score));
  setText("catcherTimer", String(Math.max(0, Math.ceil((catcherGame.endAt - ts) / 1000))));
  catcherGame.rafId = requestAnimationFrame(catcherLoop);
}

function endBraceCatcher() {
  if (catcherGame.rafId) cancelAnimationFrame(catcherGame.rafId);
  catcherGame.rafId = null;
  catcherGame.phase = "done";
  document.getElementById("catcherStartBtn").disabled = false;
  document.getElementById("catcherStartBtn").textContent = "Rigioca";
  setText("catcherStatus", `Fine: hai preso ${catcherGame.score} pezzi.`);
  recordSimpleGameScore("braceCatcher", catcherGame.score);
}

// ── Serpente alla Brace (Snake) ──
const SNAKE_SIZE = 12;
const snakeGame = {
  phase: "idle", snake: [], dir: "right", nextDir: "right",
  food: { x: 6, y: 6 }, score: 1, tickId: null,
};

function startSausageSnake() {
  const p = requireActiveParticipant("giocare a Serpente alla Brace");
  if (!p || snakeGame.phase === "playing") return;
  snakeGame.phase = "playing";
  snakeGame.snake = [{ x: 6, y: 6 }];
  snakeGame.dir = "right";
  snakeGame.nextDir = "right";
  snakeGame.food = snakeRandomCell();
  snakeGame.score = 1;
  document.getElementById("snakeStartBtn").disabled = true;
  document.getElementById("snakeStartBtn").textContent = "In corso…";
  setText("snakeStatus", "Muoviti con i pulsanti.");
  if (snakeGame.tickId) clearInterval(snakeGame.tickId);
  snakeGame.tickId = setInterval(snakeTick, 220);
  snakeRender();
}

function snakeRandomCell() {
  while (true) {
    const c = { x: Math.floor(Math.random() * SNAKE_SIZE), y: Math.floor(Math.random() * SNAKE_SIZE) };
    if (!snakeGame.snake.some(s => s.x === c.x && s.y === c.y)) return c;
  }
}

function snakeSetDir(d) {
  if (snakeGame.phase !== "playing") return;
  const opposite = { up: "down", down: "up", left: "right", right: "left" };
  if (opposite[d] === snakeGame.dir) return;
  snakeGame.nextDir = d;
}

function snakeTick() {
  if (snakeGame.phase !== "playing") return;
  snakeGame.dir = snakeGame.nextDir;
  const head = snakeGame.snake[0];
  const delta = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[snakeGame.dir];
  const nx = head.x + delta[0], ny = head.y + delta[1];
  if (nx < 0 || ny < 0 || nx >= SNAKE_SIZE || ny >= SNAKE_SIZE) return endSausageSnake();
  if (snakeGame.snake.some(s => s.x === nx && s.y === ny)) return endSausageSnake();
  snakeGame.snake.unshift({ x: nx, y: ny });
  if (nx === snakeGame.food.x && ny === snakeGame.food.y) {
    snakeGame.score = snakeGame.snake.length;
    snakeGame.food = snakeRandomCell();
  } else {
    snakeGame.snake.pop();
  }
  snakeRender();
}

function snakeRender() {
  const grid = document.getElementById("snakeGrid");
  if (!grid) return;
  let html = "";
  for (let y = 0; y < SNAKE_SIZE; y++) {
    for (let x = 0; x < SNAKE_SIZE; x++) {
      const isHead = snakeGame.snake[0]?.x === x && snakeGame.snake[0]?.y === y;
      const isBody = snakeGame.snake.some((s, i) => i > 0 && s.x === x && s.y === y);
      const isFood = snakeGame.food.x === x && snakeGame.food.y === y;
      html += `<div class="snake-cell${isHead ? " head" : isBody ? " body" : isFood ? " food" : ""}">${isHead ? "🐍" : isFood ? "🔥" : ""}</div>`;
    }
  }
  grid.innerHTML = html;
  setText("snakeScore", String(snakeGame.score));
}

function endSausageSnake() {
  if (snakeGame.tickId) clearInterval(snakeGame.tickId);
  snakeGame.tickId = null;
  snakeGame.phase = "done";
  document.getElementById("snakeStartBtn").disabled = false;
  document.getElementById("snakeStartBtn").textContent = "Rigioca";
  setText("snakeStatus", `Fine: lunghezza ${snakeGame.score}.`);
  recordSimpleGameScore("sausageSnake", snakeGame.score);
}

// ── Spiedino Stack ──
const stackGame = {
  phase: "idle", score: 0, towerW: 0, towerLeft: 0,
  curX: 0, curW: 0, dir: 1, rafId: null, stepMs: 16,
};

function startSkewerStack() {
  const p = requireActiveParticipant("giocare a Spiedino Stack");
  if (!p || stackGame.phase === "playing") return;
  stackGame.phase = "playing";
  stackGame.score = 0;
  stackGame.towerW = 60; // percent
  stackGame.towerLeft = 20;
  stackGame.curW = 60;
  stackGame.curX = 0;
  stackGame.dir = 1;
  document.getElementById("stackStartBtn").disabled = true;
  document.getElementById("stackStartBtn").textContent = "In corso…";
  setText("stackStatus", "Tocca al momento giusto!");
  const tower = document.getElementById("stackTower");
  if (tower) tower.innerHTML = "";
  stackLoop();
}

function stackLoop() {
  if (stackGame.phase !== "playing") return;
  const maxX = 100 - stackGame.curW;
  stackGame.curX += stackGame.dir * (1.2 + stackGame.score * 0.08);
  if (stackGame.curX >= maxX) { stackGame.curX = maxX; stackGame.dir = -1; }
  if (stackGame.curX <= 0) { stackGame.curX = 0; stackGame.dir = 1; }
  const el = document.getElementById("stackCurrent");
  if (el) {
    el.style.width = stackGame.curW + "%";
    el.style.left = stackGame.curX + "%";
  }
  stackGame.rafId = requestAnimationFrame(stackLoop);
}

function stackDropBlock() {
  if (stackGame.phase !== "playing") return;
  // Compute overlap with tower
  const curLeft = stackGame.curX;
  const curRight = curLeft + stackGame.curW;
  const twLeft = stackGame.towerLeft;
  const twRight = twLeft + stackGame.towerW;
  const overlapLeft = Math.max(curLeft, twLeft);
  const overlapRight = Math.min(curRight, twRight);
  const overlap = overlapRight - overlapLeft;
  if (overlap <= 0.5) return endSkewerStack();
  stackGame.score += 1;
  stackGame.towerLeft = overlapLeft;
  stackGame.towerW = overlap;
  stackGame.curW = overlap;
  stackGame.curX = 0;
  stackGame.dir = 1;
  // Add stacked visual
  const tower = document.getElementById("stackTower");
  if (tower) {
    const block = document.createElement("div");
    block.className = "stack-block";
    block.style.left = stackGame.towerLeft + "%";
    block.style.width = stackGame.towerW + "%";
    block.style.bottom = (stackGame.score * 14) + "px";
    block.textContent = ["🥩", "🌽", "🍖", "🌶️", "🧀"][stackGame.score % 5];
    tower.appendChild(block);
  }
  setText("stackScore", String(stackGame.score));
  if (stackGame.towerW < 4) endSkewerStack();
}

function endSkewerStack() {
  if (stackGame.rafId) cancelAnimationFrame(stackGame.rafId);
  stackGame.rafId = null;
  stackGame.phase = "done";
  document.getElementById("stackStartBtn").disabled = false;
  document.getElementById("stackStartBtn").textContent = "Rigioca";
  setText("stackStatus", `Altezza finale: ${stackGame.score}.`);
  recordSimpleGameScore("skewerStack", stackGame.score);
}

// ── Scotti la Carne (whack) ──
const whackGame = {
  phase: "idle", score: 0, active: -1, endAt: 0, rafId: null, nextSpawnAt: 0, hideAt: 0,
};

function startWhackBurger() {
  const p = requireActiveParticipant("giocare a Scotti la Carne");
  if (!p || whackGame.phase === "playing") return;
  whackGame.phase = "playing";
  whackGame.score = 0;
  whackGame.active = -1;
  whackGame.endAt = performance.now() + 20000;
  whackGame.nextSpawnAt = 0;
  document.getElementById("whackStartBtn").disabled = true;
  document.getElementById("whackStartBtn").textContent = "In corso…";
  setText("whackStatus", "Colpisci tutto!");
  whackLoop();
}

function whackLoop(ts) {
  if (whackGame.phase !== "playing") return;
  if (!ts) ts = performance.now();
  if (ts >= whackGame.endAt) return endWhackBurger();
  if (ts >= whackGame.nextSpawnAt && whackGame.active < 0) {
    whackGame.active = Math.floor(Math.random() * 9);
    whackGame.hideAt = ts + Math.max(500, 1100 - whackGame.score * 20);
    whackRender();
  }
  if (whackGame.active >= 0 && ts >= whackGame.hideAt) {
    whackGame.active = -1;
    whackGame.nextSpawnAt = ts + 250 + Math.random() * 400;
    whackRender();
  }
  setText("whackTimer", String(Math.max(0, Math.ceil((whackGame.endAt - ts) / 1000))));
  whackGame.rafId = requestAnimationFrame(whackLoop);
}

function whackRender() {
  const grid = document.getElementById("whackGrid");
  if (!grid) return;
  grid.querySelectorAll(".whack-cell").forEach(c => {
    const idx = Number(c.dataset.cell);
    c.classList.toggle("pop", idx === whackGame.active);
    c.textContent = idx === whackGame.active ? "🍔" : "";
  });
  setText("whackScore", String(whackGame.score));
}

function whackHit(idx) {
  if (whackGame.phase !== "playing") return;
  if (idx === whackGame.active) {
    whackGame.score += 1;
    whackGame.active = -1;
    whackGame.nextSpawnAt = performance.now() + 200 + Math.random() * 300;
    whackRender();
  } else {
    whackGame.score = Math.max(0, whackGame.score - 1);
    whackRender();
  }
}

function endWhackBurger() {
  if (whackGame.rafId) cancelAnimationFrame(whackGame.rafId);
  whackGame.rafId = null;
  whackGame.phase = "done";
  whackGame.active = -1;
  whackRender();
  document.getElementById("whackStartBtn").disabled = false;
  document.getElementById("whackStartBtn").textContent = "Rigioca";
  setText("whackStatus", `Fine: ${whackGame.score} centrati.`);
  recordSimpleGameScore("whackBurger", whackGame.score);
}

// ── Pinza d'Oro (multi-round precision) ──
const tongGame = {
  phase: "idle", round: 0, score: 0, pos: 0, dir: 1, rafId: null, locked: false,
};

function startTongPrecision() {
  const p = requireActiveParticipant("giocare a Pinza d'Oro");
  if (!p || tongGame.phase === "playing") return;
  tongGame.phase = "playing";
  tongGame.round = 0;
  tongGame.score = 0;
  tongGame.locked = false;
  setText("tongStatus", "Ferma al centro!");
  document.getElementById("tongStartBtn").disabled = true;
  tongStartRound();
}

function tongStartRound() {
  tongGame.round += 1;
  tongGame.locked = false;
  tongGame.pos = 5;
  tongGame.dir = 1;
  document.getElementById("tongLockBtn").disabled = false;
  setText("tongRound", String(tongGame.round));
  if (tongGame.rafId) cancelAnimationFrame(tongGame.rafId);
  tongLoop();
}

function tongLoop() {
  if (tongGame.phase !== "playing" || tongGame.locked) return;
  const speed = 0.9 + tongGame.round * 0.25;
  tongGame.pos += tongGame.dir * speed;
  if (tongGame.pos >= 95) { tongGame.pos = 95; tongGame.dir = -1; }
  if (tongGame.pos <= 5) { tongGame.pos = 5; tongGame.dir = 1; }
  const cur = document.getElementById("tongCursor");
  if (cur) cur.style.left = tongGame.pos + "%";
  tongGame.rafId = requestAnimationFrame(tongLoop);
}

function tongLock() {
  if (tongGame.phase !== "playing" || tongGame.locked) return;
  tongGame.locked = true;
  document.getElementById("tongLockBtn").disabled = true;
  const distance = Math.abs(tongGame.pos - 50);
  const points = Math.max(0, Math.round(20 - distance));
  tongGame.score += points;
  setText("tongScore", String(tongGame.score));
  if (tongGame.round >= 5) return endTongPrecision();
  setTimeout(tongStartRound, 700);
}

function endTongPrecision() {
  tongGame.phase = "done";
  if (tongGame.rafId) cancelAnimationFrame(tongGame.rafId);
  tongGame.rafId = null;
  document.getElementById("tongStartBtn").disabled = false;
  document.getElementById("tongStartBtn").textContent = "Rigioca";
  document.getElementById("tongLockBtn").disabled = true;
  setText("tongStatus", `Totale: ${tongGame.score} su 100.`);
  recordSimpleGameScore("tongPrecision", tongGame.score);
}

// ── Marinatura Mixer (memory match) ──
const matchGame = {
  phase: "idle", cards: [], flipped: [], matched: 0, startAt: 0,
  total: 6, tickId: null,
};

function startMarinadeMatch() {
  const p = requireActiveParticipant("giocare a Marinatura Mixer");
  if (!p || matchGame.phase === "playing") return;
  const icons = ["🧂", "🍋", "🧄", "🌶️", "🫒", "🍷"];
  matchGame.cards = [...icons, ...icons]
    .map((icon, i) => ({ icon, id: i, revealed: false, matched: false }))
    .sort(() => Math.random() - 0.5);
  matchGame.flipped = [];
  matchGame.matched = 0;
  matchGame.total = icons.length;
  matchGame.phase = "playing";
  matchGame.startAt = performance.now();
  document.getElementById("matchStartBtn").disabled = true;
  document.getElementById("matchStartBtn").textContent = "In corso…";
  setText("matchStatus", "Trova tutte le coppie!");
  matchRender();
  if (matchGame.tickId) clearInterval(matchGame.tickId);
  matchGame.tickId = setInterval(() => {
    const elapsed = (performance.now() - matchGame.startAt) / 1000;
    setText("matchTimer", elapsed.toFixed(1).replace(".", ","));
  }, 100);
}

function matchRender() {
  const grid = document.getElementById("matchGrid");
  if (!grid) return;
  grid.innerHTML = matchGame.cards.map((c, i) =>
    `<button class="match-card ${c.matched ? "matched" : c.revealed ? "revealed" : ""}" type="button" onclick="matchFlip(${i})" ${c.matched || c.revealed ? "disabled" : ""}>${c.matched || c.revealed ? c.icon : "?"}</button>`
  ).join("");
  setText("matchPairs", `${matchGame.matched}/${matchGame.total}`);
}

function matchFlip(i) {
  if (matchGame.phase !== "playing") return;
  const card = matchGame.cards[i];
  if (card.matched || card.revealed) return;
  if (matchGame.flipped.length >= 2) return;
  card.revealed = true;
  matchGame.flipped.push(i);
  matchRender();
  if (matchGame.flipped.length === 2) {
    const [a, b] = matchGame.flipped;
    if (matchGame.cards[a].icon === matchGame.cards[b].icon) {
      matchGame.cards[a].matched = true;
      matchGame.cards[b].matched = true;
      matchGame.matched += 1;
      matchGame.flipped = [];
      matchRender();
      if (matchGame.matched === matchGame.total) endMarinadeMatch();
    } else {
      setTimeout(() => {
        matchGame.cards[a].revealed = false;
        matchGame.cards[b].revealed = false;
        matchGame.flipped = [];
        matchRender();
      }, 700);
    }
  }
}

function endMarinadeMatch() {
  matchGame.phase = "done";
  if (matchGame.tickId) clearInterval(matchGame.tickId);
  matchGame.tickId = null;
  const elapsedMs = Math.round(performance.now() - matchGame.startAt);
  document.getElementById("matchStartBtn").disabled = false;
  document.getElementById("matchStartBtn").textContent = "Rigioca";
  setText("matchStatus", `Fatto in ${(elapsedMs / 1000).toFixed(1)}s.`);
  recordSimpleGameScore("marinadeMatch", elapsedMs);
}

// ── Cottura a Puntino (hold timing) ──
const HOLD_MAX_SECONDS = 6;
const HOLD_ZONE_SECONDS = 0.2; // ± around target
const holdCookGame = {
  phase: "idle", target: 3.0, startAt: 0, rafId: null, heldMs: 0,
};

function startHoldTarget() {
  holdCookGame.target = +(2 + Math.random() * 2.5).toFixed(1);
  setText("holdTarget", holdCookGame.target.toFixed(1).replace(".", ","));
  const mark = document.getElementById("holdTargetMark");
  if (mark) mark.style.left = ((holdCookGame.target / HOLD_MAX_SECONDS) * 100) + "%";
  const zone = document.getElementById("holdTargetZone");
  if (zone) {
    const zoneLeft = ((holdCookGame.target - HOLD_ZONE_SECONDS) / HOLD_MAX_SECONDS) * 100;
    const zoneWidth = ((HOLD_ZONE_SECONDS * 2) / HOLD_MAX_SECONDS) * 100;
    zone.style.left = zoneLeft + "%";
    zone.style.width = zoneWidth + "%";
  }
  // Reset fill and label
  const fill = document.getElementById("holdFill");
  if (fill) { fill.style.width = "0%"; fill.classList.remove("in-zone", "over"); }
  setText("holdTimeLabel", "0,0s");
  setText("holdResult", "");
}

function holdStart() {
  const p = requireActiveParticipant("giocare a Cottura a Puntino");
  if (!p) return;
  if (holdCookGame.phase === "idle" || holdCookGame.phase === "done") {
    startHoldTarget();
  }
  holdCookGame.phase = "holding";
  holdCookGame.startAt = performance.now();
  holdCookGame.heldMs = 0;
  setText("holdStatus", "Premi fino al momento giusto...");
  document.getElementById("holdPad")?.classList.add("pressed");
  holdLoop();
}

function holdLoop() {
  if (holdCookGame.phase !== "holding") return;
  holdCookGame.heldMs = performance.now() - holdCookGame.startAt;
  const heldSec = holdCookGame.heldMs / 1000;
  const pct = Math.min(100, (heldSec / HOLD_MAX_SECONDS) * 100);
  const fill = document.getElementById("holdFill");
  if (fill) {
    fill.style.width = pct + "%";
    const diff = Math.abs(heldSec - holdCookGame.target);
    fill.classList.toggle("in-zone", diff <= HOLD_ZONE_SECONDS);
    fill.classList.toggle("over", heldSec > holdCookGame.target + HOLD_ZONE_SECONDS);
  }
  setText("holdTimeLabel", heldSec.toFixed(1).replace(".", ",") + "s");
  if (heldSec >= HOLD_MAX_SECONDS) return holdEnd(); // auto-stop at max
  holdCookGame.rafId = requestAnimationFrame(holdLoop);
}

function holdEnd() {
  if (holdCookGame.phase !== "holding") return;
  if (holdCookGame.rafId) cancelAnimationFrame(holdCookGame.rafId);
  holdCookGame.rafId = null;
  holdCookGame.phase = "done";
  document.getElementById("holdPad")?.classList.remove("pressed");
  const heldSec = holdCookGame.heldMs / 1000;
  const diff = Math.abs(heldSec - holdCookGame.target);
  const score = Math.max(0, Math.round(100 - diff * 50));
  let verdict = "Perfetto!", tone = "positive";
  if (diff > 0.05 && diff <= 0.2) { verdict = "Molto bene"; tone = "positive"; }
  else if (diff > 0.2 && diff <= 0.5) { verdict = "Ci sei quasi"; tone = "warning"; }
  else if (diff > 0.5) { verdict = "Ritenta"; tone = "negative"; }
  const resultEl = document.getElementById("holdResult");
  if (resultEl) {
    resultEl.innerHTML = `
      <div class="hold-result-top">
        <span class="hold-result-verdict tone-${tone}">${verdict}</span>
        <span class="hold-result-score">${score}<span class="hold-result-score-max">/100</span></span>
      </div>
      <div class="hold-result-meta">Hai tenuto ${heldSec.toFixed(2).replace(".", ",")}s · target ${holdCookGame.target.toFixed(1).replace(".", ",")}s · differenza ${diff.toFixed(2).replace(".", ",")}s</div>
    `;
  }
  setText("holdStatus", verdict);
  recordSimpleGameScore("holdCook", score);
}

// ── Calcola il Conto ──
const calcGame = {
  phase: "idle", round: 0, correct: 0, current: null, total: 10,
};

function startCalcCheck() {
  const p = requireActiveParticipant("giocare a Calcola il Conto");
  if (!p || calcGame.phase === "playing") return;
  calcGame.phase = "playing";
  calcGame.round = 0;
  calcGame.correct = 0;
  document.getElementById("calcStartBtn").disabled = true;
  document.getElementById("calcStartBtn").textContent = "In corso…";
  setText("calcStatus", "Il più veloce possibile!");
  calcNextQuestion();
}

function calcNextQuestion() {
  calcGame.round += 1;
  if (calcGame.round > calcGame.total) return endCalcCheck();
  // Generate a BBQ-themed expression
  const type = Math.floor(Math.random() * 3);
  let question, answer;
  if (type === 0) {
    const n = 2 + Math.floor(Math.random() * 6);
    const price = (2 + Math.floor(Math.random() * 8)) + 0.5 * (Math.random() < 0.5 ? 0 : 1);
    const items = ["birre", "panini", "hamburger", "spiedini", "salsicce"][Math.floor(Math.random() * 5)];
    question = `${n} ${items} × ${price.toFixed(2).replace(".", ",")} €`;
    answer = +(n * price).toFixed(2);
  } else if (type === 1) {
    const total = (20 + Math.floor(Math.random() * 80));
    const people = 2 + Math.floor(Math.random() * 6);
    question = `${total} € diviso ${people} persone`;
    answer = +(total / people).toFixed(2);
  } else {
    const a = 10 + Math.floor(Math.random() * 40);
    const b = 5 + Math.floor(Math.random() * 30);
    const c = 2 + Math.floor(Math.random() * 15);
    question = `${a} + ${b} - ${c} €`;
    answer = a + b - c;
  }
  // Make 4 options
  const options = new Set([answer]);
  while (options.size < 4) {
    const noise = (Math.random() - 0.5) * answer * 0.4;
    const v = +(answer + noise).toFixed(2);
    if (v !== answer && v > 0) options.add(v);
  }
  const shuffled = [...options].sort(() => Math.random() - 0.5);
  calcGame.current = { question, answer, options: shuffled };
  setText("calcQuestion", question);
  setText("calcRound", String(calcGame.round));
  const box = document.getElementById("calcOptions");
  if (box) box.innerHTML = shuffled.map(opt =>
    `<button class="calc-option" type="button" onclick="calcAnswer(${opt})">${opt.toFixed(2).replace(".", ",")} €</button>`).join("");
}

function calcAnswer(val) {
  if (calcGame.phase !== "playing" || !calcGame.current) return;
  if (Math.abs(val - calcGame.current.answer) < 0.01) {
    calcGame.correct += 1;
    setText("calcCorrect", String(calcGame.correct));
    showToast("✓", `Giusto: ${calcGame.current.answer.toFixed(2)} €`, "good");
  } else {
    showToast("✗", `Era ${calcGame.current.answer.toFixed(2).replace(".", ",")} €`, "warning");
  }
  calcNextQuestion();
}

function endCalcCheck() {
  calcGame.phase = "done";
  document.getElementById("calcStartBtn").disabled = false;
  document.getElementById("calcStartBtn").textContent = "Rigioca";
  setText("calcStatus", `Fine: ${calcGame.correct}/${calcGame.total} giuste.`);
  setText("calcQuestion", "—");
  const box = document.getElementById("calcOptions");
  if (box) box.innerHTML = "";
  recordSimpleGameScore("calcCheck", calcGame.correct);
}

// ── Conta le Salsicce ──
const countGame = {
  phase: "idle", round: 0, correct: 0, currentCount: 0, total: 8,
};

function startCountSausage() {
  const p = requireActiveParticipant("giocare a Conta le Salsicce");
  if (!p || countGame.phase === "playing") return;
  countGame.phase = "playing";
  countGame.round = 0;
  countGame.correct = 0;
  document.getElementById("countStartBtn").disabled = true;
  document.getElementById("countStartBtn").textContent = "In corso…";
  setText("countStatus", "Guarda bene la griglia!");
  countNextRound();
}

function countNextRound() {
  countGame.round += 1;
  if (countGame.round > countGame.total) return endCountSausage();
  setText("countRound", String(countGame.round));
  // Build grid of 18 random items
  const size = 18;
  const target = "🌭";
  const fillers = ["🥩", "🌽", "🍖", "🌶️", "🧀", "🧄", "🍋"];
  const count = 2 + Math.floor(Math.random() * 7); // 2–8 sausages
  countGame.currentCount = count;
  const grid = Array(size).fill(null).map((_, i) => i < count ? target : fillers[Math.floor(Math.random() * fillers.length)]);
  grid.sort(() => Math.random() - 0.5);
  const stage = document.getElementById("countStage");
  if (stage) stage.innerHTML = grid.map(e => `<span class="count-cell">${e}</span>`).join("");
  const box = document.getElementById("countOptions");
  if (box) box.innerHTML = "<p class=\"card-copy\" style=\"margin:8px 0\">Tra 2s ti chiedo quante erano…</p>";
  setTimeout(() => {
    if (stage) stage.innerHTML = "";
    // Offer choices: correct + 3 distractors nearby
    const choices = new Set([count]);
    while (choices.size < 4) {
      const delta = Math.floor(Math.random() * 5) - 2;
      const v = count + delta;
      if (v > 0 && v !== count) choices.add(v);
    }
    const shuffled = [...choices].sort(() => Math.random() - 0.5);
    if (box) box.innerHTML = shuffled.map(n =>
      `<button class="calc-option" type="button" onclick="countAnswer(${n})">${n} 🌭</button>`).join("");
  }, 2000);
}

function countAnswer(n) {
  if (countGame.phase !== "playing") return;
  if (n === countGame.currentCount) {
    countGame.correct += 1;
    setText("countCorrect", String(countGame.correct));
    showToast("✓", `Esatto: ${n} salsicce.`, "good");
  } else {
    showToast("✗", `Erano ${countGame.currentCount}.`, "warning");
  }
  countNextRound();
}

function endCountSausage() {
  countGame.phase = "done";
  document.getElementById("countStartBtn").disabled = false;
  document.getElementById("countStartBtn").textContent = "Rigioca";
  setText("countStatus", `Fine: ${countGame.correct}/${countGame.total} giuste.`);
  const box = document.getElementById("countOptions");
  if (box) box.innerHTML = "";
  recordSimpleGameScore("countSausage", countGame.correct);
}

// Initialize target for Cottura a Puntino on first render + swipe gestures
function initNewGamesUI() {
  const holdTargetEl = document.getElementById("holdTarget");
  if (holdTargetEl) startHoldTarget();

  // Swipe: Snake — change direction by swiping on the grid
  addSwipeHandler(document.getElementById("snakeGrid"), (dir) => {
    snakeSetDir(dir);
  }, { threshold: 18, preventScroll: true });

  // Swipe: Brace Catcher — swipe left/right to move player
  addSwipeHandler(document.getElementById("catcherStage"), (dir) => {
    if (catcherGame.phase !== "playing") return;
    if (dir === "left") catcherGame.playerX = Math.max(5, catcherGame.playerX - 18);
    if (dir === "right") catcherGame.playerX = Math.min(95, catcherGame.playerX + 18);
  }, { threshold: 20, preventScroll: true });

  // Swipe: Salsiccia Jump — swipe up to jump (alternative to tap)
  addSwipeHandler(document.getElementById("sjumpStage"), (dir) => {
    if (dir === "up") sjumpJump();
  }, { threshold: 20, preventScroll: true });

  // Keyboard support for Snake (arrow keys)
  document.addEventListener("keydown", (e) => {
    if (snakeGame.phase !== "playing") return;
    const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
    if (map[e.key]) {
      e.preventDefault();
      snakeSetDir(map[e.key]);
    }
  });
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
  notifyOthers("Sfida BBQ pescata", `${activePerson.name} ha pescato "${chosen.title}".`, "challenge", "/#giochi");
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
  notifyOthers("Nuova spesa", `${labelForPerson(personId)} ha anticipato ${formatMoney(expense.amount)} per "${description}".`, "expense", "/#spese");
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
  notifyOthers("Nuovo commento", `${activePerson.name} ha commentato "${expense.description}": ${text}`, "expense-comment", "/#spese");
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
          notifyOthers("Spesa modificata", `"${description}" ora è ${formatMoney(expense.amount)} (${labelForPerson(personId)}).`, "expense", "/#spese");
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
          notifyOthers("Spesa eliminata", `"${expense.description}" è stata rimossa dal feed.`, "expense", "/#spese");
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

  persistActiveParticipant();

  document.getElementById("newPersonName").value = "";
  scheduleSave();
  renderAll();
  showToast("Partecipante aggiunto", `${newParticipant.avatar} ${newParticipant.name} è entrato/a nel gruppo.`, "good");
  notifyOthers("Nuovo partecipante", `${newParticipant.avatar} ${newParticipant.name} è entrato/a nel gruppo.`, "group", "/#gruppo");
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
    activeParticipantId = null;
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
  notifyOthers("Lista della spesa", `${activePerson.name} ha aggiunto "${text}" alla lista.`, "shopping", "/#lista");
}

function toggleShoppingItem(index) {
  const item = state.shoppingList[index];
  if (!item) return;
  item.checked = !item.checked;
  scheduleSave();
  renderShoppingList();
  const who = getActiveParticipant()?.name || "Qualcuno";
  notifyOthers(
    item.checked ? "Lista: preso!" : "Lista: di nuovo da prendere",
    item.checked ? `${who} ha segnato "${item.text}" come preso.` : `${who} ha rimesso "${item.text}" da prendere.`,
    "shopping",
    "/#lista"
  );
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
  renderChat();
  flushSave();

  const normalized = text.toLowerCase();
  if (normalized.includes("birra")) {
    showToast("Chat utile", "Parola chiave rilevata: birra. Finalmente si parla seriamente.", "good");
  }
  notifyOthers(`${activePerson.avatar} ${activePerson.name}`, text, "chat", "/#chat");
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
  notifyOthers("Nuovo desiderio wishlist", `${activePerson.name} ha aggiunto "${text}".`, "wishlist", "/#wishlist");
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
  notifyOthers("Wishlist", `${activePerson.name} si occupa di "${item.text}".`, "wishlist", "/#wishlist");
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
          notifyOthers("Wishlist assegnata", `${activePerson.name} ha assegnato "${item.text}" a ${target.name}.`, "wishlist", "/#wishlist");
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
    notifyOthers("Wishlist confermata", `${activePerson.name} ha confermato "${item.text}".`, "wishlist", "/#wishlist");
  } else {
    item.status = "declined";
    item.assignedToId = null;
    item.assignedById = null;
    showToast("Assegnazione rifiutata", `${activePerson.name} ha rimesso "${item.text}" tra le voci aperte.`, "warning");
    notifyOthers("Wishlist rifiutata", `${activePerson.name} ha rimesso "${item.text}" tra le voci aperte.`, "wishlist", "/#wishlist");
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
          activeParticipantId = null;
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

function openModal({ title, text = "", bodyHtml = "", actions = [], lockDismissal = false }) {
  const overlay = document.getElementById("modalOverlay");
  const shell = document.getElementById("modalShell");
  overlay.dataset.lockDismissal = lockDismissal ? "true" : "false";
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

function closeModal(force = false) {
  const overlay = document.getElementById("modalOverlay");
  if (!force && overlay.dataset.lockDismissal === "true") return;
  overlay.hidden = true;
  overlay.dataset.lockDismissal = "false";
  document.body.style.overflow = "";
}

function openProfileSelectionPrompt() {
  if (profileSelectionPromptOpen || getActiveParticipant() || state.participants.length === 0) return;
  profileSelectionPromptOpen = true;
  setProfileSelectionLock(true);
  openModal({
    title: "Seleziona il tuo profilo",
    text: "Al primo avvio devi scegliere chi sei. Non viene impostato nessun profilo di default.",
    bodyHtml: `
      <div class="profile-selection-grid">
        ${state.participants.map(participant => `
          <button class="identity-chip profile-choice" type="button" onclick="confirmProfileSelection('${participant.id}')">
            <span class="avatar">${participant.avatar}</span>
            <span>${escapeHtml(participant.name)}</span>
          </button>
        `).join("")}
      </div>
    `,
    actions: [],
    lockDismissal: true
  });
}

function confirmProfileSelection(participantId) {
  const participant = personById(participantId);
  if (!participant) return;
  profileSelectionPromptOpen = false;
  setActiveParticipant(participantId);
  closeModal(true);
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
    openProfileSelectionPrompt();
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

// ── Push notifications ──
const pushState = {
  supported: false,
  permission: "default",
  subscription: null,
  registration: null,
  vapidPublicKey: null,
  pending: false,
  activeParticipantIds: new Set(),
};

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) output[i] = raw.charCodeAt(i);
  return output;
}

async function initPushNotifications() {
  pushState.supported = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  const bar = document.getElementById("notificationsBar");
  const toggle = document.getElementById("notificationsToggle");
  if (!bar || !toggle) return;

  if (!pushState.supported) {
    bar.classList.add("unsupported");
    toggle.disabled = true;
    setText("notificationsMeta", "Questo dispositivo/browser non supporta le notifiche push. Installa la webapp sul telefono per abilitarle.");
    return;
  }

  toggle.addEventListener("click", togglePushSubscription);

  try {
    pushState.registration = await navigator.serviceWorker.register("/sw.js");
  } catch (err) {
    console.warn("Service worker registration failed:", err);
    bar.classList.add("unsupported");
    toggle.disabled = true;
    setText("notificationsMeta", "Impossibile registrare il service worker. Le notifiche non sono disponibili.");
    return;
  }

  pushState.permission = Notification.permission;
  try {
    pushState.subscription = await pushState.registration.pushManager.getSubscription();
  } catch {}

  try {
    const res = await fetch("/api/push/public-key");
    const data = await res.json();
    pushState.vapidPublicKey = data.publicKey;
  } catch (err) {
    console.warn("Failed to fetch VAPID key:", err);
  }

  updatePushUI();
  refreshActiveParticipants();
}

function updatePushUI() {
  const toggle = document.getElementById("notificationsToggle");
  const bar = document.getElementById("notificationsBar");
  if (!toggle || !bar) return;

  const active = Boolean(pushState.subscription) && pushState.permission === "granted";
  toggle.setAttribute("aria-checked", active ? "true" : "false");
  toggle.setAttribute("aria-label", active ? "Disattiva notifiche push" : "Attiva notifiche push");
  toggle.disabled = pushState.pending || !pushState.supported;

  const activePerson = getActiveParticipant();
  const isPillo = activePerson && /pillo/i.test(activePerson.name);

  let meta;
  if (!pushState.supported) {
    meta = "Questo dispositivo/browser non supporta le notifiche push. Installa la webapp sul telefono per abilitarle.";
  } else if (pushState.permission === "denied") {
    meta = "Hai bloccato le notifiche da questo browser. Sbloccale dalle impostazioni del sito per attivarle.";
  } else if (active) {
    meta = isPillo
      ? "Attive. Pillo, adesso non hai più scuse: ogni cosa che fa il gruppo ti arriva puntuale."
      : "Attive. Ti arrivano le novità del gruppo (spese, commenti, chat, wishlist...).";
  } else {
    meta = isPillo
      ? '«No, non ci sono le notifiche…» Ecco, Pillo, eccole qui. Attivale e smetti di inventare scuse per non leggere la chat.'
      : "Ti avvisano quando il gruppo aggiunge spese, commenti o messaggi.";
  }
  setText("notificationsMeta", meta);
}

async function togglePushSubscription() {
  if (pushState.pending || !pushState.supported) return;
  pushState.pending = true;
  updatePushUI();

  try {
    if (pushState.subscription) {
      await unsubscribePush();
      showToast("Notifiche disattivate", "Non riceverai più i push dal gruppo su questo dispositivo.", "warning");
    } else {
      await subscribePush();
      const activePerson = getActiveParticipant();
      const isPillo = activePerson && /pillo/i.test(activePerson.name);
      showToast(
        isPillo ? "Notifiche attivate, Pillo" : "Notifiche attivate",
        isPillo
          ? "Benvenuto nel 2020. Ora la chat la leggi anche tu."
          : "Ti avviseremo quando qualcuno aggiorna il gruppo.",
        "good"
      );
    }
  } catch (err) {
    console.warn("Push toggle failed:", err);
    showToast("Notifiche non attivate", err.message || "Qualcosa è andato storto. Controlla i permessi del browser.", "bad");
  }

  pushState.pending = false;
  updatePushUI();
}

async function subscribePush() {
  if (!pushState.vapidPublicKey) {
    try {
      const res = await fetch("/api/push/public-key");
      const data = await res.json();
      pushState.vapidPublicKey = data.publicKey;
    } catch (err) {
      console.warn("Retry VAPID fetch failed:", err);
    }
  }
  if (!pushState.vapidPublicKey) throw new Error("Chiave VAPID non disponibile. Controlla la connessione e riprova.");

  const permission = await Notification.requestPermission();
  pushState.permission = permission;
  if (permission !== "granted") throw new Error("Permesso notifiche negato");

  const sub = await pushState.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(pushState.vapidPublicKey),
  });

  const activePerson = getActiveParticipant();
  const label = activePerson ? activePerson.name : null;
  const participantId = activePerson ? activePerson.id : null;

  const res = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subscription: sub, label, participantId }),
  });
  if (!res.ok) throw new Error("Registrazione subscription fallita");

  pushState.subscription = sub;
  refreshActiveParticipants();
}

async function refreshActiveParticipants() {
  try {
    const res = await fetch("/api/push/active-participants");
    if (!res.ok) return;
    const data = await res.json();
    pushState.activeParticipantIds = new Set(data.participantIds || []);
    renderIdentityBadges();
  } catch {}
}

function renderIdentityBadges() {
  document.querySelectorAll(".identity-chip").forEach(chip => {
    const id = chip.dataset.participantId;
    if (!id) return;
    if (pushState.activeParticipantIds.has(id)) {
      chip.classList.add("has-push");
    } else {
      chip.classList.remove("has-push");
    }
  });
}

async function updateSubscriptionParticipant() {
  if (!pushState.subscription) return;
  const activePerson = getActiveParticipant();
  if (!activePerson) return;
  try {
    await fetch("/api/push/update-participant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: pushState.subscription.endpoint,
        participantId: activePerson.id,
      }),
    });
    refreshActiveParticipants();
  } catch (err) {
    console.warn("update participant failed:", err);
  }
}

async function unsubscribePush() {
  const sub = pushState.subscription;
  if (!sub) return;
  try {
    await fetch("/api/push/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: sub.endpoint }),
    });
  } catch {}
  try { await sub.unsubscribe(); } catch {}
  pushState.subscription = null;
  refreshActiveParticipants();
}

function notifyOthers(title, body, tag = "grigliata", url = "/") {
  if (!title || !body) return;
  const endpoint = pushState.subscription ? pushState.subscription.endpoint : null;
  fetch("/api/push/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, tag, url, excludeEndpoint: endpoint }),
  }).catch(err => console.warn("notify failed:", err));
}

// ── Bottom nav navigation ──
// Map a destination key to a section name. Sections in the "more" sheet
// aren't in the bottom nav but are valid navigation targets.
const BOTTOM_NAV_SLOTS = ["home", "spese", "chat", "lista", "altro"];
const MORE_SHEET_DESTINATIONS = ["regolamento", "wishlist", "gruppo", "giochi", "impostazioni"];
const BOTTOM_NAV_DESTINATIONS = Object.fromEntries(
  SECTIONS.filter(s => s !== "dev").map(s => [s, s])
);

function navigateTo(destKey) {
  // Accept aliases
  const aliases = { conti: "regolamento", admin: "impostazioni" };
  const section = aliases[destKey] || destKey;
  if (!BOTTOM_NAV_DESTINATIONS[section]) return;
  setSection(section);
  updateBottomNavActive();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBottomNavActive() {
  const nav = document.getElementById("bottomNav");
  if (!nav) return;
  // If active section is one of the direct bottom-nav slots, highlight that.
  // Otherwise highlight "altro".
  const activeKey = BOTTOM_NAV_SLOTS.includes(activeSection) ? activeSection : "altro";
  nav.querySelectorAll(".bottom-nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.dest === activeKey);
  });
}

function openMoreSheet() {
  const overlay = document.getElementById("moreSheetOverlay");
  if (!overlay) return;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeMoreSheet() {
  const overlay = document.getElementById("moreSheetOverlay");
  if (!overlay) return;
  overlay.hidden = true;
  document.body.style.overflow = "";
}

function consumeNavigationHash() {
  const hash = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (!hash) return false;
  // Map "regolamento" / "conti" both to "regolamento"
  const aliases = { conti: "regolamento" };
  const dest = aliases[hash] || hash;
  if (BOTTOM_NAV_DESTINATIONS[dest]) {
    navigateTo(dest);
    // Clear the hash so re-opening the app doesn't keep navigating back
    history.replaceState(null, "", location.pathname + location.search);
    return true;
  }
  return false;
}

function openQuickExpense() {
  navigateTo("spese");
  setTimeout(() => {
    const descInput = document.getElementById("expenseDescInput");
    if (descInput) {
      descInput.scrollIntoView({ block: "center", behavior: "smooth" });
      setTimeout(() => descInput.focus(), 250);
    }
  }, 100);
}

// ── Install guide modal ──
function openInstallGuide() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const defaultTab = isIOS ? "ios" : "android";

  const steps = {
    ios: [
      'Apri grigliata.vincenzo-rana.it in <strong>Safari</strong> (non Chrome o altri browser).',
      'Tocca il pulsante <strong>Condividi</strong> (il quadrato con la freccia in su) nella barra in basso.',
      'Scorri e tocca <strong>"Aggiungi a Home"</strong>.',
      'Conferma con <strong>"Aggiungi"</strong>. Troverai l\'icona 🔥 nella schermata principale.',
      'Apri l\'app dall\'icona nella home, poi attiva le notifiche dall\'interruttore qui sopra e dai il permesso quando richiesto.',
    ],
    android: [
      'Apri grigliata.vincenzo-rana.it in <strong>Chrome</strong> o Edge.',
      'Tocca il menu <strong>⋮ (tre puntini)</strong> in alto a destra.',
      'Scegli <strong>"Installa app"</strong> o <strong>"Aggiungi a schermata Home"</strong>.',
      'Conferma con <strong>"Installa"</strong>. L\'app apparirà tra le tue app.',
      'Apri l\'app dall\'icona, poi attiva le notifiche dall\'interruttore qui sopra e accetta il permesso.',
    ],
  };

  const renderSteps = (platform) => steps[platform].map((step, i) =>
    `<li><span class="install-guide-step-num">${i + 1}</span><span>${step}</span></li>`
  ).join("");

  openModal({
    title: "Installa l'app sul telefono",
    text: "Per ricevere le notifiche push devi aggiungere la webapp alla schermata principale. Segui i passi per il tuo sistema.",
    bodyHtml: `
      <div class="install-guide-platforms" role="tablist">
        <button type="button" data-platform="ios" class="${defaultTab === "ios" ? "active" : ""}" role="tab">iOS (iPhone/iPad)</button>
        <button type="button" data-platform="android" class="${defaultTab === "android" ? "active" : ""}" role="tab">Android</button>
      </div>
      <ol class="install-guide-steps" id="installGuideSteps">${renderSteps(defaultTab)}</ol>
    `,
    actions: [
      { label: "Chiudi", className: "btn-primary" },
    ],
  });

  document.querySelectorAll(".install-guide-platforms button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".install-guide-platforms button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("installGuideSteps").innerHTML = renderSteps(btn.dataset.platform);
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  loadPreferences();
  populateEmojiGrid();

  await loadStateFromServer();

  document.querySelectorAll(".primary-tab").forEach(button => {
    button.addEventListener("click", () => setSection(button.dataset.section));
  });

  setupArrowKeyNavigation(document.querySelector(".primary-nav"), ".primary-tab", button => {
    setSection(button.dataset.section);
  });

  // Apply initial section now that panels exist
  setSection(activeSection);

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
    const overlay = document.getElementById("modalOverlay");
    if (!overlay.hidden && overlay.dataset.lockDismissal === "true") return;
    if (!document.getElementById("modalOverlay").hidden) {
      closeModal();
      return;
    }
    if (!document.getElementById("emojiPickerOverlay").hidden) {
      closeEmojiPicker();
      return;
    }
    if (!document.getElementById("moreSheetOverlay").hidden) {
      closeMoreSheet();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const overlay = document.getElementById("modalOverlay");
    if (overlay.hidden) return;
    const shell = document.getElementById("modalShell");
    const focusables = Array.from(shell.querySelectorAll(
      "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
    ));
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (!shell.contains(active)) {
      first.focus();
      event.preventDefault();
      return;
    }
    if (event.shiftKey && active === first) {
      last.focus();
      event.preventDefault();
      return;
    }
    if (!event.shiftKey && active === last) {
      first.focus();
      event.preventDefault();
    }
  }, true);

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
  initNewGamesUI();
  renderAll();

  if (activePrimaryTab === "organizzazione" && activeOrgTab === "admin") {
    renderBackups();
  }

  initPushNotifications();

  // Wire up bottom navigation
  document.querySelectorAll(".bottom-nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const dest = btn.dataset.dest;
      if (dest === "altro") {
        openMoreSheet();
      } else {
        navigateTo(dest);
      }
    });
  });

  // Wire up the "Altro" sheet items
  document.querySelectorAll(".sheet-item").forEach(btn => {
    btn.addEventListener("click", () => {
      navigateTo(btn.dataset.dest);
      closeMoreSheet();
    });
  });

  // Close sheet when clicking backdrop
  document.getElementById("moreSheetOverlay").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeMoreSheet();
  });

  updateBottomNavActive();

  // Navigate via URL hash (e.g. when a push notification opens /#chat)
  consumeNavigationHash();
  window.addEventListener("hashchange", consumeNavigationHash);
  window.addEventListener("focus", () => { consumeNavigationHash(); pollForChanges(); });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) { consumeNavigationHash(); pollForChanges(); }
  });

  // Service worker → client navigation message (from notification click)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", event => {
      const data = event.data || {};
      if (data.type === "navigate" && typeof data.url === "string") {
        const hash = data.url.split("#")[1];
        if (hash) {
          location.hash = "#" + hash;
          consumeNavigationHash();
        }
      }
    });
  }

  setInterval(pollForChanges, 2500);
  setInterval(refreshActiveParticipants, 30000);
});
