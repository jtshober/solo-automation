module.exports = {
    evenOdd: {
        input: 'input(name="evenOddInput")',
        splitBtn: 'button(name = "evenOddButton")',
        even: 'span(name = "evenResults")',
        odd: 'span(name = "oddResults")'
    },
    filterObj: {
        input: input(name = "objectFilterInput"),
        filterBtn: button(name = "objectFilterButton"),
        filtered: span(name = "objectFilterResults")
    },
    filterStrg: {
        input: input(name = "nameFilterInput"),
        filterBtn: button(id = "nameFilterButton"),
        filtered: span(name = "nameFilterResults")
    },
    palindrome: {
        input: input(name = "palindromeInput"),
        checkBtn: button(name = "palindromeButtom"),
        result: span(name = "palindromeResults")
    },
    sum: {
        input1: input(name = "sumInput1"),
        input2: input(name = "sumInput2"),
        addBtn: button(name = "sumBotton"),
        result: span(name = "sumResults")
    }
}
