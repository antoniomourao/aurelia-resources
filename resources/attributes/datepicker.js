import {inject, customAttribute, dynamicOptions} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

import 'jquery-datepicker';

@customAttribute('datepicker')
@dynamicOptions
@inject(DOM.Element)
export class DatePicker {

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  attached() {
    $(this.element).datepicker()
      .on('change', e => fireEvent(e.target, 'input'));
  }

  detached() {
    $(this.element).datepicker('destroy')
      .off('change');
  }

  propertyChanged(propertyName, newValue, oldValue) {
    // propertyName is the option name provided in the view
    // newValue is the value of the option
    // oldValue if this attribute has newly changed, the old value is kept here
    let isDirty = false;
    if (this.options[propertyName] !==  undefined
    && this.options[propertyName] !== newValue) {
      isDirty = true;
      this.options[propertyName] = newValue;
    }

    if (this.options[propertyName] ===  undefined) {
      isDirty = true;
      this.options[propertyName] = newValue;
    }

    $(this.element).datepicker(this.options);
  }

}

function createEvent(name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

function fireEvent(element, name) {
  var event = createEvent(name);
  element.dispatchEvent(event);
}
