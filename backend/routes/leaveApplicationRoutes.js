const express = require('express');
const { applyLeave, getLeaveApplications, getAllLeaveApplications, updateLeaveStatus } = require('../controllers/leaveApplicationController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/apply', protect, applyLeave);
router.get('/my-applications', protect, getLeaveApplications);
router.get('/all-applications', protect, admin, getAllLeaveApplications);
router.put('/update-status/:id', protect, admin, updateLeaveStatus);

module.exports = router;
