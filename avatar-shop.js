// ============================================================
// AVATAR SHOP – Layer-System + Shop
// ============================================================

const AVATAR_LAYER_ORDER = ['body', 'pants', 'shirt', 'hair', 'hat', 'glasses', 'extra'];

const AVATAR_CATEGORIES = [
    { id: 'body', label: 'Figur' },
    { id: 'skin', label: 'Haut' },
    { id: 'hair', label: 'Frisur' },
    { id: 'hairColor', label: 'Haarfarbe' },
    { id: 'hat', label: 'Hüte' },
    { id: 'glasses', label: 'Brillen' },
    { id: 'shirt', label: 'Oberteil' },
    { id: 'pants', label: 'Hose' },
    { id: 'extra', label: 'Extras' }
];

const SKIN_TONES = [
    { id: 'skin_fair', name: 'Hell', color: '#f5c6a0', free: true },
    { id: 'skin_light', name: 'Hell-mittel', color: '#e0ac69', free: true },
    { id: 'skin_medium', name: 'Mittel', color: '#c68642', free: true },
    { id: 'skin_tan', name: 'Gebräunt', color: '#8d5524', free: true },
    { id: 'skin_deep', name: 'Dunkel', color: '#5c3317', free: true },
    { id: 'skin_deep2', name: 'Sehr dunkel', color: '#3b2210', free: true }
];

const HAIR_COLORS = [
    { id: 'hc_black', name: 'Schwarz', color: '#1a1a1a', free: true },
    { id: 'hc_brown', name: 'Braun', color: '#5c3a21', free: true },
    { id: 'hc_darkbrown', name: 'Dunkelbraun', color: '#3b2f2f', free: true },
    { id: 'hc_blonde', name: 'Blond', color: '#d4a017', free: true },
    { id: 'hc_lightblonde', name: 'Hellblond', color: '#f0d9a0', free: true },
    { id: 'hc_red', name: 'Rot', color: '#a0522d', free: true },
    { id: 'hc_ginger', name: 'Kupfer', color: '#c45c26', price: 30 },
    { id: 'hc_white', name: 'Weiß', color: '#e8e8e8', price: 40 },
    { id: 'hc_blue', name: 'Blau', color: '#3b82f6', price: 60 },
    { id: 'hc_pink', name: 'Pink', color: '#ec4899', price: 60 },
    { id: 'hc_green', name: 'Grün', color: '#10b981', price: 60 },
    { id: 'hc_purple', name: 'Lila', color: '#8b5cf6', price: 60 }
];

