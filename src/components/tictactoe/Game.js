import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyles.css";
import { Winner } from '../../helper';
const intialstate = {
    board: Array(9).fill(null),
    xIsNext: true,
}
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const { board, xIsNext } = state;
            const { index, winner } = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = xIsNext ? "X" : "O"
            nextState.xIsNext = !xIsNext;
            return nextState;
        }
        case 'RESET': {
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null);
            nextState.xIsNext = true;
            return nextState;
        }
        default:
            break;
    }
    return state;
}
const Game = () => {
    const [state, dispath] = useReducer(gameReducer, intialstate);
    const winner = Winner(state.board);
    const handleClick = (index) => {
        dispath({
            type: 'CLICK',
            payload: {
                index,
                winner,
            },
        })

    };
    const handleResetGame = () => {
        dispath({
            type: 'RESET',
        })
    }
   
    return (
        <div >
            <Board cells={state.board} onClick={handleClick}></Board>
            <button onClick={handleResetGame} className='btnReset'>Reset Game</button>
            {winner && <div className="winner-message">Winner is {winner}!</div>}
        </div>
    );
};

export default Game;