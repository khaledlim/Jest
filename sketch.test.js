const sum =require('./sketch')

test('adds 1 and 2 to be equal 3',sumTest);

function sumTest(){

    expect(sum(1,2)).toBe(3);
}

// npm init : to create a node project, package.json
// npm install --save-dev jest
// npm test