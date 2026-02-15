import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

export const GameZone: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    const win = calculateWinner(board);
    if (win) setWinner(win);
    else if (!board.includes(null)) setWinner('Draw');
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <section id="games" className="py-20 bg-brand-blue text-white relative">
       {/* Decorative circles */}
       <div className="absolute top-10 left-10 w-20 h-20 border-4 border-brand-yellow rounded-full opacity-20 animate-bounce"></div>
       <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-brand-red rounded-full opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-3">
          <span className="text-brand-yellow">Zona</span> de Relax <Trophy className="w-8 h-8 text-brand-red" />
        </h2>
        <p className="mb-8 text-gray-300 text-center max-w-md">
          Tómate un descanso de tus trámites y juega un rato al "Triqui" (Tic-Tac-Toe).
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
            {board.map((square, i) => (
              <button
                key={i}
                className={`w-20 h-20 md:w-24 md:h-24 text-4xl font-black rounded-lg transition-all duration-200 
                  ${square === 'X' ? 'text-brand-red bg-red-100' : square === 'O' ? 'text-brand-blue bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'}
                  ${!square && !winner ? 'hover:scale-105' : ''}`}
                onClick={() => handleClick(i)}
              >
                {square}
              </button>
            ))}
          </div>

          <div className="text-center">
            {winner ? (
              <div className="mb-4 animate-bounce">
                {winner === 'Draw' ? (
                  <span className="text-2xl font-bold text-gray-600">¡Empate!</span>
                ) : (
                  <span className="text-2xl font-bold text-brand-blue">¡Ganador: <span className="text-brand-yellow">{winner}</span>!</span>
                )}
              </div>
            ) : (
              <div className="mb-4 text-gray-500 font-semibold">
                Turno de: <span className={xIsNext ? 'text-brand-red' : 'text-brand-blue'}>{xIsNext ? 'X' : 'O'}</span>
              </div>
            )}
            
            <button
              onClick={resetGame}
              className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-brand-red transition-colors flex items-center justify-center gap-2 w-full font-bold"
            >
              <RefreshCw className="w-4 h-4" /> Reiniciar Juego
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};