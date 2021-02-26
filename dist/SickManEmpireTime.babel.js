/*!
 * SickManEmpireTime 1.0.2
 * https://github.com/sunny00217wm/SickManWPFriends
 *
 * Copyright 2021 sunny00217wm
 * Released under the GPLv3
 */
!function(global, factory) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = factory(global, !0) : factory(global);
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
    "use strict";
    var SickManEmpireTimeObj = {}, EmpireFirst = SickManEmpireTimeObj.EmpireFirst = new Date("2019-7-4 16:00:00 GMT"), getYear = SickManEmpireTimeObj.getYear = function(count) {
        var time = new Date(count || Date.now());
        if ("Invalid Date" == time.toString()) throw new TypeError("Couldn't parse argument date.");
        return count = (time.getTime() - EmpireFirst.getTime()) / 432e5, EmpireFirst < time ? Math.floor(count) + 1 : Math.ceil(count) + 1;
    };
    function add_leading_zero(number) {
        return number < 10 ? "0" + number : number;
    }
    function SickManEmpireTime(date) {
        return new SickManEmpireTime.prototype.init(date);
    }
    var FromYearGetBaseTime = SickManEmpireTimeObj.FromYearGetBaseTime = function(BaseTime, utc) {
        if ("number" != typeof BaseTime && isNaN(BaseTime)) throw new TypeError("Couldn't parse argument year.");
        BaseTime = new Date(EmpireFirst.getTime() + 12 * (BaseTime - 1) * 60 * 60 * 1e3 + 36e5);
        return utc || (BaseTime = new Date(BaseTime.getTime() + 288e5)), "".concat(BaseTime.getUTCFullYear(), "-").concat(add_leading_zero(BaseTime.getUTCMonth() + 1), "-").concat(add_leading_zero(BaseTime.getUTCDate()), " ").concat(add_leading_zero(BaseTime.getUTCHours()), ":00 (UTC").concat(utc ? "" : "+8", ")");
    }, getMonth = SickManEmpireTimeObj.getMonth = function(count) {
        count = new Date(count || Date.now());
        if ("Invalid Date" == count.toString()) throw new TypeError("Couldn't parse argument date.");
        return 15 < (count = count.getUTCHours()) ? count - 15 : count <= 3 ? count + 9 : count - 3;
    };
    (SickManEmpireTime.prototype = {
        init: function(time) {
            time = new Date(time || Date.now());
            if ("Invalid Date" == time.toString()) throw new TypeError("Couldn't parse argument date.");
            this.time = time;
        },
        getThisYear: function() {
            return getYear(this.time);
        },
        getThisMonth: function() {
            return getMonth(this.time);
        }
    }).init.prototype = SickManEmpireTime.prototype;
    var $key, getResult = function(argYear, argDate, utc) {
        for (var date = new Date(EmpireFirst), $ret = [ {
            earth: utc ? "2019-07-04 09:00 (UTC)" : "2019-07-04 13:00 (UTC+8)",
            year: 0
        } ], Year = argDate ? getYear(argDate) : argYear || getYear(), year = 1; year <= Year; year++) $ret[year] = {
            earth: FromYearGetBaseTime(year, utc),
            year: year
        }, date.setTime(date.getTime() + 432e5);
        return $ret;
    };
    for ($key in SickManEmpireTimeObj.table = {
        toConsole: function(argYear, argDate, utc) {
            console.table(getResult(argYear, argDate, utc));
        },
        toTxt: function(argYear, argDate, utc) {
            for (var $ret = "", result = getResult(argYear, argDate, utc), i = 0; i < result.length; i++) $ret += "earth: ".concat(result[i].earth, ", year: ").concat(result[i].year, "\n");
            return $ret;
        }
    }, SickManEmpireTimeObj) SickManEmpireTime[$key] = SickManEmpireTimeObj[$key];
    "function" == typeof define && define.amd && define("SickManEmpireTime", [], function() {
        return SickManEmpireTime;
    });
    var _SickManEmpireTime = window.SickManEmpireTime;
    return SickManEmpireTime.noConflict = function() {
        return window.SickManEmpireTime === SickManEmpireTime && (window.SickManEmpireTime = _SickManEmpireTime), 
        SickManEmpireTime;
    }, void 0 === noGlobal && (window.SickManEmpireTime = SickManEmpireTime), SickManEmpireTime;
});