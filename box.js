const { STATE_NAMES: DELIVERY_STATES } = require("./delivery");

exports.BOX_STATES = {
  IDLE: "IDLE",
  OFFLINE: "OFFLINE",
  BLOCKED_BY_DELIVERY: "BLOCKED_BY_DELIVERY",
  OUT_OF_PARTITIONS: "OUT_OF_PARTITIONS",
};

exports.BOX_OPERATIONS = {
  BLOCK_FOR_DELIVERY: "BLOCK_FOR_DELIVERY",
  // perhaps a messenger messed someting up and needs to open box again,
  // so he requests a 1-time unlock request, aproved if within eg. 5min of delivery?
  // REQUEST_UNLOCK: "REQUEST_UNLOCK",
};

// Constants

exports.LOW_BATTERY_THRESHOLD_CENT = 5;

// Delivery states blocking box

exports.BLOCKING_DELIVERY_RECIPIENT_STATES = [
  DELIVERY_STATES.PACKAGE_IN_SENDER_BOX,
  DELIVERY_STATES.PACKAGE_WAITING_FOR_DELIVERY,
  DELIVERY_STATES.DELIVERY_ACCEPTED_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.SENDER_BOX_OPENED_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.PACKAGE_TAKEOVER_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.RECIPIENT_BOX_OPENED_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.PACKAGE_IN_RECIPIENT_BOX,
  DELIVERY_STATES.RECIPIENT_BOX_OPENED_BY_RECIPIENT,
];

exports.BLOCKING_DELIVERY_SENDER_STATES = [
  DELIVERY_STATES.READY_FOR_BOX,
  DELIVERY_STATES.PACKAGE_IN_SENDER_BOX,
  DELIVERY_STATES.PACKAGE_WAITING_FOR_DELIVERY,
  DELIVERY_STATES.DELIVERY_ACCEPTED_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.SENDER_BOX_OPENED_BY_TRANSPORT_COMPANY,
  DELIVERY_STATES.PACKAGE_TAKEOVER_BY_TRANSPORT_COMPANY,
];

module.exports = {
  LOW_BATTERY_THRESHOLD_CENT: exports.LOW_BATTERY_THRESHOLD_CENT,
  BOX_STATES: exports.BOX_STATES,
  BOX_OPERATIONS: exports.BOX_OPERATIONS,
  BLOCKING_DELIVERY_RECIPIENT_STATES:
    exports.BLOCKING_DELIVERY_RECIPIENT_STATES,
  BLOCKING_DELIVERY_SENDER_STATES: exports.BLOCKING_DELIVERY_SENDER_STATES,
};
