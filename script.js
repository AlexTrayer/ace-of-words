/* ==========================================================================
   GLOBAL CONSTANTS & SETTINGS
   ========================================================================== */

const SETUP_BG_PATTERN = "linear-gradient(rgba(244, 241, 234, 0.85), rgba(244, 241, 234, 0.85)), url('./photos/background.jpg')";

// Configuration for Teams including Map Emojis
let TEAMS = [
  { 
    teamName: "מלכה יהלום", 
    imagePath: "./photos/Queen diamond.jpg", 
    textColor: "#5e1f2a",                       
    fontFamily: "'Frank Ruhl Libre', serif",    
    fontWeight: "400",                          
    successColor: "#d4af37",                    
    failColor: "#a37c7c",                       
    textShadow: "1px 1px 2px rgba(255,255,255,0.7)", 
    appBg: "#fff5f6",                           
    emoji: "♦️", 
    
    footerDirection: "row",
    footerAlign: "center",
    footerJustify: "space-between",             
    footerGap: "15px",
    footerSize: "1.4rem",
    footerOffsetY: "15px",                      
    footerPadRight: "0px",
    footerPadLeft: "0px",
    footerFontWeight: "400",
    footerFontFamily: "'Frank Ruhl Libre', serif", 
    headerOffsetY: "0px"
  },
  { 
    teamName: "מלך עלה", 
    imagePath: "./photos/King blue Heart.jpg", 
    textColor: "#2e3b52",                       
    fontFamily: "'Heebo', sans-serif",          
    fontWeight: "900",                          
    successColor: "#c58397",                    
    failColor: "#5c4c4c",                       
    textShadow: "1px 1px 2px rgba(255,255,255,0.5)", 
    appBg: "#8496b0",                           
    emoji: "♠️", 
    
    footerDirection: "row",                     
    footerAlign: "center",                    
    footerJustify: "flex-end",                  
    footerGap: "20px",
    footerSize: "1.3rem",                       
    footerOffsetY: "10px",                      
    footerPadRight: "45px",                     
    footerPadLeft: "10px",                      
    footerFontWeight: "800",
    footerFontFamily: "'Assistant', sans-serif",
    headerOffsetY: "0px"
  },
  { 
    teamName: "תלתן גולגולת", 
    imagePath: "./photos/Skull Club. backgroundjpg.jpg", 
    textColor: "#000000",                       
    fontFamily: "'Rubik Burned', system-ui",    
    fontWeight: "900",                          
    successColor: "#2b2b2b",                    
    failColor: "#7a7a7a",                       
    textShadow: "2px 2px 0px #ffffff",          
    appBg: "#e0e0e0",                           
    emoji: "♣️", 
    
    footerDirection: "row",
    footerAlign: "center",
    footerJustify: "space-between",
    footerGap: "15px",
    footerSize: "1.4rem",
    footerOffsetY: "5px",                      
    footerPadRight: "10px",
    footerPadLeft: "10px",
    footerFontWeight: "800",
    footerFontFamily: "'Assistant', sans-serif",
    headerOffsetY: "15px"                       
  },
  { 
    teamName: "אס לב מדמם", 
    imagePath: "./photos/Heart.jpg", 
    textColor: "#7a0000",                       
    fontFamily: "'Rubik Wet Paint', system-ui", 
    fontWeight: "900",                          
    successColor: "#e60000",                    
    failColor: "#3a0000",                       
    textShadow: "1px 1px 5px rgba(0,0,0,0.4)",  
    appBg: "#ffffff",                           
    emoji: "♥️", 
    
    footerDirection: "row",
    footerAlign: "center",
    footerJustify: "flex-end",                            
    footerGap: "10px",
    footerSize: "1.1rem",                       
    footerOffsetY: "-5px",                      
    footerPadRight: "100px",                     
    footerPadLeft: "5px",
    footerFontWeight: "700",
    footerFontFamily: "'Rubik Wet Paint', system-ui", 
    headerOffsetY: "0px"
  }
];

