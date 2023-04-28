import React, {useEffect, useState} from 'react'
import {FaFilter} from 'react-icons/fa'
import {data} from "../data"
import {HiBars3} from 'react-icons/hi2'
import {BiExit} from 'react-icons/Bi'
import { db } from '../db'

const TestComp = () => {
    //getting data from data.js or my Storage
    const dataItem = data

    const [displayData, setDisplayData] = useState(data[0])

    const [isSelected, setIsSelected] = useState(false)

    const handleChange = (e) => {
        setIsSelected(!isSelected)
        setDisplayData(data[e.target.value])
    }

    // useEffect(()=>{
    //     db.collection('actors').onSnapshot(snapshot =>{

    //     })
    // })


    return (
        <>
            {/* // left bar */}
            <div className="col-md-1">
                <div className="leftBar">
                    <HiBars3/>
                    <BiExit/>
                </div>
            </div>

            {/* // mainComponent to show data */}
            <div className="col-md-7">
                <div className="mainComponent">
                    <div className="row">
                        <div className="col-md-6 leftSide">
                            <h1>{
                                displayData.ID
                            }
                                <br/>Person Detected</h1>
                            <p style={
                                {marginTop: "30px"}
                            }>Name:<span> {
                                    displayData.Name
                                }</span>
                            </p>
                            <p>Location:<span> {
                                    displayData.Location
                                }</span>
                            </p>
                            <p>Date:<span>{
                                    displayData.Date
                                }</span>
                            </p>
                            <p style={
                                {marginBottom: "30px"}
                            }>Time:<span>{
                                    displayData.Time
                                }</span>
                            </p>
                            <p>Description:</p>
                            <p>{
                                displayData.Name
                            } &nbsp;
                                Detected at Chennai on {
                                displayData.Date
                            }</p>
                        </div>
                        <div className="col-md-4 rightSide">
                            <h4>{
                                displayData.Name
                            }</h4>
                            <img src={
                                    displayData.Image
                                }
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>


            {/* //Right Bar For showing collection */}
            <div className="col-md-4">
                <div className="rightBar">
                    <div className="filter">
                        <h3>Events</h3>
                        <FaFilter/>
                    </div>
                    <div className="dataBar">
                        {
                        dataItem.map((data) => {
                            return (
                                <div key={
                                    data.ID
                                }>
                                    <input type="radio" name="selected"
                                        id={
                                            data.ID
                                        }
                                        value={
                                            data.Key
                                        }
                                        onChange={handleChange} hidden/>
                                    <label htmlFor={
                                        data.ID 
                                    }  >
                                        <div className="data">
                                            <div className="id">
                                                <span>{
                                                    data.ID
                                                }:{
                                                    data.Location
                                                }</span>
                                                <span>{
                                                    data.Date
                                                } &nbsp;
                                                    {
                                                    data.Time
                                                }</span>
                                            </div>
                                            <h5>Person detected.</h5>
                                        </div>
                                    </label>
                                </div>
                            )
                        })
                    } </div>
                </div>
            </div>
        </>
    )
}

export default TestComp
