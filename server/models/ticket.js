const { v4: uuidv4 } = require('uuid');
class Ticket {

  constructor(number) {
    this.id = uuidv4();
    this.number = number;
    this.work = null;
    this.agent = null;
  }

}

module.exports = Ticket;