// Katalog – echte Bilder später über src
const AVATAR_ITEMS = {
    body_boy: { id: 'body_boy', cat: 'body', name: 'Junge', price: 0, free: true },
    body_girl: { id: 'body_girl', cat: 'body', name: 'Mädchen', price: 0, free: true },

    hair_short: { id: 'hair_short', cat: 'hair', name: 'Kurz', price: 0, free: true },
    hair_long: { id: 'hair_long', cat: 'hair', name: 'Lang', price: 40 },
    hair_curl: { id: 'hair_curl', cat: 'hair', name: 'Locken', price: 50 },
    hair_spike: { id: 'hair_spike', cat: 'hair', name: 'Stachel', price: 60 },
    hair_pony: { id: 'hair_pony', cat: 'hair', name: 'Zopf', price: 55 },
    hair_bob: { id: 'hair_bob', cat: 'hair', name: 'Bob', price: 45 },
    hair_undercut: { id: 'hair_undercut', cat: 'hair', name: 'Undercut', price: 55 },

    hat_cap: { id: 'hat_cap', cat: 'hat', name: 'Kappe', price: 80, color: '#ef4444' },
    hat_beanie: { id: 'hat_beanie', cat: 'hat', name: 'Beanie', price: 70, color: '#3b82f6' },
    hat_crown: { id: 'hat_crown', cat: 'hat', name: 'Krone', price: 200, color: '#fbbf24', rare: true },
    hat_wizard: { id: 'hat_wizard', cat: 'hat', name: 'Zauberhut', price: 150, color: '#7c3aed', rare: true },

    glasses_round: { id: 'glasses_round', cat: 'glasses', name: 'Rund', price: 60, color: '#111827' },
    glasses_square: { id: 'glasses_square', cat: 'glasses', name: 'Eckig', price: 60, color: '#1e3a8a' },
    glasses_sun: { id: 'glasses_sun', cat: 'glasses', name: 'Sonne', price: 90, color: '#111827' },

    shirt_basic: { id: 'shirt_basic', cat: 'shirt', name: 'Basic', price: 0, free: true, color: '#6366f1' },
    shirt_hoodie: { id: 'shirt_hoodie', cat: 'shirt', name: 'Hoodie', price: 100, color: '#10b981' },
    shirt_stripe: { id: 'shirt_stripe', cat: 'shirt', name: 'Streifen', price: 80, color: '#f59e0b' },
    shirt_armor: { id: 'shirt_armor', cat: 'shirt', name: 'Rüstung', price: 180, color: '#64748b', rare: true },

    pants_jeans: { id: 'pants_jeans', cat: 'pants', name: 'Jeans', price: 0, free: true, color: '#1e40af' },
    pants_sport: { id: 'pants_sport', cat: 'pants', name: 'Sport', price: 70, color: '#059669' },
    pants_short: { id: 'pants_short', cat: 'pants', name: 'Shorts', price: 50, color: '#b45309' },

    extra_scarf: { id: 'extra_scarf', cat: 'extra', name: 'Schal', price: 65, color: '#dc2626' },
    extra_backpack: { id: 'extra_backpack', cat: 'extra', name: 'Rucksack', price: 120, color: '#0f766e' },
    extra_wings: { id: 'extra_wings', cat: 'extra', name: 'Flügel', price: 250, color: '#a5b4fc', rare: true }
};

const DEFAULT_AVATAR = {
    equipped: {
        body: 'body_boy',
        skin: 'skin_fair',
        hair: 'hair_short',
        hairColor: 'hc_darkbrown',
        hat: null,
        glasses: null,
        shirt: 'shirt_basic',
        pants: 'pants_jeans',
        extra: null
    },
    owned: [
        'body_boy', 'body_girl',
        'hair_short', 'shirt_basic', 'pants_jeans',
        'skin_fair', 'skin_light', 'skin_medium', 'skin_tan', 'skin_deep', 'skin_deep2',
        'hc_black', 'hc_brown', 'hc_darkbrown', 'hc_blonde', 'hc_lightblonde', 'hc_red'
    ]
};

let shopActiveCat = 'body';
let shopPreview = null;

function ensureAvatar(profile) {
    if (!profile) return JSON.parse(JSON.stringify(DEFAULT_AVATAR));
    if (!profile.avatar || typeof profile.avatar !== 'object') {
        profile.avatar = JSON.parse(JSON.stringify(DEFAULT_AVATAR));
    }
    if (!profile.avatar.equipped) profile.avatar.equipped = { ...DEFAULT_AVATAR.equipped };
    if (!Array.isArray(profile.avatar.owned)) profile.avatar.owned = [...DEFAULT_AVATAR.owned];
    // Defaults nachrüsten
    const eq = profile.avatar.equipped;
    if (!eq.skin) eq.skin = 'skin_fair';
    if (!eq.hairColor) eq.hairColor = 'hc_darkbrown';
    if (!eq.body) eq.body = 'body_boy';
    Object.values(AVATAR_ITEMS).forEach(it => {
        if (it.free && !profile.avatar.owned.includes(it.id)) profile.avatar.owned.push(it.id);
    });
    SKIN_TONES.forEach(s => {
        if (s.free && !profile.avatar.owned.includes(s.id)) profile.avatar.owned.push(s.id);
    });
    HAIR_COLORS.forEach(h => {
        if ((h.free || h.price === 0) && !profile.avatar.owned.includes(h.id)) profile.avatar.owned.push(h.id);
    });
    return profile.avatar;
}

function getEquipped() {
    if (!currentPlayer) return { ...DEFAULT_AVATAR.equipped };
    return ensureAvatar(currentPlayer).equipped;
}

