window.onload = function () {
    var formEl = document.getElementById("myForm")
      , checkboxEl = document.getElementsByName("xhr")[0]
      , nameEl = document.getElementsByTagName("name")[0]
      , formToSubmit = new XHRFormSubmitter({form: formEl})
      ;

    formEl.addEventListener("submit", function (e) {
        if (!checkboxEl.checked) { return; }
        try {
            formToSubmit.submit();
        } catch (e) {
            console.error(e.message);
        }
        e.preventDefault();
    });
};
