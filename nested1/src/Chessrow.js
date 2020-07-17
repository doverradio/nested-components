import React, { Component } from 'react'
import ChessCell from './ChessCell'


export default class ChessRow extends React.Component{
  render() {
    let row=[];
   for (let i=1;i<=8;i++){
     row.push(<ChessCell number={(this.props.number-1)*8 + i}/>)
   }
   return <div className="chess_row">{row}</div>
  }
}