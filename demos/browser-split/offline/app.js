'use strict';

console.log('SPLIT DEMO!');

//
// Bellow you will see how you could define features and the defaults treatments
// for each one.
//
// NOTICE: there is NONE asyncronous initialization in offline mode, because you
//         are providing the default feedback of the engine.
//
var sdk = splitio({
  features: {
    'js_sdk': 'on',
    'js_payment_system': 'visa',
    'js_airline_company': 'delta'
  }
});

//
// The engine by default will answer with 'control' treatment as a notification for
// you when he doesn't have data to make a decision.
//
console.info(
  sdk.getTreatment('unknown_feature'),
  "<= The engine will answer 'control' each time there is none data available"
);

//
// The following code will be evaluated once the engine finalice the
// initialization
//
sdk.ready().then(function () {
  //
  // Some simple cases for my defined features
  //
  console.info(
    sdk.getTreatment('js_sdk'),
    "<= The expected answer based on the definition before is 'on'"
  );
  console.info(
    sdk.getTreatment('optional key could be provided', 'js_payment_system'),
    "<= The expected answer based on the definition before is 'visa'"
  );
  console.info(
    sdk.getTreatment('optional key could be provided', 'js_airline_company'),
    "<= The expected answer based on the definition before is 'delta'"
  );
});