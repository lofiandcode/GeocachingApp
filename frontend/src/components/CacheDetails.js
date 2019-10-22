import React, { Component } from 'react';

export default class CacheDetails extends Component {
    render() {
        return(
            <div className="cache details">
                <div className="detail section">
                    <h2>Cache Description</h2>
                    <p>I'm a description of the cache.</p>
                </div>

                <div className="detail section">
                    <h2>Cache Mystery</h2>
                    <p>I'm text that gives you a mystery to solve. I'm soooooooo mysterious. I could even be a very large amount of text if my creator loves a complex problem.</p>
                </div>

                <div className="detail section">
                    <h2>Cache Hint</h2>
                    <p>I'm a hint in case you can't solve the mystery. I'll be hidden until you click my section title above.</p>
                </div>

                <div className="detail section">
                    <h2>Cache Cautions</h2>
                    <p>I'm the cautions. You know, like if you shouldn't try to find this cache at night. Because you're afraid of the dark. Coward.</p>
                </div>
            </div>
        )
    }
}