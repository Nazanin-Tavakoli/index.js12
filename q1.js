//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function displayOutputs() {
    function firstOutput() {
        console.log("Action");
    }

    function secondOutput() {
        console.log("Potential");
    }

    function thirdOutput() {
        console.log("Signals");
    }

    firstOutput();
    secondOutput();
    thirdOutput();


displayOutputs();}