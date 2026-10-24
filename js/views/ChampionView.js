import { ChampionCard } from "./ChampionCard.js";

/** Gestisce DOM della lista e del dettaglio dei campioni. */
export class ChampionView {
    constructor(grid, counter, modal, modalContent) {
        this.grid = grid;
        this.counter = counter;
        this.modal = modal;
        this.modalContent = modalContent;
        this.previousFocus = null;
    }

    renderChampions(champions) {
        const cards = champions.map(champion => new ChampionCard(champion).render());
        this.grid.replaceChildren(...cards);
        this.counter.textContent = `${champions.length} campion${champions.length === 1 ? "e" : "i"} trovat${champions.length === 1 ? "o" : "i"}`;

        if (champions.length === 0) {
            const empty = document.createElement("p");
            empty.className = "text-slate-400 col-span-full py-10 text-center";
            empty.textContent = "Nessun campione trovato. Prova un'altra ricerca.";
            this.grid.append(empty);
        }
    }

    showChampion(champion) {
        this.previousFocus = document.activeElement;
        const heading = document.createElement("h2");
        heading.id = "modal-title";
        heading.className = "modal-title";
        heading.textContent = champion.name;

        const subtitle = document.createElement("p");
        subtitle.className = "eyebrow mt-3 mb-6";
        subtitle.textContent = `${champion.title} · ${champion.role}`;

        const region = document.createElement("p");
        region.className = "text-slate-400 mb-5";
        region.textContent = `Regione: ${champion.region}  |  Difficoltà: ${champion.difficulty}`;

        const lore = document.createElement("p");
        lore.className = "text-slate-200 leading-8 mb-7";
        lore.textContent = champion.lore;

        const abilitiesTitle = document.createElement("h3");
        abilitiesTitle.className = "text-xl font-semibold text-amber-200 mb-2";
        abilitiesTitle.textContent = "Abilità";

        const abilities = document.createElement("div");
        for (const ability of champion.abilities) {
            const item = document.createElement("div");
            item.className = "ability-item";

            const name = document.createElement("strong");
            name.className = "text-amber-200";
            name.textContent = `[${ability.type}] ${ability.name}`;

            const description = document.createElement("p");
            description.className = "text-slate-400 mt-2";
            description.textContent = ability.description;

            item.append(name, description);
            abilities.append(item);
        }

        const close = document.createElement("button");
        close.type = "button";
        close.className = "outline-button mt-8";
        close.dataset.closeModal = "true";
        close.textContent = "Chiudi";

        this.modalContent.replaceChildren(heading, subtitle, region, lore, abilitiesTitle, abilities, close);
        this.modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        close.focus();
    }

    closeChampion() {
        this.modal.classList.add("hidden");
        document.body.style.overflow = "";
        this.modalContent.replaceChildren();
        this.previousFocus?.focus();
    }
}