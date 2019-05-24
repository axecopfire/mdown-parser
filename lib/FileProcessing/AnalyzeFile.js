"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Analyze;

var _WeekBuilder = _interopRequireDefault(require("./ProcessWeek/WeekBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Analyze(data, type) {
  // Build out Weeks with week count/names
  var week = new _WeekBuilder["default"](data); // this.WeekNames = week.weekNames;
  // this.WeekCount = week.weekCount;

  week.addWeekContent();
  return this;
}