import Component, { tracked } from '@glimmer/component';

export default class GlimmerTutorial extends Component {
  @tracked items = [];

  constructor(options) {
    super(options);
    this.loadItems();
  };

  async loadItems() {
    // https://jsonplaceholder.typicode.com/
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await response.json();
    this.items = json;
  }
}
