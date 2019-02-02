import React from 'react';
import CatBox from "./CatBox";

export const AppDisplayCats = (props) =>{
    const cats = props.cats
    return (<div className="centered">
         <div className="pictureFlex">
            {(cats.length>0)? (props.cats.map((cat)=>{
                return (<CatBox key={cat.id}>
                    <img src={cat.image} alt={cat.label} width="200px" height="200px"/>
                    <br/>
                    <label>{cat.label}</label>
            </CatBox>)})):null}
        </div>
    </div>
   )
}