function getOwned() {
    if (!currentPlayer) return [...DEFAULT_AVATAR.owned];
    return ensureAvatar(currentPlayer).owned;
}

function getSkinColor(eq) {
    const id = (eq && eq.skin) || 'skin_fair';
    const s = SKIN_TONES.find(x => x.id === id);
    return s ? s.color : '#f5c6a0';
}

function getHairColor(eq) {
    const id = (eq && eq.hairColor) || 'hc_darkbrown';
    const h = HAIR_COLORS.find(x => x.id === id);
    return h ? h.color : '#3b2f2f';
}

function svgWrap(inner, w = 200, h = 260) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;
}

function renderLayerSVG(itemId, eq) {
    const item = AVATAR_ITEMS[itemId];
    if (!item) return '';
    if (item.src) return `<img src="${item.src}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">`;

    const skin = getSkinColor(eq);
    const hairC = getHairColor(eq);
    const c = item.color || '#6366f1';
    const isGirl = eq && eq.body === 'body_girl';

    switch (item.cat) {
        case 'body': {
            // Körper + Kopf; Kleidung kommt als eigene Layer
            const headY = 48;
            return svgWrap(`
                <ellipse cx="100" cy="${headY}" rx="28" ry="30" fill="${skin}"/>
                <rect x="60" y="82" width="16" height="48" rx="8" fill="${skin}"/>
                <rect x="124" y="82" width="16" height="48" rx="8" fill="${skin}"/>
                <rect x="78" y="148" width="18" height="50" rx="8" fill="${skin}"/>
                <rect x="104" y="148" width="18" height="50" rx="8" fill="${skin}"/>
                ${isGirl ? `<path d="M72 78 Q100 95 128 78 L128 88 Q100 105 72 88 Z" fill="${skin}" opacity="0.15"/>` : ''}
            `);
        }
        case 'hair': {
            if (itemId === 'hair_long') return svgWrap(`<path d="M68 40 Q100 8 132 40 L140 120 Q100 100 60 120 Z" fill="${hairC}"/>`);
            if (itemId === 'hair_curl') return svgWrap(`
                <circle cx="70" cy="36" r="13" fill="${hairC}"/><circle cx="100" cy="26" r="15" fill="${hairC}"/>
                <circle cx="130" cy="36" r="13" fill="${hairC}"/><path d="M68 42 Q100 18 132 42" fill="${hairC}"/>
            `);
            if (itemId === 'hair_spike') return svgWrap(`<polygon points="68,52 78,12 90,48 100,8 110,48 122,12 132,52 100,56" fill="${hairC}"/>`);
            if (itemId === 'hair_pony') return svgWrap(`
                <path d="M68 42 Q100 10 132 42 L130 58 Q100 48 70 58 Z" fill="${hairC}"/>
                <ellipse cx="148" cy="72" rx="11" ry="30" fill="${hairC}"/>
            `);
            if (itemId === 'hair_bob') return svgWrap(`<path d="M66 45 Q100 12 134 45 L138 85 Q100 95 62 85 Z" fill="${hairC}"/>`);
            if (itemId === 'hair_undercut') return svgWrap(`
                <path d="M75 40 Q100 14 125 40 L122 55 Q100 42 78 55 Z" fill="${hairC}"/>
                <rect x="70" y="50" width="12" height="20" rx="2" fill="${hairC}" opacity="0.5"/>
                <rect x="118" y="50" width="12" height="20" rx="2" fill="${hairC}" opacity="0.5"/>
            `);
            return svgWrap(`<path d="M68 50 Q100 16 132 50 L128 58 Q100 38 72 58 Z" fill="${hairC}"/>`);
        }
        case 'hat': {
            if (itemId === 'hat_beanie') return svgWrap(`<path d="M65 48 Q100 18 135 48 L130 58 Q100 44 70 58 Z" fill="${c}"/><circle cx="100" cy="20" r="8" fill="${c}"/>`);
            if (itemId === 'hat_crown') return svgWrap(`<polygon points="70,55 80,28 90,50 100,22 110,50 120,28 130,55 70,55" fill="${c}" stroke="#b45309" stroke-width="2"/>`);
            if (itemId === 'hat_wizard') return svgWrap(`<polygon points="100,6 132,55 68,55" fill="${c}"/><rect x="66" y="52" width="68" height="10" rx="3" fill="#4c1d95"/>`);
            return svgWrap(`<ellipse cx="100" cy="42" rx="40" ry="10" fill="${c}"/><rect x="70" y="26" width="60" height="18" rx="4" fill="${c}"/>`);
        }
        case 'glasses': {
            if (itemId === 'glasses_sun') return svgWrap(`
                <rect x="62" y="48" width="30" height="18" rx="4" fill="${c}" opacity="0.88"/>
                <rect x="108" y="48" width="30" height="18" rx="4" fill="${c}" opacity="0.88"/>
                <line x1="92" y1="56" x2="108" y2="56" stroke="${c}" stroke-width="3"/>
            `);
            if (itemId === 'glasses_square') return svgWrap(`
                <rect x="64" y="48" width="28" height="18" rx="2" fill="none" stroke="${c}" stroke-width="3"/>
                <rect x="108" y="48" width="28" height="18" rx="2" fill="none" stroke="${c}" stroke-width="3"/>
                <line x1="92" y1="56" x2="108" y2="56" stroke="${c}" stroke-width="3"/>
            `);
            return svgWrap(`
                <circle cx="78" cy="56" r="12" fill="none" stroke="${c}" stroke-width="3"/>
                <circle cx="122" cy="56" r="12" fill="none" stroke="${c}" stroke-width="3"/>
                <line x1="90" y1="56" x2="110" y2="56" stroke="${c}" stroke-width="3"/>
            `);
        }
        case 'shirt': {
            if (itemId === 'shirt_hoodie') return svgWrap(`
                <rect x="68" y="78" width="64" height="72" rx="14" fill="${c}"/>
                <path d="M68 90 Q100 112 132 90" fill="none" stroke="#064e3b" stroke-width="4"/>
                <circle cx="100" cy="78" r="18" fill="${c}"/>
            `);
            if (itemId === 'shirt_stripe') return svgWrap(`
                <rect x="72" y="78" width="56" height="70" rx="12" fill="${c}"/>
                <rect x="72" y="95" width="56" height="8" fill="#fff" opacity="0.35"/>
                <rect x="72" y="115" width="56" height="8" fill="#fff" opacity="0.35"/>
            `);
            if (itemId === 'shirt_armor') return svgWrap(`
                <rect x="70" y="78" width="60" height="72" rx="8" fill="${c}"/>
                <rect x="82" y="90" width="36" height="40" rx="4" fill="#94a3b8"/>
                <circle cx="100" cy="108" r="6" fill="#e2e8f0"/>
            `);
            return svgWrap(`<rect x="72" y="78" width="56" height="70" rx="12" fill="${c}"/>`);
        }
        case 'pants': {
            if (itemId === 'pants_sport') return svgWrap(`
                <rect x="78" y="145" width="18" height="50" rx="6" fill="${c}"/>
                <rect x="104" y="145" width="18" height="50" rx="6" fill="${c}"/>
                <rect x="78" y="145" width="44" height="14" rx="4" fill="${c}"/>
            `);
            if (itemId === 'pants_short') return svgWrap(`
                <rect x="78" y="145" width="18" height="28" rx="6" fill="${c}"/>
                <rect x="104" y="145" width="18" height="28" rx="6" fill="${c}"/>
                <rect x="78" y="145" width="44" height="12" rx="4" fill="${c}"/>
            `);
            return svgWrap(`
                <rect x="78" y="145" width="18" height="52" rx="6" fill="${c}"/>
                <rect x="104" y="145" width="18" height="52" rx="6" fill="${c}"/>
                <rect x="78" y="145" width="44" height="12" rx="4" fill="${c}"/>
            `);
        }
        case 'extra': {
            if (itemId === 'extra_backpack') return svgWrap(`
                <rect x="128" y="90" width="28" height="40" rx="6" fill="${c}"/>
                <rect x="132" y="98" width="20" height="12" rx="2" fill="#134e4a"/>
            `);
            if (itemId === 'extra_wings') return svgWrap(`
                <ellipse cx="52" cy="100" rx="24" ry="36" fill="${c}" opacity="0.85"/>
                <ellipse cx="148" cy="100" rx="24" ry="36" fill="${c}" opacity="0.85"/>
            `);
            return svgWrap(`<path d="M70 100 Q100 132 130 100" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`);
        }
        default:
            return '';
    }
}

