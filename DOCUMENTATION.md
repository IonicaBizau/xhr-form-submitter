## Documentation

You can see below the API reference of this module.

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

