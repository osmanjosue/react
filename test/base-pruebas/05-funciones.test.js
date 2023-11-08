import { getUser, getUsuarioActivo } from "../../src/basepruebas-220616-140151/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        console.log(user);

        
        expect( testUser ).toEqual(user);
    
    })

    test('getUsuarioActivo debe retornar un objet', () => {
        const name = 'Fernando';

        const testUser1 = {
            uid: 'ABC567',
            username: 'Fernando'
        }

        const user = getUsuarioActivo(name);
        console.log(user);

        expect( testUser1).toEqual({
            uid: 'ABC567',
            username: 'Fernando',
        });
    })
    
    

})
