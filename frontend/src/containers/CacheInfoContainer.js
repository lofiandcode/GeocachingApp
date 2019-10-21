import React, { Component } from 'react';
import CacheBasicInfo from '../components/CacheBasicInfo';
import CacheDetails from '../components/CacheDetails';
import CacheLocation from '../components/CacheLocation';
import CacheImages from '../components/CacheImages';

export default class CacheInfoContainer extends Component {
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