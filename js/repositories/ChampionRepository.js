import { Champion } from "../models/Champion.js";

/** Memorizza i campioni e fornisce accesso ai dati. */
export class ChampionRepository {
    #champions;

    constructor(rawChampions) {
        this.#champions = rawChampions.map(data => new Champion(data));
    }

    getAll() {
        return [...this.#champions];
    }

    getById(id) {
        return this.#champions.find(champion => champion.id === id) ?? null;
    }
}