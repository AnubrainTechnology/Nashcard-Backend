const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.send("Route is working");
})

module.export = router;