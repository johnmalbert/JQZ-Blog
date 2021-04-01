import React, {useState} from 'react'

export default () => {
    var win = false;
    const [ttarr, setTtarr] = useState([])
    const checkWin = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (ttarr[a] && ttarr[a] === ttarr[b] && ttarr[a] === ttarr[c]) {
                win = true;
                return ttarr[a];
            }
        }
        return null;
    }
    const oppTurn = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        var turn = 0;
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (ttarr[a] !== 1 && ttarr[b] !== 1 && ttarr[c] !== 1) {
                if(!ttarr[a]){
                    turn = a;
                } else if (!ttarr[b]){
                    turn = b;
                } else if (!ttarr[c]) {
                    turn = c;
                }
            }
        }
        ttarr[turn] = 2;
        document.getElementById(turn).innerText="X";
    }
    const onClick = e => {
        if(win===false){
            if(!ttarr[e.target.id]){
                ttarr[e.target.id] = 1;
                setTtarr(ttarr);
                e.target.innerText="O";
                checkWin()
                if(win===false){
                    oppTurn()
                }
                console.log(ttarr)
            }
        }
    }
    return(
        <div>
            <h4>Tic-Tac-Toe</h4>
        {
            win ? 
            ''
            : 
            <table id="tttboard">
            <tr>
            <td id="0" onClick={onClick} class="ttt"></td>
            <td id="1"  onClick={onClick} class="ttt"></td>
            <td id="2" onClick={onClick} class="ttt"></td>
            </tr>
            <tr>
            <td id="3" onClick={onClick} class="ttt"></td>
            <td id="4" onClick={onClick} class="ttt"></td>
            <td id="5" onClick={onClick} class="ttt"></td>
            </tr>
            <tr>
            <td id="6" onClick={onClick} class="ttt"></td>
            <td id="7" onClick={onClick} class="ttt"></td>
            <td id="8" onClick={onClick} class="ttt"></td>
            </tr>
            </table>    
        }
        </div>
    )
}