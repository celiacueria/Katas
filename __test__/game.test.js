const sheldonGame = require('./game');


test ('Player 1 tira tijeras y Player 2 papel', () => {
    expect(sheldonGame('tijeras','papel')).toBe('Las tijeras cortan papel')
});

test ('Player 1 tira papel y Player 2 roca', () => {
    expect(sheldonGame('papel','roca')).toBe('El papel cubre la roca')

});

test ('Player 1 tira lagarto y Player 2 roca', () => {
    expect(sheldonGame('lagarto','roca')).toBe('Lagarto aplasta la roca')

});

test ('Player 1 tira lagarto y Player 2 Spock', () => {
    expect(sheldonGame('lagarto','Spock')).toBe('Lagarto envenena a Spock')

});

test ('Player 1 tira Spock y Player 2 tijeras', () => {
    expect(sheldonGame('Spock','tijeras')).toBe('Spock rompe las tijeras')

});


test('Player 1 tira tijeras y Player 2 lagarto', () => {
    expect(sheldonGame('tijeras', 'lagarto')).toBe('Tijeras decapitan a lagarto')
});

test('Player 1 tira lagarto y Player 2 papel', () => {
    expect(sheldonGame('lagarto', 'papel')).toBe('Lagarto come papel')
});

test('Player 1 tira papel y Player 2 Spock', () => {
    expect(sheldonGame('papel', 'Spock')).toBe('El papel refuta a Spock')
});

test('Player 1 tira Spock y Player 2 roca', () => {
    expect(sheldonGame('Spock', 'roca')).toBe('Spock vaporiza la roca')
});

test('Player 1 tira tijeras y Player 2 roca', () => {
    expect(sheldonGame('tijeras', 'roca')).toBe('Tijeras para romper rocas')
});