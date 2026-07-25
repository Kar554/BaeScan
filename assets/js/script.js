const vibesList = [
    { id: 1, name: "gaming", displayName: "Gaming", icon: "🎮" },
    { id: 2, name: "musique", displayName: "Musique", icon: "🎵" },
    { id: 3, name: "cinema", displayName: "Cinéma", icon: "🎬" },
    { id: 4, name: "anime", displayName: "Anime", icon: "🍥" },
    { id: 5, name: "sport", displayName: "Sport", icon: "⚽" },
    { id: 6, name: "fitness", displayName: "Fitness", icon: "🏋️" },
    { id: 7, name: "voyage", displayName: "Voyage", icon: "✈️" },
    { id: 8, name: "food", displayName: "Food", icon: "🍕" },
    { id: 9, name: "cafe", displayName: "Café", icon: "☕" },
    { id: 10, name: "lecture", displayName: "Lecture", icon: "📚" },
    { id: 11, name: "mode", displayName: "Mode", icon: "👕" },
    { id: 12, name: "shopping", displayName: "Shopping", icon: "🛍️" },
    { id: 13, name: "photo", displayName: "Photo", icon: "📸" },
    { id: 14, name: "art", displayName: "Art", icon: "🎨" },
    { id: 15, name: "danse", displayName: "Danse", icon: "💃" },
    { id: 16, name: "nature", displayName: "Nature", icon: "🌿" },
    { id: 17, name: "tech", displayName: "Tech", icon: "💻" },
    { id: 18, name: "crypto", displayName: "Crypto", icon: "🪙" },
    { id: 19, name: "business", displayName: "Business", icon: "💼" },
    { id: 20, name: "auto", displayName: "Auto", icon: "🚗" },
    { id: 21, name: "moto", displayName: "Moto", icon: "🏍️" },
    { id: 22, name: "pets", displayName: "Animaux", icon: "🐶" },
    { id: 23, name: "jeux", displayName: "Jeux", icon: "🎲" },
    { id: 24, name: "series", displayName: "Séries", icon: "📺" }, // ⚠️ changé "serie" → "series"
    { id: 25, name: "fete", displayName: "Sorties", icon: "🎉" },   // ⚠️ changé "sorties" → "fete"
    { id: 26, name: "chill", displayName: "Chill", icon: "😌" }, // ⚠️ différencié vibe
    { id: 27, name: "cuisine", displayName: "Cuisine", icon: "🍳" },
    { id: 28, name: "festival", displayName: "Festival", icon: "🎤" },
    { id: 29, name: "plage", displayName: "Plage", icon: "🏖️" },
    { id: 30, name: "randonnee", displayName: "Randonnée", icon: "🥾" }
];

const humeurList = [
    { id: 1, name: "happy", displayName: "Heureux", icon: "😊" },   // ⚠️ changé "heureux" → "happy"
    { id: 2, name: "calme", displayName: "Calme", icon: "😌" },
    { id: 3, name: "motive", displayName: "Motivé", icon: "🔥" },
    { id: 4, name: "tired", displayName: "Fatigué", icon: "🥱" },   // ⚠️ changé "fatigue" → "tired"
    { id: 5, name: "timide", displayName: "Timide", icon: "☺️" },
    { id: 6, name: "love", displayName: "Amoureux", icon: "😍" },   // ⚠️ changé "amoureux" → "love"
    { id: 7, name: "nostalgique", displayName: "Nostalgique", icon: "🥹" },
    { id: 8, name: "excite", displayName: "Excité", icon: "🤩" },
    { id: 9, name: "curieux", displayName: "Curieux", icon: "🤔" },
    { id: 10, name: "serieux", displayName: "Sérieux", icon: "🧐" },
    { id: 11, name: "fun", displayName: "Fun", icon: "😜" },
    { id: 12, name: "stress", displayName: "Stressé", icon: "😵" },
    { id: 13, name: "sad", displayName: "Triste", icon: "😢" },     // ⚠️ changé "triste" → "sad"
    { id: 14, name: "energetique", displayName: "Énergique", icon: "⚡" },
    { id: 15, name: "romantique", displayName: "Romantique", icon: "❤️" },
    { id: 16, name: "reveur", displayName: "Rêveur", icon: "🌙" },
    { id: 17, name: "confiant", displayName: "Confiant", icon: "😎" },
    { id: 18, name: "jaloux", displayName: "Jaloux", icon: "😒" },
    { id: 19, name: "cool", displayName: "Cool", icon: "👌" },
    { id: 20, name: "zen", displayName: "Zen", icon: "🧘" }
];

