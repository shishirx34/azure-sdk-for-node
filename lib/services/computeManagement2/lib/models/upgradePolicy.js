/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UpgradePolicy class.
 * @constructor
 * Describes an upgrade policy - automatic or manual.
 * @member {string} [mode] Gets or sets the upgrade mode. Possible values
 * include: 'Automatic', 'Manual'
 * 
 */
function UpgradePolicy() {
}

/**
 * Defines the metadata of UpgradePolicy
 *
 * @returns {object} metadata of UpgradePolicy
 *
 */
UpgradePolicy.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UpgradePolicy',
    type: {
      name: 'Composite',
      className: 'UpgradePolicy',
      modelProperties: {
        mode: {
          required: false,
          serializedName: 'mode',
          type: {
            name: 'Enum',
            allowedValues: [ 'Automatic', 'Manual' ]
          }
        }
      }
    }
  };
};

module.exports = UpgradePolicy;
