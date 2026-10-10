/**
 * DAYREST HARARE - CORE CONSUMER SEARCH & BOOKING CONTROLLER
 * Cloned from Expedia Travel UK | Harare, Zimbabwe Exclusive Catalog
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. CURRENCY CONVERSION CONFIGURATION
  // =========================================================================
  const CURRENCIES = {
    GBP: { symbol: '£', rate: 1.0, code: 'GBP', name: 'British Pound' },
    USD: { symbol: '$', rate: 1.28, code: 'USD', name: 'US Dollar' },
    EUR: { symbol: '€', rate: 1.18, code: 'EUR', name: 'Euro' },
    ZAR: { symbol: 'R ', rate: 23.5, code: 'ZAR', name: 'South African Rand' }
  };

  let currentCurrency = 'GBP';

  // =========================================================================
  // 2. STATE & DATA INITIALIZATION
  // =========================================================================
  let hotelsData = [];
  let activeHotel = null;
  let activeRoom = null;
  let favorites = JSON.parse(localStorage.getItem('dayrest_favorites') || '[]');

  // Search & Filter State
  const filterState = {
    destination: 'Harare, Harare Province, Zimbabwe',
    propertyName: '',
    maxPrice: 300,
    minReviewScore: 0,
    starRatings: [],
    neighborhoods: [],
    amenities: [],
    freeCancellationOnly: false,
    sortBy: 'recommended',
    quickFilter: null
  };

  // Autocomplete Suggestions for Harare
  const HARARE_LOCATIONS = [
    { title: 'Harare, Harare Province, Zimbabwe', subtitle: 'All City Areas (15 Hotels)', type: 'city' },
    { title: 'Harare CBD', subtitle: 'Central Business District, Africa Unity Square', type: 'area' },
    { title: 'Borrowdale', subtitle: 'Sam Levy’s Village, Luxury Suburb', type: 'area' },
    { title: 'Newlands', subtitle: 'Newlands Shopping Centre, Garden Lodges', type: 'area' },
    { title: 'Highlands', subtitle: 'Enterprise Road, Executive Apartments', type: 'area' },
    { title: 'Avondale', subtitle: 'Avondale Flea Market, Boutique Stays', type: 'area' },
    { title: 'Greendale', subtitle: 'Samora Machel Ave East, Lush Retreats', type: 'area' },
    { title: 'Robert Gabriel Mugabe Intl Airport (HRE)', subtitle: 'Harare Airport Vicinity (18 km)', type: 'airport' }
  ];

  // Helper: Format Price
  function formatPrice(amountGBP) {
    const curr = CURRENCIES[currentCurrency] || CURRENCIES.GBP;
    const converted = Math.round(amountGBP * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  }

  // Load Data: Fallback to data/hotels.json if localStorage is empty
  async function loadHotelsData() {
    const cached = localStorage.getItem('dayrest_harare_hotels');
    if (cached) {
      try {
        hotelsData = JSON.parse(cached);
        initUI();
        return;
      } catch (e) {
        console.warn('Invalid cached hotels, loading fresh JSON', e);
      }
    }

    try {
      const res = await fetch('data/hotels.json');
      hotelsData = await res.json();
      localStorage.setItem('dayrest_harare_hotels', JSON.stringify(hotelsData));
    } catch (e) {
      console.error('Failed to load hotels.json:', e);
    }
    initUI();
  }

  // Listen to cross-tab storage changes from Extranet!
  window.addEventListener('storage', (e) => {
    if (e.key === 'dayrest_harare_hotels') {
      try {
        hotelsData = JSON.parse(e.newValue);
        renderHotelList();
      } catch (err) {}
    }
  });

  // =========================================================================
  // 3. UI INITIALIZATION & EVENT BINDINGS
  // =========================================================================
  function initUI() {
    setupCurrencySelector();
    setupAutocomplete();
    setupFilters();
    setupModals();
    renderHotelList();
  }

  // Currency Selector
  function setupCurrencySelector() {
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) {
      currencySelect.value = currentCurrency;
      currencySelect.addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        renderHotelList();
        if (activeHotel) renderRoomsModal(activeHotel);
      });
    }
  }

  // Autocomplete for Destination
  function setupAutocomplete() {
    const input = document.getElementById('search-destination-input');
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!input || !dropdown) return;

    input.addEventListener('focus', () => {
      renderAutocomplete(input.value);
      dropdown.classList.add('open');
    });

    input.addEventListener('input', () => {
      renderAutocomplete(input.value);
      dropdown.classList.add('open');
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    function renderAutocomplete(query) {
      const q = (query || '').toLowerCase().trim();
      const matches = HARARE_LOCATIONS.filter(item => 
        !q || item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
      );

      dropdown.innerHTML = matches.map(item => `
        <div class="autocomplete-item" data-value="${item.title}">
          <div class="autocomplete-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="autocomplete-info">
            <span class="autocomplete-title">${item.title}</span>
            <span class="autocomplete-subtitle">${item.subtitle}</span>
          </div>
        </div>
      `).join('');

      dropdown.querySelectorAll('.autocomplete-item').forEach(el => {
        el.addEventListener('click', () => {
          const val = el.getAttribute('data-value');
          input.value = val;
          filterState.destination = val;
          dropdown.classList.remove('open');
          renderHotelList();
        });
      });
    }
  }

  // Filters & Event Listeners
  function setupFilters() {
    // Search Button
    const searchBtn = document.getElementById('btn-main-search');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const destInput = document.getElementById('search-destination-input');
        if (destInput) filterState.destination = destInput.value;
        renderHotelList();
      });
    }

    // Property name filter
    const nameInput = document.getElementById('filter-hotel-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        filterState.propertyName = e.target.value.trim().toLowerCase();
        renderHotelList();
      });
    }

    // Price slider
    const priceSlider = document.getElementById('filter-price-slider');
    const priceLabel = document.getElementById('filter-price-label');
    if (priceSlider && priceLabel) {
      priceSlider.addEventListener('input', (e) => {
        filterState.maxPrice = Number(e.target.value);
        priceLabel.textContent = formatPrice(filterState.maxPrice);
        renderHotelList();
      });
    }

    // Star ratings
    document.querySelectorAll('.filter-star-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.filter-star-checkbox:checked')).map(c => Number(c.value));
        filterState.starRatings = checked;
        renderHotelList();
      });
    });

    // Review scores
    document.querySelectorAll('.filter-review-radio').forEach(rb => {
      rb.addEventListener('change', (e) => {
        filterState.minReviewScore = Number(e.target.value);
        renderHotelList();
      });
    });

    // Neighborhoods
    document.querySelectorAll('.filter-neighborhood-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.filter-neighborhood-checkbox:checked')).map(c => c.value);
        filterState.neighborhoods = checked;
        renderHotelList();
      });
    });

    // Amenities
    document.querySelectorAll('.filter-amenity-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.filter-amenity-checkbox:checked')).map(c => c.value);
        filterState.amenities = checked;
        renderHotelList();
      });
    });

    // Cancellation policy
    const cancelCheckbox = document.getElementById('filter-cancellation');
    if (cancelCheckbox) {
      cancelCheckbox.addEventListener('change', (e) => {
        filterState.freeCancellationOnly = e.target.checked;
        renderHotelList();
      });
    }

    // Sort order
    const sortSelect = document.getElementById('sort-hotels-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        filterState.sortBy = e.target.value;
        renderHotelList();
      });
    }

    // Quick Filter Pills
    document.querySelectorAll('.quick-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const key = pill.getAttribute('data-filter');
        if (filterState.quickFilter === key) {
          filterState.quickFilter = null;
          pill.classList.remove('active');
        } else {
          document.querySelectorAll('.quick-filter-pill').forEach(p => p.classList.remove('active'));
          filterState.quickFilter = key;
          pill.classList.add('active');
        }
        renderHotelList();
      });
    });

    // Reset Filters button
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetAllFilters();
      });
    }
  }

  function resetAllFilters() {
    filterState.propertyName = '';
    filterState.maxPrice = 300;
    filterState.minReviewScore = 0;
    filterState.starRatings = [];
    filterState.neighborhoods = [];
    filterState.amenities = [];
    filterState.freeCancellationOnly = false;
    filterState.quickFilter = null;
    filterState.sortBy = 'recommended';

    // Reset Form elements
    const nameInput = document.getElementById('filter-hotel-name');
    if (nameInput) nameInput.value = '';
    const priceSlider = document.getElementById('filter-price-slider');
    if (priceSlider) priceSlider.value = 300;
    const priceLabel = document.getElementById('filter-price-label');
    if (priceLabel) priceLabel.textContent = formatPrice(300);

    document.querySelectorAll('.filter-star-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-review-radio').forEach(rb => rb.checked = (rb.value === '0'));
    document.querySelectorAll('.filter-neighborhood-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-amenity-checkbox').forEach(cb => cb.checked = false);
    const cancelCb = document.getElementById('filter-cancellation');
    if (cancelCb) cancelCb.checked = false;
    document.querySelectorAll('.quick-filter-pill').forEach(p => p.classList.remove('active'));
    const sortSelect = document.getElementById('sort-hotels-select');
    if (sortSelect) sortSelect.value = 'recommended';

    renderHotelList();
  }

  // =========================================================================
  // 4. RENDERING HOTEL CARDS (EXPEDIA CARD ARCHITECTURE)
  // =========================================================================
  function renderHotelList() {
    const container = document.getElementById('hotels-stream-container');
    const countBadge = document.getElementById('results-count-number');
    if (!container) return;

    // Filter Logic
    let filtered = hotelsData.filter(hotel => {
      // Destination filter (if specific area typed)
      if (filterState.destination && !filterState.destination.includes('All City Areas') && !filterState.destination.includes('Harare Province')) {
        const destQuery = filterState.destination.toLowerCase();
        const matchDest = hotel.neighborhood.toLowerCase().includes(destQuery) ||
                          hotel.name.toLowerCase().includes(destQuery) ||
                          hotel.address.toLowerCase().includes(destQuery);
        if (!matchDest) return false;
      }

      // Property Name
      if (filterState.propertyName) {
        if (!hotel.name.toLowerCase().includes(filterState.propertyName)) return false;
      }

      // Max price
      if (hotel.priceGBP > filterState.maxPrice) return false;

      // Min Review Score
      if (filterState.minReviewScore > 0 && hotel.reviewScore < filterState.minReviewScore) return false;

      // Star Ratings
      if (filterState.starRatings.length > 0) {
        const roundedStar = Math.floor(hotel.starRating);
        if (!filterState.starRatings.includes(roundedStar)) return false;
      }

      // Neighborhoods
      if (filterState.neighborhoods.length > 0) {
        if (!filterState.neighborhoods.includes(hotel.neighborhood)) return false;
      }

      // Amenities
      if (filterState.amenities.length > 0) {
        const hasAll = filterState.amenities.every(am => hotel.amenities.includes(am));
        if (!hasAll) return false;
      }

      // Free cancellation
      if (filterState.freeCancellationOnly) {
        if (!hotel.cancellationPolicy.toLowerCase().includes('free') && !hotel.cancellationPolicy.toLowerCase().includes('refundable')) return false;
      }

      // Quick filter
      if (filterState.quickFilter) {
        if (filterState.quickFilter === 'breakfast' && !hotel.amenities.includes('Breakfast included')) return false;
        if (filterState.quickFilter === 'cancellation' && !hotel.cancellationPolicy.toLowerCase().includes('refundable')) return false;
        if (filterState.quickFilter === 'pool' && !hotel.amenities.includes('Pool')) return false;
        if (filterState.quickFilter === 'top' && hotel.reviewScore < 9.0) return false;
      }

      return true;
    });

    // Sorting Logic
    if (filterState.sortBy === 'price_asc') {
      filtered.sort((a, b) => a.priceGBP - b.priceGBP);
    } else if (filterState.sortBy === 'price_desc') {
      filtered.sort((a, b) => b.priceGBP - a.priceGBP);
    } else if (filterState.sortBy === 'rating_desc') {
      filtered.sort((a, b) => b.reviewScore - a.reviewScore);
    } else {
      // Recommended: Weighted combination of review score & VIP badge
      filtered.sort((a, b) => (b.badge === 'VIP Access' ? 1 : 0) - (a.badge === 'VIP Access' ? 1 : 0));
    }

    if (countBadge) {
      countBadge.textContent = `${filtered.length} properties found in Harare`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-results-box">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>No properties match your current filters</h3>
          <p>Try widening your price range, clearing amenities, or resetting all filters.</p>
          <button class="btn-view-rooms" style="max-width: 220px; margin: auto;" id="btn-empty-reset">Reset All Filters</button>
        </div>
      `;
      const btnReset = document.getElementById('btn-empty-reset');
      if (btnReset) btnReset.addEventListener('click', resetAllFilters);
      return;
    }

    container.innerHTML = filtered.map(hotel => {
      const isFav = favorites.includes(hotel.id);
      const originalPrice = Math.round(hotel.priceGBP * 1.15);
      const formattedNight = formatPrice(hotel.priceGBP);
      const formattedOriginal = formatPrice(originalPrice);
      const formattedTotal = formatPrice(hotel.priceGBP + (hotel.taxesAndFeesGBP || 15));
      const starString = '★'.repeat(Math.floor(hotel.starRating));

      return `
        <article class="hotel-card" data-id="${hotel.id}">
          <!-- Media Column -->
          <div class="hotel-card-media">
            ${hotel.badge ? `<span class="hotel-badge-tag badge-${hotel.badgeClass || 'vip'}">${hotel.badge}</span>` : ''}
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-card-img" loading="lazy">
            <button class="btn-card-favorite ${isFav ? 'saved' : ''}" data-id="${hotel.id}" aria-label="Save to favourites">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>

          <!-- Middle Details Column -->
          <div class="hotel-card-details">
            <div class="hotel-header-info">
              <h3 class="hotel-name" data-id="${hotel.id}">${hotel.name}</h3>
              <div class="hotel-location-row">
                <span class="hotel-stars" title="${hotel.starRating} Stars">${starString}</span>
                <span>•</span>
                <span>${hotel.neighborhood}</span>
                <span>•</span>
                <span>${hotel.distanceCityCentre}</span>
              </div>

              <!-- Policies & Perks -->
              <div class="hotel-policy-tags">
                <span class="policy-tag-green">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  ${hotel.cancellationPolicy}
                </span>
                <span class="policy-tag-blue">${hotel.paymentPolicy}</span>
              </div>

              <!-- Top Highlights Chips -->
              <div class="hotel-highlights-chips">
                ${hotel.amenities.slice(0, 4).map(am => `<span class="chip-tag">${am}</span>`).join('')}
              </div>
            </div>

            <!-- Review Score Row -->
            <div class="hotel-reviews-row">
              <span class="review-badge-score">${hotel.reviewScore.toFixed(1)}/10</span>
              <div class="review-text-meta">
                <span class="review-label-strong">${hotel.reviewLabel}</span>
                <span class="review-count-sub">${hotel.reviewCount} reviews</span>
              </div>
            </div>
          </div>

          <!-- Right Pricing & CTA Column -->
          <div class="hotel-card-pricing">
            <span class="pricing-top-notice">Member Price available</span>

            <div class="pricing-amounts-group">
              <span class="price-strike-original">${formattedOriginal}</span>
              <span class="price-night-large">${formattedNight}</span>
              <span class="price-night-sub">per night</span>
              <span class="price-total-notice">${formattedTotal} total (1 night incl. taxes)</span>
            </div>

            <div class="card-actions-col">
              <button class="btn-view-rooms" data-id="${hotel.id}">View Rooms</button>
              <button class="btn-quick-reserve" data-id="${hotel.id}">Quick Reserve</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach listeners
    container.querySelectorAll('.btn-view-rooms, .hotel-name').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        openRoomsModal(id);
      });
    });

    container.querySelectorAll('.btn-quick-reserve').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        const hotel = hotelsData.find(h => h.id === id);
        if (hotel && hotel.rooms && hotel.rooms[0]) {
          openCheckoutModal(hotel, hotel.rooms[0]);
        }
      });
    });

    container.querySelectorAll('.btn-card-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        toggleFavorite(id, btn);
      });
    });
  }

  function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
      btn.classList.remove('saved');
    } else {
      favorites.push(id);
      btn.classList.add('saved');
    }
    localStorage.setItem('dayrest_favorites', JSON.stringify(favorites));
  }

  // =========================================================================
  // 5. ROOM SELECTION MODAL
  // =========================================================================
  const roomsModal = document.getElementById('hotel-rooms-modal');
  const roomsModalBody = document.getElementById('rooms-modal-body');
  const roomsModalTitle = document.getElementById('rooms-modal-hotel-title');

  function openRoomsModal(hotelId) {
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel || !roomsModal) return;

    activeHotel = hotel;
    renderRoomsModal(hotel);
    roomsModal.showModal();
  }

  function renderRoomsModal(hotel) {
    if (roomsModalTitle) roomsModalTitle.textContent = hotel.name;
    if (!roomsModalBody) return;

    const starString = '★'.repeat(Math.floor(hotel.starRating));

    roomsModalBody.innerHTML = `
      <div class="modal-hotel-hero">
        <img src="${hotel.image}" alt="${hotel.name}" class="modal-hotel-hero-img">
        <div class="modal-hotel-meta">
          <div style="color: #F59E0B; font-size: 1rem;">${starString}</div>
          <p style="font-size: 0.88rem; color: #5E6D77; font-weight: 600;">📍 ${hotel.address}</p>
          <div class="hotel-reviews-row" style="margin-top: 0.2rem;">
            <span class="review-badge-score">${hotel.reviewScore.toFixed(1)}/10</span>
            <span class="review-label-strong">${hotel.reviewLabel} (${hotel.reviewCount} verified guest reviews)</span>
          </div>
          <p class="modal-hotel-desc">${hotel.description}</p>
          
          <div style="margin-top: 0.5rem;">
            <strong style="font-size: 0.82rem; text-transform: uppercase; color: #00355F;">Key Amenities:</strong>
            <div class="hotel-highlights-chips" style="margin-top: 0.25rem;">
              ${hotel.amenities.map(am => `<span class="chip-tag">${am}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <h3 class="rooms-list-title">Choose Your Room at ${hotel.name}</h3>

      <div class="rooms-selection-grid">
        ${hotel.rooms.map(room => {
          const roomPrice = formatPrice(room.priceGBP);
          return `
            <div class="room-card-item">
              <div>
                <h4 class="room-name-title">${room.name}</h4>
                <div class="room-bed-specs">
                  <span>🛏️ ${room.bed}</span>
                  <span>📐 ${room.size}</span>
                  <span>👥 Sleeps 2 adults</span>
                </div>
                <ul class="room-features-list">
                  ${room.features.map(f => `<li class="room-feature-tag">✓ ${f}</li>`).join('')}
                </ul>
                <div style="margin-top: 0.65rem; font-size: 0.8rem; color: #0E7036; font-weight: 700;">
                  ✓ Free cancellation before 9 Oct • Pay at property or online
                </div>
              </div>

              <div class="room-booking-col">
                <div style="text-align: right;">
                  <span style="font-size: 0.75rem; color: #5E6D77;">Per night</span>
                  <div class="room-price-night">${roomPrice}</div>
                  <span style="font-size: 0.72rem; color: #5E6D77;">Includes taxes & fees</span>
                </div>
                <button class="btn-select-room" data-room-id="${room.id}">Reserve This Room</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    roomsModalBody.querySelectorAll('.btn-select-room').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomId = btn.getAttribute('data-room-id');
        const room = hotel.rooms.find(r => r.id === roomId);
        if (room) {
          roomsModal.close();
          openCheckoutModal(hotel, room);
        }
      });
    });
  }

  // =========================================================================
  // 6. BOOKING CHECKOUT MODAL & LIVE EXTRANET SYNC
  // =========================================================================
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutModalBody = document.getElementById('checkout-modal-body');

  function openCheckoutModal(hotel, room) {
    activeHotel = hotel;
    activeRoom = room;
    if (!checkoutModal || !checkoutModalBody) return;

    const priceNight = formatPrice(room.priceGBP);
    const taxes = Math.round(room.priceGBP * 0.15);
    const totalPrice = formatPrice(room.priceGBP + taxes);

    checkoutModalBody.innerHTML = `
      <div class="checkout-steps-bar">
        <div class="checkout-step active">1. Guest Details</div>
        <div class="checkout-step">2. Payment Preference</div>
        <div class="checkout-step">3. Confirmation</div>
      </div>

      <div class="booking-summary-box">
        <div>
          <h4 style="font-size: 1.05rem; font-weight: 800; color: #00355F;">${hotel.name}</h4>
          <p style="font-size: 0.85rem; color: #5E6D77;">${room.name} (${room.bed})</p>
          <p style="font-size: 0.8rem; color: #0E7036; font-weight: 700; margin-top: 0.2rem;">✓ 10 Oct 2026 - 11 Oct 2026 (1 Night)</p>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.75rem; color: #5E6D77;">Total Payable</span>
          <div style="font-size: 1.4rem; font-weight: 800; color: #00355F;">${totalPrice}</div>
          <span style="font-size: 0.72rem; color: #5E6D77;">Taxes & fees included</span>
        </div>
      </div>

      <form id="checkout-booking-form">
        <div class="checkout-form-grid">
          <div class="form-group">
            <label class="form-label">First Name *</label>
            <input type="text" class="form-input" id="guest-first-name" placeholder="e.g. Tendai" required>
          </div>
          <div class="form-group">
            <label class="form-label">Last Name *</label>
            <input type="text" class="form-input" id="guest-last-name" placeholder="e.g. Moyo" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" class="form-input" id="guest-email" placeholder="tendai.moyo@gmail.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Mobile Phone Number *</label>
            <input type="tel" class="form-input" id="guest-phone" placeholder="+263 77 123 4567" required>
          </div>
          <div class="form-group full-width">
            <label class="form-label">Special Requests (Optional)</label>
            <textarea class="form-input" id="guest-requests" rows="2" placeholder="e.g. High floor, quiet room, late check-in at 21:00"></textarea>
          </div>
          <div class="form-group full-width">
            <label class="form-label">Payment Preference</label>
            <div style="display: flex; gap: 1rem; margin-top: 0.25rem;">
              <label style="font-size: 0.88rem; display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                <input type="radio" name="paymentMethod" value="online" checked> Pay Online (Visa / Mastercard)
              </label>
              <label style="font-size: 0.88rem; display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                <input type="radio" name="paymentMethod" value="property"> Pay at Property upon Arrival
              </label>
            </div>
          </div>
        </div>

        <button type="submit" class="btn-confirm-checkout">Complete Booking & Receive Instant Voucher</button>
      </form>
    `;

    const form = document.getElementById('checkout-booking-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        completeBookingProcess(hotel, room);
      });
    }

    checkoutModal.showModal();
  }

  function completeBookingProcess(hotel, room) {
    const firstName = document.getElementById('guest-first-name').value.trim();
    const lastName = document.getElementById('guest-last-name').value.trim();
    const email = document.getElementById('guest-email').value.trim();
    const phone = document.getElementById('guest-phone').value.trim();
    const requests = document.getElementById('guest-requests').value.trim();
    const payRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = payRadio ? payRadio.value : 'online';

    const bookingRef = 'DH-2026-' + Math.floor(1000 + Math.random() * 9000);
    const taxes = Math.round(room.priceGBP * 0.15);
    const totalGBP = room.priceGBP + taxes;
    const totalUSD = Math.round(totalGBP * 1.28);

    // Save to localStorage bookings (shared with Extranet!)
    const newBooking = {
      id: bookingRef,
      hotelId: hotel.id,
      hotelName: hotel.name,
      guestName: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      roomName: room.name,
      checkIn: '2026-10-10',
      checkOut: '2026-10-11',
      nights: 1,
      guests: 2,
      totalGBP: totalGBP,
      totalUSD: totalUSD,
      status: 'Confirmed',
      paymentStatus: paymentMethod === 'online' ? 'Paid Online' : 'Pay at Property',
      specialRequests: requests || 'None',
      bookingDate: new Date().toISOString().split('T')[0]
    };

    const existingBookings = JSON.parse(localStorage.getItem('dayrest_harare_bookings') || '[]');
    existingBookings.unshift(newBooking);
    localStorage.setItem('dayrest_harare_bookings', JSON.stringify(existingBookings));

    // Render Voucher in Modal Body
    checkoutModalBody.innerHTML = `
      <div class="voucher-card">
        <div class="voucher-check-icon">✓</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #00355F;">Booking Confirmed!</h3>
        <p style="color: #5E6D77; margin-top: 0.25rem;">Your stay at <strong>${hotel.name}</strong> is securely reserved.</p>
        
        <div class="voucher-ref-code">Booking Reference: ${bookingRef}</div>

        <div style="background: #F8FAFC; border: 1px dashed #D4DBE0; border-radius: 8px; padding: 1.25rem; margin: 1.25rem auto; max-width: 500px; text-align: left;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #5E6D77;">Guest:</span>
            <strong>${firstName} ${lastName}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #5E6D77;">Dates:</span>
            <strong>10 Oct 2026 – 11 Oct 2026 (1 Night)</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #5E6D77;">Room:</span>
            <strong>${room.name}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #5E6D77;">Address:</span>
            <span>${hotel.address}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid #E2E8F0;">
            <span style="font-size: 1.05rem; font-weight: 700; color: #00355F;">Total Paid:</span>
            <strong style="font-size: 1.15rem; color: #00355F;">${formatPrice(totalGBP)}</strong>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: #0E7036; font-weight: 700;">
          ✉️ A confirmation email and mobile voucher have been dispatched to ${email}.
        </p>

        <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.5rem;">
          <button class="btn-view-rooms" style="max-width: 200px;" onclick="window.print()">Print Voucher</button>
          <button class="btn-quick-reserve" style="max-width: 200px;" id="btn-close-voucher">Return to Hotels</button>
        </div>
      </div>
    `;

    const closeBtn = document.getElementById('btn-close-voucher');
    if (closeBtn) closeBtn.addEventListener('click', () => checkoutModal.close());
  }

  // Modals Close handlers
  function setupModals() {
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const dialog = btn.closest('dialog');
        if (dialog) dialog.close();
      });
    });

    // Close when clicking outside modal
    document.querySelectorAll('dialog').forEach(dlg => {
      dlg.addEventListener('click', (e) => {
        const rect = dlg.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        if (!isInDialog) dlg.close();
      });
    });
  }

  // Kickoff
  loadHotelsData();
});
