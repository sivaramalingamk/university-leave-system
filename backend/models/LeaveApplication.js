const mongoose = require('mongoose');

const leaveApplicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    leaveType: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    },
    supportingDocuments: {
        type: String, // URL or path to the uploaded document
    },
}, { timestamps: true });

module.exports = mongoose.model('LeaveApplication', leaveApplicationSchema);
