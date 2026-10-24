import { Ability } from "./Ability.js";

/** Modello di dominio: un campione e le sue abilità. */
export class Champion {
    constructor({ id, name, title, role, region, difficulty, symbol, palette, lore, abilities }) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.role = role;
        this.region = region;
        this.difficulty = difficulty;
        this.symbol = symbol;
        this.palette = palette;
        this.lore = lore;
        this.abilities = abilities.map(data => new Ability(data));
    }

    getExcerpt(maxLength = 115) {
        if (this.lore.length <= maxLength) {
            return this.lore;
        }

        return this.lore.slice(0, maxLength).trimEnd() + "…";
    }

    matches(query) {
        const text = [this.name, this.title, this.region, this.role, this.lore]
            .join(" ")
            .toLocaleLowerCase("it-IT");

        return text.includes(query.toLocaleLowerCase("it-IT").trim());
    }
}