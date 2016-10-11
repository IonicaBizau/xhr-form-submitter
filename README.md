
# xhr-form-submitter

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/xhr-form-submitter.svg)](https://www.npmjs.com/package/xhr-form-submitter) [![Downloads](https://img.shields.io/npm/dt/xhr-form-submitter.svg)](https://www.npmjs.com/package/xhr-form-submitter) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A lightweight JavaScript library to submig forms via XHR requests.

## :cloud: Installation

```sh
$ npm i --save xhr-form-submitter
```


## :clipboard: Example



```js
window.onload = function () {
    var formEl = document.getElementById("myForm")
      , checkboxEl = document.getElementsByName("xhr")[0]
      , nameEl = document.getElementsByTagName("name")[0]
      , mbErrorEl = document.getElementById("mb-error")
      , mbSuccessEl = document.getElementById("mb-success")
      , formToSubmit = new XHRFormSubmitter({
            form: formEl
          , disableOnSubmit: true
        })
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
```

## :memo: Documentation


XHRFormSubmitter JavaScript Library
===================================
A lightweigt JavaScript library that do one thing: submiting via XHR
requests. This doesn't depend on jQuery!

For more information, see README file.
Report bugs in the GitHub repository.

Developed with love by Ionică Bizău.

### `getFormData()`
Creates an object containing the names and the values of the form
inputs.

#### Return
- **Object** The form data object (name: value)

### `disableInputs()`
This function disables the inputs. It's cool to be called before
submiting the form.

#### Return
- **Object** The XHRFormSubmitter instance

### `enableInputs()`
This function enables the inputs. It's cool to be called after
receiving the response from server.

#### Return
- **Object** The XHRFormSubmitter instance

### `submit(submitOps)`
Submit the form using a XMLHttpRequest.

#### Params
- **Object** `submitOps`: The submit options

#### Return
- **Object** The XHRFormSubmitter instance



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
