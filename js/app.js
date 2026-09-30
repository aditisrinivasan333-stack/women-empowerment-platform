/**
 * EmbraceHer - Application Logic
 * Interactive Search with Dropdown, Selection Grid, Deep Dive Showcase,
 * Community Comments with LocalStorage, Guided Breathing, and Self-Love Tools.
 */

// Application State
const state = {
  currentCategory: 'all',
  selectedInsecurityId: 'body-weight-shape', // Default selected
  activeDeepDiveTab: 'reframe', // 'reframe' | 'causes' | 'solutions'
  communityFilterTopic: 'all',
  communitySort: 'recent', // 'recent' | 'popular'
  theme: localStorage.getItem('embraceher_theme') || 'light',
  comments: [],
  journalEntries: JSON.parse(localStorage.getItem('embraceher_journals') || '{}')
};

// Anonymous Display Names Generator for Safe Space
const SAFE_ALIASES = [
  "Gentle Heart",
  "Sister in Growth",
  "Resilient Spirit",
  "Radiant Soul",
  "Kind Voice",
  "Graceful Seeker",
  "Courageous Flower",
  "Empowered Sister",
  "Soft Strength"
];

const AVATAR_COLORS = [
  "linear-gradient(135deg, #B84A62, #9C528B)",
  "linear-gradient(135deg, #447A5A, #6B9080)",
  "linear-gradient(135deg, #C97228, #E29578)",
  "linear-gradient(135deg, #5A6987, #8397B8)",
  "linear-gradient(135deg, #8E4A7D, #C25969)"
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initComments();
  renderInsecuritiesGrid();
  renderDeepDiveShowcase(state.selectedInsecurityId);
  setupSearchDropdown();
  setupCategoryFilters();
  setupDeepDiveTabs();
  setupCommunityHandlers();
  setupBreathingModal();
  setupAffirmationShuffler();
  setupArtModal();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    updateThemeBtnIcon(themeBtn);
    themeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dusk' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('embraceher_theme', state.theme);
      updateThemeBtnIcon(themeBtn);
      showToast(`Switched to ${state.theme === 'light' ? 'Warm Daylight' : 'Twilight Dusk'} mode ✨`);
    });
  }
}

function updateThemeBtnIcon(btn) {
  if (state.theme === 'dusk') {
    btn.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <span>Daylight</span>
    `;
  } else {
    btn.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <span>Dusk</span>
    `;
  }
}

/* ==========================================================================
   Search Box with Dropdown Component
   ========================================================================== */
function setupSearchDropdown() {
  const searchInput = document.getElementById('search-insecurity-input');
  const searchDropdown = document.getElementById('search-dropdown');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchForm = document.getElementById('hero-search-form');

  if (!searchInput || !searchDropdown) return;

  let activeIndex = -1;

  function renderDropdown(filteredList) {
    searchDropdown.innerHTML = '';
    
    if (filteredList.length === 0) {
      searchDropdown.innerHTML = `
        <div class="dropdown-empty">
          <div class="dropdown-empty-icon">🌱</div>
          <p style="font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem;">No exact match found</p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Explore our categories below or share your experience in the community circle.
          </p>
        </div>
      `;
      searchDropdown.classList.add('open');
      return;
    }

    const header = document.createElement('div');
    header.className = 'dropdown-header';
    header.textContent = `Matching Insecurities (${filteredList.length})`;
    searchDropdown.appendChild(header);

    filteredList.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'dropdown-item';
      itemEl.setAttribute('role', 'option');
      itemEl.dataset.id = item.id;
      itemEl.dataset.index = index;

      itemEl.innerHTML = `
        <div class="dropdown-item-icon">
          ${item.icon}
        </div>
        <div class="dropdown-item-content">
          <div class="dropdown-item-title">${item.title}</div>
          <div class="dropdown-item-meta">${item.quickSummary}</div>
        </div>
        <div class="dropdown-item-badge">${item.tag}</div>
      `;

      itemEl.addEventListener('click', () => {
        selectInsecurity(item.id, true);
        closeDropdown();
      });

      searchDropdown.appendChild(itemEl);
    });

    searchDropdown.classList.add('open');
  }

  function closeDropdown() {
    searchDropdown.classList.remove('open');
    activeIndex = -1;
  }

  function handleFilter() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length > 0) {
      searchClearBtn.classList.add('visible');
    } else {
      searchClearBtn.classList.remove('visible');
    }

    let results = INSECURITIES_DATA;
    if (query.length > 0) {
      results = INSECURITIES_DATA.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.tag.toLowerCase().includes(query) ||
               item.quickSummary.toLowerCase().includes(query) ||
               item.causes.some(c => c.title.toLowerCase().includes(query) || c.detail.toLowerCase().includes(query)) ||
               item.solutions.some(s => s.title.toLowerCase().includes(query) || s.detail.toLowerCase().includes(query));
      });
    }

    renderDropdown(results);
  }

  // Event Listeners
  searchInput.addEventListener('input', handleFilter);
  searchInput.addEventListener('focus', handleFilter);

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    searchInput.focus();
    renderDropdown(INSECURITIES_DATA);
  });

  // Keyboard Navigation inside Dropdown
  searchInput.addEventListener('keydown', (e) => {
    const items = searchDropdown.querySelectorAll('.dropdown-item');
    if (!searchDropdown.classList.contains('open') || items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      updateActiveItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < items.length) {
        const id = items[activeIndex].dataset.id;
        selectInsecurity(id, true);
        closeDropdown();
      } else if (items.length > 0) {
        selectInsecurity(items[0].dataset.id, true);
        closeDropdown();
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  function updateActiveItem(items) {
    items.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add('focused');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('focused');
      }
    });
  }

  // Prevent form submission reload
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const items = searchDropdown.querySelectorAll('.dropdown-item');
      if (items.length > 0) {
        selectInsecurity(items[0].dataset.id, true);
        closeDropdown();
      }
    });
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Quick category tag buttons below search
  document.querySelectorAll('.quick-tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.targetId;
      if (targetId) {
        selectInsecurity(targetId, true);
      }
    });
  });
}