// RE-MAPPED 48 STEPS: Carefully plotted completely *inside* the lines. 
// Now stays UNDER BYU instead of jumping onto the sign!
const MAP_COORDS = [
  {b: 5, l: 82},     // 0: Start (Circle)
  {b: 4.5, l: 72},   // 1: Moving left
  {b: 4, l: 62},     // 2
  {b: 3.5, l: 52},   // 3: Under the pond
  {b: 3.5, l: 42},   // 4
  {b: 3.5, l: 32},   // 5: Getting close to BYU
  {b: 4, l: 22},     // 6: Under BYU sign
  {b: 5.5, l: 13},   // 7: Corner
  {b: 9, l: 7},      // 8: Going UP left of BYU
  {b: 14, l: 5},     // 9
  {b: 19, l: 5},     // 10
  {b: 23, l: 8},     // 11: Curving right, above BYU
  {b: 25, l: 15},    // 12
  {b: 26, l: 23},    // 13
  {b: 26.5, l: 31},  // 14
  {b: 25.5, l: 39},  // 15: Under Saloon
  {b: 24, l: 47},    // 16
  {b: 22.5, l: 55},  // 17: Under Tent
  {b: 23, l: 63},    // 18
  {b: 24.5, l: 71},  // 19
  {b: 27, l: 79},    // 20
  {b: 31, l: 86},    // 21: Curving UP on the right edge
  {b: 36, l: 90},    // 22
  {b: 42, l: 91},    // 23
  {b: 47, l: 87},    // 24: Curving left
  {b: 50, l: 79},    // 25
  {b: 50.5, l: 71},  // 26
  {b: 50, l: 63},    // 27: Under Hostel
  {b: 49, l: 55},    // 28
  {b: 49.5, l: 47},  // 29
  {b: 51, l: 39},    // 30
  {b: 53, l: 31},    // 31
  {b: 55, l: 23},    // 32
  {b: 59, l: 15},    // 33: Curving UP left edge
  {b: 64, l: 10},    // 34
  {b: 69, l: 11},    // 35
  {b: 71.5, l: 18},  // 36: Over Temple
  {b: 72, l: 26},    // 37
  {b: 71.5, l: 34},  // 38: Over Whale
  {b: 71.5, l: 42},  // 39
  {b: 72.5, l: 50},  // 40
  {b: 74, l: 58},    // 41: Under Seattle
  {b: 75.5, l: 66},  // 42
  {b: 78, l: 74},    // 43
  {b: 82, l: 81},    // 44: Curve UP right edge
  {b: 87, l: 74},    // 45
  {b: 86.5, l: 60},  // 46: Under Yellowstone car
  {b: 85.5, l: 40},  // 47: Heading to finish
  {b: 85.5, l: 18}   // 48: END (Big Jed's)
];

const JOKER_TRIGGER_INTERVAL = 5;

let allWords = [];             
let shuffledDeck = [];         
let currentCardIndex = 0;      

let selectedTeamsCount = 2;    
let selectedTimeSeconds = 60;  

let teamsScores = [];          
let currentTeamIndex = 0;      
let totalTurnsPlayed = 0;      

let remainingTime = 0;         
let timerInterval = null;      
let roundSuccessCount = 0;     
let roundFailCount = 0;        

let isJokerRound = false;      
let jokerWordsLeft = 5;        

let screenBeforeMap = '';      

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

async function loadWordBank() {
  try {
    const response = await fetch('./words.txt');
    if (!response.ok) throw new Error("File not found");
    const textData = await response.text();
    allWords = textData.split(/\r?\n/).map(w => w.trim()).filter(w => w.length > 0);
    resetAndShuffleDeck();
  } catch (error) {
    console.error("Local fetch blocked by CORS. Fallback for testing:", error);
    allWords = ["משקפיים", "חללית", "גיטרה", "שוקולד", "אבטיח"];
    resetAndShuffleDeck();
  }
}

function generateTimeOptions() {
  const container = document.getElementById('time-container');
  container.innerHTML = '';
  for (let t = 30; t <= 120; t += 15) {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    const timeString = `${min < 10 ? '0' : ''}${min}:${sec === 0 ? '00' : sec}`;
    const btn = document.createElement('button');
    btn.className = `setup-btn time-btn ${t === 60 ? 'selected' : ''}`;
    btn.innerText = timeString;
    btn.onclick = () => setTime(t, btn);
    container.appendChild(btn);
  }
}

