import { championsData } from "./data/champions.js";
import { ChampionRepository } from "./repositories/ChampionRepository.js";
import { ChampionService } from "./services/ChampionService.js";
import { ChampionView } from "./views/ChampionView.js";
import { ChampionController } from "./controllers/ChampionController.js";

/** Composition root: assembla le dipendenze dell'applicazione. */
class App {
    start() {
        const repository = new ChampionRepository(championsData);
        const service = new ChampionService(repository);

        const grid = document.querySelector("#champions-grid");
        const modal = document.querySelector("#champion-modal");

        const view = new ChampionView(
            grid,
            document.querySelector("#results-count"),
            modal,
            document.querySelector("#modal-content")
        );

        const controller = new ChampionController(
            service,
            view,
            document.querySelector("#champion-search"),
            document.querySelector("#role-filter"),
            grid,
            modal
        );

        controller.initialize();
    }
}

new App().start();