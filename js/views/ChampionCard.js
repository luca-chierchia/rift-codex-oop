/** Componente di presentazione di una singola scheda. */
export class ChampionCard {
    constructor(champion) {
        this.champion = champion;
    }

    render() {
        const card = document.createElement("article");
        card.className = "champion-card";

        const art = document.createElement("div");
        art.className = "champion-art";
        const [start, end] = this.champion.palette;
        art.style.background = `radial-gradient(circle at 70% 30%, ${end}88, transparent 55%), linear-gradient(135deg, ${start}, #08111b)`;

        const symbol = document.createElement("span");
        symbol.className = "champion-symbol";
        symbol.textContent = this.champion.symbol;
        symbol.setAttribute("aria-hidden", "true");
        art.append(symbol);

        const info = document.createElement("div");
        info.className = "champion-info";

        const role = document.createElement("p");
        role.className = "champion-role";
        role.textContent = this.champion.role + " · " + this.champion.region;

        const name = document.createElement("h3");
        name.className = "champion-name";
        name.textContent = this.champion.name;

        const description = document.createElement("p");
        description.className = "champion-description";
        description.textContent = this.champion.getExcerpt();

        const button = document.createElement("button");
        button.className = "champion-button";
        button.type = "button";
        button.dataset.championId = this.champion.id;
        button.textContent = "Scopri la leggenda →";
        button.setAttribute("aria-label", `Scopri ${this.champion.name}`);

        info.append(role, name, description, button);
        card.append(art, info);
        return card;
    }
}