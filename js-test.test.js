const { exportAllDeclaration } = require("@babel/types")
const add = require("./add")

test("it should add two numbers", () => {
    expect(add(1, 2)).toBe(3)
})