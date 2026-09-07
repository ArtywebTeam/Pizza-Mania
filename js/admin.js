/**
 * Pizza Mania - Admin Dashboard Logic
 * Standalone reservation management with live search, date filter, guest tally, and instant status updates.
 */

// Initial demo seed data if local storage is empty
const INITIAL_DEMO_RESERVATIONS = [
  {
    id: 'res_demo_1',
    full_name: 'Marco Bellini',
    phone: '338 1234567',
    email: 'marco.bellini@example.com',
    guests: 4,
    date: new Date().toISOString().slice(0, 10),
    time: '20:00',
    special_requests: 'Tavolo vicino alla finestra se possibile, grazie!',
    status: 'pending',
    created_date: new Date().toISOString()
  },
  {
    id: 'res_demo_2',
    full_name: 'Giulia Rossi',
    phone: '349 9876543',
    email: 'giulia.rossi@example.com',
    guests: 2,
    date: new Date().toISOString().slice(0, 10),
    time: '19:30',
    special_requests: 'Un seggiolone per bimbo.',
    status: 'confirmed',
    created_date: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'res_demo_3',
    full_name: 'Matteo Colombo',
    phone: '333 4567890',
    email: 'm.colombo@example.com',
    guests: 6,
    date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    time: '21:00',
    special_requests: 'Festa di compleanno.',
    status: 'confirmed',
    created_date: new Date(Date.now() - 7200000).toISOString()
  }
];

// Load reservations
function getReservations() {
  const stored = localStorage.getItem('pizzamania_reservations');
  if (!stored) {
    localStorage.setItem('pizzamania_reservations', JSON.stringify(INITIAL_DEMO_RESERVATIONS));
    return INITIAL_DEMO_RESERVATIONS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

// Save reservations
function saveReservations(reservations) {
  localStorage.setItem('pizzamania_reservations', JSON.stringify(reservations));
}

// Update reservation status
function updateStatus(id, newStatus) {
  const list = getReservations();
  const updated = list.map(item => item.id === id ? { ...item, status: newStatus } : item);
  saveReservations(updated);
  renderDashboard();
}

// Render Dashboard
function renderDashboard() {
  const reservations = getReservations();
  const searchInput = document.getElementById('admin-search');
  const dateInput = document.getElementById('admin-date-filter');
  const listContainer = document.getElementById('admin-reservations-list');
  const guestsCounter = document.getElementById('admin-today-guests');
  const emptyState = document.getElementById('admin-empty-state');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const filterDate = dateInput ? dateInput.value : '';

  // Calculate today's confirmed/pending guests
  const todayStr = new Date().toISOString().slice(0, 10);
  const todayGuests = reservations
    .filter(r => r.date === todayStr && r.status !== 'cancelled')
    .reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);

  if (guestsCounter) {
    guestsCounter.textContent = todayGuests;
  }

  // Filter list
  const filtered = reservations.filter(r => {
    const matchesSearch = !query || r.full_name.toLowerCase().includes(query) || (r.phone && r.phone.includes(query));
    const matchesDate = !filterDate || r.date === filterDate;
    return matchesSearch && matchesDate;
  });

  if (!listContainer) return;

  if (filtered.length === 0) {
    listContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  const badgeClasses = {
    pending: 'badge-pending',
    confirmed: 'badge-confirmed',
    cancelled: 'badge-cancelled',
    completed: 'badge-completed'
  };

  listContainer.innerHTML = filtered.map(item => `
    <article class="res-card">
      <div class="res-card-top">
        <div>
          <h3 class="res-name">${escapeHtml(item.full_name)}</h3>
          <p class="res-meta">${item.date} · ${item.time} · ${item.guests} ospiti</p>
        </div>
        <span class="res-badge ${badgeClasses[item.status] || 'badge-pending'}">${item.status}</span>
      </div>

      <div class="res-contact">
        <p>${escapeHtml(item.phone)}${item.email ? ` · ${escapeHtml(item.email)}` : ''}</p>
        ${item.special_requests ? `<p class="res-requests">“${escapeHtml(item.special_requests)}”</p>` : ''}
      </div>

      <div class="res-actions-grid">
        <button onclick="updateStatus('${item.id}', 'confirmed')" class="btn-status-action btn-confirm">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Conferma</span>
        </button>
        <button onclick="updateStatus('${item.id}', 'cancelled')" class="btn-status-action btn-cancel">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          <span>Annulla</span>
        </button>
        <button onclick="updateStatus('${item.id}', 'completed')" class="btn-status-action btn-complete">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>Conclusa</span>
        </button>
      </div>
    </article>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();

  const searchInput = document.getElementById('admin-search');
  if (searchInput) {
    searchInput.addEventListener('input', renderDashboard);
  }

  const dateInput = document.getElementById('admin-date-filter');
  if (dateInput) {
    dateInput.addEventListener('change', renderDashboard);
  }
});
