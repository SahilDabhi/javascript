class Laptop {
  constructor(ram, processor, generation) {
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;
  }
  showSpecs() {
    console.log(
      `Specs Ram - ${this.ram} Processor ${this.processor} - generation ${this.generation}`
    );
  }
}
// this is a subclass so we extend it to the main class

class Dell extends Laptop {
  constructor(ram, processor, generation) {
    super(ram, processor, generation);
  }
}

const dell1 = new Dell("8gb", "i5", "12");
console.log(dell1);
dell1.showSpecs();