function renderAvatarLayers(container, equipped) {
    if (!container) return;
    const eq = equipped || getEquipped();
    container.innerHTML = '';
    container.classList.add('avatar-stage');

    AVATAR_LAYER_ORDER.forEach(layer => {
        const itemId = eq[layer];
        if (!itemId) return;
        const div = document.createElement('div');
        div.className = `avatar-layer avatar-layer-${layer}`;
        div.dataset.layer = layer;
        div.innerHTML = renderLayerSVG(itemId, eq);
        container.appendChild(div);
    });
}

function openAvatarShop() {
    if (!currentPlayer) {
        showToast('Bitte zuerst einen Spieler wählen.', 'error');
        return;
    }
    ensureAvatar(currentPlayer);
    shopPreview = { ...currentPlayer.avatar.equipped };
    shopActiveCat = 'body';
    switchView('avatar-shop');
    renderAvatarShopUI();
}

function renderAvatarShopUI() {
    const coinsEl = document.getElementById('shop-coins');
    if (coinsEl) coinsEl.textContent = currentPlayer.coins || 0;

    const stage = document.getElementById('avatar-shop-stage');
    renderAvatarLayers(stage, shopPreview);

    const tabs = document.getElementById('shop-tabs');
    if (tabs) {
        tabs.innerHTML = AVATAR_CATEGORIES.map(c =>
            `<button type="button" class="shop-tab ${shopActiveCat === c.id ? 'active' : ''}" onclick="setShopCategory('${c.id}')">${c.label}</button>`
        ).join('');
    }
    renderShopItems();
}

