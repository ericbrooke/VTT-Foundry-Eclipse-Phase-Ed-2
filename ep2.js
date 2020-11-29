import { ep2 } from "./module/config.js"
import ep2ItemSheet from "./module/sheets/ep2ItemSheet.js";
import ep2PlayerCharacterSheet from "./module/sheets/ep2PlayerCharacterSheet.js";

async function preloadHandlebarsTemplates () {
  const templatePaths = [
    "system/ep2/templates/partials/character-attributes.bhs",
  ];
  return loadTemplates(templatePaths);
};

Hooks.once("init",function() {
  console.log("ep2 | Booting up Eclipse Phase 2 System");

  CONFIG.ep2 = ep2;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ep2", ep2ItemSheet, {makeDefault: true});

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("ep2", ep2ActorSheet, {makeDefault: true});

  preloadHandlebarsTemplates();
});
