export default class ep2PlayerCharacterSheet extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/ep2/templates/sheets/playerCharacter-sheet.hbs",
      classes: ["ep2", "sheet", "playerCharacter"]
    });
  }
}
