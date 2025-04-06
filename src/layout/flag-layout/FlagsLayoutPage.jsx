import React from 'react'
import { Outlet } from 'react-router'
import './FlagsLayout.css'

export default function FlagsLayout() {
  return (
    <div className="flagsLayout">

      <div className="filter">

        <div className="continent">
          <div className="filterParticular">
            Continents
          </div>
          <ul className="filterData">
            <li className="listItems">Asia</li>
            <li className="listItems">Africa</li>
            <li className="listItems">North America</li>
            <li className="listItems">South America</li>
            <li className="listItems">Antarctica</li>
            <li className="listItems">Europe</li>
            <li className="listItems">Australia</li>
          </ul>
        </div>

        <div className="region">
          <div className="filterParticular">
              Region
            </div>
            {/* <ul className='filterData'>
              <li className="listItems">Yes</li>
              <li className="listItems">No</li>
            </ul> */}
        </div>

        <div className="unMember">
          <div className="filterParticular">
              UN Member
          </div>
          <ul className='filterData'>
            <li className="listItems">Yes</li>
            <li className="listItems">No</li>
          </ul>
        </div>

      </div>

      <div className="sortAndData">
        <div className="sort">
          <span className="sortBy">SORT BY: </span>
          <div className="buttonContainer">
            <button className="relevance">Relevance</button>
          </div>
          <div className="buttonContainer">
            <button className="alphabetically">Sort A to Z</button>
          </div>
          <div className="buttonContainer">
            <button className="population">Population</button>
          </div>
          <div className="buttonContainer">
            <button className="area">Area</button>
          </div>
        </div>

        <div className="renderedData">
          <Outlet />
        </div>
      </div>

    </div>
  )
}
