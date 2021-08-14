const express = require('express');
const cors = require('cors');
const pdf = require('../routes/pdf.routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.apiRoutes = {
            pdf: '/api/export-pdf',
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    };

    routes() {
        this.app.use(this.apiRoutes.pdf, pdf);
    };

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    };
};

module.exports = Server;
