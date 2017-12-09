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
    'I can input numbers and get an odd/even sorted result': browser => {
        browser
            .clearValue(selectors.evenOdd.input)
            .setValue(selectors.evenOdd.input, data.goodData.evenOdd.input1)
            .click(selectors.evenOdd.splitBtn)
        browser.expect.element(selectors.evenOdd.even).text.to.contain('2,4,6,8,10')
        browser.expect.element(selectors.evenOdd.odd).text.to.contain('1,3,5,7,9')
    },
}