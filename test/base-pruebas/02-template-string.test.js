import { getSaludo } from "../../src/basepruebas-220616-140151/base-pruebas/02-template-string";

describe('Pruebas en 01-template-string', () => {
    test('getSaludo debe de retornar "Hola Fernando"', () => {
        
        const name = 'Fernando';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`);

    });

});
