/**
 * DAYREST HARARE - PARTNER CENTRAL & SUPPLIES EXTRANET CONTROLLER
 * Real-time Property Inventory, Room Rates, Supplies Procurement & Booking Operations
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. STATE MANAGEMENT
  // =========================================================================
  let hotels = [];
  let bookings = [];
  let supplies = [];
  let selectedProperty = 'all';
  let activeTab = 'dashboard';

  // Format GBP/USD
  function formatMoney(amount, curr = 'GBP') {
    const symbol = curr === 'USD' ? '$' : '£';
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  }

  // Toast Notification
  function showToast(msg) {
    const toast = document.getElementById('extranet-toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // =========================================================================
  // 2. DATA INITIALIZATION & LOCALSTORAGE SYNC
  // =========================================================================
  async function loadData() {
    // 1. Hotels
    const cachedHotels = localStorage.getItem('dayrest_harare_hotels');
    if (cachedHotels) {
      try { hotels = JSON.parse(cachedHotels); } catch (e) {}
    }
    if (!hotels || hotels.length === 0) {
      try {
        const res = await fetch('data/hotels.json');
        hotels = await res.json();
        localStorage.setItem('dayrest_harare_hotels', JSON.stringify(hotels));
      } catch (e) {
        console.error('Error fetching hotels.json:', e);
      }
    }

    // 2. Bookings
    const cachedBookings = localStorage.getItem('dayrest_harare_bookings');
    if (cachedBookings) {
      try { bookings = JSON.parse(cachedBookings); } catch (e) {}
    }
    if (!bookings || bookings.length === 0) {
      try {
        const res = await fetch('data/bookings.json');
        bookings = await res.json();
        localStorage.setItem('dayrest_harare_bookings', JSON.stringify(bookings));
      } catch (e) {
        console.error('Error fetching bookings.json:', e);
      }
    }

    // 3. Supplies
    const cachedSupplies = localStorage.getItem('dayrest_harare_supplies');
    if (cachedSupplies) {
      try { supplies = JSON.parse(cachedSupplies); } catch (e) {}
    }
    if (!supplies || supplies.length === 0) {
      try {
        const res = await fetch('data/supplies.json');
        supplies = await res.json();
        localStorage.setItem('dayrest_harare_supplies', JSON.stringify(supplies));
      } catch (e) {
        console.error('Error fetching supplies.json:', e);
      }
    }

    initExtranetUI();
  }

  // Listen for storage events (e.g. customer makes booking on index.html!)
  window.addEventListener('storage', (e) => {
    if (e.key === 'dayrest_harare_bookings') {
      try {
        bookings = JSON.parse(e.newValue);
        renderDashboard();
        showToast('🔔 New reservation received from Dayrest Consumer site!');
      } catch (err) {}
    }
  });

  // =========================================================================
  // 3. UI CONTROLS & TAB NAVIGATION
  // =========================================================================
  function initExtranetUI() {
    setupPropertyDropdown();
    setupTabNavigation();
    renderDashboard();
    renderInventoryTable();
    renderSuppliesTable();
    setupAddPropertyForm();
    setupReorderModal();
  }

  function setupPropertyDropdown() {
    const select = document.getElementById('extranet-property-select');
    if (!select) return;

    select.innerHTML = `
      <option value="all">All Managed Harare Properties (${hotels.length})</option>
      ${hotels.map(h => `<option value="${h.id}">${h.name} (${h.neighborhood})</option>`).join('')}
    `;

    select.addEventListener('change', (e) => {
      selectedProperty = e.target.value;
      renderDashboard();
      renderInventoryTable();
      renderSuppliesTable();
    });
  }

  function setupTabNavigation() {
    document.querySelectorAll('.extranet-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        activeTab = targetTab;

        document.querySelectorAll('.extranet-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
        const targetSec = document.getElementById(`tab-section-${targetTab}`);
        if (targetSec) targetSec.classList.add('active');
      });
    });
  }

  // =========================================================================
  // 4. TAB 1: DASHBOARD & RECENT BOOKINGS
  // =========================================================================
  function renderDashboard() {
    // Filter bookings based on property selection
    const relevantBookings = selectedProperty === 'all' 
      ? bookings 
      : bookings.filter(b => b.hotelId === selectedProperty);

    // Compute KPIs
    const totalRev = relevantBookings.reduce((sum, b) => sum + (b.totalGBP || 0), 0);
    const activeCount = relevantBookings.length;
    const avgRate = activeCount > 0 ? Math.round(totalRev / activeCount) : 115;
    const occupancy = selectedProperty === 'all' ? 84.6 : 89.2;

    const elRev = document.getElementById('kpi-revenue');
    const elOcc = document.getElementById('kpi-occupancy');
    const elBookings = document.getElementById('kpi-bookings');
    const elAdr = document.getElementById('kpi-adr');

    if (elRev) elRev.textContent = `£${totalRev.toLocaleString()}`;
    if (elOcc) elOcc.textContent = `${occupancy}%`;
    if (elBookings) elBookings.textContent = `${activeCount}`;
    if (elAdr) elAdr.textContent = `£${avgRate}`;

    // Render Recent Bookings Table
    const tbody = document.getElementById('recent-bookings-tbody');
    if (!tbody) return;

    if (relevantBookings.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: #64748B;">
            No bookings recorded for this property yet.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = relevantBookings.map(b => {
      let statusClass = 'confirmed';
      if (b.status === 'Arriving Today') statusClass = 'arriving';
      if (b.status === 'Checked In') statusClass = 'checked-in';

      return `
        <tr>
          <td><strong style="color: #0A58CA;">${b.id}</strong></td>
          <td>
            <strong>${b.guestName}</strong>
            <div style="font-size: 0.76rem; color: #64748B;">${b.email}</div>
          </td>
          <td>
            <strong>${b.hotelName}</strong>
            <div style="font-size: 0.76rem; color: #64748B;">${b.roomName}</div>
          </td>
          <td>
            <span>${b.checkIn} – ${b.checkOut}</span>
            <div style="font-size: 0.76rem; color: #64748B;">${b.nights} night(s) • ${b.guests} guest(s)</div>
          </td>
          <td><strong>£${b.totalGBP}</strong></td>
          <td>
            <span class="badge-status ${statusClass}">${b.status}</span>
          </td>
          <td>
            <button class="btn-action-sm btn-action-outline btn-toggle-status" data-booking-id="${b.id}">
              Next Status
            </button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-toggle-status').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-booking-id');
        toggleBookingStatus(id);
      });
    });
  }

  function toggleBookingStatus(id) {
    const b = bookings.find(item => item.id === id);
    if (!b) return;

    if (b.status === 'Confirmed') b.status = 'Arriving Today';
    else if (b.status === 'Arriving Today') b.status = 'Checked In';
    else if (b.status === 'Checked In') b.status = 'Confirmed';

    localStorage.setItem('dayrest_harare_bookings', JSON.stringify(bookings));
    renderDashboard();
    showToast(`Updated reservation ${id} status to: ${b.status}`);
  }

  // =========================================================================
  // 5. TAB 2: ROOM RATES & INVENTORY MANAGEMENT
  // =========================================================================
  function renderInventoryTable() {
    const tbody = document.getElementById('inventory-tbody');
    if (!tbody) return;

    const filteredHotels = selectedProperty === 'all'
      ? hotels
      : hotels.filter(h => h.id === selectedProperty);

    let rowsHtml = '';

    filteredHotels.forEach(hotel => {
      hotel.rooms.forEach(room => {
        rowsHtml += `
          <tr>
            <td>
              <strong>${hotel.name}</strong>
              <div style="font-size: 0.76rem; color: #64748B;">📍 ${hotel.neighborhood}</div>
            </td>
            <td>
              <strong>${room.name}</strong>
              <div style="font-size: 0.76rem; color: #64748B;">🛏️ ${room.bed} • ${room.size}</div>
            </td>
            <td>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1rem; font-weight: 800; color: #0B192C;">£${room.priceGBP}</span>
                <button class="btn-action-sm btn-action-outline btn-edit-price" data-hotel-id="${hotel.id}" data-room-id="${room.id}" data-price="${room.priceGBP}">
                  ✏️ Edit
                </button>
              </div>
            </td>
            <td>
              <span style="font-weight: 700;">${room.available} rooms</span>
            </td>
            <td>
              <span class="badge-status ${room.available > 0 ? 'in-stock' : 'reorder'}">
                ${room.available > 0 ? 'Available' : 'Sold Out'}
              </span>
            </td>
            <td>
              <button class="btn-action-sm btn-action-primary btn-toggle-room-stock" data-hotel-id="${hotel.id}" data-room-id="${room.id}">
                ${room.available > 0 ? 'Mark Sold Out' : 'Restock 5 Rooms'}
              </button>
            </td>
          </tr>
        `;
      });
    });

    tbody.innerHTML = rowsHtml;

    // Edit Price Handlers
    tbody.querySelectorAll('.btn-edit-price').forEach(btn => {
      btn.addEventListener('click', () => {
        const hId = btn.getAttribute('data-hotel-id');
        const rId = btn.getAttribute('data-room-id');
        const currentP = btn.getAttribute('data-price');
        const newPrice = prompt(`Enter new nightly rate in GBP for this room (Current: £${currentP}):`, currentP);

        if (newPrice && !isNaN(newPrice) && Number(newPrice) > 0) {
          updateRoomPrice(hId, rId, Number(newPrice));
        }
      });
    });

    // Toggle Availability Handlers
    tbody.querySelectorAll('.btn-toggle-room-stock').forEach(btn => {
      btn.addEventListener('click', () => {
        const hId = btn.getAttribute('data-hotel-id');
        const rId = btn.getAttribute('data-room-id');
        toggleRoomStock(hId, rId);
      });
    });
  }

  function updateRoomPrice(hotelId, roomId, newPriceGBP) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;
    const room = hotel.rooms.find(r => r.id === roomId);
    if (!room) return;

    room.priceGBP = newPriceGBP;
    // Also update base hotel price if it was the primary room
    if (hotel.rooms[0].id === roomId) {
      hotel.priceGBP = newPriceGBP;
      hotel.priceUSD = Math.round(newPriceGBP * 1.28);
    }

    localStorage.setItem('dayrest_harare_hotels', JSON.stringify(hotels));
    renderInventoryTable();
    showToast(`✓ Updated ${hotel.name} - ${room.name} price to £${newPriceGBP}! Synced to consumer site.`);
  }

  function toggleRoomStock(hotelId, roomId) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;
    const room = hotel.rooms.find(r => r.id === roomId);
    if (!room) return;

    room.available = room.available > 0 ? 0 : 5;
    localStorage.setItem('dayrest_harare_hotels', JSON.stringify(hotels));
    renderInventoryTable();
    showToast(`✓ Updated room inventory for ${room.name} to ${room.available} available.`);
  }

  // =========================================================================
  // 6. TAB 3: HOTEL SUPPLIES & PROCUREMENT EXTRANET ("SUPPLIES EXTRANET")
  // =========================================================================
  function renderSuppliesTable() {
    const tbody = document.getElementById('supplies-tbody');
    if (!tbody) return;

    tbody.innerHTML = supplies.map(item => {
      let statusBadge = 'in-stock';
      if (item.status === 'Low Stock') statusBadge = 'low-stock';
      if (item.status === 'Reorder Required') statusBadge = 'reorder';

      return `
        <tr>
          <td>
            <strong style="color: #0A58CA;">${item.sku}</strong>
            <div style="font-size: 0.76rem; color: #64748B;">${item.category}</div>
          </td>
          <td>
            <strong>${item.name}</strong>
            <div style="font-size: 0.76rem; color: #64748B;">Unit: ${item.unit}</div>
          </td>
          <td>${item.supplierName}</td>
          <td>
            <div style="display: flex; align-items: baseline; gap: 0.35rem;">
              <strong style="font-size: 1.1rem; color: #0B192C;">${item.currentStock}</strong>
              <span style="font-size: 0.75rem; color: #64748B;">(Min: ${item.reorderThreshold})</span>
            </div>
          </td>
          <td>
            <strong>£${item.unitPriceGBP}</strong>
            <span style="font-size: 0.75rem; color: #64748B;">($${item.unitPriceUSD})</span>
          </td>
          <td>
            <span class="badge-status ${statusBadge}">${item.status}</span>
          </td>
          <td>
            <div style="font-size: 0.78rem; color: #334155;">${item.allocatedHotels.join(', ')}</div>
          </td>
          <td>
            <button class="btn-action-sm btn-action-reorder btn-trigger-reorder" data-item-id="${item.id}">
              📦 Order Stock
            </button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-trigger-reorder').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-item-id');
        openReorderModal(id);
      });
    });
  }

  // Reorder Supplies Modal
  const reorderModal = document.getElementById('reorder-supplies-modal');
  const reorderForm = document.getElementById('reorder-supplies-form');

  function openReorderModal(itemId) {
    const item = supplies.find(s => s.id === itemId);
    if (!item || !reorderModal) return;

    document.getElementById('reorder-item-id').value = item.id;
    document.getElementById('reorder-item-name').textContent = `${item.name} (${item.sku})`;
    document.getElementById('reorder-supplier-name').textContent = item.supplierName;
    document.getElementById('reorder-unit-price').textContent = `£${item.unitPriceGBP} / ${item.unit}`;
    document.getElementById('reorder-qty').value = 50;

    reorderModal.showModal();
  }

  function setupReorderModal() {
    if (!reorderForm) return;

    reorderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemId = document.getElementById('reorder-item-id').value;
      const qty = Number(document.getElementById('reorder-qty').value);
      const targetHotel = document.getElementById('reorder-hotel-target').value;

      const item = supplies.find(s => s.id === itemId);
      if (item) {
        item.currentStock += qty;
        item.status = 'In Stock';
        item.lastRestocked = new Date().toISOString().split('T')[0];
        localStorage.setItem('dayrest_harare_supplies', JSON.stringify(supplies));
        renderSuppliesTable();
        reorderModal.close();
        showToast(`✓ Successfully ordered ${qty} units of ${item.name} dispatched to ${targetHotel}!`);
      }
    });

    document.querySelectorAll('.btn-close-reorder').forEach(btn => {
      btn.addEventListener('click', () => reorderModal.close());
    });
  }

  // =========================================================================
  // 7. TAB 4: PROPERTY ONBOARDING ("LIST A NEW HARARE PROPERTY")
  // =========================================================================
  function setupAddPropertyForm() {
    const form = document.getElementById('onboard-hotel-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('prop-name').value.trim();
      const stars = Number(document.getElementById('prop-stars').value);
      const neighborhood = document.getElementById('prop-neighborhood').value;
      const address = document.getElementById('prop-address').value.trim();
      const priceGBP = Number(document.getElementById('prop-price-gbp').value);
      const managerName = document.getElementById('prop-manager').value.trim();
      const phone = document.getElementById('prop-phone').value.trim();
      const email = document.getElementById('prop-email').value.trim();
      const description = document.getElementById('prop-desc').value.trim();

      const newId = 'harare-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 25);

      const newHotel = {
        id: newId,
        name: name,
        starRating: stars,
        reviewScore: 8.8,
        reviewLabel: 'Wonderful',
        reviewCount: 45,
        neighborhood: neighborhood,
        address: address,
        distanceCityCentre: '3.0 km from city centre',
        priceGBP: priceGBP,
        priceUSD: Math.round(priceGBP * 1.28),
        priceEUR: Math.round(priceGBP * 1.18),
        priceZAR: Math.round(priceGBP * 23.5),
        taxesAndFeesGBP: Math.round(priceGBP * 0.15),
        image: 'assets/images/hero-harare.jpg',
        badge: 'New On Dayrest',
        badgeClass: 'top',
        cancellationPolicy: 'Free cancellation up to 48 hours',
        paymentPolicy: 'Reserve now, pay at stay',
        amenities: ['Pool', 'Free WiFi', 'Breakfast included', 'Free parking', 'Restaurant'],
        highlights: [
          'Newly verified Dayrest Harare Partner property',
          'Full concierge and hospitality standards',
          'Fast WiFi and solar backup'
        ],
        description: description,
        supplier: {
          id: 'SUP-NEW-' + Math.floor(100 + Math.random() * 900),
          managerName: managerName,
          email: email,
          phone: phone,
          contractStatus: 'Active'
        },
        rooms: [
          {
            id: `rm-${newId}-deluxe`,
            name: 'Executive Deluxe Suite',
            bed: '1 Extra-Large King Bed',
            size: '38 m²',
            priceGBP: priceGBP,
            available: 8,
            features: ['Free breakfast', 'High-speed WiFi', 'En-suite bathroom', 'Air conditioning']
          }
        ]
      };

      hotels.unshift(newHotel);
      localStorage.setItem('dayrest_harare_hotels', JSON.stringify(hotels));

      // Reset and redirect to inventory
      form.reset();
      setupPropertyDropdown();
      renderInventoryTable();

      // Switch to Inventory Tab
      const invBtn = document.querySelector('[data-tab="inventory"]');
      if (invBtn) invBtn.click();

      showToast(`🎉 Successfully onboarded ${name}! It is now live in the Harare search engine!`);
    });
  }

  // Kickoff
  loadData();
});