const greenFlagsCategories = {
    societe: [
        { id: "gf1", text: "Répond vite aux messages" },
        { id: "gf2", text: "Encourage tes projets" },
        { id: "gf3", text: "Retient les petits détails" },
        { id: "gf4", text: "Propose des sorties originales" },
        { id: "gf5", text: "Sait s'excuser sincèrement" }
    ],
    relation: [
        { id: "gf6", text: "Respecte ton espace personnel" },
        { id: "gf7", text: "Exprime ses sentiments clairement" },
        { id: "gf8", text: "Fait preuve de loyauté" },
        { id: "gf9", text: "Partage ses passions" },
        { id: "gf10", text: "Est attentif à tes besoins" }
    ],
    communication: [
        { id: "gf11", text: "Écoute activement" },
        { id: "gf12", text: "Pose des questions sur toi" },
        { id: "gf13", text: "Exprime ses désaccords calmement" },
        { id: "gf14", text: "Fait preuve d’humour" },
        { id: "gf15", text: "Sait gérer les conflits" }
    ]
};

const redFlagsCategories = {
    societe: [
        { id: "rf1", text: "Met des heures à répondre sans raison", opposite: "gf1" },
        { id: "rf2", text: "Ne pose jamais de questions sur toi", opposite: "gf12" },
        { id: "rf3", text: "Annule au dernier moment", opposite: "gf3" },
        { id: "rf4", text: "Parle encore trop de son ex", opposite: null },
        { id: "rf5", text: "Aime créer de la jalousie", opposite: "gf8" }
    ],
    relation: [
        { id: "rf6", text: "Ignore tes besoins", opposite: "gf10" },
        { id: "rf7", text: "Évite les discussions sérieuses", opposite: "gf13" },
        { id: "rf8", text: "Manque de loyauté", opposite: "gf8" },
        { id: "rf9", text: "Ne respecte pas ton espace", opposite: "gf6" },
        { id: "rf10", text: "Cache ses sentiments", opposite: "gf7" }
    ],
    communication: [
        { id: "rf11", text: "Coupe la parole", opposite: "gf11" },
        { id: "rf12", text: "Ne fait jamais preuve d’humour", opposite: "gf14" },
        { id: "rf13", text: "Crée des conflits inutiles", opposite: "gf15" },
        { id: "rf14", text: "Ne partage rien de personnel", opposite: "gf9" },
        { id: "rf15", text: "Évite les conversations profondes", opposite: "gf12" }
    ]
};

const discussionTopics = [
"Le voyage de vos rêves",
"Vos films préférés",
"Vos séries favorites",
"Vos jeux vidéo",
"Votre musique du moment",
"Votre pire rendez-vous",
"Votre meilleur souvenir",
"Vos objectifs de vie",
"Vos passions",
"Votre métier idéal",
"Vos projets de couple",
"Les langues que vous aimeriez apprendre",
"Les pays à visiter",
"Vos plats favoris",
"Les restaurants à tester",
"Votre enfance",
"Vos qualités",
"Vos défauts",
"Vos animaux préférés",
"Vos plus grandes peurs",
"Votre famille",
"Les vacances idéales",
"Le sport",
"La mode",
"La technologie",
"L'intelligence artificielle",
"Les réseaux sociaux",
"Les livres",
"Les podcasts",
"Les concerts",
"Les festivals",
"Les traditions",
"Les rêves d'enfance",
"Les entrepreneurs inspirants",
"Les habitudes du quotidien",
"Les défis personnels",
"Les finances",
"L'avenir",
"Le mariage",
"Les enfants",
"La cuisine",
"Les voitures",
"Les motos",
"Les soirées",
"Les surprises",
"Les cadeaux",
"Les applications préférées",
"Les souvenirs d'école",
"Les célébrités",
"Les anecdotes drôles",
"Les super-pouvoirs imaginaires",
"Les valeurs importantes",
"Les habitudes du matin",
"Les week-ends parfaits",
"Les expériences insolites",
"Les destinations locales",
"Les traditions familiales",
"Les objectifs de cette année"
];
let arrayVibeSelection = [];
let arrayHumeurSelection = [];

let current = 0;
let currentHumeur = 0;

document.addEventListener("DOMContentLoaded", () => {
    initUI();
    loadFromLocalStorage();
    setupEventListeners();
});

