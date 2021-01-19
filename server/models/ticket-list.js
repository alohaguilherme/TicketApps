const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;

    this.pending = [];
    this.assigned = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get last13() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const ticket = new Ticket(this.nextNumber);
    this.pending.push(ticket)

    return ticket;
  }

  assignTicket(agent, work) {

    if (this.pending.length === 0) {
      return null;
    }

    const nextTicket = this.pending.shift();

    nextTicket.agent = agent;
    nextTicket.work = work;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }

}

module.exports = TicketList;