const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("integers < 1000, should not generate comma", () => {
    expect(addCommas(4)).toBe("4");
    expect(addCommas(14)).toBe("14");
    expect(addCommas(444)).toBe("444");
  });

  test("number >= 1000 will have decimals", () => {
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(30000)).toBe('30,000');
    expect(addCommas(16000000)).toBe('16,000,000');
  });

  test("negative numbers < 1000", () => {
    expect(addCommas(-4)).toBe("-4");
    expect(addCommas(-14)).toBe("-14");
    expect(addCommas(-444)).toBe("-444");
  });

  test("negative number > 1000", () => {
    expect(addCommas(-1234)).toBe('-1,234');
    expect(addCommas(-30000)).toBe('-30,000');
    expect(addCommas(-16000000)).toBe('-16,000,000');
  });

  test("number < 1000, but have >= decimal places", () => {
    expect(addCommas(1.23456)).toBe("1.23456");
    expect(addCommas(444.44444)).toBe("444.44444");
  });

  test("numbers >= 1000, and have many decimal spots", () => {
    expect(addCommas(1234.5678)).toBe("1,234.5678");
    expect(addCommas(4000000.5678)).toBe("4,000,000.5678");
  });

  test("negative decimal numbers", () => {
    expect(addCommas(-1.234)).toBe("-1.234");
    expect(addCommas(-5000.53)).toBe("-5,000.53");
  });
});
