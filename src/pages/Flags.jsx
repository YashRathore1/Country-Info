import React, { useRef, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import './Flags.css'
import { useEffect } from 'react';

export default function Flags() {
    const countryData = useLoaderData({})
    const imgRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.setAttribute("src", img.dataset.source)
                }
            });
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        });

        imgRef.current.forEach(img => {
            observer.observe(img);
        });

        return () => {
            return observer.disconnect();
        }
    }, []);

    return (
        <>
            <div className='info'>
                <h1>Countries Page</h1>
                <p>You can find information about all the counties here.</p>
            </div>
            <div className="countryList">
                {countryData.map((data, index) => {
                    return(
                        <Link to={data.name.common} key={index} className='FlagsCard'>
                            <img data-source={data.flags.png} src="/public/lazy-loading.png" alt="Flags of Countries" className='countryFlag' ref={(el)=> imgRef.current[index] = el} />
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