window.onload = function () {
    var formEl = document.getElementById("myForm")
      , checkboxEl = document.getElementsByName("xhr")[0]
      , nameEl = document.getElementsByTagName("name")[0]
      ;

    formEl.addEventListener("submit", function () {
        if (!checkboxEl.checked) { return; }
    });
};