function setShopCategory(catId) {
    shopActiveCat = catId;
    renderAvatarShopUI();
}

function colorSwatchCard(id, name, color, price, free, owned, equipped) {
    const isOwned = owned.includes(id);
    const isEquipped = equipped;
    const canBuy = !isOwned && !free && (currentPlayer.coins || 0) >= (price || 0);
    let badge = '';
    if (isEquipped) badge = '<span class="shop-badge equipped">An</span>';
    else if (isOwned || free) badge = '<span class="shop-badge owned">OK</span>';

    const priceHtml = (free || isOwned)
        ? '<span class="shop-price free">Gratis</span>'
        : `<span class="shop-price">🪙 ${price}</span>`;

    return `
    <div class="shop-card shop-card-color ${isEquipped ? 'is-equipped' : ''}" onclick="tryOnColor('${id}')">
        <div class="shop-color-swatch" style="background:${color}"></div>
        <div class="shop-card-info">
            <div class="shop-card-name">${name}</div>
            ${priceHtml}
        </div>
        ${badge}
        <div class="shop-card-actions">
            ${(isOwned || free)
            ? `<button type="button" class="shop-btn" onclick="event.stopPropagation(); equipColor('${id}')">${isEquipped ? 'Aktiv' : 'Wählen'}</button>`
            : `<button type="button" class="shop-btn buy ${canBuy ? '' : 'disabled'}" onclick="event.stopPropagation(); buyColor('${id}')" ${canBuy ? '' : 'disabled'}>Kaufen</button>`
        }
        </div>
    </div>`;
}

