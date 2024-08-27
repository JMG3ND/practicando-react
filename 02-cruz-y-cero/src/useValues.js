const turns = {
    X: "✖️",
    O: "⭕",
  };

const checkWin = (array) => {
    let win = false;
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let line in lines){
      const [a,b,c] = lines[line];
      if(array[a] && array[a] === array[b] && array[a] === array[c])
        win = true;
    }

    return win;
  };

  export {checkWin, turns};