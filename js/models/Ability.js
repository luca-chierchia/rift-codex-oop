/** Entità che rappresenta un'abilità del campione. */
export class Ability {
    constructor({ name, description, type }) {
        this.name = name;
        this.description = description;
        this.type = type;
    }
}