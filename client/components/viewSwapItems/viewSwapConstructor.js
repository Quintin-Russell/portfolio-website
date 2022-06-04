export default class ViewSwapItem {
  constructor(name, type, page, text){
    this.name = name;
    this.type = type; // options: text, list, contact-form, carosel
    this.page = page;
    this.text = text;
  }
}
