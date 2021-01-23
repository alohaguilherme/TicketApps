const TicketList = require("./ticket-list");


class Sockets {

    constructor(io) {

        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('Cliente Conectado!')
            // Escuchar evento: mensaje-to-server
            socket.on('request-new-ticket', (_, callback) => {
                const newTicket = this.ticketList.createTicket();
                callback(newTicket);
            });

            socket.on('call-next-ticket', ({ agent, work }, callback) => {

                const myTicket = this.ticketList.assignTicket(agent, work);
                callback(myTicket);

                this.io.emit('ticket-assigned', this.ticketList.last13);

            });


        });
    }


}


module.exports = Sockets;