function initUI() {
    let gridVibe = document.querySelector(".carousel-vibe");
    let gridHumeur = document.querySelector(".carousel-humeur");
    let vibeContentContainer = document.querySelector(".vibe-content");
    let humeurContentContainer = document.querySelector(".vibe-choix");

    if (gridVibe) gridVibe.innerHTML = "";
    if (gridHumeur) gridHumeur.innerHTML = "";
    if (vibeContentContainer) vibeContentContainer.innerHTML = "";
    if (humeurContentContainer) humeurContentContainer.innerHTML = "";

    generateCard(vibesList, gridVibe, "vibe-element");
    generateCard(humeurList, gridHumeur, "humeur");
    renderFlags();
}

function renderFlags() {
    const greenContainer = document.querySelector(".category-content.green");
    const redContainer = document.querySelector(".category-content.red");

    if (greenContainer) {
        greenContainer.innerHTML = Object.entries(greenFlagsCategories).map(([cat, flags]) => `
            <h6 class="mt-2">${cat}</h6>
            ${flags.map(flag => `
                <label for="${flag.id}" class="category-card w-100 my-1 p-2">
                    <div class="d-flex gap-2 align-items-center">
                        <input type="checkbox" class="form-check-input" id="${flag.id}" name="green_flags" value="${flag.id}">
                        <span>${flag.text}</span>
                    </div>
                </label>
            `).join("")}
        `).join("");
    }

    if (redContainer) {
        redContainer.innerHTML = Object.entries(redFlagsCategories).map(([cat, flags]) => `
            <h6 class="mt-2">${cat}</h6>
            ${flags.map(flag => `
                <label for="${flag.id}" class="category-card w-100 my-1 p-2">
                    <div class="d-flex gap-2 align-items-center">
                        <input type="checkbox" class="form-check-input" id="${flag.id}" name="red_flags" value="${flag.id}" data-opposite="${flag.opposite}">
                        <span>${flag.text}</span>
                    </div>
                </label>
            `).join("")}
        `).join("");
    }

    // logique d’opposition
    document.querySelectorAll("input[name='red_flags']").forEach(cb => {
        cb.addEventListener("change", function(){
            if(this.checked && this.dataset.opposite){
                let oppositeCb = document.getElementById(this.dataset.opposite);
                if(oppositeCb) oppositeCb.checked = false;
            }
        });
    });

    document.querySelectorAll("input[name='green_flags']").forEach(cb => {
        cb.addEventListener("change", function(){
            let redOpposite = Object.values(redFlagsCategories).flat().find(r => r.opposite === this.id);
            if(this.checked && redOpposite){
                let redCb = document.getElementById(redOpposite.id);
                if(redCb) redCb.checked = false;
            }
        });
    });
}


function generateCard(dataList, grid, classe) {
    if (!grid) return;
    let fragment = document.createDocumentFragment();

    dataList.forEach((element) => {
        let cardVibe = document.createElement("div");
        cardVibe.className = `card-vibe ${classe} ${element.name}`;
        cardVibe.innerHTML = `
            <div class="icon">${element.icon}</div>
            <div>${element.displayName}</div>
        `;
        cardVibe.addEventListener("click", () => {
            if (classe === "vibe-element") {
                vibeContent(element, "vibe-content");
            } else {
                vibeContent(element, "vibe-choix");
            }
            saveToLocalStorage();
        });
        fragment.appendChild(cardVibe);
    });

    grid.appendChild(fragment);
}

function vibeContent(elementVibe, classeVibe) {
    let vibeChoix = document.querySelector("." + classeVibe);
    if (!vibeChoix) return;

    let targetArray = classeVibe === "vibe-choix" ? arrayHumeurSelection : arrayVibeSelection;
    if (targetArray.some(item => item.id === elementVibe.id)) return alert("vous avez déjà pris");

    targetArray.push(elementVibe);

    let vibeSelection = document.createElement("div");
    vibeSelection.className = "vibe-selection";
    vibeSelection.dataset.id = elementVibe.id;
    vibeSelection.innerHTML = `
        ${elementVibe.displayName}
        <div class="icon-choix">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="transparent"></rect>
                <path d="M7 17L16.8995 7.10051" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7.00001L16.8995 16.8995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
    `;

    vibeSelection.querySelector(".icon-choix").addEventListener("click", () => {
        vibeSelection.remove();
        if (classeVibe === "vibe-choix") {
            arrayHumeurSelection = arrayHumeurSelection.filter(item => item.id !== elementVibe.id);
        } else {
            arrayVibeSelection = arrayVibeSelection.filter(item => item.id !== elementVibe.id);
        }
        saveToLocalStorage();
    });

    vibeChoix.appendChild(vibeSelection);
}

