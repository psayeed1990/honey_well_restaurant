const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    combination: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        default: "future",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    reserveddate: {
        type: String,
        required: true,
    },
    reservedhour: {
        type: String,
        required: true,
    },
    reservedtable: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        //Status: pending, confirmed, cancelled, served
        type: String,
        required: true,
    },
    ongoingby: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    special: {
        type: String,
        default: "no",
    },
    specialby: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },

    servedby: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    confirmedby: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Reservation = new mongoose.model(
    "reservations",
    ReservationSchema
);
