import React, { useRef, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import './Flags.css'
import { useEffect } from 'react';

export default function Flags() {
    const countryData = useLoaderData({})
    const listRef = useRef();
    // console.log(listRef.current)
    return (
        <>
            <div className='info'>
                <h1>Countries Page</h1>
                <p>You can find information about all the counties here.</p>
            </div>
            <div ref={listRef} className="countryList">
                {countryData.map((data, index) => {
                    return(
                        <Link to={data.name.common} key={index} className='FlagsCard'>
                            <img src={data.flags.png} alt="Flags of Countries" className='countryFlag' loading='lazy' />
                            <div className="countryName">{data.name.common}</div>
                        </Link>
                    )
                })}                
            </div>
        </>
    )
}

// Loader Function

export const flagData = async() => {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    return res.json()
}