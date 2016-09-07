# aurelia-resources
Colection of aurelia resorces, using Aurelia CLI.


> attributes
 - datepicker : jquery ui datepicker aurelia attribute
 
 > datepicker
  - Source was based on sample xreated by Jeremy Danyow (link: https://www.danyow.net/jquery-ui-datepicker-with-aurelia/)
 Added functionality to set options to jQuery datepicker ui widget.
 
 - Configurarions an settings required:
 
 1) required modules:
  - jquery
  - jquery-ui
 use "npm install" command for each one.

 2) Aurelia configuration: (aurelia.jason)
 Add to aurelia.json, at "dependencies" section the following:
           "jquery",
          {
            "name": "jquery-datepicker",
            "path": "../node_modules/jquery-ui",
            "main": "ui/widgets/datepicker",
            "deps": ["jquery"],
            "exports": "$"
          },
          
 3) jQuery-UI CSS
 Add to header section of index.html file, located at root project, the following tag:
 <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/cupertino/jquery-ui.css">
 
 4) Install custom attribute
 Copy datepicker.js to src/resources/attributes directory
 Edit index.js file, located at src/resources, and add a reference to datepicker.js:
 config.globalResources(['./attributes/datepicker']);

 5) Using attribute
 To use on your page, just add the "datepicker" attribute tou your input control:
 <input datepicker value.bind="dateValue"> 

 6) Seting options.
 You can use any of the options avaiable on jQuery-ui datepicker widget.
 Example for dateFormat:
 <input datepicker="datePicker:yy-mm-dd" value.bind="dateValue"> 


