import React from 'react';

export const AppInput = (props) =>{
    var blured = ""
    var disabled = false
    if (props.isLoading){
        blured = "blured"
        disabled = true
    }
    return (<div>
        <label className={blured}>Type amount of image:</label>
        <input className={blured} value={props.amountOfImage} type="text" onChange={props.onChangeAmountOfImage} disabled={disabled}></input>
        <button className={blured} onClick={props.onClickSubmit} disabled={disabled}>Submit</button>
        </div>)
}