function VibeRight() {
    let carouselContainer = document.querySelector(".carousel-vibe");
    let gridVibePx = document.querySelector(".grid-vibe");
    if (!carouselContainer || !gridVibePx) return;
    let step = document.querySelector(".vibe-element")?.clientWidth || 100;
    let maxScroll = carouselContainer.scrollWidth - gridVibePx.clientWidth;
    if (Math.abs(current) < maxScroll) {
        current -= step;
        carouselContainer.style.transform = `translateX(${current}px)`;
    }
}

function VibeLeft() {
    let carouselContainer = document.querySelector(".carousel-vibe");
    if (!carouselContainer) return;
    let step = document.querySelector(".vibe-element")?.clientWidth || 100;
    if (current < 0) {
        current += step;
        carouselContainer.style.transform = `translateX(${current}px)`;
    }
}

function humeurRight() {
    let carouselContainerHumeur = document.querySelector(".carousel-humeur");
    let gridVibePxHumeur = document.querySelector(".grid-humeur");
    if (!carouselContainerHumeur || !gridVibePxHumeur) return;
    let stepHumeur = document.querySelector(".humeur")?.clientWidth || 100;
    let maxScroll = carouselContainerHumeur.scrollWidth - gridVibePxHumeur.clientWidth;
    if (Math.abs(currentHumeur) < maxScroll) {
        currentHumeur -= stepHumeur;
        carouselContainerHumeur.style.transform = `translateX(${currentHumeur}px)`;
    }
}

function humeurLeft() {
    let carouselContainerHumeur = document.querySelector(".carousel-humeur");
    if (!carouselContainerHumeur) return;
    let stepHumeur = document.querySelector(".humeur")?.clientWidth || 100;
    if (currentHumeur < 0) {
        currentHumeur += stepHumeur;
        carouselContainerHumeur.style.transform = `translateX(${currentHumeur}px)`;
    }
}

function setupEventListeners() {
    document.querySelectorAll(".flag-category").forEach(categoryHeader => {
        categoryHeader.addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content && content.classList.contains("category-content")) {
                let isHidden = content.style.display === "none";
                content.style.display = isHidden ? "block" : "none";
                let svg = this.querySelector("svg");
                if (svg) svg.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
            }
        });
    });

    let btnGenerate = document.querySelector(".btn-generate");
    if (btnGenerate) btnGenerate.addEventListener("click", generateProfile);

    let btnCopy = document.querySelector(".btn-copy");
    if (btnCopy) btnCopy.addEventListener("click", copyToClipboard);

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", saveToLocalStorage);
        input.addEventListener("change", saveToLocalStorage);
    });
}

function generateProfile() {
    
    let inputs = document.querySelectorAll("input[type='text']");
    let userFirstName = inputs[0]?.value.trim();
    let partnerFirstName = inputs[1]?.value.trim();

    if (!userFirstName || !partnerFirstName) {
        alert("Veuillez remplir les prénoms !");
        return;
    }

    let greenFlags = document.querySelectorAll(".category-content.green input[type='checkbox']:checked").length;
    let redFlags = document.querySelectorAll(".category-content.red input[type='checkbox']:checked").length;

    let baseScore = 60;
    baseScore += arrayVibeSelection.length * 4;
    baseScore += arrayHumeurSelection.length * 3;
    baseScore += greenFlags * 8;
    baseScore -= redFlags * 10;

    let finalScore = Math.min(Math.max(baseScore, 5), 99);

    let statCircle = document.querySelector(".stat");
    let statValue = document.querySelector(".stat-value");
    if (statValue && statCircle) {
        let emoji = finalScore > 75 ? "🤩" : finalScore > 45 ? "🙂" : "😬";
        statValue.textContent = `${finalScore}% ${emoji}`;
        statCircle.style.background = `conic-gradient(rgb(8, 238, 104) 0 ${finalScore}%, gray ${finalScore}%)`;
    }

    let partnerLabel = document.querySelector(".card h6 span");
    if (partnerLabel) partnerLabel.textContent = partnerFirstName + " :";

    let profileText = document.querySelector(".compat-text");
    if (profileText) {
        if (redFlags > greenFlags) {
            profileText.textContent = '"Le Mystérieux à Risque"';
        } else if (greenFlags >= 3) {
            profileText.textContent = '"L\'Engagé Attentionné"';
        } else if (arrayVibeSelection.some(v => v.name === "gaming" || v.name === "fete")) {
            profileText.textContent = '"Le Partenaire Dynamic & Fun"';
        } else {
            profileText.textContent = '"L\'Ame Sœur Chill"';
        }
    }
    let coupleNames = generateCoupleName(userFirstName, partnerFirstName);
    let coupleNameContainer = document.querySelector(".couple-name");
    if (coupleNameContainer) {
        coupleNameContainer.innerHTML = `
            <p><strong>Nom de couple :</strong></p>
            <ol>
                <li>${coupleNames.simple}</li>
                <li>${coupleNames.fusion}</li>
                <li>${coupleNames.initiales}</li>
                <li>${coupleNames.alternance}</li>
            </ol>
        `;
    }
    generateTopics(userFirstName, partnerFirstName);
    saveToLocalStorage();
}

