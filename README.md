# RIFT CODEX

Frontend fantasy originale ispirato all'atmosfera dei giochi MOBA. Progetto didattico **non ufficiale**, non affiliato a Riot Games.

## Tecnologie
HTML5 semantico, Tailwind CSS via CDN, CSS personalizzato, JavaScript ES6 con moduli e OOP. Nessun backend.

## Avvio
Da questa cartella:

```bash
python3 -m http.server 8000
```

Aprire http://localhost:8000 (serve una connessione per Tailwind e Google Fonts).

## Funzioni
Ricerca testuale, filtro per ruolo, schede dei campioni, dettagli in finestra modale, navigazione responsive.

## Architettura
- `Champion`, `Ability`: entità del dominio
- `ChampionRepository`: accesso ai dati
- `ChampionService`: ricerca e filtri
- `ChampionCard`, `ChampionView`: interfaccia DOM
- `ChampionController`: gestione eventi
- `App`: composition root / avvio

Diagramma UML: `docs/class-diagram.md` (Mermaid, renderizzato direttamente da GitHub).

I sei personaggi sono originali. Le illustrazioni delle card sono astratte, realizzate con CSS.