const { Map, List } = require("immutable");

const stateNextPlayer = "nextPlayer";

const generateBoard = () => {
    const row = List(["", "", ""]);
    return List([row, row, row]);
};

const initialize = () => {
    return Map({
        board: generateBoard(),
        state: Map({
            gameState: stateNextPlayer,
            player: 0,
        }),
    });
};

console.log(initialize());