function generateTopics() {

    let container = document.querySelector(".topics-list");

    let shuffled = [...discussionTopics]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

    container.innerHTML = shuffled.map((topic,index)=>`
        <div class="card bg-dark text-white mt-2 p-2 topic-card">
            <div class="d-flex gap-2">
                <strong>${index+1}.</strong>
                <span>${topic}</span>
            </div>
        </div>
    `).join("");

}

function copyToClipboard() {
    let inputs = document.querySelectorAll("input[type='text']");
    let user = inputs[0]?.value.trim() || "Moi";
    let partner = inputs[1]?.value.trim() || "Mon/Ma partenaire";
    let score = document.querySelector(".stat-value")?.textContent || "N/A";
    let profile = document.querySelector(".compat-text")?.textContent || "";

    let shareText = `💖 BaeScan Résultat 💖\nEntre ${user} et ${partner} : ${score} de compatibilité !\nProfil estimé : ${profile}\n\nAnalysé avec BaeScan ✨`;

    navigator.clipboard.writeText(shareText).then(() => {
        let btnCopy = document.querySelector(".btn-copy");
        if (btnCopy) {
            let originalText = btnCopy.textContent;
            btnCopy.textContent = "Copié dans le presse-papier ! ✅";
            setTimeout(() => btnCopy.textContent = originalText, 2000);
        }
    });
}

function saveToLocalStorage() {
    let inputs = document.querySelectorAll("input[type='text']");
    let checkedFlags = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.id);

    let data = {
        userFirstName: inputs[0]?.value || "",
        partnerFirstName: inputs[1]?.value || "",
        vibes: arrayVibeSelection,
        humeurs: arrayHumeurSelection,
        flags: checkedFlags,
        scoreText: document.querySelector(".stat-value")?.textContent || "",
        profileText: document.querySelector(".compat-text")?.textContent || ""
    };

    localStorage.setItem("baescan_data", JSON.stringify(data));
}

function loadFromLocalStorage() {
    let saved = localStorage.getItem("baescan_data");
    if (!saved) return;

    try {
        let data = JSON.parse(saved);
        let inputs = document.querySelectorAll("input[type='text']");

        if (data.userFirstName && inputs[0]) inputs[0].value = data.userFirstName;
        if (data.partnerFirstName && inputs[1]) inputs[1].value = data.partnerFirstName;

        if (Array.isArray(data.vibes)) {
            data.vibes.forEach(v => vibeContent(v, "vibe-content"));
        }

        if (Array.isArray(data.humeurs)) {
            data.humeurs.forEach(h => vibeContent(h, "vibe-choix"));
        }

        if (Array.isArray(data.flags)) {
            data.flags.forEach(id => {
                let cb = document.getElementById(id);
                if (cb) cb.checked = true;
            });
        }

        if (data.scoreText && data.userFirstName && data.partnerFirstName) {
            generateProfile();
        }
    } catch (e) {
        console.error("Erreur chargement LocalStorage", e);
    }
}
function generateCoupleName(userName, partnerName) {
    if (!userName || !partnerName) return "";

    userName = userName.trim();
    partnerName = partnerName.trim();

    let combo1 = userName + " ❤ " + partnerName;

    let halfUser = userName.slice(0, Math.ceil(userName.length / 2));
    let halfPartner = partnerName.slice(Math.floor(partnerName.length / 2));
    let combo2 = halfUser + halfPartner;

    let combo3 = userName[0].toUpperCase() + partnerName[0].toUpperCase();

    let minLen = Math.min(userName.length, partnerName.length);
    let combo4 = "";
    for (let i = 0; i < minLen; i++) {
        combo4 += userName[i] + partnerName[i];
    }

    return {
        simple: combo1,
        fusion: combo2,
        initiales: combo3,
        alternance: combo4
    };
}
