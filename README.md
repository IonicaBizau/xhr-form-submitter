xhr-form-submitter
==================

A lightweigt JavaScript library that do one thing: submiting via XHR requests.
This doesn't depend on jQuery!

# How to use
Include the library in your page. Then, you can do:

```js
window.onload = function () {

    // Get the form element
    var formEl = document.getElementById("myForm")
        // Get message box elements
      , mbErrorEl = document.getElementById("mb-error")
      , mbSuccessEl = document.getElementById("mb-success")
        // Create a new instance of XHRFormSubmitter
      , formToSubmit = new XHRFormSubmitter({form: formEl})
      ;

    // handle submit event
    formEl.addEventListener("submit", function (e) {

        // Hide message boxes
        mbErrorEl.style.display = "none";
        mbSuccessEl.style.display = "none";

        // Submit form
        formToSubmit.submit(function (err, data) {

            // Do something with err & data
            var mb = null;
            if (err) { mb = mbErrorEl; }
            else { mb = mbSuccessEl; }

            mb.innerHTML = err || data;
            mb.style.display = "block";
        });
        e.preventDefault();
    });
};
```

# Methods

## `getFormData()`
Creates an object containing the names and the values of the form inputs.

### Return:
* **Object** The form data object (name: value)

## `submit(submitOps)`
Submit the form using a XMLHttpRequest.

### Params:
* **Object** *submitOps* The submit options

### Return:
* **XMLHttpRequest** The XMLHttpRequest instance

## Development
Run the following commands to download and test the library:

```sh
$ git clone git@github.com:IonicaBizau/xhr-form-submitter.js xhr-form-submitter
$ cd xhr-form-submitter
$ npm install
$ npm test
```

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
