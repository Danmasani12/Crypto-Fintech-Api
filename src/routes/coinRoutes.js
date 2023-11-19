/**
 * @swagger
 * /api/coins:
 *   get:
 *     summary: Get the list of coins
 *     description: Fetch the list of available coins in the market
 *     responses:
 *       200:
 *         description: Successful response with the list of coins
 *         content:
 *           application/json:
 *             example:
 *               - name: Bitcoin
 *                 symbol: BTC
 *               - name: Ethereum
 *                 symbol: ETH
 *               # Add more examples as needed
 */
const express = require('express');
const coinController = require('../controllers/coinControllers');
const router = express.Router();

router.get('/coins', coinController.getCoinList);

module.exports = router;
