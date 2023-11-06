describe('Pruebas en <DemoComponent2 />', () => {
    test('Esta prueba no debe fallar', () => {
        //1. INICIALIZACION
        const message1 = 'Hola Mundo';
        //2. ESTIMULO
        const message2 = message1.trim();
        //3. OBSERVAR EL COMPORTAMEINTO... ESPERADO
        expect(message1).toBe(message2);
    });
})
describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe fallar', () => {
        //1. INICIALIZACION
        const message1 = 'Hola Mundo';
        //2. ESTIMULO
        const message2 = message1.trim();
        //3. OBSERVAR EL COMPORTAMEINTO... ESPERADO
        expect(message1).toBe(message2);
    });
})