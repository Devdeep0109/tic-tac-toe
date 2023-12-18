import React, { useState } from 'react'
import Square from './Square'

const Board =() =>{

    const [state ,setState] = useState(Array(9).fill(null));
    const [isXTurn , setIsXTurn] = useState(true);


    // for getting the winner name.........
    const checkWinner = () =>{

        const winnerList =[
            [0,1,2],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for( let logic of winnerList){
            const [a,b,c] = logic;
            console.log("true case");
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }    
        }
        console.log("FALSE CASE");
        return false;
    };
    
    const isWinner = checkWinner();

    // filling x or o in the square............

    function handleOnClick(index){

        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X':'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    function handlePlayAgain(state){
        setState(Array(9).fill(null));
    }

    return(
        <div className="board-container" >
            
            {isWinner ? (<>{isWinner} won the game <button onClick={handlePlayAgain}>Play Again </button>
            </>) :(
            <>
            <h4>{isXTurn ? 'X' :'O'} please move..</h4>
            <div className="board-row">
                <Square onClick={()=>{handleOnClick(0)}} value={state[0]}/>
                <Square onClick={()=>{handleOnClick(1)}} value={state[1]}/>
                <Square onClick={()=>{handleOnClick(2)}} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleOnClick(3)}} value={state[3]}/>
                <Square onClick={()=>{handleOnClick(4)}} value={state[4]} />
                <Square onClick={()=>{handleOnClick(5)}} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleOnClick(6)}} value={state[6]}/>
                <Square onClick={()=>{handleOnClick(7)}} value={state[7]}/>
                <Square onClick={()=>{handleOnClick(8)}} value={state[8]} />
            </div>
            </> )}
        </div>
    )
}
export default Board;