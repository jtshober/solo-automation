const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const func = require('../test_data/helper_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can input "valid" numbers and get an odd/even sorted result': browser => {
        browser
            .setValue(selectors.evenOdd.input, data.goodData.evenOdd.input1)
            .click(selectors.evenOdd.splitBtn)
        browser.expect.element(selectors.evenOdd.even).text.to.contain('2,4,6,8,10')
        browser.expect.element(selectors.evenOdd.odd).text.to.contain('1,3,5,7,9')
        browser
            .clearValue(selectors.evenOdd.input)
            .setValue(selectors.evenOdd.input, data.goodData.evenOdd.input2)
            .click(selectors.evenOdd.splitBtn)
        browser.expect.element(selectors.evenOdd.even).text.to.contain('-2,-4,-6,-8,-10')
        browser.expect.element(selectors.evenOdd.odd).text.to.contain('-1,-3,-5,-7,-9')
    },
    'I can put "age" in the input field and see filtered objects based on age criteria': browser => {
        browser
            .clearValue(selectors.filterObj.input)
            .setValue(selectors.filterObj.input, data.goodData.filterObj.input)
            .click(selectors.filterObj.filterBtn)
        browser.expect.element(selectors.filterObj.filtered).text.to.contain('name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown"')
    },
    'I can put "J" in the input field and see all names that contain a J in the results field': browser => {
        browser
        .clearValue(selectors.filterStrg.input)
        .pause(200)
        .setValue(selectors.filterStrg.input, data.goodData.filterStrg.input)
        .pause(200)
        .click(selectors.filterStrg.filterBtn)
        .pause(200)
    browser.expect.element(selectors.filterStrg.filtered).text.to.contain("James")
    },
    'I can put in a valid palindrome and receive a success message': browser => {
        browser
        .setValue(selectors.palindrome.input, data.goodData.palindrome.input1)
        .click(selectors.palindrome.checkBtn)
    browser.expect.element(selectors.palindrome.result).text.to.contain('true')
    },
    'I can put in 2 numbers and get a sum as a result': browser => {
        browser
        .setValue(selectors.sum.input1, data.goodData.sum.inputLine1)
        .setValue(selectors.sum.input2, data.goodData.sum.inputLine2)
        .click(selectors.sum.addBtn)
    browser.expect.element(selectors.sum.result).text.to.contain('22')
        browser
        .clearValue(selectors.sum.input1)
        .clearValue(selectors.sum.input2)
        .setValue(selectors.sum.input1, data.goodData.sum.inputLine1a)
        .setValue(selectors.sum.input2, data.goodData.sum.inputLine2a)
        .click(selectors.sum.addBtn)
    browser.expect.element(selectors.sum.result).text.to.contain('-9')
    },
}
