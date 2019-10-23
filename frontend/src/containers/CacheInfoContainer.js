import React, { Component } from 'react';
import CacheBasicInfo from '../components/CacheBasicInfo';
import CacheDetails from '../components/CacheDetails';
import CacheLocation from '../components/CacheLocation';
import CacheImages from '../components/CacheImages';


export default class CacheInfoContainer extends Component {
    componentDidMount(props) {
        // console.log("hi")
    }
    
    render() {
        return(
            <div>
                <CacheBasicInfo />
                <CacheDetails />
                <CacheLocation />
                <CacheImages />
            </div>
        )
    }
}