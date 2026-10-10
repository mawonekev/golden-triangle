/**
 * GOLDEN TRIANGLE ADVENTURES - ADVANCED CORE CONTROLLER & 60-ACTIVITY ENGINE
 * Cloned from Shearwater Victoria Falls & Activitar Booking System
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. CURRENCY CONVERSION CONFIGURATION
  // =========================================================================
  const CURRENCIES = {
    USD: { symbol: '$', rate: 1.00, code: 'USD', name: 'US Dollar' },
    EUR: { symbol: '€', rate: 0.92, code: 'EUR', name: 'Euro' },
    GBP: { symbol: '£', rate: 0.78, code: 'GBP', name: 'British Pound' },
    ZAR: { symbol: 'R ', rate: 18.50, code: 'ZAR', name: 'South African Rand' }
  };

  let currentCurrency = 'USD';

  // =========================================================================
  // 2. COMPLETE 60-ACTIVITY MASTER CATALOG
  // =========================================================================
  const ACTIVITIES = [
  {
    "id": "bridge-bungee-jump",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Victoria Falls Bungee Jump (111m)",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Extreme Freefall",
    "priceUSD": 194,
    "promoPriceUSD": 160,
    "duration": "45 Mins (15-20 min jump)",
    "minAge": "14+ Years",
    "weightRange": "40 - 140 kg",
    "badge": "World Famous",
    "badgeClass": "hot",
    "image": "assets/images/bungee-jump.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "5.0",
    "reviews": 840,
    "description": "The world's most iconic 111-meter bungee jump from the historic Victoria Falls Bridge into the breathtaking Batoka Gorge, directly over the mighty Zambezi River with the Falls spray roaring in front of you.",
    "quickFacts": {
      "Height": "111 Metres (364 Feet)",
      "Location": "Victoria Falls Bridge (Zimbabwe / Zambia Border)",
      "Harness": "Dual Ankle Cuffs & Full Body Safety Harness",
      "Operating Hours": "09:00 - 17:00 Daily (Closed 13:00 - 14:00)"
    },
    "inclusions": [
      "Full safety harness & professional recovery crew",
      "Personal Jump Certificate",
      "National border pass assistance",
      "Pre-jump safety briefing & weigh-in"
    ],
    "exclusions": [
      "Park entrance fee",
      "Photo & video package ($40 optional)"
    ],
    "whatToBring": [
      "Original Passport for border bridge access",
      "Comfortable clothes & closed-toe shoes",
      "Leave all jewelry & loose items at office"
    ],
    "departures": [
      "Departures every 30 mins from 09:00 to 12:30 and 14:00 to 16:30 Daily"
    ]
  },
  {
    "id": "bridge-swing-solo",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Victoria Falls Bridge Swing - Solo",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Canyon Pendulum",
    "priceUSD": 137,
    "duration": "30 Mins",
    "minAge": "14+ Years",
    "weightRange": "40 - 140 kg",
    "badge": "80m Freefall",
    "badgeClass": "hot",
    "image": "assets/images/bridge-swing.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "5.0",
    "reviews": 420,
    "description": "Step off the bridge platform into an intense 80-meter vertical freefall before the massive ropes catch you in a sweeping 95-meter pendulum arc soaring across Batoka Gorge.",
    "quickFacts": {
      "Freefall": "80 Metres Pure Drop",
      "Swing Arc": "95 Metre Giant Pendulum",
      "Harness": "Full Body Seated Harness",
      "Location": "Victoria Falls Bridge"
    },
    "inclusions": [
      "Full body harness & safety briefing",
      "Swing Certificate of Bravery",
      "Border bridge access pass",
      "Winch recovery back to the bridge deck"
    ],
    "exclusions": [
      "Optional photo/video USB",
      "Transfers to bridge (can add on)"
    ],
    "whatToBring": [
      "Passport for border control",
      "Secure closed shoes",
      "Sense of fearless adventure"
    ],
    "departures": [
      "09:00 to 16:30 Daily (Excl 13:00 - 14:00 lunch)"
    ]
  },
  {
    "id": "bridge-swing-tandem",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Victoria Falls Bridge Swing - Tandem",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Couples & Friends",
    "priceUSD": 201,
    "duration": "30 Mins",
    "minAge": "14+ Years",
    "weightRange": "Up to 180 kg Combined",
    "badge": "Couple Thrill",
    "badgeClass": "vip",
    "image": "assets/images/bridge-swing.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "4.9",
    "reviews": 310,
    "description": "Tackle the fear together! Leap off the Victoria Falls Bridge side-by-side with your partner or friend and experience the jaw-dropping 80m freefall and giant canyon swing as one.",
    "quickFacts": {
      "Type": "Tandem Jump (2 Persons)",
      "Combined Weight": "Max 180 kg total",
      "Height": "80m Drop into Batoka Gorge",
      "Location": "Victoria Falls Bridge"
    },
    "inclusions": [
      "Dual harness configuration",
      "Certified jump master assistance",
      "Two Swing Certificates",
      "Bridge access passes"
    ],
    "exclusions": [
      "Photo & video package",
      "Lodge transfers"
    ],
    "whatToBring": [
      "Passports for both participants",
      "Secure footwear",
      "No loose jewelry"
    ],
    "departures": [
      "09:00 to 16:30 Daily"
    ]
  },
  {
    "id": "bridge-slide-solo",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Victoria Falls Bridge Slide (Zipline) - Solo",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "High-Speed Zipline",
    "priceUSD": 58,
    "duration": "20 Mins",
    "minAge": "6+ Years",
    "weightRange": "40 - 140 kg",
    "badge": "106 km/h Flight",
    "badgeClass": "promo",
    "image": "assets/images/bridge-slide.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "4.9",
    "reviews": 580,
    "description": "Fly across international borders! A high-speed zipline that catapults you 300 meters from Zambia to Zimbabwe suspended 111m above the raging waters of the Zambezi River.",
    "quickFacts": {
      "Speed": "Up to 106 km/h",
      "Distance": "300 Metres Cross-Border",
      "Min Age": "6 Years Old (Family Friendly)",
      "Height": "111 Metres Above River"
    },
    "inclusions": [
      "Zipline trolley pulley and safety harness",
      "Protective helmet",
      "Safety instruction & border pass",
      "Return escort to bridge deck"
    ],
    "exclusions": [
      "Souvenir photography"
    ],
    "whatToBring": [
      "Passport",
      "Closed shoes",
      "Comfortable clothing"
    ],
    "departures": [
      "Every 20 mins from 09:00 to 16:30 Daily"
    ]
  },
  {
    "id": "bridge-slide-tandem",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Victoria Falls Bridge Slide (Zipline) - Tandem",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Family & Kids",
    "priceUSD": 82,
    "duration": "20 Mins",
    "minAge": "6+ Years",
    "weightRange": "Up to 140 kg Combined",
    "badge": "Family Fun",
    "badgeClass": "eco",
    "image": "assets/images/bridge-slide.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "4.9",
    "reviews": 245,
    "description": "Slide side-by-side with your child, partner, or friend across Batoka Gorge from Zambia to Zimbabwe. Safe, exhilarating, and suitable for children as young as 6.",
    "quickFacts": {
      "Capacity": "2 Guests Tandem",
      "Age": "Parent + Child or 2 Friends",
      "Distance": "300 Metres",
      "Location": "Victoria Falls Bridge"
    },
    "inclusions": [
      "Tandem zipline harness & dual helmets",
      "Safety briefing",
      "Border gate clearance",
      "Recovery platform assistance"
    ],
    "exclusions": [
      "Photo media package"
    ],
    "whatToBring": [
      "Passports for both flyers",
      "Comfortable clothes"
    ],
    "departures": [
      "09:00 to 16:30 Daily"
    ]
  },
  {
    "id": "big-air-experience",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Big Air Experience (Bungee + Swing + Slide Triple Combo)",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Ultimate Triple Thrill",
    "priceUSD": 280,
    "promoPriceUSD": 250,
    "duration": "2.5 Hours",
    "minAge": "14+ Years",
    "weightRange": "40 - 140 kg",
    "badge": "Triple Thrill Promo",
    "badgeClass": "hot",
    "image": "assets/images/bungee-jump.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "5.0",
    "reviews": 730,
    "description": "The ultimate adrenaline ticket in Africa! Combines all 3 world-class bridge thrills in one epic day: 111m Bungee Jump + 80m Bridge Swing + 300m High-Speed Bridge Slide.",
    "quickFacts": {
      "Activities": "Bungee Jump + Bridge Swing + Bridge Slide",
      "Duration": "Approx 2.5 Hours total",
      "Savings": "Save over $100 compared to individual bookings",
      "Promotion": "Current Special: $250 per person"
    },
    "inclusions": [
      "111m Bungee Jump",
      "80m Canyon Bridge Swing",
      "High-Speed Bridge Slide Zipline",
      "Triple Adventure Certificate of Valor"
    ],
    "exclusions": [
      "Photo & Video USB package",
      "Park entry fees"
    ],
    "whatToBring": [
      "Original Passport",
      "Sturdy closed-toe shoes",
      "Hydration & fearless spirit"
    ],
    "departures": [
      "09:30, 11:00, 14:00 Daily"
    ]
  },
  {
    "id": "historic-bridge-tour",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "Historic Victoria Falls Bridge Tour & Under-Bridge Catwalk",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Heritage & Catwalk",
    "priceUSD": 64,
    "duration": "2.5 Hours",
    "minAge": "10+ Years",
    "badge": "Historic Landmark",
    "badgeClass": "vip",
    "image": "assets/images/bridge-tour.jpg",
    "videoId": "lIXzz4TpfIo",
    "rating": "4.9",
    "reviews": 380,
    "description": "Journey through 120 years of history on Cecil Rhodes' Cape-to-Cairo railway bridge. Strap into safety harnesses and walk the historic catwalk suspended beneath the bridge deck over the gorge.",
    "quickFacts": {
      "Catwalk": "Suspended under-bridge steel walkway",
      "History": "Built 1904-1905, designed in England",
      "Guide": "Theatrical, costumed & licensed historians",
      "Safety": "Full safety harness and continuous lifeline"
    },
    "inclusions": [
      "Theatrical guide presentation",
      "Full safety harness & catwalk under-bridge access",
      "Visitor Centre museum exhibition",
      "Return hotel transfers in Victoria Falls"
    ],
    "exclusions": [
      "Optional souvenir photos",
      "Gratuities"
    ],
    "whatToBring": [
      "Passport for border crossing",
      "Flat walking shoes with good grip",
      "Camera with wrist strap"
    ],
    "departures": [
      "10:00 and 14:30 Daily (Check-in 30 mins prior)"
    ]
  },
  {
    "id": "bridge-cafe-experience",
    "headline": "Victoria Falls Bridge Adventures",
    "title": "The Bridge Café Gorge View Lunch & Drinks",
    "category": "bridge",
    "categoryLabel": "Bridge Adrenaline",
    "subCategory": "Scenic Dining",
    "priceUSD": 25,
    "duration": "1.5 Hours",
    "minAge": "All Ages",
    "badge": "Front-Row Canyon View",
    "badgeClass": "eco",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "4.8",
    "reviews": 215,
    "description": "Perched directly on the edge of the Batoka Gorge cliff, the Bridge Café offers unparalleled front-row views of bungee jumpers, the historic bridge, and the rising mist of Victoria Falls.",
    "quickFacts": {
      "Location": "Batoka Gorge Lip, Bridge border post",
      "View": "Victoria Falls spray, Bridge & Gorge",
      "Cuisine": "Burgers, wraps, craft beers, milkshakes",
      "Vibe": "Adrenaline spectator lounge"
    },
    "inclusions": [
      "Meal voucher towards chef-prepared lunch",
      "Artisan beverage or local craft draft beer",
      "Border gate pass access"
    ],
    "exclusions": [
      "Extra alcohol beyond credit"
    ],
    "whatToBring": [
      "Passport for border gate",
      "Sunglasses & camera"
    ],
    "departures": [
      "Open 09:00 - 17:00 Daily"
    ]
  },
  {
    "id": "flight-of-angels-13",
    "headline": "Scenic Helicopter Flights",
    "title": "Helicopter Flight: Flight of Angels (12-13 Mins)",
    "category": "flights",
    "categoryLabel": "Scenic Flights",
    "subCategory": "Classic Aerial",
    "priceUSD": 173,
    "duration": "12-13 Mins Flight (1.5h Total)",
    "minAge": "All Ages",
    "badge": "Bestseller",
    "badgeClass": "hot",
    "image": "assets/images/heli-flight.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 920,
    "description": "The world-famous scenic flight over Victoria Falls. Marvel at the cascading curtain of water and the dramatic zig-zagging Batoka Gorge from an unobstructed bird's eye perspective.",
    "quickFacts": {
      "Flight Time": "12–13 Minutes in the air",
      "Route": "Figure-8 loop over Victoria Falls & Gorges",
      "Helicopter": "Bell 206 LongRanger / Bell 407",
      "Pilot": "Commercial pilots with live headset commentary"
    },
    "inclusions": [
      "Return hotel transfers in Victoria Falls",
      "12-13 minute scenic flight",
      "Pilot commentary & Bose noise-cancelling headsets",
      "Fuel surcharge included"
    ],
    "exclusions": [
      "Government Aviation & Parks levy ($15 pp payable at check-in)"
    ],
    "whatToBring": [
      "Original Passport",
      "Camera or phone with wrist strap",
      "Sunglasses"
    ],
    "departures": [
      "Every 30 mins from 07:30 to 16:30 Daily"
    ]
  },
  {
    "id": "helicopter-explore-zambezi-22",
    "headline": "Scenic Helicopter Flights",
    "title": "Helicopter Flight: Explore the Zambezi (22 Mins)",
    "category": "flights",
    "categoryLabel": "Scenic Flights",
    "subCategory": "Extended Aerial",
    "priceUSD": 271,
    "duration": "22 Mins Flight (2h Total)",
    "minAge": "All Ages",
    "badge": "Extended Flight",
    "badgeClass": "hot",
    "image": "assets/images/heli-gorge.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 340,
    "description": "An extended flight banking over Victoria Falls, swooping deep through the winding Batoka Gorge canyons, and tracking up the Zambezi River over lush islands and national park wildlife.",
    "quickFacts": {
      "Flight Time": "22 Minutes in the air",
      "Coverage": "Victoria Falls + Batoka Gorge + Zambezi National Park",
      "Views": "Aerial game spotting (elephants, hippos)",
      "Seating": "Guaranteed window view configuration"
    },
    "inclusions": [
      "Return hotel transfers",
      "22-minute extended flight",
      "Pilot commentary",
      "Noise-cancelling headsets"
    ],
    "exclusions": [
      "Aviation levy ($15 pp)"
    ],
    "whatToBring": [
      "Original Passport",
      "Camera with telephoto lens",
      "Sunglasses"
    ],
    "departures": [
      "08:00, 10:00, 14:00, 16:00 Daily"
    ]
  },
  {
    "id": "zambezi-spectacular-25",
    "headline": "Scenic Helicopter Flights",
    "title": "Helicopter Flight: Zambezi Spectacular (25 Mins)",
    "category": "flights",
    "categoryLabel": "Scenic Flights",
    "subCategory": "Ultimate Masterpiece",
    "priceUSD": 328,
    "duration": "25 Mins Flight (2h Total)",
    "minAge": "All Ages",
    "badge": "Ultimate Aerial",
    "badgeClass": "vip",
    "image": "assets/images/heli-flight.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 410,
    "description": "The pinnacle aerial experience in Southern Africa: circles the entire waterfall chasm, descends deep into Batoka Gorge canyons, and glides over pristine game loops in Zambezi National Park.",
    "quickFacts": {
      "Flight Time": "25 Full Minutes in the air",
      "Scope": "Complete Falls, Gorge zig-zags & Safari reserve",
      "Highlights": "Long Island, Devil's Cataract, Rapids 1-23",
      "Experience": "Maximum photo opportunities from both sides"
    },
    "inclusions": [
      "Return hotel transfers",
      "25-minute scenic flight",
      "Pilot narration & headsets",
      "Refreshments at helipad lounge"
    ],
    "exclusions": [
      "Aviation levy ($15 pp)"
    ],
    "whatToBring": [
      "Original Passport",
      "Camera with zoom",
      "Light clothing"
    ],
    "departures": [
      "08:30, 11:00, 14:30, 16:00 Daily"
    ]
  },
  {
    "id": "riversong-sunset-cruise",
    "headline": "Zambezi River Cruises",
    "title": "Riversong Luxury Zambezi Sunset Cruise",
    "category": "cruises",
    "categoryLabel": "River Cruises",
    "subCategory": "5-Star Luxury Sunset",
    "priceUSD": 100,
    "duration": "2 Hours (Sunset)",
    "minAge": "All Ages",
    "badge": "Flagship Luxury",
    "badgeClass": "vip",
    "image": "assets/images/riversong-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "5.0",
    "reviews": 650,
    "description": "Our flagship 5-star luxury catamaran on the Upper Zambezi. Relax on upholstered lounge decks while enjoying a chef-prepared canapé menu and an unlimited premium open bar as the African sun sets.",
    "quickFacts": {
      "Vessel": "Riversong Luxury Triple-Deck Catamaran",
      "Bar": "Top-shelf spirits, fine wines, cocktails & beer",
      "Food": "Gourmet 4-course hot & cold canapés",
      "Wildlife": "Hippos, crocodiles, fish eagles, elephants"
    },
    "inclusions": [
      "Unlimited top-shelf bar & cocktails",
      "Chef-prepared artisan canapés",
      "Return hotel transfers in Victoria Falls",
      "River conservation levy"
    ],
    "exclusions": [
      "National Parks River Fee ($12 pp)"
    ],
    "whatToBring": [
      "Light jacket or wrap for river breeze",
      "Camera",
      "Binoculars"
    ],
    "departures": [
      "16:00 (Summer) / 15:30 (Winter) Daily"
    ]
  },
  {
    "id": "standard-sunset-cruise",
    "headline": "Zambezi River Cruises",
    "title": "Classic Zambezi Sunset Boat Cruise",
    "category": "cruises",
    "categoryLabel": "River Cruises",
    "subCategory": "Classic Sunset",
    "priceUSD": 80,
    "duration": "2 Hours",
    "minAge": "All Ages",
    "badge": "Popular Favorite",
    "badgeClass": "hot",
    "image": "assets/images/sunset-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "4.8",
    "reviews": 510,
    "description": "The quintessence of African river travel. Glide past islands on the tranquil Upper Zambezi with cold local beers, wines, and savoury finger snacks while watching pods of hippos and golden skies.",
    "quickFacts": {
      "Vessel": "Classic Zambezi Pontoon Cruiser",
      "Drinks": "Complimentary local beers, house wines & soft drinks",
      "Snacks": "Platters of finger food & snacks",
      "Scenery": "Silhouettes of river palms and sunset colours"
    },
    "inclusions": [
      "Open bar (local beer, wine, gin, soft drinks)",
      "Platter snacks and nuts",
      "Return hotel transfers"
    ],
    "exclusions": [
      "National Parks Fee ($12 pp)"
    ],
    "whatToBring": [
      "Camera",
      "Sunglasses",
      "Light jacket"
    ],
    "departures": [
      "16:00 (Summer) / 15:30 (Winter) Daily"
    ]
  },
  {
    "id": "riversong-sunrise-cruise",
    "headline": "Zambezi River Cruises",
    "title": "Riversong Early Morning Sunrise Cruise",
    "category": "cruises",
    "categoryLabel": "River Cruises",
    "subCategory": "Peaceful Dawn",
    "priceUSD": 59,
    "duration": "2 Hours (Sunrise)",
    "minAge": "All Ages",
    "badge": "Serene Morning",
    "badgeClass": "eco",
    "image": "assets/images/riversong-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "4.9",
    "reviews": 215,
    "description": "Experience the Zambezi at its most magical and tranquil hour. Cruise past misty river islands as dawn breaks over the water with fresh pastries, gourmet coffee, and active morning birdlife.",
    "quickFacts": {
      "Departure": "06:00 AM (Early Morning)",
      "Atmosphere": "Mirror-flat calm water and dawn mist",
      "Food": "Freshly baked croissants, fruit & light continental",
      "Beverages": "Artisan roasted coffee, specialty teas, juices"
    },
    "inclusions": [
      "Full continental breakfast buffet on board",
      "Barista coffee & teas",
      "Return hotel transfers",
      "Guided river wildlife spotting"
    ],
    "exclusions": [
      "National Parks Fee ($12 pp)"
    ],
    "whatToBring": [
      "Warm jacket for cool early morning",
      "Binoculars for birdwatching",
      "Camera"
    ],
    "departures": [
      "06:00 AM Pickup Daily"
    ]
  },
  {
    "id": "riversong-lunch-cruise",
    "headline": "Zambezi River Cruises",
    "title": "Riversong Gourmet Zambezi Lunch Cruise",
    "category": "cruises",
    "categoryLabel": "River Cruises",
    "subCategory": "Midday Scenic Dining",
    "priceUSD": 65,
    "duration": "2 Hours",
    "minAge": "All Ages",
    "badge": "Buffet Lunch",
    "badgeClass": "promo",
    "image": "assets/images/riversong-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "4.8",
    "reviews": 190,
    "description": "Escape the midday heat on the shaded, breeze-swept decks of the Riversong. Enjoy a fresh 3-course buffet lunch paired with chilled wines as you navigate secluded river channels.",
    "quickFacts": {
      "Departure": "12:00 PM Midday",
      "Lunch": "3-course buffet with roast meats, fresh salads & desserts",
      "Drinks": "Complimentary beer, wine, and soft drinks",
      "Route": "Upper Zambezi National Park water boundary"
    },
    "inclusions": [
      "3-course chef buffet lunch",
      "Complimentary drinks bar",
      "Return hotel transfers"
    ],
    "exclusions": [
      "Parks fee ($12 pp)"
    ],
    "whatToBring": [
      "Sun hat & sunscreen",
      "Camera"
    ],
    "departures": [
      "12:00 PM Pickup Daily"
    ]
  },
  {
    "id": "zambezi-dinner-cruise",
    "headline": "Zambezi River Cruises",
    "title": "Zambezi River Starlit 4-Course Dinner Cruise",
    "category": "cruises",
    "categoryLabel": "River Cruises",
    "subCategory": "Romantic Evening",
    "priceUSD": 95,
    "duration": "2.5 Hours",
    "minAge": "All Ages",
    "badge": "Starlit Dining",
    "badgeClass": "vip",
    "image": "assets/images/sunset-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "5.0",
    "reviews": 280,
    "description": "A romantic journey beginning with sunset cocktails and continuing under the Southern Cross stars. Dine on a freshly prepared 4-course meal served on linen-draped tables right on the water.",
    "quickFacts": {
      "Departure": "16:30 - 19:30",
      "Dining": "4-course candlelit seated dinner",
      "Wine": "Paired South African wines & full bar",
      "Setting": "Floating restaurant under the African night sky"
    },
    "inclusions": [
      "4-course seated gourmet dinner",
      "Full premium bar service",
      "Return hotel transfers in Victoria Falls"
    ],
    "exclusions": [
      "Parks fee ($12 pp)"
    ],
    "whatToBring": [
      "Smart casual evening wear",
      "Light jacket or pashmina"
    ],
    "departures": [
      "16:00 Summer / 15:30 Winter Daily"
    ]
  },
  {
    "id": "white-water-rafting-day",
    "headline": "White Water Rafting",
    "title": "Zambezi White Water Rafting - Full Day Adrenaline Trip",
    "category": "water",
    "categoryLabel": "White Water & Jetboat",
    "subCategory": "World-Class Grade 5 Rapids",
    "priceUSD": 173,
    "duration": "7 Hours (Full Day)",
    "minAge": "15+ Years",
    "badge": "Legendary Grade 5",
    "badgeClass": "hot",
    "image": "assets/images/rafting-action.jpg",
    "videoId": "A4rfVSTIonA",
    "rating": "5.0",
    "reviews": 950,
    "description": "Universally acclaimed as the greatest one-day whitewater rafting trip on Earth. Tackle colossal Class IV and V rapids including \"The Overland Truck-Eater\", \"The Mother\", and \"Oblivion\" beneath the gorge.",
    "quickFacts": {
      "Rapids": "Rapids 1 through 19 (Low Water: Aug-Dec) or 11-23 (High Water)",
      "Grade": "Class IV - V Big Water",
      "Hike": "Challenging 20-30 min hike into and out of Batoka Gorge",
      "Lunch": "Riverside lunch and ice-cold beers at top of gorge"
    },
    "inclusions": [
      "Rafting equipment, helmet & high-flotation life jacket",
      "Internationally licensed river guides",
      "Riverside barbecue lunch & cold beverages",
      "Return hotel transfers"
    ],
    "exclusions": [
      "National Parks River Fee ($12 pp)"
    ],
    "whatToBring": [
      "Swimsuit & quick-drying shorts",
      "Sturdy river shoes or strap-on sandals",
      "High-SPF sunscreen (no oily lotions on forehead)"
    ],
    "departures": [
      "07:00 AM Pickup Daily"
    ]
  },
  {
    "id": "rafting-rampage-multiday",
    "headline": "White Water Rafting",
    "title": "Zambezi Rafting Rampage Multi-Day Gorge Expedition",
    "category": "water",
    "categoryLabel": "White Water & Jetboat",
    "subCategory": "Multi-Day Wilderness",
    "priceUSD": 330,
    "duration": "2 - 3 Days (Overnight Camp)",
    "minAge": "15+ Years",
    "badge": "Gorge Camping",
    "badgeClass": "vip",
    "image": "assets/images/rafting-rampage.jpg",
    "videoId": "A4rfVSTIonA",
    "rating": "5.0",
    "reviews": 180,
    "description": "An unforgettable deep-wilderness expedition. Run the entire navigable stretch of the Batoka Gorge (Rapids 1 to 25) and camp on pristine white-sand river beaches under starlit African skies.",
    "quickFacts": {
      "Duration": "2 or 3 Days options available",
      "Camping": "Sandy riverbank beach camps in Batoka Gorge",
      "Meals": "Full campfire bush catering, steaks, wine & beers",
      "Rapids": "All 25 rapids on the Zambezi River"
    },
    "inclusions": [
      "Complete expedition rafting & safety gear",
      "Tents, sleeping pads & wilderness camp setup",
      "All meals, snacks, beers, and wines during expedition",
      "Transfers and porterage"
    ],
    "exclusions": [
      "Parks fee ($12/day)"
    ],
    "whatToBring": [
      "Dry bag with change of clothes",
      "Headlamp / flashlight",
      "River footwear & camp shoes",
      "Passport"
    ],
    "departures": [
      "Scheduled weekly departures or on request (Min 4 pax)"
    ]
  },
  {
    "id": "jet-boat-extreme",
    "headline": "Jet Boat Adventure",
    "title": "Adventure Jet Boat Extreme in Batoka Gorge",
    "category": "water",
    "categoryLabel": "White Water & Jetboat",
    "subCategory": "High-Speed Rapid Roar",
    "priceUSD": 123,
    "promoPriceUSD": 123,
    "duration": "2.5 Hours (Hike + Boat)",
    "minAge": "10+ Years",
    "badge": "Promo Special",
    "badgeClass": "promo",
    "image": "assets/images/jetboat-extreme.jpg",
    "videoId": "9XsyhvTUoG4",
    "rating": "4.9",
    "reviews": 430,
    "description": "Powered by 465hp twin V8 engines, this purpose-built jet boat blasts across the roaring rapids of Batoka Gorge, pulling high-speed 360-degree spins inches away from towering sheer canyon walls.",
    "quickFacts": {
      "Power": "Twin 465 HP Marine Engines",
      "Maneuvers": "High-speed drift turns, Hamilton 360 spins",
      "Gorge Hike": "Scenic 7-storey cable car / trail down to river",
      "Pax": "12 Max per boat"
    },
    "inclusions": [
      "Extreme jet boat ride through rapids",
      "Life jacket & protective spray gear",
      "Return hotel transfers",
      "Gorge access and guide"
    ],
    "exclusions": [
      "National Parks fee ($12 pp)"
    ],
    "whatToBring": [
      "Clothes you don't mind getting drenched",
      "Sturdy walking shoes for gorge hike",
      "Waterproof camera or GoPro"
    ],
    "departures": [
      "08:30, 11:00, 14:00 Daily"
    ]
  },
  {
    "id": "jetboat-plus-combo",
    "headline": "Jet Boat Adventure",
    "title": "Jetboat Plus: Jet Boat + 1 Choice Adventure Combo",
    "category": "water",
    "categoryLabel": "White Water & Jetboat",
    "subCategory": "2-in-1 Combo Saver",
    "priceUSD": 173,
    "duration": "Half Day to Full Day",
    "minAge": "10+ Years",
    "badge": "30% Savings",
    "badgeClass": "hot",
    "image": "assets/images/jetboat-extreme.jpg",
    "videoId": "9XsyhvTUoG4",
    "rating": "5.0",
    "reviews": 320,
    "description": "Two premier Victoria Falls experiences for just $173! Enjoy the adrenaline of the 465hp Jet Boat Extreme PLUS your choice of: Zambezi Sunset Cruise, Game Drive, Bridge Slide, or Simunye Theatre Show.",
    "quickFacts": {
      "Combo": "Jetboat + Choice of 1 Activity",
      "Choices": "Sunset Cruise OR Safari Game Drive OR Bridge Slide OR Simunye",
      "Savings": "Save over $50 compared to separate bookings",
      "Flexibility": "Activities can be done on same or different days"
    },
    "inclusions": [
      "Adventure Jet Boat Extreme in Batoka Gorge",
      "Choice of 1 secondary Shearwater activity",
      "All respective hotel transfers and equipment"
    ],
    "exclusions": [
      "National Parks fees where applicable"
    ],
    "whatToBring": [
      "Passport",
      "Activity-appropriate clothing"
    ],
    "departures": [
      "Flexible scheduling over your stay"
    ]
  },
  {
    "id": "elephant-experience-morning",
    "headline": "Through the Eyes of an Elephant",
    "title": "Through the Eyes of an Elephant - Morning Immersion & Bush Walk",
    "category": "elephants",
    "categoryLabel": "Elephant Immersion",
    "subCategory": "EleCREW Conservation",
    "priceUSD": 148,
    "duration": "2.5 - 3 Hours",
    "minAge": "4+ (Walk 10+)",
    "badge": "EleCREW Bestseller",
    "badgeClass": "eco",
    "image": "assets/images/elephant-walk.jpg",
    "videoId": "07lLXYSIdhE",
    "rating": "5.0",
    "reviews": 620,
    "description": "Immerse yourself in the mind, soul, and senses of Africa's gentle giants. Begin with an educational conservation talk, meet an ambassador elephant up close, and embark on a 20-minute bush walk alongside the herd.",
    "quickFacts": {
      "Charity": "Directly funds eleCREW elephant conservation non-profit",
      "Immersion": "Educational talk on elephant senses, vocalization & memory",
      "Bush Walk": "20-min guided natural walk alongside the herd (ages 10+)",
      "Refreshments": "Morning teas, artisan coffees, juices & fresh muffins at waterhole"
    },
    "inclusions": [
      "Return hotel transfers in Victoria Falls",
      "Educational conservation talk by elephant specialists",
      "Close interaction & photo opportunity with ambassador elephant",
      "20-minute bush walk alongside herd",
      "Viewing deck refreshments and baked muffins"
    ],
    "exclusions": [
      "Souvenir photography / videos",
      "Curio purchases"
    ],
    "whatToBring": [
      "Comfortable bush walking shoes",
      "Hat, binoculars & sunscreen",
      "Light jacket during cooler winter months"
    ],
    "departures": [
      "08:00 AM or 10:30 AM Pickups Daily"
    ]
  },
  {
    "id": "elephant-experience-afternoon",
    "headline": "Through the Eyes of an Elephant",
    "title": "Through the Eyes of an Elephant - Afternoon Sundowner & Herd Walk",
    "category": "elephants",
    "categoryLabel": "Elephant Immersion",
    "subCategory": "Sundowner & Conservation",
    "priceUSD": 148,
    "duration": "2.5 - 3 Hours",
    "minAge": "4+ (Walk 10+)",
    "badge": "Sundowner Special",
    "badgeClass": "eco",
    "image": "assets/images/elephant-encounter.jpg",
    "videoId": "07lLXYSIdhE",
    "rating": "5.0",
    "reviews": 440,
    "description": "A magical afternoon encounter. Walk alongside the elephants as the golden afternoon light filters through the trees, watch the herd splash and socialize at the waterhole, and unwind with sundowner drinks on the viewing deck.",
    "quickFacts": {
      "Departure": "14:30 PM Pickup from Victoria Falls",
      "Walk": "20-minute guided bush walk with handlers",
      "Waterhole": "Elevated deck viewing herd socializing & bathing",
      "Drinks": "Alcoholic drinks (beer, wine, gin & tonic) & artisan bar snacks"
    },
    "inclusions": [
      "Return hotel transfers",
      "Guided walk alongside ambassador herd",
      "Sundowner alcoholic drinks, soft drinks & gourmet bar snacks",
      "EleCREW conservation support contribution"
    ],
    "exclusions": [
      "Optional photo media package"
    ],
    "whatToBring": [
      "Camera with telephoto lens",
      "Neutral-coloured bush clothing",
      "Sunglasses"
    ],
    "departures": [
      "14:30 PM Pickup Daily"
    ]
  },
  {
    "id": "elephant-platform-viewing",
    "headline": "Through the Eyes of an Elephant",
    "title": "Through the Eyes of an Elephant - Viewing Deck & Encounter (Kids & Seniors)",
    "category": "elephants",
    "categoryLabel": "Elephant Immersion",
    "subCategory": "Accessible & Family",
    "priceUSD": 74,
    "duration": "2.5 Hours",
    "minAge": "All Ages",
    "badge": "Family & Under 10s",
    "badgeClass": "promo",
    "image": "assets/images/elephant-walk.jpg",
    "videoId": "07lLXYSIdhE",
    "rating": "4.9",
    "reviews": 210,
    "description": "Designed for children under 10, families with strollers, and guests preferring easy accessibility. Enjoy the complete educational talk, personal elephant greeting, and panoramic deck viewing without the rough bush walk.",
    "quickFacts": {
      "Target": "Children under 10 & guests seeking easy access",
      "Interaction": "Gentle close encounter at reception deck",
      "Observation": "Elevated shaded deck overlooking the waterhole",
      "Snacks": "Full morning or afternoon refreshments included"
    },
    "inclusions": [
      "Return hotel transfers",
      "Full educational awareness presentation",
      "Hands-on elephant greeting session",
      "Refreshing drinks & snacks on viewing deck"
    ],
    "exclusions": [
      "20-minute bush walk trail (reserved for ages 10+)"
    ],
    "whatToBring": [
      "Camera",
      "Sun hat & sunscreen"
    ],
    "departures": [
      "08:00, 10:30, or 14:30 Daily"
    ]
  },
  {
    "id": "elephant-dinner-combo",
    "headline": "Through the Eyes of an Elephant",
    "title": "Elephant Walk & Conservation Campfire Bush Dinner",
    "category": "elephants",
    "categoryLabel": "Elephant Immersion",
    "subCategory": "Dinner & Sanctuary",
    "priceUSD": 195,
    "duration": "5.5 Hours (14:30 - 20:30)",
    "minAge": "10+ Years",
    "badge": "Exclusive Evening",
    "badgeClass": "vip",
    "image": "assets/images/elephant-encounter.jpg",
    "videoId": "07lLXYSIdhE",
    "rating": "5.0",
    "reviews": 310,
    "description": "The ultimate evening conservation experience. Combines the late-afternoon elephant interaction and bush walk with an open-air 3-course boma dinner around a roaring campfire under the stars at eleCREW sanctuary.",
    "quickFacts": {
      "Duration": "14:30 PM Pickup until 20:30 PM return",
      "Experience": "Afternoon walk + sunset sundowner + campfire boma dinner",
      "Dinner": "3-course freshly grilled bush dinner with wine & beer",
      "Atmosphere": "Intimate private reserve surrounded by wildlife sounds"
    },
    "inclusions": [
      "Afternoon elephant interaction & guided walk",
      "Sundowner drinks at waterhole",
      "3-course campfire bush dinner with beverages",
      "Return hotel transfers"
    ],
    "exclusions": [
      "National Parks / Conservation fees ($15 pp)"
    ],
    "whatToBring": [
      "Warm jacket for evening around campfire",
      "Camera"
    ],
    "departures": [
      "14:30 PM Daily"
    ]
  },
  {
    "id": "chobe-day-trip",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Chobe National Park Full Day Safari Excursion (Botswana)",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Botswana Big 5",
    "priceUSD": 229,
    "duration": "Full Day (10 Hours)",
    "minAge": "All Ages",
    "badge": "World Premier Safari",
    "badgeClass": "hot",
    "image": "assets/images/chobe-day-trip.jpg",
    "videoId": "yAyIKYSqfBY",
    "rating": "5.0",
    "reviews": 980,
    "description": "Southern Africa's greatest one-day wildlife experience. Cross into Botswana for a morning game boat cruise on the Chobe River (dense elephant herds, hippos, buffalos), a lavish lodge buffet lunch, and an open 4x4 safari drive.",
    "quickFacts": {
      "Morning": "Riverboat safari cruise on the Chobe River",
      "Lunch": "4-Star luxury safari lodge buffet overlooking river",
      "Afternoon": "Open 4x4 game drive deep into Chobe National Park",
      "Border": "Includes cross-border escort via Kazungula"
    },
    "inclusions": [
      "Chobe River morning safari cruise",
      "Chobe National Park open 4x4 game drive",
      "Luxury lodge lunch buffet & drinks",
      "Return cross-border hotel transfers",
      "Botswana park entry fees"
    ],
    "exclusions": [
      "Botswana Visa (if applicable to your nationality)"
    ],
    "whatToBring": [
      "Original Passport with valid blank page",
      "Sun hat & sunglasses",
      "Camera with telephoto lens",
      "Light jacket for morning breeze"
    ],
    "departures": [
      "07:00 AM Pickup from Victoria Falls / Returns ~17:30 PM Daily"
    ]
  },
  {
    "id": "zambezi-morning-game-drive",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Zambezi National Park Morning 4x4 Game Drive",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Morning Bush Safari",
    "priceUSD": 95,
    "duration": "3.5 Hours",
    "minAge": "All Ages",
    "badge": "Wildlife Classic",
    "badgeClass": "hot",
    "image": "assets/images/game-drive.jpg",
    "videoId": "dPIcwcHFfN0",
    "rating": "4.8",
    "reviews": 470,
    "description": "Explore the unspoiled riverine floodplains of Zambezi National Park in a customized open safari vehicle. Track lions, leopards, wild dogs, herds of sable antelope, and elephants along the riverbanks.",
    "quickFacts": {
      "Timing": "06:00 AM Pickup (Best for predator activity)",
      "Vehicle": "Custom open 4x4 safari cruiser with tiered seating",
      "Guides": "Professional licensed Zimbabwe safari guides",
      "Breakfast": "Light bush breakfast (coffee, tea, muffins) included"
    },
    "inclusions": [
      "4x4 game drive in Zambezi National Park",
      "Professional guide and wildlife tracker",
      "Morning tea, coffee, juice & muffins stop",
      "Return hotel transfers"
    ],
    "exclusions": [
      "National Parks Conservation Fee ($15 pp)"
    ],
    "whatToBring": [
      "Camera & binoculars",
      "Warm fleece for early morning drive",
      "Sunscreen"
    ],
    "departures": [
      "06:00 AM Daily"
    ]
  },
  {
    "id": "zambezi-afternoon-game-drive",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Zambezi National Park Afternoon & Sunset Game Drive",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Afternoon Safari",
    "priceUSD": 95,
    "duration": "3.5 Hours",
    "minAge": "All Ages",
    "badge": "Sundowner Drive",
    "badgeClass": "promo",
    "image": "assets/images/game-drive.jpg",
    "videoId": "dPIcwcHFfN0",
    "rating": "4.8",
    "reviews": 360,
    "description": "Track herds of buffaloes, giraffes, zebras, and elephants heading down to the Zambezi River to drink in the golden late afternoon light, concluding with refreshing sundowner drinks at the river edge.",
    "quickFacts": {
      "Timing": "14:30 PM Pickup (14:00 in winter)",
      "Scenic Stop": "Riverbank sundowner stop at sunset",
      "Drinks": "Local beers, wines, gin & tonic, savoury snacks",
      "Terrain": "Zambezi River loops & Chamabondo plains"
    },
    "inclusions": [
      "Guided 4x4 game drive",
      "Sundowner drinks and savoury snacks",
      "Return lodge transfers"
    ],
    "exclusions": [
      "Parks fee ($15 pp)"
    ],
    "whatToBring": [
      "Camera",
      "Sun hat & insect repellent",
      "Light jacket"
    ],
    "departures": [
      "14:30 PM Daily"
    ]
  },
  {
    "id": "full-day-zambezi-safari",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Full Day Zambezi & Chamabondo Park Deep Safari",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Comprehensive 4x4",
    "priceUSD": 187,
    "duration": "7.5 Hours (07:00 - 15:30)",
    "minAge": "All Ages",
    "badge": "Deep Wilderness",
    "badgeClass": "vip",
    "image": "assets/images/game-drive.jpg",
    "videoId": "dPIcwcHFfN0",
    "rating": "5.0",
    "reviews": 210,
    "description": "The complete deep immersion into Zambezi National Park. Venture far beyond the standard tourist tracks into the Chamabondo Vlei, enjoying an authentic bush picnic lunch and all-day wildlife tracking.",
    "quickFacts": {
      "Hours": "07:00 AM to 15:30 PM",
      "Areas": "Riverine forests + Deep Chamabondo interior",
      "Lunch": "Full bush picnic lunch under shady trees",
      "Sightings": "Rare antelopes, big cats, raptors, elephants"
    },
    "inclusions": [
      "Full day guided 4x4 safari",
      "Bush picnic lunch with cold beer, wine & soft drinks",
      "Morning tea/coffee stop",
      "Return transfers"
    ],
    "exclusions": [
      "National Parks fee ($15 pp)"
    ],
    "whatToBring": [
      "Binoculars",
      "Extra camera batteries",
      "Comfortable safari clothing"
    ],
    "departures": [
      "07:00 AM Daily"
    ]
  },
  {
    "id": "night-game-drive-dinner",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Spotlight Night Game Drive & 3-Course Bush Dinner",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Nocturnal Predators",
    "priceUSD": 159,
    "duration": "4 Hours (15:35 - 20:30)",
    "minAge": "All Ages",
    "badge": "Nocturnal Safari",
    "badgeClass": "hot",
    "image": "assets/images/game-drive.jpg",
    "videoId": "dPIcwcHFfN0",
    "rating": "5.0",
    "reviews": 490,
    "description": "As twilight falls, embark on an exhilarating safari equipped with high-powered red-filtered spotlights. Encounter leopards, spotted hyenas, civets, genets, and porcupines, followed by a candlelit 3-course bush dinner at Jafuta Camp.",
    "quickFacts": {
      "Timing": "15:35 PM Pickup to ~20:30 PM Return",
      "Equipment": "Spotlight-equipped open 4x4 cruisers",
      "Dinner": "3-course gourmet dinner under canvas / stars at Jafuta",
      "Beverages": "Complementary wines, beers, and soft drinks"
    },
    "inclusions": [
      "Sunset game drive leading into spotlight night safari",
      "3-course bush dinner with beverages",
      "Return hotel transfers in Victoria Falls"
    ],
    "exclusions": [
      "Parks fee ($15 pp)"
    ],
    "whatToBring": [
      "Warm jacket / sweater for open night drive",
      "Camera (flash allowed at guide's direction)"
    ],
    "departures": [
      "15:35 PM Daily"
    ]
  },
  {
    "id": "walking-safari-game-walk",
    "headline": "Victoria Falls Safari Experiences",
    "title": "Walking Safari: Guided Bush Walk with Armed Ranger",
    "category": "safari",
    "categoryLabel": "Safaris & Wildlife",
    "subCategory": "Active On-Foot",
    "priceUSD": 132,
    "duration": "2.5 Hours (2h in Bush)",
    "minAge": "12+ Years",
    "badge": "On-Foot Adventure",
    "badgeClass": "vip",
    "image": "assets/images/game-walk.jpg",
    "videoId": "dPIcwcHFfN0",
    "rating": "4.9",
    "reviews": 310,
    "description": "Experience Africa the way the early explorers did—on foot. Accompanied by a licensed professional armed ranger, examine spoor and animal tracks, learn bush medicine, and encounter wildlife at eye level.",
    "quickFacts": {
      "Guides": "Professional armed scout and lead naturalist",
      "Terrain": "Upper Zambezi floodplains and mopane woodlands",
      "Focus": "Tracking prints, animal signs, flora & birding",
      "Safety": "Full tactical briefing and strict armed protocols"
    },
    "inclusions": [
      "2 hours guided walking safari with armed ranger",
      "Bush tea, coffee & morning snacks",
      "4x4 transport into park",
      "Return hotel transfers"
    ],
    "exclusions": [
      "National Parks fee ($15 pp)"
    ],
    "whatToBring": [
      "Sturdy closed walking shoes / boots",
      "Neutral bush clothes (khaki, olive, brown - no white or bright colors)",
      "Sunscreen & hat"
    ],
    "departures": [
      "06:00 AM (Morning) or 14:30 PM (Afternoon) Daily"
    ]
  },
  {
    "id": "guided-falls-tour",
    "headline": "Victoria Falls Guided Tours & Scenic Hikes",
    "title": "Victoria Falls Guided Rainforest Tour (Zimbabwe Side)",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "Heritage Landmark",
    "priceUSD": 32,
    "duration": "2.5 Hours",
    "minAge": "All Ages",
    "badge": "Essential Must-Do",
    "badgeClass": "hot",
    "image": "assets/images/guided-falls.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "5.0",
    "reviews": 1200,
    "description": "The quintessential Victoria Falls experience. Follow our expert local guides through the lush rainforest to all 16 viewpoints, including Livingstone's Statue, Devil's Cataract, Main Falls, and Rainbow Falls. Complimentary raincoats provided.",
    "quickFacts": {
      "Viewpoints": "16 stunning cliff-edge vantage points",
      "Highlights": "Devil's Cataract, Main Falls, Horseshoe, Rainbow Falls",
      "Gear": "Complimentary raincoats & waterproof ponchos",
      "Pathways": "Paved, accessible walkways suitable for all ages"
    },
    "inclusions": [
      "Expert English-speaking certified guide",
      "Raincoat / poncho provided during high water spray",
      "Return hotel transfers in Victoria Falls town",
      "Bottled mineral water"
    ],
    "exclusions": [
      "National Parks Rainforest Entrance Fee ($50 intl / $30 SADC)"
    ],
    "whatToBring": [
      "Comfortable walking shoes",
      "Passport / photo ID for entry",
      "Waterproof phone case or camera protection"
    ],
    "departures": [
      "08:00, 09:00, 11:00, and 14:30 Daily"
    ]
  },
  {
    "id": "batoka-gorge-hike",
    "headline": "Victoria Falls Guided Tours & Scenic Hikes",
    "title": "Batoka Gorge Scenic Hiking Tour & Homestead Brunch",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "Scenic Gorge Trek",
    "priceUSD": 127,
    "duration": "5.5 Hours",
    "minAge": "All Ages",
    "badge": "Gorge & Culture",
    "badgeClass": "vip",
    "image": "assets/images/gorge-hike.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.9",
    "reviews": 270,
    "description": "A 40-minute 4x4 ride across scenic Zimbabwean countryside leads to the top of Batoka Gorge at Rapid 23. Hike down along the river to Rapid 25, enjoy swim stops, and ascend to a homemade brunch at an authentic Ndebele homestead.",
    "quickFacts": {
      "Hiking": "Descent into gorge, river hike to Rapid 25, steep climb out",
      "Homestead": "Authentic traditional Ndebele family village brunch",
      "Swim": "Safe river pool swim stops during dry season",
      "Fitness": "Moderate fitness required"
    },
    "inclusions": [
      "40-minute off-road 4x4 transit",
      "Expert hiking guide & safety staff",
      "Homestead brunch & refreshments",
      "Return lodge transfers"
    ],
    "exclusions": [
      "Personal gratuities"
    ],
    "whatToBring": [
      "Hiking boots with ankle support",
      "Swimwear & small towel",
      "Daypack with water bottle",
      "Sunscreen"
    ],
    "departures": [
      "07:30 AM Pickup Daily"
    ]
  },
  {
    "id": "rural-village-tour",
    "headline": "Victoria Falls Guided Tours & Scenic Hikes",
    "title": "Authentic Rural Village Cultural Tour",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "Cultural Immersion",
    "priceUSD": 74,
    "duration": "2 Hours",
    "minAge": "All Ages",
    "badge": "Authentic Heritage",
    "badgeClass": "eco",
    "image": "assets/images/rural-village.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.8",
    "reviews": 310,
    "description": "Step into an authentic African village located 20km outside Victoria Falls town where centuries-old traditions endure. Meet local families, observe grain stamping and basket weaving, and learn about real rural life.",
    "quickFacts": {
      "Distance": "20km from Victoria Falls town",
      "Host": "Village Headman and local community elders",
      "Interaction": "Visit family homesteads, cattle kraals, cooking huts",
      "Community": "Tour proceeds directly support local village schooling"
    },
    "inclusions": [
      "Return air-conditioned hotel transfers",
      "Expert cultural interpreter guide",
      "Community entrance fees and donations",
      "Bottled water"
    ],
    "exclusions": [
      "Optional donations or handicrafts purchases"
    ],
    "whatToBring": [
      "Comfortable walking shoes",
      "Hat & camera",
      "Small gifts for children (pencils/books) if desired"
    ],
    "departures": [
      "10:00 AM Daily (Flexible on request)"
    ]
  },
  {
    "id": "simunye-theatre-show",
    "headline": "Victoria Falls Theatre",
    "title": "Simunye: The Spirit of Africa (Award-Winning Theatre Show)",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "World-Class Theatre",
    "priceUSD": 58,
    "promoPriceUSD": 58,
    "duration": "1 Hour (20:00 - 21:00)",
    "minAge": "All Ages",
    "badge": "Award Winner",
    "badgeClass": "hot",
    "image": "assets/images/simunye-show.jpg",
    "videoId": "M8wuy8WI9tA",
    "rating": "5.0",
    "reviews": 780,
    "description": "Victoria Falls' premier evening cultural attraction. A breathtaking theatrical masterpiece featuring life-sized puppet artistry, spellbinding acrobatics, fire dancing, and original musical compositions celebrating Africa's oneness.",
    "quickFacts": {
      "Venue": "Victoria Falls Theatre (Explorers Village)",
      "Timing": "Tuesday - Sunday: 20:00 - 21:00",
      "Children": "Child tickets (ages 4-11) available at $29",
      "Production": "Directed by internationally acclaimed circus and theatrical directors"
    },
    "inclusions": [
      "Admission ticket to Simunye live performance",
      "Reserved theatre seating",
      "Air-conditioned auditorium or starlit amphitheatre"
    ],
    "exclusions": [
      "Drinks from theatre bar",
      "Hotel transfers (short stroll from town)"
    ],
    "whatToBring": [
      "Camera (no flash during show)",
      "Card/cash for theatre bar"
    ],
    "departures": [
      "20:00 hrs Tue-Sun (Arrive by 19:30)"
    ]
  },
  {
    "id": "simunye-dinner-show-package",
    "headline": "Victoria Falls Theatre",
    "title": "Simunye Theatre Show + Pre-Show Gourmet Dinner Package",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "Dinner & Show VIP",
    "priceUSD": 85,
    "duration": "3 Hours (18:30 - 21:30)",
    "minAge": "All Ages",
    "badge": "Dinner & Show VIP",
    "badgeClass": "vip",
    "image": "assets/images/simunye-show.jpg",
    "videoId": "M8wuy8WI9tA",
    "rating": "5.0",
    "reviews": 430,
    "description": "The ultimate evening out in Victoria Falls. Savor a gourmet 3-course dinner at the Explorers Village Restaurant surrounded by torchlit gardens before taking VIP seats for the acclaimed Simunye performance.",
    "quickFacts": {
      "Dinner": "3-course à la carte dinner at Explorers Village Restaurant",
      "Show": "Simunye Theatre Show at 20:00 hrs",
      "Seating": "Premium front-tier theatre seats reserved",
      "Drinks": "Welcome African cocktail or mocktail included"
    },
    "inclusions": [
      "3-course gourmet dinner",
      "Welcome drink",
      "VIP seating for Simunye show",
      "All service charges"
    ],
    "exclusions": [
      "Additional beverages"
    ],
    "whatToBring": [
      "Smart casual evening attire"
    ],
    "departures": [
      "18:30 Dinner / 20:00 Show (Tue - Sun)"
    ]
  },
  {
    "id": "town-craft-heritage-tour",
    "headline": "Victoria Falls Guided Tours & Scenic Hikes",
    "title": "Victoria Falls Town, Big Tree & Curio Market Heritage Tour",
    "category": "tours",
    "categoryLabel": "Tours & Hikes",
    "subCategory": "Town History",
    "priceUSD": 45,
    "duration": "2 Hours",
    "minAge": "All Ages",
    "badge": "Historic Sights",
    "badgeClass": "promo",
    "image": "assets/images/guided-falls.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.8",
    "reviews": 195,
    "description": "Explore the charming colonial and indigenous history of Victoria Falls town. Visit the massive 1,500-year-old Big Tree baobab, browse the open-air curio wood-carving market, and view the historic railway siding.",
    "quickFacts": {
      "Stops": "1,500-yr Baobab (Big Tree), Craft market, Victoria Falls Hotel gardens",
      "Shopping": "Support local artisan wood and stone sculptors",
      "Transport": "Air-conditioned tour bus with guide",
      "Duration": "2 hours easy walking"
    },
    "inclusions": [
      "Guided sightseeing transport",
      "Local historian guide",
      "Hotel pickup & dropoff"
    ],
    "exclusions": [
      "Personal shopping purchases"
    ],
    "whatToBring": [
      "Cash (USD) for artisan crafts & wood carvings",
      "Camera"
    ],
    "departures": [
      "09:30 AM or 14:00 PM Daily"
    ]
  },
  {
    "id": "bronze-package-basic",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Bronze Package (Basic): Sunset Boat Cruise + Guided Falls Tour",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Value Saver",
    "priceUSD": 75,
    "duration": "4.5 Hours Total",
    "minAge": "All Ages",
    "badge": "Best Value $75",
    "badgeClass": "promo",
    "image": "assets/images/sunset-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "4.9",
    "reviews": 540,
    "description": "The essential starter combo at an unbeatable rate of just $75 per person. Combines a morning Guided Tour of Victoria Falls with a relaxing Classic Zambezi Sunset Cruise with drinks and snacks.",
    "quickFacts": {
      "Activities": "Guided Falls Tour (Rainforest) + Zambezi Sunset Boat Cruise",
      "Schedule": "Morning Falls Tour (09:00) + Late Afternoon Sunset Cruise (16:00)",
      "Savings": "Save over $37 compared to individual rates",
      "Flexibility": "Can be taken in 1 day or split across 2 days"
    },
    "inclusions": [
      "Guided Tour of Victoria Falls (Rainforest)",
      "Classic Zambezi Sunset Cruise with open bar & snacks",
      "Return hotel transfers for both activities"
    ],
    "exclusions": [
      "Parks rainforest entry ($50) and River fee ($12)"
    ],
    "whatToBring": [
      "Passport for entry gates",
      "Rain jacket & sun protection"
    ],
    "departures": [
      "Daily Departures"
    ]
  },
  {
    "id": "silver-package-no-fly-zone",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Silver Package (No Fly Zone): Bridge Tour + Falls Tour + Sunset Cruise",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "3-Product Combo",
    "priceUSD": 150,
    "duration": "6.5 Hours Total",
    "minAge": "10+ Years",
    "badge": "Popular Combo",
    "badgeClass": "hot",
    "image": "assets/images/bridge-tour.jpg",
    "videoId": "lIXzz4TpfIo",
    "rating": "4.9",
    "reviews": 430,
    "description": "Three classic products in one seamless package for $150pp: Historic Victoria Falls Bridge Catwalk Tour, Mid-Morning Guided Falls Rainforest Walk, and an evening Zambezi Sunset Cruise.",
    "quickFacts": {
      "Activities": "Bridge Tour + Guided Falls Tour + Zambezi Sunset Cruise",
      "Timing": "09:00 Bridge Tour -> 11:30 Falls Tour -> 16:00 Sunset Cruise",
      "Lunch": "Optional lunch at Rainforest Café between tours",
      "Savings": "Save $26pp"
    },
    "inclusions": [
      "Historic Bridge Tour & Catwalk under bridge",
      "Guided Rainforest Tour of Victoria Falls",
      "Zambezi River Sunset Cruise with complimentary drinks/snacks",
      "All hotel transfers"
    ],
    "exclusions": [
      "National Parks fees"
    ],
    "whatToBring": [
      "Original Passport",
      "Walking shoes"
    ],
    "departures": [
      "Daily"
    ]
  },
  {
    "id": "gold-package-bridge-too-far",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Gold Package (A Bridge Too Far): Helicopter + Falls Tour + Sunset Cruise",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Air, Land & Water",
    "priceUSD": 247,
    "duration": "5.5 Hours Total",
    "minAge": "All Ages",
    "badge": "Air Land Water",
    "badgeClass": "hot",
    "image": "assets/images/heli-flight.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 690,
    "description": "The ultimate trinity of Victoria Falls! Take to the skies on the Flight of Angels Helicopter Flight, walk the rim on the Guided Rainforest Tour, and unwind on a golden Zambezi Sunset Cruise.",
    "quickFacts": {
      "Air": "Flight of Angels Helicopter Flight (12-13 mins)",
      "Land": "Guided Rainforest Tour of Victoria Falls",
      "Water": "Classic Zambezi Sunset Boat Cruise with drinks",
      "Savings": "Save $38 per person"
    },
    "inclusions": [
      "Flight of Angels Helicopter Flight",
      "Guided Tour of Victoria Falls",
      "Zambezi Sunset Cruise with open bar & snacks",
      "All return lodge transfers"
    ],
    "exclusions": [
      "Parks fee & Aviation levy"
    ],
    "whatToBring": [
      "Passport",
      "Camera with strap",
      "Comfortable footwear"
    ],
    "departures": [
      "Daily"
    ]
  },
  {
    "id": "platinum-package-full-monty",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Platinum Package (The Full Monty): Heli + Bridge + Falls + Sunset Cruise",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "All-Inclusive Day",
    "priceUSD": 326,
    "duration": "Full Day",
    "minAge": "10+ Years",
    "badge": "The Complete Day",
    "badgeClass": "vip",
    "image": "assets/images/heli-gorge.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 810,
    "description": "Four iconic products bundled into one supreme day: Helicopter Flight of Angels, Historic Bridge Catwalk Tour, Guided Tour of Victoria Falls, and a luxury Zambezi Sunset Cruise.",
    "quickFacts": {
      "Package": "Four Products in One Ultimate Day",
      "Itinerary": "Early Heli flight -> Guided Falls Walk -> Bridge Catwalk -> Sunset Cruise",
      "Price": "$326 per person (Value $369+)",
      "Comfort": "Seamless transfers linking every step of your day"
    },
    "inclusions": [
      "Flight of Angels Helicopter Flight",
      "Historic Victoria Falls Bridge Tour",
      "Guided Rainforest Tour of the Falls",
      "Zambezi Sunset Cruise with open bar",
      "All transfers"
    ],
    "exclusions": [
      "National Parks & Aviation fees"
    ],
    "whatToBring": [
      "Passport",
      "Camera & sunglasses",
      "Comfortable shoes"
    ],
    "departures": [
      "Daily 08:00 start"
    ]
  },
  {
    "id": "gruesome-twosome-one",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Gruesome Twosome 1: 111m Bungee Jump + Full Day White Water Rafting",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Adrenaline Heavyweights",
    "priceUSD": 347,
    "duration": "Full Day or 2 Days",
    "minAge": "15+ Years",
    "badge": "Hardcore Adrenaline",
    "badgeClass": "hot",
    "image": "assets/images/bungee-jump.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "5.0",
    "reviews": 420,
    "description": "The heavyweight thrill combo for true adrenaline junkies: leap 111 meters from the Victoria Falls Bridge, then conquer the wild Class V rapids of the Zambezi on a full-day rafting expedition.",
    "quickFacts": {
      "Activities": "111m Victoria Falls Bungee Jump + Full Day Whitewater Rafting",
      "Schedule": "Can be completed in one massive day or over 2 consecutive days",
      "Lunch": "Riverside barbecue lunch included during rafting",
      "Savings": "Save $20 on combo"
    },
    "inclusions": [
      "111m Bungee Jump & certificate",
      "Full Day Whitewater Rafting (Rapids 1-19)",
      "Riverside BBQ lunch, cold beers & refreshments",
      "All hotel transfers"
    ],
    "exclusions": [
      "Parks fee ($12)"
    ],
    "whatToBring": [
      "Passport for bridge",
      "River shoes & swimwear"
    ],
    "departures": [
      "Daily"
    ]
  },
  {
    "id": "gruesome-twosome-two",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Gruesome Twosome 2: 111m Bungee Jump + Adventure Jetboat Extreme",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Speed & Gravity",
    "priceUSD": 312,
    "duration": "Half Day (4 Hours)",
    "minAge": "14+ Years",
    "badge": "Speed & Gravity",
    "badgeClass": "hot",
    "image": "assets/images/jetboat-extreme.jpg",
    "videoId": "9XsyhvTUoG4",
    "rating": "4.9",
    "reviews": 290,
    "description": "Defy gravity and ride the rapids: jump 111m from the bridge, then strap into the 465hp Adventure Jetboat for heart-racing 360-degree spins through the boiling rapids of Batoka Gorge.",
    "quickFacts": {
      "Activities": "111m Bungee Jump + 465hp Jet Boat Extreme",
      "Duration": "Approx 4-5 hours total",
      "Location": "Victoria Falls Bridge & Batoka Gorge rapids",
      "Thrill": "Pure unadulterated high-speed thrill"
    },
    "inclusions": [
      "111m Bungee Jump and gear",
      "Adventure Jetboat Extreme ride",
      "All equipment, guides, and hotel transfers"
    ],
    "exclusions": [
      "Parks fee ($12)"
    ],
    "whatToBring": [
      "Passport",
      "Closed shoes & change of dry clothes"
    ],
    "departures": [
      "Daily"
    ]
  },
  {
    "id": "ticket-to-adventure-one",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Ticket to Adventure 1: Zambezi Sunset Cruise + Any 2 Adventure Activities",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Choose Any 2",
    "priceUSD": 370,
    "duration": "1 - 2 Days",
    "minAge": "Activity Dependent",
    "badge": "Pick Any 2",
    "badgeClass": "vip",
    "image": "assets/images/riversong-cruise.jpg",
    "videoId": "kRTc52o0Ppo",
    "rating": "5.0",
    "reviews": 510,
    "description": "Ultimate flexibility at massive savings: Includes the Zambezi Sunset Cruise PLUS your choice of ANY TWO Shearwater adventures: Jetboat, Rafting, Guided Falls Tour, Bridge Swing, Game Walk, Bungee Jump, or Night Drive with Dinner!",
    "quickFacts": {
      "Includes": "Sunset Cruise + Any 2 adventures of your choice",
      "Options": "Jetboat, Rafting, Bungee, Bridge Swing, Game Walk, Falls Tour, Boma Dinner",
      "Duration": "Spread out over your entire holiday in Victoria Falls",
      "Savings": "Save up to $120"
    },
    "inclusions": [
      "Zambezi Sunset Boat Cruise with drinks",
      "Choice of 2 premium adventures from the Shearwater portfolio",
      "All associated transfers and equipment"
    ],
    "exclusions": [
      "National Parks fees"
    ],
    "whatToBring": [
      "Passport",
      "Activity clothing"
    ],
    "departures": [
      "Customized to your schedule"
    ]
  },
  {
    "id": "ticket-to-adventure-two",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Ticket to Adventure 2: Book Any 3 Epic Adventure Products of Your Choice",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Pick Any 3",
    "priceUSD": 478,
    "duration": "2 - 3 Days",
    "minAge": "Activity Dependent",
    "badge": "Pick Any 3",
    "badgeClass": "vip",
    "image": "assets/images/heli-flight.jpg",
    "videoId": "zC_ecrdL1no",
    "rating": "5.0",
    "reviews": 380,
    "description": "Total freedom! Pick ANY THREE adventure products across Shearwater's entire catalog: Helicopter Flight, Bungee Jump, Whitewater Rafting, Bridge Swing, Through the Eyes of an Elephant, Luxury Cruise, or Night Safari.",
    "quickFacts": {
      "Freedom": "Pick ANY 3 adventure products from our full range",
      "Options": "Helicopter, Bungee, Rafting, Elephant, Sunset Cruise, Game Drive, etc.",
      "Validity": "Valid across multiple days during your stay",
      "Value": "Maximum bundle discount in Victoria Falls"
    },
    "inclusions": [
      "Any 3 selected adventure activities",
      "All safety gear, guides, and briefing",
      "Return hotel transfers for all chosen activities"
    ],
    "exclusions": [
      "Parks & aviation levies"
    ],
    "whatToBring": [
      "Passport",
      "Camera"
    ],
    "departures": [
      "Flexible scheduling"
    ]
  },
  {
    "id": "family-explorer-combo",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Family Explorer Combo: Falls Tour + Sunset Cruise + Elephant Encounter",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "Family Friendly",
    "priceUSD": 215,
    "duration": "Full Day (or 2 Days)",
    "minAge": "All Ages",
    "badge": "Family Special",
    "badgeClass": "eco",
    "image": "assets/images/elephant-walk.jpg",
    "videoId": "07lLXYSIdhE",
    "rating": "5.0",
    "reviews": 340,
    "description": "Specially created for families and multi-generational travelers: Guided Tour of Victoria Falls, gentle sunset boat cruise with wildlife spotting, and the educational Through the Eyes of an Elephant encounter.",
    "quickFacts": {
      "Activities": "Guided Falls Tour + Zambezi Sunset Cruise + Elephant Encounter",
      "Age": "Suitable for children, parents, and grandparents",
      "Safety": "Safe, relaxed pace with child-friendly guides",
      "Savings": "Discounted family package rate"
    },
    "inclusions": [
      "Guided Rainforest Tour with raincoats",
      "Zambezi Sunset Cruise with drinks and snacks",
      "Through the Eyes of an Elephant encounter & refreshments",
      "All hotel transfers"
    ],
    "exclusions": [
      "Parks entrance fees"
    ],
    "whatToBring": [
      "Passports",
      "Sun hats & cameras"
    ],
    "departures": [
      "Daily Departures"
    ]
  },
  {
    "id": "adrenaline-overdrive-tri-thrill",
    "headline": "Victoria Falls Specials & Packages",
    "title": "Adrenaline Overdrive: Helicopter Flight + Rafting + 111m Bungee Jump",
    "category": "specials",
    "categoryLabel": "Specials & Combos",
    "subCategory": "The Holy Trinity",
    "priceUSD": 420,
    "duration": "1 - 2 Days",
    "minAge": "15+ Years",
    "badge": "Ultimate Adrenaline",
    "badgeClass": "hot",
    "image": "assets/images/bungee-jump.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "5.0",
    "reviews": 470,
    "description": "The ultimate badge of courage in Victoria Falls. Take to the skies on the Flight of Angels helicopter, conquer the legendary Grade 5 rapids of the Zambezi on a full-day raft, and leap 111m into the gorge on the Bungee!",
    "quickFacts": {
      "Trifecta": "Helicopter (Air) + White Water Rafting (Water) + Bungee (Gravity)",
      "Savings": "Save $120+ compared to individual bookings",
      "Pace": "Can be completed in 2 days or 1 adrenaline-packed day",
      "Certificate": "VIP Victoria Falls Overdrive Certificate"
    },
    "inclusions": [
      "Flight of Angels Helicopter Flight (12-13m)",
      "Full Day White Water Rafting with BBQ lunch & drinks",
      "111m Victoria Falls Bungee Jump",
      "All hotel transfers"
    ],
    "exclusions": [
      "Parks & aviation fees ($27 total)"
    ],
    "whatToBring": [
      "Passport",
      "Closed shoes & swimwear",
      "Camera"
    ],
    "departures": [
      "Daily Departures"
    ]
  },
  {
    "id": "transfer-airport-to-hotel",
    "headline": "Shearwater Victoria Falls Transfers",
    "title": "Victoria Falls Airport (VFA) to Hotel Transfer (One Way)",
    "category": "transfers",
    "categoryLabel": "Transfers",
    "subCategory": "Airport Shuttle",
    "priceUSD": 15,
    "duration": "25 Minutes",
    "minAge": "All Ages",
    "badge": "Reliable & Clean",
    "badgeClass": "promo",
    "image": "assets/images/transfers-fleet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.9",
    "reviews": 820,
    "description": "Seamless arrival in Victoria Falls. Our professional uniformed driver will greet you with a name board at the arrivals hall, assist with your luggage, and transfer you in a modern air-conditioned vehicle to your hotel.",
    "quickFacts": {
      "Vehicle": "Modern, air-conditioned passenger coaches & sprinters",
      "Meet & Greet": "Personalized name board in arrivals hall",
      "Flight Monitoring": "Driver tracks flight delays automatically",
      "Luggage": "Generous luggage storage"
    },
    "inclusions": [
      "Meet and greet service at Victoria Falls Airport",
      "Luggage handling assistance",
      "Air-conditioned coach transfer to any Victoria Falls hotel",
      "All road tolls and taxes"
    ],
    "exclusions": [
      "Driver gratuity (optional)"
    ],
    "whatToBring": [
      "Flight arrival details & hotel name"
    ],
    "departures": [
      "All international and domestic flights Daily"
    ]
  },
  {
    "id": "transfer-hotel-to-airport",
    "headline": "Shearwater Victoria Falls Transfers",
    "title": "Hotel to Victoria Falls Airport (VFA) Transfer (One Way)",
    "category": "transfers",
    "categoryLabel": "Transfers",
    "subCategory": "Departure Shuttle",
    "priceUSD": 15,
    "duration": "25 Minutes",
    "minAge": "All Ages",
    "badge": "On-Time Guaranteed",
    "badgeClass": "promo",
    "image": "assets/images/transfers-fleet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.9",
    "reviews": 790,
    "description": "Stress-free departure. We pick you up directly from your hotel lobby 2.5 hours prior to international flights or 2 hours prior to domestic flights, ensuring timely arrival at the airport check-in desk.",
    "quickFacts": {
      "Pickup": "Direct from your hotel reception desk",
      "Timing": "Scheduled precisely to your departure flight",
      "Punctuality": "100% on-time departure guarantee",
      "Comfort": "Cool air conditioning and clean seats"
    },
    "inclusions": [
      "Hotel lobby pickup and luggage loading",
      "Direct transfer to Victoria Falls Airport terminal",
      "Professional licensed driver"
    ],
    "exclusions": [
      "Gratuities"
    ],
    "whatToBring": [
      "Passport & flight boarding documents"
    ],
    "departures": [
      "Coordinated to flight departure times Daily"
    ]
  },
  {
    "id": "transfer-airport-roundtrip",
    "headline": "Shearwater Victoria Falls Transfers",
    "title": "Victoria Falls Airport Return Transfer (Round Trip Package)",
    "category": "transfers",
    "categoryLabel": "Transfers",
    "subCategory": "Round Trip Saver",
    "priceUSD": 28,
    "duration": "25 Mins Each Way",
    "minAge": "All Ages",
    "badge": "Round Trip Saver",
    "badgeClass": "hot",
    "image": "assets/images/transfers-fleet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "5.0",
    "reviews": 640,
    "description": "Book both arrival and departure in one easy step and save. Includes meet-and-greet at Victoria Falls Airport upon arrival, and reliable return pickup from your lodge at the end of your holiday.",
    "quickFacts": {
      "Covers": "Both Airport -> Hotel AND Hotel -> Airport legs",
      "Savings": "Save compared to two individual bookings",
      "Peace of Mind": "Pre-scheduled departure pickup voucher provided on arrival",
      "Vehicles": "Air-conditioned modern fleet"
    },
    "inclusions": [
      "Airport arrival meet-and-greet with name board",
      "Hotel departure scheduled transfer",
      "Luggage assistance both ways"
    ],
    "exclusions": [
      "Personal expenses"
    ],
    "whatToBring": [
      "Flight confirmation details"
    ],
    "departures": [
      "Any flights arriving and departing VFA Daily"
    ]
  },
  {
    "id": "transfer-livingstone-zambia-crossborder",
    "headline": "Shearwater Victoria Falls Transfers",
    "title": "Cross-Border Transfer: Victoria Falls to Livingstone / Airport (Zambia)",
    "category": "transfers",
    "categoryLabel": "Transfers",
    "subCategory": "Cross-Border Zambia",
    "priceUSD": 45,
    "duration": "45 Minutes",
    "minAge": "All Ages",
    "badge": "Cross-Border",
    "badgeClass": "vip",
    "image": "assets/images/transfers-fleet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.8",
    "reviews": 320,
    "description": "Comfortable cross-border transfer between Victoria Falls (Zimbabwe) and Livingstone hotels or Harry Mwanga Nkumbula International Airport (LVI) in Zambia across the Victoria Falls Bridge.",
    "quickFacts": {
      "Route": "Victoria Falls (ZW) <-> Livingstone (ZM)",
      "Border": "Victoria Falls Bridge border post",
      "Assistance": "Driver assists with immigration & customs procedures",
      "Vehicle": "Air-conditioned cross-border licensed coach"
    },
    "inclusions": [
      "Door-to-door transfer between Zimbabwe and Zambia hotels/airport",
      "Border post clearance guidance",
      "Luggage handling"
    ],
    "exclusions": [
      "Zambian / Zimbabwean visa fees (KAZA Univisa recommended)"
    ],
    "whatToBring": [
      "Valid passport & visa (KAZA Univisa where applicable)"
    ],
    "departures": [
      "Scheduled on request Daily"
    ]
  },
  {
    "id": "transfer-kasane-chobe-botswana",
    "headline": "Shearwater Victoria Falls Transfers",
    "title": "Cross-Border Transfer: Victoria Falls to Kasane / Chobe (Botswana)",
    "category": "transfers",
    "categoryLabel": "Transfers",
    "subCategory": "Cross-Border Botswana",
    "priceUSD": 65,
    "duration": "1.5 Hours",
    "minAge": "All Ages",
    "badge": "To Botswana",
    "badgeClass": "vip",
    "image": "assets/images/transfers-fleet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.9",
    "reviews": 260,
    "description": "Direct comfortable road transfer between Victoria Falls and Kasane lodges or Kasane Airport (BBK) in Botswana via the Kazungula border post. The easiest gateway to Chobe safari lodges.",
    "quickFacts": {
      "Route": "Victoria Falls (ZW) to Kasane / Chobe (BW)",
      "Distance": "Approx 80km (1.5 hours travel time)",
      "Border": "Kazungula Border Post",
      "Vehicle": "Spacious air-conditioned minivan or coach"
    },
    "inclusions": [
      "Hotel to lodge/airport door-to-door transfer",
      "Border crossing assistance at Kazungula",
      "Comfortable transit with air-conditioning"
    ],
    "exclusions": [
      "Botswana border fees / visas where applicable"
    ],
    "whatToBring": [
      "Valid passport with blank pages"
    ],
    "departures": [
      "Morning and afternoon departures Daily"
    ]
  },
  {
    "id": "dining-boma-dinner-drumming",
    "headline": "Victoria Falls Restaurants & Dining",
    "title": "The Boma: Dinner & Drumming Feast with Traditional Dancers",
    "category": "dining",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Cultural Feast",
    "priceUSD": 45,
    "duration": "3 Hours (19:00 - 22:00)",
    "minAge": "All Ages",
    "badge": "Legendary Feast",
    "badgeClass": "hot",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "M8wuy8WI9tA",
    "rating": "4.9",
    "reviews": 860,
    "description": "An unforgettable celebration of African food, drumming, and dance. Clothed in traditional chitenges upon arrival, feast on barbecued game meats, local stews, and join the energetic interactive djembe drumming circle.",
    "quickFacts": {
      "Cuisine": "4-course feast with barbecued game meats, potjies & vegetarian bar",
      "Entertainment": "Traditional Shangaan dancers, Sangoma fortune teller, face painting",
      "Drumming": "Interactive djembe drum session for every guest at 21:00",
      "Dress": "Traditional chitenge sarongs provided on entry"
    },
    "inclusions": [
      "Complete 4-course banquet buffet feast",
      "Interactive djembe drumming session with private drum",
      "Traditional dance performances & face painting",
      "Return hotel transfers in Victoria Falls"
    ],
    "exclusions": [
      "Beverages and bar purchases"
    ],
    "whatToBring": [
      "Appetite for adventure and camera"
    ],
    "departures": [
      "19:00 hrs Daily"
    ]
  },
  {
    "id": "dining-rainforest-cafe-lunch",
    "headline": "Victoria Falls Restaurants & Dining",
    "title": "The Rainforest Café: Gourmet Forest Lunch & Craft Drinks",
    "category": "dining",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "National Park Dining",
    "priceUSD": 30,
    "duration": "1.5 Hours",
    "minAge": "All Ages",
    "badge": "Inside National Park",
    "badgeClass": "eco",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.8",
    "reviews": 320,
    "description": "Situated right inside the Victoria Falls national park gate beneath a lush natural canopy. Savor artisan burgers, fresh wraps, and chilled Zambezi craft beers as cooling mist drifts through the rainforest.",
    "quickFacts": {
      "Location": "Victoria Falls National Park entrance",
      "Setting": "Shaded open-air deck under mature mahogany trees",
      "Food": "Artisan burgers, gourmet salads, pizza, vegan bowls",
      "Bar": "Locally brewed craft beers, espresso, cocktails"
    },
    "inclusions": [
      "Food and beverage dining credit voucher ($30)",
      "Reserved seating in rainforest garden"
    ],
    "exclusions": [
      "National park entry fee (if entering waterfall path)"
    ],
    "whatToBring": [
      "Appetite and camera"
    ],
    "departures": [
      "Open 08:00 - 17:00 Daily"
    ]
  },
  {
    "id": "dining-bridge-cafe",
    "headline": "Victoria Falls Restaurants & Dining",
    "title": "The Bridge Café: Cliffside Batoka Gorge Viewing & Lunch",
    "category": "dining",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Canyon Views",
    "priceUSD": 25,
    "duration": "1.5 Hours",
    "minAge": "All Ages",
    "badge": "Gorge Panoramic",
    "badgeClass": "promo",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "xu_cWCb30QA",
    "rating": "4.8",
    "reviews": 240,
    "description": "Perched on the rim of the Batoka Gorge directly opposite the Victoria Falls Bridge. Enjoy delicious grilled wraps, cold drinks, and milkshakes while watching bungee jumpers plunge into the abyss.",
    "quickFacts": {
      "Location": "Victoria Falls Bridge border overlook",
      "Views": "Direct view of the 111m bungee platform and canyon rapids",
      "Menu": "Fresh wraps, burgers, smoothies, cold beers",
      "Vibe": "Adrenaline spectator lounge"
    },
    "inclusions": [
      "Dining voucher toward meal and drinks",
      "Border gate pass access"
    ],
    "exclusions": [
      "Gratuities"
    ],
    "whatToBring": [
      "Passport for border gate entry"
    ],
    "departures": [
      "Open 09:00 - 17:00 Daily"
    ]
  },
  {
    "id": "dining-explorers-restaurant",
    "headline": "Victoria Falls Restaurants & Dining",
    "title": "Explorers Village Restaurant: Garden Dining & Poolside Bar",
    "category": "dining",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Resort Dining",
    "priceUSD": 28,
    "duration": "1.5 Hours",
    "minAge": "All Ages",
    "badge": "Poolside Bistro",
    "badgeClass": "vip",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.9",
    "reviews": 410,
    "description": "A relaxed tropical dining oasis located at Explorers Village just 400m from the Falls. Features wood-fired pizzas, prime Zimbabwean steaks, fresh garden salads, and signature cocktails by the sparkling pool.",
    "quickFacts": {
      "Location": "Shearwater Explorers Village grounds",
      "Cuisine": "Wood-fired pizzas, flame-grilled steaks, pasta, vegetarian",
      "Pool": "Dine beside the infinity swimming pool",
      "Atmosphere": "Torchlit evening gardens and acoustic music"
    },
    "inclusions": [
      "Dinner or lunch voucher with drink ($28 value)",
      "Access to resort pool lounge"
    ],
    "exclusions": [
      "Extra alcohol beyond credit"
    ],
    "whatToBring": [
      "Casual resort wear"
    ],
    "departures": [
      "Breakfast, Lunch & Dinner Daily"
    ]
  },
  {
    "id": "dining-marula-cafe",
    "headline": "Victoria Falls Restaurants & Dining",
    "title": "Marula Café: Artisan Coffee, Local Flavors & Town Bistro",
    "category": "dining",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Town Café",
    "priceUSD": 22,
    "duration": "1 Hour",
    "minAge": "All Ages",
    "badge": "Single-Origin Coffee",
    "badgeClass": "eco",
    "image": "assets/images/dining-restaurant.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.7",
    "reviews": 180,
    "description": "Located in the vibrant center of Victoria Falls town. Known for its single-origin African espresso, freshly baked pastries, gourmet paninis, and hearty healthy breakfasts.",
    "quickFacts": {
      "Coffee": "Specialty beans from Zimbabwe and Eastern Africa",
      "Food": "All-day breakfast, artisanal sandwiches, smoothies",
      "Wi-Fi": "High-speed fiber Wi-Fi for remote workers and travelers",
      "Location": "Victoria Falls town center"
    },
    "inclusions": [
      "Brunch or lunch voucher with barista coffee / juice"
    ],
    "exclusions": [
      "Additional items"
    ],
    "whatToBring": [
      "Casual wear"
    ],
    "departures": [
      "Open 07:00 - 18:00 Daily"
    ]
  },
  {
    "id": "stay-deluxe-chalet",
    "headline": "Shearwater Explorers Village Accommodation",
    "title": "Explorers Village Deluxe Chalet (4-Star Luxury Ensuite)",
    "category": "stay",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "4-Star Chalet",
    "priceUSD": 137,
    "duration": "Per Room / Night",
    "minAge": "All Ages",
    "badge": "4-Star Luxury",
    "badgeClass": "vip",
    "image": "assets/images/explorers-chalet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "5.0",
    "reviews": 580,
    "description": "Spacious and beautifully appointed private chalet nestled 400m from Victoria Falls. Features a king-size bed (or twins), modern en-suite bathroom with walk-in rain shower, air conditioning, private patio, and garden views.",
    "quickFacts": {
      "Distance": "Only 400 metres from Victoria Falls Rainforest",
      "Capacity": "2 Adults (Extra child bed on request)",
      "Amenities": "Air-con, private veranda, rain shower, fast Wi-Fi, safe",
      "Pool": "Access to expansive resort swimming pool and bar"
    },
    "inclusions": [
      "Deluxe chalet accommodation for 2 guests",
      "Full buffet breakfast daily",
      "High-speed fiber Wi-Fi",
      "Free parking and concierge desk"
    ],
    "exclusions": [
      "Tourism levy ($3/night)"
    ],
    "whatToBring": [
      "Identification for check-in"
    ],
    "departures": [
      "Check-in 14:00 / Check-out 10:00"
    ]
  },
  {
    "id": "stay-standard-room",
    "headline": "Shearwater Explorers Village Accommodation",
    "title": "Explorers Village Standard Room (3-Star Ensuite Comfort)",
    "category": "stay",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "3-Star Room",
    "priceUSD": 110,
    "duration": "Per Room / Night",
    "minAge": "All Ages",
    "badge": "Great Value Stay",
    "badgeClass": "promo",
    "image": "assets/images/explorers-chalet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.8",
    "reviews": 420,
    "description": "Comfortable and stylish en-suite hotel room surrounded by lush indigenous trees. Equipped with twin or double beds, air conditioning, private shower, mosquito nets, and daily housekeeping.",
    "quickFacts": {
      "Distance": "400 metres from the Falls",
      "Amenities": "Air conditioning, en-suite bathroom, Wi-Fi, safe",
      "Capacity": "Up to 2 Guests",
      "Facilities": "Swimming pool, restaurant, activity booking center"
    },
    "inclusions": [
      "Standard en-suite room for 2 guests",
      "Buffet breakfast included",
      "Wi-Fi throughout property"
    ],
    "exclusions": [
      "Tourism levy"
    ],
    "whatToBring": [
      "Passport"
    ],
    "departures": [
      "Check-in 14:00 / Check-out 10:00"
    ]
  },
  {
    "id": "stay-serviced-dome-tent",
    "headline": "Shearwater Explorers Village Accommodation",
    "title": "Serviced Safari Dome Tent (Glamping Experience)",
    "category": "stay",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Safari Glamping",
    "priceUSD": 46,
    "duration": "Per Tent / Night",
    "minAge": "All Ages",
    "badge": "Glamping Saver",
    "badgeClass": "eco",
    "image": "assets/images/explorers-chalet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.7",
    "reviews": 310,
    "description": "Pre-erected heavy canvas safari dome tent set in tranquil shaded camping grounds. Outfitted with twin camp beds, crisp linen, pillows, electrical power outlets, and access to pristine luxury ablution blocks.",
    "quickFacts": {
      "Setup": "Pre-erected heavy-duty canvas dome tent",
      "Bedding": "Real twin beds with fresh linens, duvet and towels",
      "Power": "Internal lighting and universal charging socket",
      "Bathrooms": "Sparkling clean shared ablution blocks with hot showers"
    },
    "inclusions": [
      "Serviced canvas dome tent for 2 persons",
      "Linen, duvet and towels provided",
      "Full access to swimming pool, bar and Wi-Fi"
    ],
    "exclusions": [
      "Breakfast (can be added on at restaurant)"
    ],
    "whatToBring": [
      "Personal toiletries & flashlight"
    ],
    "departures": [
      "Check-in 14:00 / Check-out 10:00"
    ]
  },
  {
    "id": "stay-camping-pitch",
    "headline": "Shearwater Explorers Village Accommodation",
    "title": "Explorers Village Campsite Pitch (Self-Pitch Camping)",
    "category": "stay",
    "categoryLabel": "Dining & Lodging",
    "subCategory": "Budget Camping",
    "priceUSD": 20,
    "duration": "Per Person / Night",
    "minAge": "All Ages",
    "badge": "Overlander Pitch",
    "badgeClass": "eco",
    "image": "assets/images/explorers-chalet.jpg",
    "videoId": "s89fpKGRI1M",
    "rating": "4.6",
    "reviews": 195,
    "description": "Shaded, lush lawn campsite pitch for overlanders, backpackers, and self-drive campers. Full access to resort swimming pool, hot-water ablution blocks, restaurant, bar, and 24/7 security.",
    "quickFacts": {
      "Pitch": "Shaded grass pitch for private tent",
      "Ablutions": "Modern hot water showers, flushing toilets",
      "Security": "Fully fenced property with 24-hour guard patrol",
      "Location": "400m walk into Victoria Falls town & Rainforest"
    },
    "inclusions": [
      "Campsite pitch access for 1 guest",
      "Hot water shower ablution blocks",
      "Wi-Fi in central restaurant areas",
      "Swimming pool access"
    ],
    "exclusions": [
      "Camping gear (bring your own tent and bedding)"
    ],
    "whatToBring": [
      "Own tent, sleeping bag and camping gear"
    ],
    "departures": [
      "Check-in 12:00 / Check-out 10:00"
    ]
  }
];

  // State management
  let activeFilter = 'all';
  let searchQuery = '';
  let activeActivity = null;
  let isVideoPlaying = true;
  let isMuted = true;

  // =========================================================================
  // 3. MOVING PICTURES & VIDEO BACKGROUND ATMOSPHERE CONTROLLER
  // =========================================================================
  const SCENE_CONFIGS = {
    falls: {
      title: 'Victoria Falls Wonder',
      videoId: 'WMVeqCJ74EQ',
      image: 'assets/images/heli-flight.jpg',
      tag: 'World Heritage Wonder'
    },
    bridge: {
      title: 'Bridge & Bungee Adrenaline',
      videoId: 'xu_cWCb30QA',
      image: 'assets/images/bungee-jump.jpg',
      tag: '111m Freefall & Gorge'
    },
    elephants: {
      title: 'Elephant Sanctuary Immersion',
      videoId: '07lLXYSIdhE',
      image: 'assets/images/elephant-walk.jpg',
      tag: 'EleCREW Conservation'
    },
    rapids: {
      title: 'Zambezi White Water Rapids',
      videoId: 'A4rfVSTIonA',
      image: 'assets/images/rafting-action.jpg',
      tag: 'Class V Big Water'
    },
    helicopter: {
      title: 'Flight of Angels Helicopter',
      videoId: 'zC_ecrdL1no',
      image: 'assets/images/heli-gorge.jpg',
      tag: 'Scenic Gorge Canyons'
    },
    cruise: {
      title: 'Zambezi Sunset & Wildlife',
      videoId: 'kRTc52o0Ppo',
      image: 'assets/images/sunset-cruise.jpg',
      tag: 'Upper Zambezi Tranquility'
    }
  };

  const heroYtPlayer = document.getElementById('hero-yt-player');
  const atmosphereBtns = document.querySelectorAll('.atmosphere-btn');
  const btnToggleVideo = document.getElementById('btn-toggle-video');
  const btnToggleMute = document.getElementById('btn-toggle-mute');

  function setAtmosphereScene(sceneKey) {
    const config = SCENE_CONFIGS[sceneKey] || SCENE_CONFIGS.falls;
    if (heroYtPlayer) {
      const muteParam = isMuted ? '1' : '0';
      const embedUrl = `https://www.youtube.com/embed/${config.videoId}?autoplay=1&mute=${muteParam}&loop=1&playlist=${config.videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1`;
      heroYtPlayer.src = embedUrl;
    }

    atmosphereBtns.forEach(btn => {
      const match = btn.getAttribute('data-scene') === sceneKey;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    // Update active hero badge
    const sceneBadge = document.getElementById('hero-scene-badge');
    if (sceneBadge) {
      sceneBadge.textContent = config.title;
    }
  }

  atmosphereBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const scene = btn.getAttribute('data-scene');
      setAtmosphereScene(scene);
    });
  });

  if (btnToggleVideo) {
    btnToggleVideo.addEventListener('click', () => {
      isVideoPlaying = !isVideoPlaying;
      const videoBg = document.querySelector('.hero-video-bg');
      if (videoBg) {
        videoBg.style.opacity = isVideoPlaying ? '1' : '0';
      }
      btnToggleVideo.innerHTML = isVideoPlaying ?
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Pause Video' :
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Play Video';
    });
  }

  if (btnToggleMute) {
    btnToggleMute.addEventListener('click', () => {
      isMuted = !isMuted;
      btnToggleMute.innerHTML = isMuted ?
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg> Sound: Off' :
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> Sound: On';
      const activeBtn = document.querySelector('.atmosphere-btn.active');
      const activeScene = activeBtn ? activeBtn.getAttribute('data-scene') : 'falls';
      setAtmosphereScene(activeScene);
    });
  }

  // =========================================================================
  // 4. KEN BURNS MOVING PICTURES SLIDESHOW AUTO-RUNNER
  // =========================================================================
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 6000);
  }

  // =========================================================================
  // 5. MIST SPRAY PARTICLE CANVAS SIMULATION (Mosi-oa-Tunya)
  // =========================================================================
  const mistCanvas = document.getElementById('mist-canvas');
  if (mistCanvas) {
    const ctx = mistCanvas.getContext('2d');
    let width = mistCanvas.width = mistCanvas.offsetWidth;
    let height = mistCanvas.height = mistCanvas.offsetHeight;

    window.addEventListener('resize', () => {
      width = mistCanvas.width = mistCanvas.offsetWidth;
      height = mistCanvas.height = mistCanvas.offsetHeight;
    });

    const particles = [];
    const PARTICLE_COUNT = 35;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 40 + 20,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        opacity: Math.random() * 0.12 + 0.04
      });
    }

    function animateMist() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y + p.radius < 0) {
          p.y = height + p.radius;
          p.x = Math.random() * width;
        }
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(animateMist);
    }
    animateMist();
  }

  // =========================================================================
  // 6. CURRENCY CONVERTER HELPER
  // =========================================================================
  function formatPrice(amountUSD) {
    const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    const converted = Math.round(amountUSD * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  }

  function updateAllPricesInDOM() {
    renderActivities();
    if (activeActivity) {
      updateModalPrices(activeActivity);
    }
  }

  const currencySelector = document.getElementById('currency-select');
  if (currencySelector) {
    currencySelector.value = currentCurrency;
    currencySelector.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      updateAllPricesInDOM();
    });
  }

  // =========================================================================
  // 7. ACTIVITY CATALOG RENDERING & FILTERING
  // =========================================================================
  const activitiesContainer = document.getElementById('activities-container');
  const countBadge = document.getElementById('catalog-results-count');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('search-activity-keywords');
  const categorySelect = document.getElementById('search-experience');

  function renderActivities() {
    if (!activitiesContainer) return;

    // Filter logic
    const filtered = ACTIVITIES.filter(act => {
      const matchesCategory = (activeFilter === 'all') || (act.category === activeFilter);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        act.title.toLowerCase().includes(query) ||
        act.headline.toLowerCase().includes(query) ||
        act.description.toLowerCase().includes(query) ||
        act.categoryLabel.toLowerCase().includes(query) ||
        (act.subCategory && act.subCategory.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of ${ACTIVITIES.length} Experiences`;
    }

    if (filtered.length === 0) {
      activitiesContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No matching adventures found</h3>
          <p>We couldn't find any activities matching "${searchQuery}". Try a different keyword or reset filters.</p>
          <button class="btn-primary" id="btn-reset-filters">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeFilter = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          updateActiveTab('all');
          renderActivities();
        });
      }
      return;
    }

    activitiesContainer.innerHTML = filtered.map(act => {
      const priceFormatted = formatPrice(act.priceUSD);
      const promoFormatted = act.promoPriceUSD ? formatPrice(act.promoPriceUSD) : null;
      const badgeHtml = act.badge ? `<span class="card-badge badge-${act.badgeClass || 'hot'}">${act.badge}</span>` : '';

      return `
        <article class="activity-card" data-id="${act.id}" data-category="${act.category}">
          <div class="activity-card-media">
            ${badgeHtml}
            <img src="${act.image}" alt="${act.title}" loading="lazy" class="activity-img">
            <div class="card-category-pill">${act.categoryLabel}</div>
            <button class="btn-play-preview" data-video="${act.videoId || 'WMVeqCJ74EQ'}" data-title="${act.title}" title="Watch video preview">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>

          <div class="activity-card-body">
            <div class="activity-meta-row">
              <span class="meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${act.duration}
              </span>
              <span class="meta-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                ${act.minAge || 'All Ages'}
              </span>
              <span class="meta-rating">
                ★ ${act.rating} <small>(${act.reviews})</small>
              </span>
            </div>

            <h3 class="activity-title">${act.title}</h3>

            <!-- Card Description with prominent Read More toggle -->
            <div class="activity-desc-container">
              <p class="activity-desc clamped" id="desc-${act.id}">${act.description}</p>
              <button class="btn-read-more" data-id="${act.id}" aria-expanded="false" title="Click to read full description and details">
                <span class="read-text">Read More</span>
                <svg class="read-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>

            <!-- In-Card Expandable Details (Inclusions, Quick Highlights, Schedule) -->
            <div class="card-extra-details" id="extra-${act.id}">
              ${act.inclusions && act.inclusions.length > 0 ? `
                <div class="extra-block">
                  <span class="extra-label">Key Inclusions:</span>
                  <ul class="extra-inclusions-list">
                    ${act.inclusions.slice(0, 3).map(inc => `<li><span class="tick">✓</span> ${inc}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              ${act.quickFacts ? `
                <div class="extra-block">
                  <span class="extra-label">Quick Highlights:</span>
                  <div class="extra-facts-tags">
                    ${Object.entries(act.quickFacts).slice(0, 3).map(([k, v]) => `
                      <span class="fact-tag"><strong>${k}:</strong> ${v}</span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              ${act.departures && act.departures[0] ? `
                <div class="extra-departures">
                  🕒 <strong>Schedule:</strong> ${act.departures[0]}
                </div>
              ` : ''}
            </div>

            <div class="activity-perks">
              <span class="perk-tag">✓ Pickup Included</span>
              <span class="perk-tag">✓ Free 24h Cancel</span>
              <span class="perk-tag">✓ Best Rate</span>
            </div>

            <div class="activity-card-footer">
              <div class="price-wrapper">
                <span class="price-from">From</span>
                ${promoFormatted ? `
                  <span class="price-strike">${priceFormatted}</span>
                  <span class="price-amount promo">${promoFormatted}</span>
                ` : `
                  <span class="price-amount">${priceFormatted}</span>
                `}
                <span class="price-unit">${act.category === 'stay' ? '/ night' : 'per person'}</span>
              </div>

              <div class="card-actions">
                <button class="btn-card-details" data-id="${act.id}">
                  Full Specs
                </button>
                <button class="btn-card-book" data-id="${act.id}">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Read More / Read Less toggles on each card
    document.querySelectorAll('.btn-read-more').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const descEl = document.getElementById(`desc-${id}`);
        const extraEl = document.getElementById(`extra-${id}`);
        const cardEl = btn.closest('.activity-card');
        const readText = btn.querySelector('.read-text');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          if (descEl) descEl.classList.add('clamped');
          if (extraEl) extraEl.classList.remove('open');
          if (cardEl) cardEl.classList.remove('card-expanded');
          if (readText) readText.textContent = 'Read More';
          btn.classList.remove('active');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          if (descEl) descEl.classList.remove('clamped');
          if (extraEl) extraEl.classList.add('open');
          if (cardEl) cardEl.classList.add('card-expanded');
          if (readText) readText.textContent = 'Read Less';
          btn.classList.add('active');
        }
      });
    });

    // Attach listeners to newly created cards
    document.querySelectorAll('.btn-card-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openDetailsModal(id);
      });
    });

    document.querySelectorAll('.btn-card-book').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openBookingDrawer(id);
      });
    });

    document.querySelectorAll('.btn-play-preview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const videoId = btn.getAttribute('data-video');
        const title = btn.getAttribute('data-title');
        openVideoModal(videoId, title);
      });
    });
  }

  function updateActiveTab(category) {
    filterTabs.forEach(tab => {
      const match = tab.getAttribute('data-filter') === category;
      tab.classList.toggle('active', match);
      tab.setAttribute('aria-selected', match ? 'true' : 'false');
    });
  }

  // Filter tab clicks
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.getAttribute('data-filter');
      updateActiveTab(activeFilter);
      renderActivities();
      const catalogEl = document.getElementById('activities');
      if (catalogEl && window.scrollY > catalogEl.offsetTop + 300) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderActivities();
    });
  }

  // Hero search bar handler
  const btnFilterAction = document.getElementById('btn-filter-action');
  if (btnFilterAction && categorySelect) {
    btnFilterAction.addEventListener('click', () => {
      const selected = categorySelect.value;
      activeFilter = selected;
      updateActiveTab(selected);
      renderActivities();
      const catalogEl = document.getElementById('activities');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Hero category links from cards
  document.querySelectorAll('.btn-card-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const filter = link.getAttribute('data-filter');
      if (filter) {
        activeFilter = filter;
        updateActiveTab(filter);
        renderActivities();
      }
    });
  });

  // =========================================================================
  // 8. RICH DETAILS MODAL
  // =========================================================================
  const detailsDialog = document.getElementById('details-dialog');
  const detailsCloseBtn = document.getElementById('details-close-btn');

  function openDetailsModal(id) {
    const act = ACTIVITIES.find(a => a.id === id);
    if (!act || !detailsDialog) return;
    activeActivity = act;

    const modalTitle = document.getElementById('modal-act-title');
    const modalCategory = document.getElementById('modal-act-category');
    const modalImage = document.getElementById('modal-act-img');
    const modalDesc = document.getElementById('modal-act-desc');
    const modalPrice = document.getElementById('modal-act-price');
    const modalDuration = document.getElementById('modal-act-duration');
    const modalAge = document.getElementById('modal-act-age');
    const modalFacts = document.getElementById('modal-act-facts');
    const modalInclusions = document.getElementById('modal-act-inclusions');
    const modalExclusions = document.getElementById('modal-act-exclusions');
    const modalBring = document.getElementById('modal-act-bring');
    const modalDepartures = document.getElementById('modal-act-departures');
    const modalBookBtn = document.getElementById('modal-act-book-btn');
    const modalVideoBtn = document.getElementById('modal-act-video-btn');

    if (modalTitle) modalTitle.textContent = act.title;
    if (modalCategory) modalCategory.textContent = `${act.categoryLabel} • ${act.subCategory || 'Experience'}`;
    if (modalImage) {
      modalImage.src = act.image;
      modalImage.alt = act.title;
    }
    if (modalDesc) modalDesc.textContent = act.description;
    if (modalPrice) {
      const p = act.promoPriceUSD ? act.promoPriceUSD : act.priceUSD;
      modalPrice.textContent = `From ${formatPrice(p)} ${act.category === 'stay' ? '/ night' : 'per person'}`;
    }
    if (modalDuration) modalDuration.textContent = act.duration;
    if (modalAge) modalAge.textContent = act.minAge || 'All Ages';

    // Quick Facts
    if (modalFacts) {
      const facts = act.quickFacts || {};
      modalFacts.innerHTML = Object.entries(facts).map(([key, val]) => `
        <div class="fact-row">
          <span class="fact-key">${key}:</span>
          <span class="fact-val">${val}</span>
        </div>
      `).join('');
    }

    // Inclusions
    if (modalInclusions) {
      modalInclusions.innerHTML = (act.inclusions || []).map(inc => `
        <li><span class="check-icon">✓</span> ${inc}</li>
      `).join('');
    }

    // Exclusions
    if (modalExclusions) {
      modalExclusions.innerHTML = (act.exclusions || ['Souvenir photography / personal purchases', 'Gratuities']).map(exc => `
        <li><span class="cross-icon">✕</span> ${exc}</li>
      `).join('');
    }

    // What to bring
    if (modalBring) {
      modalBring.innerHTML = (act.whatToBring || ['Comfortable walking shoes', 'Camera', 'Original Passport']).map(it => `
        <li>• ${it}</li>
      `).join('');
    }

    // Departures
    if (modalDepartures) {
      modalDepartures.innerHTML = (act.departures || ['Daily departures scheduled on confirmation']).map(dep => `
        <div class="departure-slot">🕒 ${dep}</div>
      `).join('');
    }

    // Action buttons
    if (modalBookBtn) {
      modalBookBtn.onclick = () => {
        detailsDialog.close();
        openBookingDrawer(act.id);
      };
    }

    if (modalVideoBtn) {
      modalVideoBtn.onclick = () => {
        openVideoModal(act.videoId || 'WMVeqCJ74EQ', act.title);
      };
    }

    detailsDialog.showModal();
  }

  function updateModalPrices(act) {
    const modalPrice = document.getElementById('modal-act-price');
    if (modalPrice) {
      const p = act.promoPriceUSD ? act.promoPriceUSD : act.priceUSD;
      modalPrice.textContent = `From ${formatPrice(p)} ${act.category === 'stay' ? '/ night' : 'per person'}`;
    }
  }

  if (detailsCloseBtn && detailsDialog) {
    detailsCloseBtn.addEventListener('click', () => detailsDialog.close());
    detailsDialog.addEventListener('click', (e) => {
      const rect = detailsDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        detailsDialog.close();
      }
    });
  }

  // =========================================================================
  // 9. VIDEO PREVIEW MODAL
  // =========================================================================
  const videoDialog = document.getElementById('video-dialog');
  const videoPlayer = document.getElementById('modal-yt-player');
  const videoCloseBtn = document.getElementById('video-close-btn');
  const videoTitleEl = document.getElementById('video-modal-title');

  function openVideoModal(videoId, title) {
    if (!videoDialog || !videoPlayer) return;
    if (videoTitleEl) videoTitleEl.textContent = title || 'Adventure Video Preview';
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;
    videoDialog.showModal();
  }

  if (videoCloseBtn && videoDialog && videoPlayer) {
    videoCloseBtn.addEventListener('click', () => {
      videoPlayer.src = '';
      videoDialog.close();
    });
    videoDialog.addEventListener('click', (e) => {
      const rect = videoDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        videoPlayer.src = '';
        videoDialog.close();
      }
    });
  }

  // =========================================================================
  // 10. INTERACTIVE BOOKING DRAWER & LIVE QUOTE CALCULATOR
  // =========================================================================
  const bookingDialog = document.getElementById('booking-dialog');
  const bookingCloseBtn = document.getElementById('booking-close-btn');
  const bookingForm = document.getElementById('booking-form');

  // Drawer fields
  const drawerTitle = document.getElementById('drawer-act-title');
  const drawerImage = document.getElementById('drawer-act-img');
  const drawerPrice = document.getElementById('drawer-act-price');
  const inputDate = document.getElementById('book-date');
  const selectAdults = document.getElementById('book-adults');
  const selectChildren = document.getElementById('book-children');
  const chkPhotos = document.getElementById('addon-photos');
  const chkParkFee = document.getElementById('addon-parkfee');
  const chkPrivateTransfer = document.getElementById('addon-transfer');
  const summaryTotal = document.getElementById('quote-total-amount');
  const summaryBreakdown = document.getElementById('quote-breakdown-text');

  let currentBookingActivity = null;

  function calculateBookingTotal() {
    if (!currentBookingActivity) return;
    const baseUSD = currentBookingActivity.promoPriceUSD || currentBookingActivity.priceUSD;
    const adults = parseInt(selectAdults ? selectAdults.value : '2', 10) || 1;
    const children = parseInt(selectChildren ? selectChildren.value : '0', 10) || 0;

    const childRate = baseUSD * 0.5;
    let totalUSD = (adults * baseUSD) + (children * childRate);

    if (chkPhotos && chkPhotos.checked) totalUSD += 40;
    if (chkParkFee && chkParkFee.checked) totalUSD += (adults + children) * 15;
    if (chkPrivateTransfer && chkPrivateTransfer.checked) totalUSD += 25;

    if (summaryTotal) {
      summaryTotal.textContent = formatPrice(totalUSD);
    }

    if (summaryBreakdown) {
      const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
      summaryBreakdown.textContent = `${adults} Adult(s) @ ${formatPrice(baseUSD)} ${children > 0 ? `+ ${children} Child(ren) @ ${formatPrice(childRate)}` : ''} (${curr.code})`;
    }
  }

  function openBookingDrawer(id) {
    const act = ACTIVITIES.find(a => a.id === id) || ACTIVITIES[0];
    currentBookingActivity = act;
    if (!bookingDialog) return;

    if (drawerTitle) drawerTitle.textContent = act.title;
    if (drawerImage) {
      drawerImage.src = act.image;
      drawerImage.alt = act.title;
    }
    if (drawerPrice) {
      const p = act.promoPriceUSD || act.priceUSD;
      drawerPrice.textContent = `${formatPrice(p)} ${act.category === 'stay' ? '/ night' : 'per person'}`;
    }

    if (inputDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      inputDate.value = tomorrow.toISOString().split('T')[0];
    }

    calculateBookingTotal();
    bookingDialog.showModal();
  }

  [selectAdults, selectChildren, chkPhotos, chkParkFee, chkPrivateTransfer].forEach(el => {
    if (el) el.addEventListener('change', calculateBookingTotal);
  });

  if (bookingCloseBtn && bookingDialog) {
    bookingCloseBtn.addEventListener('click', () => bookingDialog.close());
    bookingDialog.addEventListener('click', (e) => {
      const rect = bookingDialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        bookingDialog.close();
      }
    });
  }

  // Booking Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('book-name')?.value || 'Valued Guest';
      const guestEmail = document.getElementById('book-email')?.value || '';
      const guestPhone = document.getElementById('book-phone')?.value || '';
      const guestHotel = document.getElementById('book-hotel')?.value || 'Victoria Falls Lodge';
      const travelDate = inputDate ? inputDate.value : 'Upcoming';
      const adults = selectAdults ? selectAdults.value : '2';
      const children = selectChildren ? selectChildren.value : '0';
      const totalAmount = summaryTotal ? summaryTotal.textContent : '$0';
      const refCode = 'GT-VF-' + Math.floor(100000 + Math.random() * 900000);

      const confirmModal = document.getElementById('confirm-dialog');
      const confirmDetails = document.getElementById('confirm-details-content');
      const whatsappAction = document.getElementById('btn-confirm-whatsapp');

      const bookingMsg = `*Golden Triangle Victoria Falls Reservation*\nRef: ${refCode}\nActivity: ${currentBookingActivity.title}\nDate: ${travelDate}\nGuests: ${adults} Adults, ${children} Children\nPickup Lodge: ${guestHotel}\nLead Guest: ${guestName} (${guestPhone})\nTotal: ${totalAmount}`;

      if (whatsappAction) {
        const waUrl = `https://wa.me/263773461716?text=${encodeURIComponent(bookingMsg)}`;
        whatsappAction.href = waUrl;
      }

      if (confirmDetails) {
        confirmDetails.innerHTML = `
          <div class="confirm-card">
            <div class="confirm-badge">Booking Reserved ✓</div>
            <h3>Reference: <strong>${refCode}</strong></h3>
            <p><strong>Experience:</strong> ${currentBookingActivity.title}</p>
            <p><strong>Travel Date:</strong> ${travelDate}</p>
            <p><strong>Guests:</strong> ${adults} Adults, ${children} Children</p>
            <p><strong>Pickup Location:</strong> ${guestHotel}</p>
            <p><strong>Estimated Total:</strong> <span class="confirm-price">${totalAmount}</span></p>
            <p class="confirm-note">An instant confirmation has been prepared. Our 24/7 Victoria Falls operations team has logged your booking. Click below to chat directly with your safari concierge via WhatsApp!</p>
          </div>
        `;
      }

      bookingDialog.close();
      if (confirmModal) confirmModal.showModal();
    });
  }

  const confirmCloseBtn = document.getElementById('confirm-close-btn');
  const confirmDialog = document.getElementById('confirm-dialog');
  if (confirmCloseBtn && confirmDialog) {
    confirmCloseBtn.addEventListener('click', () => confirmDialog.close());
  }

  document.querySelectorAll('#btn-header-book, #btn-hero-book, #btn-book-chalet').forEach(btn => {
    btn.addEventListener('click', () => {
      const actName = btn.getAttribute('data-activity');
      const match = actName ? ACTIVITIES.find(a => a.title.includes(actName)) : ACTIVITIES[0];
      openBookingDrawer(match ? match.id : ACTIVITIES[0].id);
    });
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('nav-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // Initialize
  renderActivities();
});
