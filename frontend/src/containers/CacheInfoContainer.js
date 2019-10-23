import React, { Component } from 'react';
import CacheBasicInfo from '../components/CacheBasicInfo';
import CacheDetails from '../components/CacheDetails';
import CacheLocation from '../components/CacheLocation';
import CacheImages from '../components/CacheImages';


export default class CacheInfoContainer extends Component {
    
    divideCacheData = () => {
        const cache = this.props.cache
        return (
            <div>
                <CacheBasicInfo
                    name={cache.name}
                    size={cache.size}
                    diff={cache.average_difficulty}
                    star={cache.average_rating}
                    creator={cache.creator}
                />
                <CacheDetails
                    description={cache.description}
                    mystery={cache.mystery}
                    hint={cache.hint}
                    warnings={cache.warnings}
                />
                <CacheLocation
                    coordinates={cache.coordinates}
                    // lat={cache.coordinates}
                    // lng={cache.coordinates.lng}
                />
                <CacheImages
                    image={cache.photo}
                />
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.divideCacheData()}
            </div>
        )
    }
}