/* ==========================================================================
   Category Filter Tabs
   ========================================================================== */
function setupCategoryFilters() {
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.dataset.category;
      renderInsecuritiesGrid();
    });
  });
}

/* ==========================================================================
   Insecurities Grid Rendering & Selection
   ========================================================================== */
function renderInsecuritiesGrid() {
  const gridContainer = document.getElementById('insecurities-grid');
  if (!gridContainer) return;

  const filtered = state.currentCategory === 'all'
    ? INSECURITIES_DATA
    : INSECURITIES_DATA.filter(item => item.category === state.currentCategory);

  gridContainer.innerHTML = '';

  filtered.forEach((item, index) => {
    const box = document.createElement('div');
    const isSelected = item.id === state.selectedInsecurityId;
    const isLeft = index % 2 === 0;

    box.className = `insecurity-box pop-up-box ${isLeft ? 'box-left' : 'box-right'} ${isSelected ? 'selected' : ''}`;
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');
    box.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    box.dataset.id = item.id;
    // Staggered pop-up entrance delay: one by one around the DNA strand!
    box.style.animationDelay = `${(index * 0.11).toFixed(2)}s`;

    box.innerHTML = `
      <!-- Glowing Connector linking directly to the central Neon Pink DNA Strand -->
      <div class="dna-connector ${isLeft ? 'connector-to-right' : 'connector-to-left'}" aria-hidden="true">
        <div class="connector-line"></div>
        <div class="connector-node"></div>
      </div>

      <div class="box-inner-content">
        <div class="box-top">
          <div class="box-icon">${item.icon}</div>
          <span class="box-badge">${item.tag}</span>
        </div>
        <h3 class="box-title">${item.title}</h3>
        <p class="box-summary">${item.quickSummary}</p>
      </div>

      <div class="box-footer">
        <span class="box-action-text">
          <span>Explore Causes & Healing</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </span>
        <div class="box-selected-indicator" title="Currently viewing">
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
      </div>
    `;

    box.addEventListener('click', () => {
      selectInsecurity(item.id, true);
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectInsecurity(item.id, true);
      }
    });

    gridContainer.appendChild(box);
  });
}