function formatTimeDisplay(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function resetAndShuffleDeck() {
  shuffledDeck = shuffle([...allWords]);
  currentCardIndex = 0;
}

function getNextWord() {
  if (currentCardIndex >= shuffledDeck.length) {
    resetAndShuffleDeck();
  }
  return shuffledDeck[currentCardIndex++];
}

function initApp() {
  loadWordBank();
  generateTimeOptions();
  showSetup();
}

initApp();

/* ==========================================================================
   NAVIGATION & SCREEN MANAGEMENT
   ========================================================================== */

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function showSetup() {
  document.documentElement.style.setProperty('--team-app-bg', SETUP_BG_PATTERN);
  showScreen('setup-screen');
}

function showScoreboard() {
  document.documentElement.style.setProperty('--team-app-bg', SETUP_BG_PATTERN);
  showScreen('scoreboard-screen');
}

function returnToSummary() {
  const currentTeam = TEAMS[(currentTeamIndex - 1 + selectedTeamsCount) % selectedTeamsCount];
  document.documentElement.style.setProperty('--team-app-bg', currentTeam.appBg);
  showScreen('summary-screen');
}

function setTeamsCount(count) {
  selectedTeamsCount = count;
  document.querySelectorAll('.team-btn').forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');
}

function setTime(seconds, btnElement) {
  selectedTimeSeconds = seconds;
  document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
  btnElement.classList.add('selected');
}

function startGame() {
  TEAMS = shuffle(TEAMS);
  teamsScores = Array(selectedTeamsCount).fill(0); 
  currentTeamIndex = 0;
  totalTurnsPlayed = 0;
  startNextTurn();
}

function resetFullGame() {
  showSetup();
}

/* ==========================================================================
   MAP LOGIC
   ========================================================================== */

function showMap(fromScreen) {
  screenBeforeMap = fromScreen;
  document.documentElement.style.setProperty('--team-app-bg', '#fff'); 
  showScreen('map-screen');
  renderMapTokens();
}

function hideMap() {
  if (screenBeforeMap === 'summary-screen') {
    returnToSummary();
  } else {
    showScoreboard();
  }
}

function renderMapTokens() {
  const container = document.getElementById('map-path-container');
  container.innerHTML = '';
  
  const spotCounts = {};
  for(let i = 0; i < selectedTeamsCount; i++) {
      let score = teamsScores[i]; 
      // Boundary safety
      let step = Math.max(0, Math.min(score, MAP_COORDS.length - 1));
      spotCounts[step] = (spotCounts[step] || 0) + 1;
  }

  const currentSpotOffsets = {};
  
  for(let i = 0; i < selectedTeamsCount; i++) {
      let score = teamsScores[i];
      let step = Math.max(0, Math.min(score, MAP_COORDS.length - 1));
      
      if (currentSpotOffsets[step] === undefined) {
          currentSpotOffsets[step] = 0;
      }
      let indexOnSpot = currentSpotOffsets[step];
      currentSpotOffsets[step]++;
      
      const totalOnSpot = spotCounts[step];
      
      // Smart spread so tokens on the same spot don't completely hide each other
      const spread = 15; 
      const offsetX = (totalOnSpot > 1) ? (indexOnSpot - (totalOnSpot - 1) / 2) * spread : 0;
      const offsetY = (totalOnSpot > 1) ? (indexOnSpot % 2 === 0 ? -4 : 4) : 0;

      const coord = MAP_COORDS[step];
      const token = document.createElement('div');
      token.className = 'map-token';
      token.innerText = TEAMS[i].emoji;
      
      token.style.left = `calc(${coord.l}% + ${offsetX}px)`;
      token.style.bottom = `calc(${coord.b}% + ${offsetY}px)`;
      token.style.textShadow = `0px 3px 5px rgba(0,0,0,0.5), 0px 0px 15px ${TEAMS[i].successColor}`;
      
      container.appendChild(token);
  }
}

/* ==========================================================================
   TURN LOGIC & DYNAMIC STYLING
   ========================================================================== */

function startNextTurn() {
  if (totalTurnsPlayed > 0 && totalTurnsPlayed % JOKER_TRIGGER_INTERVAL === 0) {
    startJokerRound();
    return;
  }

  isJokerRound = false;
  const currentTeam = TEAMS[currentTeamIndex];
  
  const root = document.documentElement;
  root.style.setProperty('--team-app-bg', currentTeam.appBg); 
  root.style.setProperty('--team-bg-image', `url('${currentTeam.imagePath}')`);
  root.style.setProperty('--team-text-color', currentTeam.textColor);
  root.style.setProperty('--team-font', currentTeam.fontFamily);
  root.style.setProperty('--team-font-weight', currentTeam.fontWeight);
  root.style.setProperty('--team-success-color', currentTeam.successColor);
  root.style.setProperty('--team-fail-color', currentTeam.failColor);
  root.style.setProperty('--team-text-shadow', currentTeam.textShadow);
  
  root.style.setProperty('--footer-direction', currentTeam.footerDirection);
  root.style.setProperty('--footer-align', currentTeam.footerAlign);
  root.style.setProperty('--footer-justify', currentTeam.footerJustify);
  root.style.setProperty('--footer-gap', currentTeam.footerGap);
  root.style.setProperty('--footer-size', currentTeam.footerSize);
  root.style.setProperty('--footer-offset-y', currentTeam.footerOffsetY);
  root.style.setProperty('--footer-pad-right', currentTeam.footerPadRight);
  root.style.setProperty('--footer-pad-left', currentTeam.footerPadLeft);
  root.style.setProperty('--footer-font-weight', currentTeam.footerFontWeight);
  root.style.setProperty('--footer-font-family', currentTeam.footerFontFamily);
  root.style.setProperty('--header-offset-y', currentTeam.headerOffsetY);
  
  root.style.setProperty('--btn-primary-bg', currentTeam.successColor);
  root.style.setProperty('--btn-secondary-bg', currentTeam.failColor);
  
  showScreen('countdown-screen');
  
  const teamNameEl = document.getElementById('countdown-team-name');
  teamNameEl.innerText = `קבוצת ${currentTeam.teamName}, תורכם!`;
  teamNameEl.style.fontFamily = currentTeam.fontFamily;
  teamNameEl.style.fontWeight = currentTeam.fontWeight;
  
  let count = 3;
  const countEl = document.getElementById('countdown-val');
  countEl.innerText = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countEl.innerText = count;
    } else {
      clearInterval(interval);
      startStandardRound();
    }
  }, 1000);
}

