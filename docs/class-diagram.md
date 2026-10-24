# Diagramma UML delle classi

```mermaid
classDiagram
    direction LR

    class Ability {
        +name: string
        +description: string
        +type: string
    }

    class Champion {
        +id: string
        +name: string
        +title: string
        +role: string
        +region: string
        +difficulty: string
        +abilities: Ability[]
        +getExcerpt(maxLength) string
        +matches(query) boolean
    }

    class ChampionRepository {
        -champions: Champion[]
        +getAll() Champion[]
        +getById(id) Champion
    }

    class ChampionService {
        +repository: ChampionRepository
        +getChampions(filters) Champion[]
        +getChampion(id) Champion
    }

    class ChampionCard {
        +champion: Champion
        +render() HTMLElement
    }

    class ChampionView {
        +renderChampions(champions) void
        +showChampion(champion) void
        +closeChampion() void
    }

    class ChampionController {
        +initialize() void
    }

    class App {
        +start() void
    }

    Champion "1" *-- "0..*" Ability : possiede
    ChampionRepository "1" o-- "0..*" Champion : contiene
    ChampionService --> ChampionRepository : utilizza
    ChampionController --> ChampionService : interroga
    ChampionController --> ChampionView : aggiorna
    ChampionView ..> ChampionCard : crea
    ChampionCard --> Champion : rappresenta
    App ..> ChampionController : istanzia
    App ..> ChampionService : istanzia
    App ..> ChampionRepository : istanzia
    App ..> ChampionView : istanzia
```

## Note sulle relazioni

- **Composizione** Champion–Ability: le abilità appartengono al modello di un campione.
- **Aggregazione** Repository–Champion: il repository mantiene la collezione.
- **Associazione / dipendenza** Controller–Service–View: gli oggetti collaborano tramite riferimenti iniettati nel costruttore.
- **Dipendenza di creazione** View–Card: la view costruisce le schede al momento del rendering.
