(function (window) {

    var XHRFormSubmitter = function (options) {
        var self = this;
        self._form = options.form;

        /**
         * submit
         * Submit the form using a XMLHttpRequest.
         *
         * @name submit
         * @function
         * @param {Object} submitOps The submit options
         * @return {XMLHttpRequest} The XMLHttpRequest instance
         */
        self.submit = function (submitOps, callback) {
            var xhr = new XMLHttpRequest()
              , form = self._form
              , url = submitOps.actionUrl || form.getAttribute("action")
              , method = submitOps.method || form.getAttribute("method")
              ;

            callback = callback || function () {};

            xhr.open(method, url);
            xhr.setRequestHeader("content-type", "text/plain; charset=utf-8");
            xhr.onreadystatechange = function() {
                if (link.readyState !== 4) { return xhr; }

                if (link.status >= 400) {
                    return callback(link.responseText, null);
                }

                callback(null, link.responseText);
            };

            xhr.send(data);
        };
    };
    window.XHRFormSubmitter = XHRFormSubmitter;
})(window);
