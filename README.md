# xhr-form-submitter [![Support this project][donate-now]][paypal-donations]

A lightweight JavaScript library to submig forms via XHR requests.

## Installation

```sh
$ npm i --save xhr-form-submitter
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md