'use strict';
module.exports = function() {
    var data = {};

    // return {

    //   setValue: function(key, value) {
    //     data[key] = value;
    //   },

    //   getValue: function(key) {
    //     if(data[key]) {
    //       return data[key];
    //     } else {
    //       return null;
    //     }
    //   }
    // }

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