const LeaveApplication = require('../models/LeaveApplication');
const User = require('../models/User');

exports.applyLeave = async (req, res) => {
    const { leaveType, startDate, endDate, reason, supportingDocuments } = req.body;

    try {
        const leaveApplication = new LeaveApplication({
            user: req.user.id,
            leaveType,
            startDate,
            endDate,
            reason,
            supportingDocuments,
        });

        await leaveApplication.save();

        res.status(201).json({ message: 'Leave application submitted successfully', leaveApplication });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getLeaveApplications = async (req, res) => {
    try {
        const leaveApplications = await LeaveApplication.find({ user: req.user.id });

        res.json(leaveApplications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllLeaveApplications = async (req, res) => {
    try {
        const leaveApplications = await LeaveApplication.find().populate('user', 'name email');

        res.json(leaveApplications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateLeaveStatus = async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    try {
        const leaveApplication = await LeaveApplication.findById(id);

        if (!leaveApplication) {
            return res.status(404).json({ message: 'Leave application not found' });
        }

        leaveApplication.status = status;
        await leaveApplication.save();

        res.json({ message: 'Leave application status updated successfully', leaveApplication });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
