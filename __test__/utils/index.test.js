const { sayHello, makeObject } = require("../../src/utils");

describe("test ", () => {
  test("sayHello", () => {
    const name = "芜湖";
    expect(sayHello(name)).toEqual(`Hello 芜湖!`);
  });
  test("makeOBject", () => {
    expect(makeObject()).toEqual({});
  });
});
