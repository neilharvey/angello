# Angello

[![Build Status](https://travis-ci.org/neilharvey/angello.png?branch=master)](https://travis-ci.org/neilharvey/angello)

A task-management application based on [Trello](https://trello.com/), written using [AngularJS](http://angularjs.org/).  

This is based on the source code from the book [AngularJS in Action](http://www.manning.com/bford/), however this implementation has been redesigned to use modern Javascript tooling (see [this issue](https://github.com/angularjs-in-action/angello/issues/1)).

## Installation

First, you'll need **Node.js**.  The latest version can be downloaded from [their website](http://nodejs.org/).

Next, run `npm install` from the root directory of the application.  This will install all the dependencies used by the application.

## Tasks

Angello is build using the [AngularJS generator for Yeoman](https://github.com/yeoman/generator-angular), which means that several grunt tasks are available out of the box:

#### Build

Run `grunt` or `grunt:build` from the root directory to build the application.  This will minify all the CSS, JavaScript, images, etc. and copy everything into the `/dist` folder.

#### Preview

Running `grunt:serve` will spin up a web server on localhost, launch a web browser and monitor the file system so that changes can be viewed in real time.  

#### Testing

Run `grunt:test` to run all the unit tests using Karma.

### Scaffolds

The AngularJS generation provides several ways to scaffold new functionality.  You can view the full list on the [project homepage](https://github.com/yeoman/generator-angular), but some useful ones are:

#### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular:route myroute
```

Produces `app/scripts/controllers/myroute.js`:
```javascript
angular.module('myMod').controller('MyrouteCtrl', function ($scope) {
  // ...
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

#### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCtrl', function ($scope) {
  // ...
});
```

#### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angular:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
angular.module('myMod').directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
});
```
#### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

#### Service
Generates an AngularJS service.

Example:
```bash
yo angular:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
angular.module('myMod').service('myService', function () {
  // ...
});
```

You can also do `yo angular:factory`, `yo angular:provider`, `yo angular:value`, and `yo angular:constant` for other types of services.

## License

[MIT](http://opensource.org/licenses/MIT)