function startStandardRound() {
  roundSuccessCount = 0;
  roundFailCount = 0;
  remainingTime = selectedTimeSeconds;

  document.getElementById('timer-display').innerText = formatTimeDisplay(remainingTime);
  renderNextWord('card-word');
  showScreen('game-screen');

  timerInterval = setInterval(() => {
    remainingTime--;
    document.getElementById('timer-display').innerText = formatTimeDisplay(remainingTime);
    if (remainingTime <= 0) {
      endStandardRound();
    }
  }, 1000);
}

function renderNextWord(elementId) {
  const wordEl = document.getElementById(elementId);
  wordEl.innerText = getNextWord();
  const mainCard = elementId === 'card-word' ? document.getElementById('card') : document.getElementById('joker-card');
  
  mainCard.style.transform = '';
  mainCard.style.opacity = '1';
  mainCard.classList.remove('anim-swipe-right', 'anim-swipe-left');
}

function handleCardAction(isSuccess, fromButton = false) {
  const mainCard = document.getElementById('card');
  
  if (isSuccess) roundSuccessCount++;
  else roundFailCount++;

  if (fromButton) {
    mainCard.classList.add(isSuccess ? 'anim-swipe-right' : 'anim-swipe-left');
    setTimeout(() => {
      renderNextWord('card-word');
    }, 280); 
  } else {
    renderNextWord('card-word');
  }
}

function endStandardRound() {
  clearInterval(timerInterval);
  
  const pointsEarned = roundSuccessCount - roundFailCount;
  
  // LOGIC BOUNDARIES: Mathematical guarantee it stays within 0 and 48
  let newScore = teamsScores[currentTeamIndex] + pointsEarned;
  if (newScore < 0) newScore = 0;
  if (newScore >= MAP_COORDS.length) newScore = MAP_COORDS.length - 1;
  
  teamsScores[currentTeamIndex] = newScore;
  
  const currentTeam = TEAMS[currentTeamIndex];

  document.getElementById('summary-title').innerText = `קבוצת ${currentTeam.teamName},\nהזמן נגמר!`;
  document.getElementById('final-success').innerText = roundSuccessCount;
  document.getElementById('final-fail').innerText = roundFailCount;
  document.getElementById('final-total').innerText = pointsEarned > 0 ? `+${pointsEarned}` : pointsEarned;
  
  showScreen('summary-screen');
  updateScoreboardUI();

  currentTeamIndex = (currentTeamIndex + 1) % selectedTeamsCount;
  totalTurnsPlayed++;
}

/* ==========================================================================
   JOKER ROUND 
   ========================================================================== */

function startJokerRound() {
  isJokerRound = true;
  jokerWordsLeft = 5;
  
  document.documentElement.style.setProperty('--team-app-bg', SETUP_BG_PATTERN);
  
  const currentTeam = TEAMS[currentTeamIndex];
  
  document.getElementById('joker-instructions').innerHTML = `קבוצת <strong>${currentTeam.teamName}</strong> מסבירה בפנטומימה!<br>הראשון שמנחש זוכה בנקודה.`;
  document.getElementById('joker-words-left').innerText = jokerWordsLeft;
  
  const btnContainer = document.getElementById('joker-teams-buttons');
  btnContainer.innerHTML = '';
  
  for (let i = 0; i < selectedTeamsCount; i++) {
    const team = TEAMS[i];
    const btn = document.createElement('button');
    btn.className = 'joker-team-btn';
    btn.style.backgroundColor = team.successColor;
    btn.style.fontFamily = team.fontFamily;
    btn.style.fontWeight = team.fontWeight;
    btn.innerText = team.teamName;
    btn.onclick = () => handleJokerSuccess(i);
    btnContainer.appendChild(btn);
  }

  renderNextWord('joker-card-word');
  showScreen('joker-screen');
}

