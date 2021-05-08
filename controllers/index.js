const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);

module.exports = router;