# Sails + Bower + Angular + Materialize
a Rest and Todo app using Sails, Bower, Angular, Materialize and custom Grunt support.

# How to Install & Run
1. Install Sails
	* `npm install -g sails`
2. Install Bower
	* `npm install -g bower`
3. Install SASS
	* `gem install sass`
4. Clone Repository
	* `git clone` this repository
4. Install Dependencies
	* `cd` into this project
	* `npm install && bower install`
5. To Run
	* `sails lift`

# Adding Dependencies
1. Adding node_modules
	* `bower install <component> --save`
2. Adding bower_components
	* `npm install <component> --save`
3. Adding SCSS files
	* for bower_component's SCSS, `@import` in `assets/styles/vendor.scss`
	* for custom SCSS, `@import` in `assets/styles/app.scss`
4. Adding JS files
	* for bower_component's JS, add the files to `tasks/pipeline.js` in `bowerJsToCopy` and `jsFilesToInject`
	* for custom JS, add the files to `tasks/pipeline.js` in `jsFilesToInject`
5. Adding Fonts/Images
	* for bower_component's Fonts, add the font folder to `tasks/pipeline.js` in `bowerFontToCopy`

# Changelog
* Replaced LESS with SASS
	* Refer to this [repo](https://github.com/sails101/using-sass) for more details
* Removed Jade and CoffeeScript support
* Added AngularJS, Materialize and Bower
* Added custom Grunt tasks for Bower

# Future
* Create REST and Todo App based on [this](https://github.com/cgmartin/sailsjs-angularjs-bootstrap-example) example
Install sass
* Create local and open authentication system

## Contributions are welcomed!
