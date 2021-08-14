const { Router }= require('express');
const { exportPdf } = require('../controllers/pdf.controllers');

const router = Router();

router.post('/', exportPdf);

module.exports = router;
