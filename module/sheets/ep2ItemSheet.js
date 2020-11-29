export default class ep2ItemSheet extends ItemSheet {


  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 630,
      height: 340,
      classes: ["ep2", "sheet", "item"]
    });
  }

  get template(){
    return `systems/ep2/templates/sheets/${this.item.data.type}-sheet.hbs`;
  }

  getData() {
    const data = super.getData();

    data.config = CONFIG.ep2;

    return data;
  }
}
