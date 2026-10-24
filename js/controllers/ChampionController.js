/** Coordina eventi utente, service e view. */
export class ChampionController {
    constructor(service, view, searchInput, roleFilter, grid, modal) {
        this.service = service;
        this.view = view;
        this.searchInput = searchInput;
        this.roleFilter = roleFilter;
        this.grid = grid;
        this.modal = modal;
    }

    initialize() {
        const update = () => {
            const champions = this.service.getChampions({
                query: this.searchInput.value,
                role: this.roleFilter.value
            });

            this.view.renderChampions(champions);
        };

        this.searchInput.addEventListener("input", update);
        this.roleFilter.addEventListener("change", update);

        // Event delegation: un solo listener per tutte le schede.
        this.grid.addEventListener("click", event => {
            const button = event.target.closest("[data-champion-id]");
            if (!button) return;

            const champion = this.service.getChampion(button.dataset.championId);
            if (champion) this.view.showChampion(champion);
        });

        this.modal.addEventListener("click", event => {
            if (event.target === this.modal || event.target.closest("[data-close-modal]")) {
                this.view.closeChampion();
            }
        });

        document.addEventListener("keydown", event => {
            if (this.modal.classList.contains("hidden")) return;

            if (event.key === "Escape") {
                this.view.closeChampion();
            }

            // Trattiene il focus nel dialogo.
            if (event.key === "Tab") {
                const focusable = [...this.modal.querySelectorAll("button, a, input, select, [tabindex]:not([tabindex='-1'])")]
                    .filter(element => !element.disabled);
                if (!focusable.length) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        update();
    }
}