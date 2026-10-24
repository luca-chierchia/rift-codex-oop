/** Dati dimostrativi. Nessuna API o backend richiesto. */
export const championsData = [
    {
        id: "aeryn", name: "Aeryn", title: "La lama dell'aurora",
        role: "Guerriero", region: "Valle di Solarys", difficulty: "Media",
        symbol: "✦", palette: ["#4e587e", "#d1a967"],
        lore: "Ultima custode dell'aurora, Aeryn impugna una lama forgiata nella luce del primo mattino. Protegge le terre di confine dalle ombre che avanzano.",
        abilities: [
            { name: "Fendente solare", type: "Q", description: "Un colpo frontale intriso di luce." },
            { name: "Vigore dell'alba", type: "W", description: "Uno scudo temporaneo protegge gli alleati vicini." },
            { name: "Giuramento radioso", type: "R", description: "Aeryn scatena un'onda di energia solare." }
        ]
    },
    {
        id: "nyx", name: "Nyx", title: "L'eco del crepuscolo",
        role: "Assassino", region: "Città di Nocthar", difficulty: "Alta",
        symbol: "☾", palette: ["#17213e", "#744bb0"],
        lore: "Nyx cammina tra le pieghe del buio. Nessuno conosce il suo volto, ma ogni sovrano teme il suono dei suoi passi.",
        abilities: [
            { name: "Passo d'ombra", type: "Q", description: "Scatta rapidamente oltre il bersaglio." },
            { name: "Velo silente", type: "W", description: "Si nasconde brevemente agli avversari." },
            { name: "Ultima notte", type: "R", description: "Concentra un colpo decisivo su un singolo nemico." }
        ]
    },
    {
        id: "thalor", name: "Thalor", title: "Il custode delle maree",
        role: "Tank", region: "Abissi di Miral", difficulty: "Bassa",
        symbol: "♜", palette: ["#0d5664", "#4cb6ad"],
        lore: "Antico guardiano delle porte sommerse, Thalor risponde soltanto al richiamo dell'oceano e resiste alle tempeste più violente.",
        abilities: [
            { name: "Onda infranta", type: "Q", description: "Travolge i nemici davanti a sé." },
            { name: "Corazza corallina", type: "W", description: "Riduce i danni per un breve periodo." },
            { name: "Marea eterna", type: "R", description: "Solleva un muro d'acqua che respinge i nemici." }
        ]
    },
    {
        id: "lyra", name: "Lyra", title: "La tessitrice di stelle",
        role: "Mago", region: "Osservatorio di Elyon", difficulty: "Alta",
        symbol: "✧", palette: ["#3d3675", "#c678d5"],
        lore: "Lyra legge il futuro nelle costellazioni. I suoi incantesimi trasformano le traiettorie celesti in pura energia arcana.",
        abilities: [
            { name: "Scheggia astrale", type: "Q", description: "Lancia un frammento di luce stellare." },
            { name: "Orbita segreta", type: "W", description: "Crea un campo magico intorno a sé." },
            { name: "Supernova", type: "R", description: "Evoca un'esplosione di energia cosmica." }
        ]
    },
    {
        id: "kael", name: "Kael", title: "Il falco di ferro",
        role: "Tiratore", region: "Fortezza di Varr", difficulty: "Media",
        symbol: "➶", palette: ["#61432e", "#b18b4c"],
        lore: "Kael non sbaglia mai due volte. Dalle torri di Varr osserva ogni sentiero, pronto a difendere chi non può farlo da solo.",
        abilities: [
            { name: "Colpo perforante", type: "Q", description: "Un proiettile attraversa più bersagli." },
            { name: "Occhio del falco", type: "W", description: "Aumenta temporaneamente la precisione." },
            { name: "Pioggia d'acciaio", type: "R", description: "Scatena una raffica su un'area." }
        ]
    },
    {
        id: "seris", name: "Seris", title: "La voce del bosco",
        role: "Supporto", region: "Foresta di Lumen", difficulty: "Bassa",
        symbol: "❖", palette: ["#205b49", "#83b87a"],
        lore: "Seris custodisce la memoria degli alberi antichi. Le sue melodie curano le ferite e restituiscono speranza ai viandanti.",
        abilities: [
            { name: "Seme vitale", type: "Q", description: "Cura un alleato nelle vicinanze." },
            { name: "Radici protettive", type: "W", description: "Dona una barriera agli alleati." },
            { name: "Canto della rinascita", type: "R", description: "Rigenera gli alleati in un'ampia area." }
        ]
    }
];