function handleJokerSuccess(teamIndex) {
  // Logic boundaries for Joker points too
  let newScore = teamsScores[teamIndex] + 1;
  if (newScore >= MAP_COORDS.length) newScore = MAP_COORDS.length - 1;
  teamsScores[teamIndex] = newScore;
  
  advanceJokerWord();
}

function handleJokerSkip() {
  renderNextWord('joker-card-word');
}

function advanceJokerWord() {
  jokerWordsLeft--;
  if (jokerWordsLeft <= 0) {
    currentTeamIndex = (currentTeamIndex + 1) % selectedTeamsCount;
    totalTurnsPlayed++;
    
    updateScoreboardUI();
    showScoreboard();
  } else {
    document.getElementById('joker-words-left').innerText = jokerWordsLeft;
    renderNextWord('joker-card-word');
  }
}

/* ==========================================================================
   SCOREBOARD RENDERING
   ========================================================================== */

function updateScoreboardUI() {
  const container = document.getElementById('scores-list');
  container.innerHTML = '';
  
  const sortedTeams = teamsScores.map((score, index) => {
    return { score: score, team: TEAMS[index] };
  }).sort((a, b) => b.score - a.score);
  
  sortedTeams.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    row.style.borderRight = `8px solid ${item.team.textColor}`;
    
    row.innerHTML = `
      <span class="result-label" style="font-family: ${item.team.fontFamily}; font-weight: ${item.team.fontWeight}; font-size: 1.8rem; color: ${item.team.textColor};">${item.team.teamName}</span>
      <span class="result-val" style="color: ${item.team.textColor};">${item.score} צעדים</span>
    `;
    container.appendChild(row);
  });
}

/* ==========================================================================
   TOUCH & MOUSE GESTURES
   ========================================================================== */

const mainCard = document.getElementById('card');
let startX = 0, currentX = 0, isDragging = false;

mainCard.addEventListener('touchstart', (e) => {
  if (isJokerRound) return;
  startX = e.touches[0].clientX;
  isDragging = true;
  mainCard.style.transition = 'none';
});

mainCard.addEventListener('touchmove', (e) => {
  if (!isDragging || isJokerRound) return;
  currentX = e.touches[0].clientX;
  const diffX = currentX - startX;
  mainCard.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.05}deg)`;
});

mainCard.addEventListener('touchend', (e) => {
  if (!isDragging || isJokerRound) return;
  isDragging = false;
  
  mainCard.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
  const diffX = currentX - startX;

  if (diffX > 90) {
    mainCard.style.transform = 'translateX(300px) rotate(15deg)';
    mainCard.style.opacity = '0';
    setTimeout(() => handleCardAction(true, false), 200);
  } else if (diffX < -90) {
    mainCard.style.transform = 'translateX(-300px) rotate(-15deg)';
    mainCard.style.opacity = '0';
    setTimeout(() => handleCardAction(false, false), 200);
  } else {
    mainCard.style.transform = 'translateX(0) rotate(0)';
  }
  
  startX = currentX = 0;
});

mainCard.addEventListener('mousedown', (e) => {
  if (isJokerRound) return;
  e.preventDefault(); 
  startX = e.clientX;
  isDragging = true;
  mainCard.style.transition = 'none';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging || isJokerRound) return;
  e.preventDefault();
  currentX = e.clientX;
  const diffX = currentX - startX;
  mainCard.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.05}deg)`;
});

window.addEventListener('mouseup', () => {
  if (!isDragging || isJokerRound) return;
  isDragging = false;
  
  mainCard.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
  const diffX = currentX - startX;

  if (diffX > 90) {
    mainCard.style.transform = 'translateX(300px) rotate(15deg)';
    mainCard.style.opacity = '0';
    setTimeout(() => handleCardAction(true, false), 200);
  } else if (diffX < -90) {
    mainCard.style.transform = 'translateX(-300px) rotate(-15deg)';
    mainCard.style.opacity = '0';
    setTimeout(() => handleCardAction(false, false), 200);
  } else {
    mainCard.style.transform = 'translateX(0) rotate(0)';
  }
  
  startX = currentX = 0;
});