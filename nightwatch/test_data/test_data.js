const selectors = require('../test_data/css_selectors')

module.exports = {
   goodData: {
       evenOdd: {
           input1: '1,2,3,4,5,6,7,8,9,10',
           input2: '-1,-2,-3,-4,-5,-6,-7,-8,-9,-10'
       },
       filterObj: {
           input1: ''
       }
   },
   badData: {
       evenOdd: {
           input1: 'a,b,c,d,e,f,g,h,i,j'
       }
   },
}