function selectInsecurity(id, shouldScroll = false) {
  state.selectedInsecurityId = id;

  // Update box styles
  document.querySelectorAll('.insecurity-box').forEach(box => {
    const isSelected = box.dataset.id === id;
    box.classList.toggle('selected', isSelected);
    box.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Render details
  renderDeepDiveShowcase(id);

  if (shouldScroll) {
    const showcaseEl = document.getElementById('deep-dive-section');
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

/* ==========================================================================
   Deep Dive Showcase (Causes, Solutions, Positive Reframing)
   ========================================================================== */
function setupDeepDiveTabs() {
  const tabs = document.querySelectorAll('.deep-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const targetTab = tab.dataset.tab;
      state.activeDeepDiveTab = targetTab;

      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const activePanel = document.getElementById(`panel-${targetTab}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

function renderDeepDiveShowcase(id) {
  const data = INSECURITIES_DATA.find(item => item.id === id);
  if (!data) return;

  // Header Elements
  document.getElementById('deep-dive-title').textContent = data.title;
  document.getElementById('deep-dive-category').textContent = data.categoryLabel;
  document.getElementById('deep-dive-badge').textContent = data.tag;
  document.getElementById('deep-dive-hook').textContent = data.quickSummary;

  // 1. Positive Reframe Panel
  const reframePanel = document.getElementById('panel-reframe');
  if (reframePanel) {
    const savedEntry = state.journalEntries[data.id] || '';
    reframePanel.innerHTML = `
      <div class="reframe-container">
        <div class="reframe-box">
          <span class="reframe-tag">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>
            Loving Perspective Shift
          </span>
          <h3 class="reframe-headline">${data.positiveReframe.headline}</h3>
          <p class="reframe-text">${data.positiveReframe.text}</p>
          
          <div class="affirmation-card">
            <div class="affirmation-label">Daily Self-Love Mantra</div>
            <div class="affirmation-quote">“${data.affirmation}”</div>
            <button class="copy-affirmation-btn" id="copy-mantra-btn" data-affirmation="${data.affirmation.replace(/"/g, '&quot;')}">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              <span>Copy Mantra</span>
            </button>
          </div>
        </div>

        <div class="journal-box">
          <div class="journal-header">
            <div class="journal-icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </div>
            <h4 class="journal-title serif-font">Kindness Reflection</h4>
          </div>
          <div class="journal-prompt-text">
            ${data.journalPrompt}
          </div>
          <textarea 
            class="journal-textarea" 
            id="journal-input" 
            placeholder="Write your honest, loving thoughts here... (saved privately on your device)">${savedEntry}</textarea>
          <div class="journal-actions">
            <span class="journal-saved-msg" id="journal-saved-msg">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Saved privately
            </span>
            <button class="save-journal-btn" id="save-journal-btn">Save Note</button>
          </div>
        </div>
      </div>
    `;

    // Copy affirmation handler
    const copyBtn = document.getElementById('copy-mantra-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(data.affirmation).then(() => {
          showToast("Mantra copied to clipboard! Keep it close today. 🌸");
        });
      });
    }

    // Save journal handler
    const saveJournalBtn = document.getElementById('save-journal-btn');
    const journalInput = document.getElementById('journal-input');
    const savedMsg = document.getElementById('journal-saved-msg');

    if (saveJournalBtn && journalInput) {
      saveJournalBtn.addEventListener('click', () => {
        state.journalEntries[data.id] = journalInput.value;
        localStorage.setItem('embraceher_journals', JSON.stringify(state.journalEntries));
        savedMsg.style.display = 'inline-flex';
        showToast("Your reflection was safely saved to your device. 🌿");
        setTimeout(() => {
          savedMsg.style.display = 'none';
        }, 3000);
      });
    }
  }

  // 2. Causes Panel
  const causesPanel = document.getElementById('panel-causes');
  if (causesPanel) {
    causesPanel.innerHTML = `
      <div class="causes-list">
        ${data.causes.map((c, i) => `
          <div class="cause-item">
            <span class="cause-number">ROOT CAUSE 0${i + 1}</span>
            <h4 class="cause-title">${c.title}</h4>
            <p class="cause-detail">${c.detail}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. Solutions Panel
  const solutionsPanel = document.getElementById('panel-solutions');
  if (solutionsPanel) {
    solutionsPanel.innerHTML = `
      <div class="solutions-list">
        ${data.solutions.map((s, i) => `
          <div class="solution-item">
            <span class="solution-badge">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Step 0${i + 1} • Actionable Tool
            </span>
            <h4 class="solution-title">${s.title}</h4>
            <p class="solution-detail">${s.detail}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Deep dive footer action
  const jumpBtn = document.getElementById('jump-to-discussion-btn');
  if (jumpBtn) {
    jumpBtn.innerHTML = `
      <span>Join Community Discussion on "${data.title}"</span>
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    `;
    jumpBtn.onclick = () => {
      filterCommunityByTopic(data.id);
      const communityEl = document.getElementById('community-section');
      if (communityEl) {
        communityEl.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }
}

/* ==========================================================================
   Community Section & Comments Management
   ========================================================================== */
function initComments() {
  const localComments = localStorage.getItem('embraceher_comments');
  if (localComments) {
    try {
      state.comments = JSON.parse(localComments);
    } catch (e) {
      state.comments = INITIAL_COMMUNITY_COMMENTS;
    }
  } else {
    state.comments = INITIAL_COMMUNITY_COMMENTS;
    saveCommentsToStorage();
  }
  populateTopicFilters();
  renderComments();
}

function saveCommentsToStorage() {
  localStorage.setItem('embraceher_comments', JSON.stringify(state.comments));
}

function populateTopicFilters() {
  const filterContainer = document.getElementById('community-topic-filters');
  const postTopicSelect = document.getElementById('post-topic-select');
  if (!filterContainer) return;

  filterContainer.innerHTML = '';
  
  // "All Topics" Button
  const allBtn = document.createElement('button');
  allBtn.className = `topic-filter-btn ${state.communityFilterTopic === 'all' ? 'active' : ''}`;
  allBtn.dataset.topic = 'all';
  allBtn.innerHTML = `
    <span>All Discussions</span>
    <span class="topic-filter-count">${state.comments.length}</span>
  `;
  allBtn.addEventListener('click', () => filterCommunityByTopic('all'));
  filterContainer.appendChild(allBtn);

  // Insecurities as topics
  INSECURITIES_DATA.forEach(item => {
    const count = state.comments.filter(c => c.insecurityId === item.id).length;
    const btn = document.createElement('button');
    btn.className = `topic-filter-btn ${state.communityFilterTopic === item.id ? 'active' : ''}`;
    btn.dataset.topic = item.id;
    btn.innerHTML = `
      <span>${item.title}</span>
      <span class="topic-filter-count">${count}</span>
    `;
    btn.addEventListener('click', () => filterCommunityByTopic(item.id));
    filterContainer.appendChild(btn);
  });

  // Populate Dropdown in New Post Form
  if (postTopicSelect) {
    postTopicSelect.innerHTML = INSECURITIES_DATA.map(item => `
      <option value="${item.id}" ${item.id === state.selectedInsecurityId ? 'selected' : ''}>
        ${item.title}
      </option>
    `).join('');
  }
}

function filterCommunityByTopic(topicId) {
  state.communityFilterTopic = topicId;
  
  // Highlight active sidebar filter
  document.querySelectorAll('.topic-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.topic === topicId);
  });

  renderComments();
}

function renderComments() {
  const feedContainer = document.getElementById('comments-feed');
  const countTitle = document.getElementById('comments-count-title');
  if (!feedContainer) return;

  let filtered = state.communityFilterTopic === 'all'
    ? state.comments
    : state.comments.filter(c => c.insecurityId === state.communityFilterTopic);

  // Sort
  if (state.communitySort === 'popular') {
    filtered = [...filtered].sort((a, b) => b.likes - a.likes);
  } else {
    // Keep recent order
    filtered = [...filtered];
  }

  if (countTitle) {
    const topicObj = INSECURITIES_DATA.find(i => i.id === state.communityFilterTopic);
    const label = topicObj ? topicObj.title : 'All Topics';
    countTitle.textContent = `${filtered.length} Reflections & Stories in "${label}"`;
  }

  if (filtered.length === 0) {
    feedContainer.innerHTML = `
      <div style="background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-lg); padding: 3rem; text-align: center;">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">No stories shared under this topic yet</p>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">
          Be the brave soul who opens the door for others. Share your experience or words of encouragement.
        </p>
      </div>
    `;
    return;
  }

  feedContainer.innerHTML = '';

  filtered.forEach(comm => {
    const card = document.createElement('div');
    card.className = 'comment-card';
    card.dataset.id = comm.id;

    // Pick avatar color gradient
    const avatarBg = comm.avatarColor || AVATAR_COLORS[Math.abs(hashString(comm.author)) % AVATAR_COLORS.length];

    card.innerHTML = `
      <div class="comment-header">
        <div class="comment-author-info">
          <div class="comment-avatar" style="background: ${avatarBg};">
            ${comm.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <div class="comment-author-name">${escapeHtml(comm.author)}</div>
            <div class="comment-timestamp">${comm.timestamp}</div>
          </div>
        </div>
        <span class="comment-topic-pill">${escapeHtml(comm.insecurityTitle)}</span>
      </div>

      <div class="comment-body">
        ${escapeHtml(comm.content)}
      </div>

      <div class="comment-footer-actions">
        <button class="like-btn ${comm.userLiked ? 'liked' : ''}" data-id="${comm.id}">
          <svg width="16" height="16" fill="${comm.userLiked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <span class="like-count">${comm.likes}</span>
          <span>${comm.likes === 1 ? 'Hug' : 'Hugs'}</span>
        </button>

        <button class="reply-toggle-btn" data-id="${comm.id}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span>Reply (${comm.replies ? comm.replies.length : 0})</span>
        </button>
      </div>

      <!-- Replies list -->
      ${comm.replies && comm.replies.length > 0 ? `
        <div class="replies-container">
          ${comm.replies.map(rep => `
            <div class="reply-item">
              <div class="reply-header">
                <span class="reply-author">${escapeHtml(rep.author)}</span>
                <span class="reply-timestamp">${rep.timestamp}</span>
              </div>
              <p class="reply-content">${escapeHtml(rep.content)}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Reply Box Form -->
      <form class="reply-form-box" id="reply-form-${comm.id}" data-id="${comm.id}">
        <input type="text" class="reply-input" placeholder="Offer loving encouragement or a solution..." required />
        <button type="submit" class="send-reply-btn">Reply</button>
      </form>
    `;

    // Heart / Hug Handler
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      toggleLikeComment(comm.id);
    });

    // Toggle Reply Box
    const replyToggleBtn = card.querySelector('.reply-toggle-btn');
    const replyForm = card.querySelector(`#reply-form-${comm.id}`);
    replyToggleBtn.addEventListener('click', () => {
      replyForm.classList.toggle('open');
      if (replyForm.classList.contains('open')) {
        replyForm.querySelector('input').focus();
      }
    });

    // Submit Reply
    replyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const replyInput = replyForm.querySelector('.reply-input');
      const text = replyInput.value.trim();
      if (!text) return;

      submitReply(comm.id, text);
    });

    feedContainer.appendChild(card);
  });
}

function toggleLikeComment(commentId) {
  const comm = state.comments.find(c => c.id === commentId);
  if (!comm) return;

  comm.userLiked = !comm.userLiked;
  comm.likes += comm.userLiked ? 1 : -1;
  saveCommentsToStorage();
  renderComments();
  
  if (comm.userLiked) {
    showToast("Sent a warm hug and love to this sister! 💖");
  }
}

function submitReply(commentId, content) {
  const comm = state.comments.find(c => c.id === commentId);
  if (!comm) return;

  if (!comm.replies) comm.replies = [];

  const alias = SAFE_ALIASES[Math.floor(Math.random() * SAFE_ALIASES.length)];
  comm.replies.push({
    id: `rep-${Date.now()}`,
    author: `${alias} (You)`,
    timestamp: "Just now",
    content: content
  });

  saveCommentsToStorage();
  renderComments();
  showToast("Your encouraging reply has been posted! 🌸");
}

function setupCommunityHandlers() {
  // Sort Buttons
  const sortRecentBtn = document.getElementById('sort-recent-btn');
  const sortPopularBtn = document.getElementById('sort-popular-btn');

  if (sortRecentBtn && sortPopularBtn) {
    sortRecentBtn.addEventListener('click', () => {
      state.communitySort = 'recent';
      sortRecentBtn.classList.add('active');
      sortPopularBtn.classList.remove('active');
      renderComments();
    });

    sortPopularBtn.addEventListener('click', () => {
      state.communitySort = 'popular';
      sortPopularBtn.classList.add('active');
      sortRecentBtn.classList.remove('active');
      renderComments();
    });
  }

  // Create Post Form
  const postForm = document.getElementById('create-post-form');
  const authorInput = document.getElementById('post-author-name');
  const anonymousCheckbox = document.getElementById('post-anonymous-checkbox');
  const topicSelect = document.getElementById('post-topic-select');
  const contentInput = document.getElementById('post-content');

  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const content = contentInput.value.trim();
      if (!content) return;

      const isAnonymous = anonymousCheckbox.checked;
      let authorName = authorInput.value.trim();
      if (isAnonymous || !authorName) {
        authorName = `${SAFE_ALIASES[Math.floor(Math.random() * SAFE_ALIASES.length)]} (Anonymous)`;
      }

      const selectedTopicId = topicSelect.value;
      const topicObj = INSECURITIES_DATA.find(i => i.id === selectedTopicId);
      const topicTitle = topicObj ? topicObj.title : 'General Encouragement';

      const randomColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

      const newPost = {
        id: `comm-${Date.now()}`,
        author: authorName,
        avatarColor: randomColor,
        insecurityId: selectedTopicId,
        insecurityTitle: topicTitle,
        timestamp: "Just now",
        content: content,
        likes: 1,
        userLiked: true,
        replies: []
      };

      state.comments.unshift(newPost);
      saveCommentsToStorage();
      
      // Reset form
      contentInput.value = '';
      if (!isAnonymous) authorInput.value = '';

      populateTopicFilters();
      renderComments();
      showToast("Thank you for sharing your heart with the sisterhood circle! 🤍");
    });
  }
}

/* ==========================================================================
   Guided 1-Minute Calming Breathing Exercise Modal (Box Breathing)
   ========================================================================== */
function setupBreathingModal() {
  const openBtn = document.getElementById('open-breathe-btn');
  const closeBtn = document.getElementById('close-breathe-btn');
  const modal = document.getElementById('breathing-modal');
  const circle = document.getElementById('breathing-circle');
  const instruction = document.getElementById('breathing-instruction');
  const timer = document.getElementById('breathing-timer');
  const toggleCycleBtn = document.getElementById('toggle-breath-cycle-btn');

  if (!modal || !openBtn) return;

  let breathInterval = null;
  let cycleState = 0; // 0: Inhale, 1: Hold, 2: Exhale, 3: Rest
  let isRunning = false;
  let remainingSeconds = 60;

  function runPhase() {
    if (!isRunning) return;

    if (cycleState === 0) {
      // Inhale
      circle.className = 'breath-circle inhale';
      instruction.textContent = "Breathe In Slowly...";
      cycleState = 1;
    } else if (cycleState === 1) {
      // Hold
      circle.className = 'breath-circle hold';
      instruction.textContent = "Hold Gently & Feel Your Strength...";
      cycleState = 2;
    } else if (cycleState === 2) {
      // Exhale
      circle.className = 'breath-circle exhale';
      instruction.textContent = "Exhale All Tension & Self-Doubt...";
      cycleState = 3;
    } else {
      // Rest
      circle.className = 'breath-circle';
      instruction.textContent = "Rest in Peaceful Stillness...";
      cycleState = 0;
    }

    remainingSeconds -= 4;
    if (remainingSeconds <= 0) {
      stopBreathing();
      instruction.textContent = "Wonderful. You are safe, whole, and grounded. 🌸";
      timer.textContent = "Session Complete";
      toggleCycleBtn.textContent = "Start Again";
      return;
    }

    timer.textContent = `${Math.max(0, remainingSeconds)}s remaining`;
  }

  function startBreathing() {
    isRunning = true;
    remainingSeconds = 60;
    cycleState = 0;
    toggleCycleBtn.textContent = "Pause Session";
    runPhase();
    breathInterval = setInterval(runPhase, 4000);
  }

  function stopBreathing() {
    isRunning = false;
    clearInterval(breathInterval);
    circle.className = 'breath-circle';
    toggleCycleBtn.textContent = "Resume";
  }

  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    startBreathing();
  });

  closeBtn.addEventListener('click', () => {
    stopBreathing();
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      stopBreathing();
      modal.classList.remove('open');
    }
  });

  toggleCycleBtn.addEventListener('click', () => {
    if (isRunning) {
      stopBreathing();
    } else {
      startBreathing();
    }
  });
}

/* ==========================================================================
   Affirmation Shuffler
   ========================================================================== */
function setupAffirmationShuffler() {
  const shuffleBtn = document.getElementById('shuffle-affirmation-btn');
  const quoteEl = document.getElementById('hero-daily-affirmation-text');
  if (!shuffleBtn || !quoteEl) return;

  let lastIndex = 0;
  shuffleBtn.addEventListener('click', () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * DAILY_AFFIRMATIONS.length);
    } while (nextIndex === lastIndex && DAILY_AFFIRMATIONS.length > 1);

    lastIndex = nextIndex;
    quoteEl.style.opacity = 0;
    setTimeout(() => {
      quoteEl.textContent = `“${DAILY_AFFIRMATIONS[nextIndex]}”`;
      quoteEl.style.opacity = 1;
    }, 200);
  });
}

/* ==========================================================================
   Diverse Women Artwork Modal
   ========================================================================== */
function setupArtModal() {
  const openBtn = document.getElementById('open-art-modal-btn');
  const closeBtn = document.getElementById('close-art-modal-btn');
  const modal = document.getElementById('art-modal');
  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });
}

/* ==========================================================================
   Utilities
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
