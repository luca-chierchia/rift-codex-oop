/** Logica applicativa indipendente dal DOM. */
export class ChampionService {
    constructor(repository) {
        this.repository = repository;
    }

    getChampions({ query = "", role = "all" } = {}) {
        return this.repository.getAll().filter(champion => {
            const matchesRole = role === "all" || champion.role === role;
            return matchesRole && champion.matches(query);
        });
    }

    getChampion(id) {
        return this.repository.getById(id);
    }
}