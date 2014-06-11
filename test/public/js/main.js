window.onload = function () {
    var formEl = document.getElementById("myForm")
      , checkboxEl = document.getElementsByName("xhr")[0]
      , nameEl = document.getElementsByTagName("name")[0]
      , mbErrorEl = document.getElementById("mb-error")
      , mbSuccessEl = document.getElementById("mb-success")
      , formToSubmit = new XHRFormSubmitter({form: formEl})
      ;

    formEl.addEventListener("submit", function (e) {
        if (!checkboxEl.checked) { return; }
        try {
            mbErrorEl.style.display = "none";
            mbSuccessEl.style.display = "none";
            formToSubmit.submit(function (err, data) {

                var mb = null;
                if (err) { mb = mbErrorEl; }
                else { mb = mbSuccessEl; }

                mb.innerHTML = err || data;
                mb.style.display = "block";
                mb.classList.remove("fadeInUp");
                mb.classList.add("fadeInUp");
            });
        } catch (e) {
            console.error(e.message);
        }
        e.preventDefault();
    });
};
