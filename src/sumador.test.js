import { sumar, restar, multiplicar } from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(5, 1)).toEqual(4);
  });

  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
