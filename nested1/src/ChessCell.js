import React, { Component } from 'react'


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