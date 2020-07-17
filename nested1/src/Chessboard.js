import React, { Component } from 'react'
import ChessRow from './Chessrow'

class ChessBoard extends React.Component{
  render() {
   let rows = []
   for(var i=1;i<=8;i++){
     rows.push(<ChessRow number={i}/>)
   }
   return <div className="chess_board">{rows}</div>;
  }
}

export default ChessBoard