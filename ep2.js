import { ep2 } from "./module/config.js"
import ep2ItemSheet from "./module/sheets/ep2ItemSheet.js";

Hooks.once("init",function() {
  console.log("ep2 | Booting up Eclipse Phase 2 System");

  CONFIG.ep2 = ep2;
  
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ep2", ep2ItemSheet, {makeDefault: true});
});