function renderShopItems() {
    const list = document.getElementById('shop-items');
    if (!list) return;
    const owned = getOwned();

    // Hautfarben
    if (shopActiveCat === 'skin') {
        list.innerHTML = SKIN_TONES.map(s =>
            colorSwatchCard(s.id, s.name, s.color, 0, true, owned, shopPreview.skin === s.id)
        ).join('');
        return;
    }

    // Haarfarben
    if (shopActiveCat === 'hairColor') {
        list.innerHTML = HAIR_COLORS.map(h =>
            colorSwatchCard(h.id, h.name, h.color, h.price || 0, !!h.free, owned, shopPreview.hairColor === h.id)
        ).join('');
        return;
    }

    const items = Object.values(AVATAR_ITEMS).filter(i => i.cat === shopActiveCat);
    list.innerHTML = items.map(item => {
        const isOwned = owned.includes(item.id);
        const isEquipped = shopPreview[item.cat] === item.id;
        const canBuy = !isOwned && (currentPlayer.coins || 0) >= item.price;
        let badge = '';
        if (isEquipped) badge = '<span class="shop-badge equipped">An</span>';
        else if (isOwned) badge = '<span class="shop-badge owned">Besitz</span>';
        else if (item.rare) badge = '<span class="shop-badge rare">Selten</span>';

        const priceHtml = item.free || isOwned
            ? '<span class="shop-price free">Gratis</span>'
            : `<span class="shop-price">🪙 ${item.price}</span>`;

        // Mini-Vorschau mit aktueller Haut/Haarfarbe
        const previewEq = { ...shopPreview, [item.cat]: item.id };

        return `
        <div class="shop-card ${isEquipped ? 'is-equipped' : ''} ${item.rare ? 'is-rare' : ''}" onclick="tryOnItem('${item.id}')">
            <div class="shop-card-preview">${renderLayerSVG(item.id, previewEq)}</div>
            <div class="shop-card-info">
                <div class="shop-card-name">${item.name}</div>
                ${priceHtml}
            </div>
            ${badge}
            <div class="shop-card-actions">
                ${isOwned
                ? `<button type="button" class="shop-btn" onclick="event.stopPropagation(); equipItem('${item.id}')">${isEquipped ? 'Angezogen' : 'Anziehen'}</button>`
                : `<button type="button" class="shop-btn buy ${canBuy ? '' : 'disabled'}" onclick="event.stopPropagation(); buyItem('${item.id}')" ${canBuy ? '' : 'disabled'}>Kaufen</button>`
            }
            </div>
        </div>`;
    }).join('');
}

function tryOnItem(itemId) {
    const item = AVATAR_ITEMS[itemId];
    if (!item || !shopPreview) return;
    if (shopPreview[item.cat] === itemId && !['body', 'shirt', 'pants', 'hair'].includes(item.cat)) {
        shopPreview[item.cat] = null;
    } else {
        shopPreview[item.cat] = itemId;
    }
    renderAvatarLayers(document.getElementById('avatar-shop-stage'), shopPreview);
    renderShopItems();
    if (typeof SFX !== 'undefined') SFX.tap();
}

function tryOnColor(id) {
    if (!shopPreview) return;
    if (id.startsWith('skin_')) shopPreview.skin = id;
    else if (id.startsWith('hc_')) shopPreview.hairColor = id;
    renderAvatarLayers(document.getElementById('avatar-shop-stage'), shopPreview);
    renderShopItems();
    if (typeof SFX !== 'undefined') SFX.tap();
}

function equipItem(itemId) {
    const item = AVATAR_ITEMS[itemId];
    if (!item || !currentPlayer) return;
    const av = ensureAvatar(currentPlayer);
    if (!av.owned.includes(itemId) && !item.free) {
        showToast('Noch nicht gekauft.', 'error');
        return;
    }
    if (av.equipped[item.cat] === itemId && !['body', 'shirt', 'pants', 'hair'].includes(item.cat)) {
        av.equipped[item.cat] = null;
        shopPreview[item.cat] = null;
    } else {
        av.equipped[item.cat] = itemId;
        shopPreview[item.cat] = itemId;
    }
    saveAvatarToFirebase();
    renderAvatarShopUI();
    if (typeof SFX !== 'undefined') SFX.tap();
}

function equipColor(id) {
    if (!currentPlayer) return;
    const av = ensureAvatar(currentPlayer);
    if (!av.owned.includes(id)) {
        showToast('Noch nicht freigeschaltet.', 'error');
        return;
    }
    if (id.startsWith('skin_')) {
        av.equipped.skin = id;
        shopPreview.skin = id;
    } else if (id.startsWith('hc_')) {
        av.equipped.hairColor = id;
        shopPreview.hairColor = id;
    }
    saveAvatarToFirebase();
    renderAvatarShopUI();
    if (typeof SFX !== 'undefined') SFX.tap();
}

