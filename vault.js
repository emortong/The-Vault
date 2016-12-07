'use strict';
module.exports = function() {

    var data = {};

    function setValue(key, value) {
        data[key] = value;
      }

    function getValue(key) {
        if(data[key]) {
          return data[key];
        } else {
          return null;
        }
      }

      return {
        setValue: setValue,
        getValue: getValue
      }
};