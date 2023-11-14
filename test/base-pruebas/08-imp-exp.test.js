
/* import heroes from '../data/heroes';


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner ); */

import { getHeroeById, getHeroesByOwner } from "../../src/basepruebas-220616-140151/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe de retornar un heroe por ID ', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        /* console.log(heroes) */ //esta linea la agregar para ver que muestra y hacer la compracion con eso

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroes ).toEqual(heroes.filter((heroe)=> heroe.owner === owner));

    })

    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        /* console.log(heroes) */ //esta linea la agregar para ver que muestra y hacer la compracion con eso

        expect(heroes.length).toBe(2);

        expect( heroes ).toEqual(heroes.filter((heroe)=> heroe.owner === owner));
        console.log(heroes);
    })

})



