(function (window) {

    var XHRFormSubmitter = function (options) {
        var self = this;
        self._form = options.form;

        /**
         * getFormData
         * Creates an object containing the names and the values of the form inputs.
         *
         * @name getFormData
         * @function
         * @return {Object} The form data object (name: value)
         */
        self.getFormData = function () {

            var allInputs = self._form.querySelectorAll("[name]")
              , formData = {}
              ;

            for (var i = 0; i < allInputs.length; ++i) {

                var cEl = allInputs[i]
                  , type = cEl.getAttribute("type")
                  , name = cEl.getAttribute("name")
                  , value = null
                  ;

                switch (type) {
                    case "button":
                    case "text":
                    case "url":
                    case "date":
                    case "color":
                    case "datetime":
                    case "datetime-local":
                    case "email":
                    case "file":
                    case "hidden":
                    case "month":
                    case "number":
                    case "password":
                    case "range":
                    case "search":
                    case "submit":
                    case "tel":
                    case "time":
                    case "week":
                        value = cEl.value;
                        break;
                    case "checkbox":
                        value = cEl.checked;
                        break;
                    case "image":
                        value = cEl.getAttribute("src");
                        break;
                    case "radio":
                        value = document.querySelector("input[name='" + name + "']:checked").value;
                        break;
                    default:
                        console.warn("Unhandled type: ", type);
                        break;
                }

                formData[name] = value;
            }

            return formData;
        };

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
              , data = self.getFormData()
              ;

            callback = callback || function () {};

            xhr.open(method, url);
            xhr.setRequestHeader("content-type", "text/plain; charset=utf-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) { return; }
                if (xhr.status >= 400) {
                    return callback(link.responseText, null);
                }

                callback(null, link.responseText);
            };

            xhr.send(data);
            return xhr;
        };
    };
    window.XHRFormSubmitter = XHRFormSubmitter;
})(window);
