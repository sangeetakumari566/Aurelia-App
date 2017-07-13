export class Home {
  firstName = 'John';
  lastName = 'Doe';
  message = 'Welcome to Aurelia!';
  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }
}