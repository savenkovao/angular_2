"use strict";
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.write = function (logMessage) {
        console.log(logMessage);
    };
    return LogService;
}());
exports.LogService = LogService;
//# sourceMappingURL=logger.service.js.map