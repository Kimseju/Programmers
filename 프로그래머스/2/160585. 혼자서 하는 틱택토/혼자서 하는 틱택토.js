const check = (arr, mark) => {
    for (let i = 0; i < 3; i ++){
        if (arr[i].split(mark).length - 1 == 3) 
            return 1;
        if (arr[0][i] == mark && arr[1][1] == mark && arr[2][2 - i] == mark) return 1;
        if (arr[0][i] == mark && arr[1][i] == mark && arr[2][i] == mark) return 1;
    }
    
    return 0;
}

function solution(board) {
    let allBoard = board.join('');
    let O = allBoard.split('O').length - 1;
    let X = allBoard.split('X').length - 1
    
    const oWin = check(board, 'O');
    const xWin = check(board, 'X');
    
    if (O < X) return 0;
    if (oWin && O <= X) return 0;
    if (xWin && X < O) return 0;
    if (O - X >= 2) return 0;
    
    return 1;
}