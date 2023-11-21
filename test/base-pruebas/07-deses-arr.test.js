import { retornaArreglo } from "../../src/basepruebas-220616-140151/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr.js', () => {
    test('debe retornar un string y un numero ', () => {

        const [letters, numbers] = retornaArreglo();
        
        /* expect( letters ).toBe ('ABC'); */
        expect( numbers ).toBe (123);

        expect(typeof letters ).toBe('string')
        expect(typeof numbers).toBe('number')

        expect ( letters ). toEqual (expect.any(String));

    })

})
