import { data } from "../data/data.js";
export default class productService {
  constructor() {
    this.motherboard = [];
    this.cpu = [];
    this.ram = [];
  }

  load(type) {
    for (const product of data) {
      switch (product.type) {
        case "motherboard":
          this.motherboard.push(product);
          break;
        case "cpu":
          this.cpu.push(product);
          break;
        case "ram":
          this.ram.push(product);
          break;

        default:
          console.log(`Hata ${product}`);
          break;
      }
    }
    return this.chechProductValidation(type);
  }

  chechProductValidation(type) {
    switch (type) {
      case "motherboard":
        return this.motherboard;
      case "cpu":
        return this.cpu;
      case "ram":
        return this.ram;
      default:
        return console.log("Hatalı ürün türü girdiniz");
    }
  }
}
