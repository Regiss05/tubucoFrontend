import React from 'react';

interface Props {
  name: string,
  description: string,
  price: number,
  pictureCaption: string,
  pictureURL: string,
  onClickBuy: () => void,
}

export default function ProductCard(props: Props) {
  return (
    <div style={{ margin: 16, paddingBottom: 16, borderBottom: '1px solid gray' }}>
      <div>
        <div style={{ width: "33%", marginRight: 8 }}>
          <img style={{ width: "100%" }} src={props.pictureURL} alt={props.name} />
        </div>

        <div style={{ width: "66%" }}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>          
        </div>
      </div>

      <div style={{marginBottom: 8}}>
        <strong>{props.price} π</strong> <br />
        <button onClick={props.onClickBuy}>Order</button>
      </div>

      <span style={{fontSize: '0.6em'}}>{props.pictureCaption}</span>
    </div>
  )
}