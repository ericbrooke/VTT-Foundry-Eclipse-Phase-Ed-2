export default class ep2ItemSheet extends ItemSheet {
  get template(){
    return `systems/ep2/templates/sheets/${this.item.data.type}-sheet.html`;
  }

  getData() {
    const data = super.getData();

    data.config = CONFIG.ep2;

    return data;
  }
}
