/**
 * XHRFormSubmitter JavaScript Library
 * ===================================
 * A lightweigt JavaScript library that do one thing: submiting via XHR
 * requests. This doesn't depend on jQuery!
 *
 * For more information, see README file.
 * Report bugs in the GitHub repository.
 *
 * Developed with love by Ionică Bizău.
 *
 */
(function (window) {

    // All inputs
    var INPUTS = [
        "select"
      , "textarea"
      , "input"
      , "button"
    ];

    var XHRFormSubmitter = function (options) {
        var self = this;
        self._form = options.form;

        /**
         * getFormData
         * Creates an object containing the names and the values of the form
         * inputs.
         *
         * @name getFormData
         * @function
         * @return {Object} The form data object (name: value)
         */
        self.getFormData = function (stringified) {

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
                    case "checkbox":
                        value = cEl.checked;
                        break;
                    case "image":
                        value = cEl.getAttribute("src");
                        break;
                    case "radio":
                        value = document.querySelector(
                            "input[name='" + name + "']:checked"
                        ).value;
                        break;
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
                    default:
                        value = cEl.value;
                        break;
                }

                formData[name] = value;
            }

            if (!stringified) {
                return formData;
            }

            stringified = "";
            for (var key in formData) {
                stringified
                    += encodeURIComponent(key) + "="
                    + encodeURIComponent(formData[key]) + "&";
            }
            stringified = stringified.substr(0, stringified.length - 1);
            return stringified;
        };

        /**
         * disableInputs
         * This function disables the inputs. It's cool to be called before
         * submiting the form.
         *
         * @name disableInputs
         * @function
         * @return {Object} The XHRFormSubmitter instance
         */
        self.disableInputs = function () {
            var allInputs = self._form.querySelectorAll(INPUTS.join(","));
            for (var i = 0; i < allInputs.length; ++i) {
                allInputs[i].setAttribute("disabled", "");
            }
            return self;
        };

        /**
         * enableInputs
         * This function enables the inputs. It's cool to be called after
         * receiving the response from server.
         *
         * @name enableInputs
         * @function
         * @return {Object} The XHRFormSubmitter instance
         */
        self.enableInputs = function () {
            var allInputs = self._form.querySelectorAll(INPUTS.join(","));
            for (var i = 0; i < allInputs.length; ++i) {
                allInputs[i].removeAttribute("disabled");
            }
            return self;
        };

        /**
         * submit
         * Submit the form using a XMLHttpRequest.
         *
         * @name submit
         * @function
         * @param {Object} submitOps The submit options
         * @return {Object} The XHRFormSubmitter instance
         */
        self.submit = function (submitOps, callback) {

            if (typeof submitOps === "function") {
                callback = submitOps;
                submitOps = undefined;
            }

            submitOps = Object(submitOps);
            callback = callback || function () {};

            var xhr = new XMLHttpRequest()
              , form = self._form
              , url = submitOps.actionUrl || form.getAttribute("action")
              , method = submitOps.method || form.getAttribute("method")
              , data = self.getFormData(true)
              ;

            xhr.open(method, url);
            xhr.setRequestHeader("content-type", "text/plain; charset=utf-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) { return; }
                if (options.disableOnSubmit === true) {
                    self.enableInputs();
                }
                var data = xhr.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) {}
                if (xhr.status >= 400) {
                    return callback(data, null);
                }

                callback(null, data);
            };

            if (options.disableOnSubmit === true) {
                self.disableInputs();
            }

            xhr.send(data);
            return self;
        };
    };
    window.XHRFormSubmitter = XHRFormSubmitter;
})(window);