async function buyItem(itemId) {
    const item = AVATAR_ITEMS[itemId];
    if (!item || !currentPlayer) return;
    const av = ensureAvatar(currentPlayer);
    if (av.owned.includes(itemId) || item.free) {
        equipItem(itemId);
        return;
    }
    const coins = currentPlayer.coins || 0;
    if (coins < item.price) {
        showToast('Nicht genug Coins.', 'error');
        return;
    }
    currentPlayer.coins = coins - item.price;
    av.owned.push(itemId);
    av.equipped[item.cat] = itemId;
    shopPreview[item.cat] = itemId;
    try {
        await saveAvatarToFirebase();
        showToast(`${item.name} gekauft!`, 'success');
        const menuCoins = document.getElementById('menu-coins');
        if (menuCoins) menuCoins.textContent = currentPlayer.coins;
        renderAvatarShopUI();
        if (typeof SFX !== 'undefined') SFX.tap();
    } catch (e) {
        currentPlayer.coins = coins;
        av.owned = av.owned.filter(id => id !== itemId);
        handleError('buyItem', e, 'Kauf konnte nicht gespeichert werden.');
    }
}

async function buyColor(id) {
    if (!currentPlayer) return;
    const av = ensureAvatar(currentPlayer);
    if (av.owned.includes(id)) {
        equipColor(id);
        return;
    }
    let price = 0;
    let name = id;
    const skin = SKIN_TONES.find(s => s.id === id);
    const hair = HAIR_COLORS.find(h => h.id === id);
    if (skin) { price = 0; name = skin.name; }
    if (hair) { price = hair.price || 0; name = hair.name; }
    const coins = currentPlayer.coins || 0;
    if (coins < price) {
        showToast('Nicht genug Coins.', 'error');
        return;
    }
    currentPlayer.coins = coins - price;
    av.owned.push(id);
    if (id.startsWith('skin_')) { av.equipped.skin = id; shopPreview.skin = id; }
    else { av.equipped.hairColor = id; shopPreview.hairColor = id; }
    try {
        await saveAvatarToFirebase();
        showToast(`${name} freigeschaltet!`, 'success');
        const menuCoins = document.getElementById('menu-coins');
        if (menuCoins) menuCoins.textContent = currentPlayer.coins;
        renderAvatarShopUI();
        if (typeof SFX !== 'undefined') SFX.tap();
    } catch (e) {
        currentPlayer.coins = coins;
        av.owned = av.owned.filter(x => x !== id);
        handleError('buyColor', e, 'Kauf konnte nicht gespeichert werden.');
    }
}

async function saveAvatarToFirebase() {
    if (!currentPlayer || !currentParentUser || !activePlayerKey) return;
    ensureAvatar(currentPlayer);
    await db.collection('parents').doc(currentParentUser.uid)
        .collection('profiles').doc(activePlayerKey)
        .set({
            avatar: currentPlayer.avatar,
            coins: currentPlayer.coins || 0
        }, { merge: true });
    ALL_PROFILES[activePlayerKey] = currentPlayer;
}

function applyPreviewToAvatar() {
    if (!currentPlayer || !shopPreview) return;
    const av = ensureAvatar(currentPlayer);
    const owned = av.owned;
    // Farben
    if (shopPreview.skin && owned.includes(shopPreview.skin)) av.equipped.skin = shopPreview.skin;
    if (shopPreview.hairColor && owned.includes(shopPreview.hairColor)) av.equipped.hairColor = shopPreview.hairColor;
    AVATAR_LAYER_ORDER.forEach(layer => {
        const id = shopPreview[layer];
        if (!id) {
            if (!['body', 'shirt', 'pants', 'hair'].includes(layer)) av.equipped[layer] = null;
            return;
        }
        if (owned.includes(id) || (AVATAR_ITEMS[id] && AVATAR_ITEMS[id].free)) {
            av.equipped[layer] = id;
        }
    });
    saveAvatarToFirebase();
    showToast('Outfit gespeichert!', 'success');
    renderAvatarShopUI();
}
