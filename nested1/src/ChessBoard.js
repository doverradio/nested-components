import React, { Component } from 'react'


class ChessBoard extends React.Component{
  render() {
   let rows = []
   for(var i=1;i<=8;i++){
     rows.push(<ChessRow number={i}/>)
   }
   return <div className="chess_board">{rows}</div>;
  }
}

class ChessRow extends React.Component{
  render() {
    let row=[];
   for (let i=1;i<=8;i++){
     row.push(<ChessCell number={(this.props.number-1)*8 + i}/>)
   }
   return <div className="chess_row">{row}</div>
  }
}

class ChessCell extends React.Component {
  render() {
   let rowNumber = Math.ceil(this.props.number/8);
   
   let className="chess_cell ";
   if (rowNumber % 2){
     className += 'odd';
     console.log(rowNumber); 
   }else{
     className += 'even';
     console.log('even'); 
   }
    
   return <div className={className}>{this.props.number}</div>
  }
}

export default ChessBoard