var express = require('express');
var router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec)
var data = require("../playwright/results.json");
/* GET home page. */
router.get('/', function(req, res, next) {
    async function execCypress() {
        const {stdout, stderr } = await exec('cd playwright && npx playwright test --reporter=json');
        res.send(data);
    }
    execCypress();
});

module.exports = router;
