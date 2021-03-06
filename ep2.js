import { ep2 } from "./module/config.js"
import ep2ItemSheet from "./module/sheets/ep2ItemSheet.js";
import ep2PlayerCharacterSheet from "./module/sheets/ep2PlayerCharacterSheet.js";

async function preloadHandlebarsTemplates () {
  const templatePaths = [
    "systems/ep2/templates/partials/character-attributes.hbs",
    "systems/ep2/templates/partials/character-identity.hbs",
    "systems/ep2/templates/partials/character-reputation.hbs",
    "systems/ep2/templates/partials/character-skills.hbs",
    "systems/ep2/templates/partials/physical.hbs",
  ];
  console.log("ep2 | Loading Templates");
  return loadTemplates(templatePaths);
};

Hooks.once("init",function() {
  console.log("ep2 | Booting up Eclipse Phase 2 System");

  CONFIG.ep2 = ep2;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ep2", ep2ItemSheet, {makeDefault: true});

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("ep2", ep2PlayerCharacterSheet, {makeDefault: true});

  preloadHandlebarsTemplates();
});
