import React from 'react';

import NewsCardItem from './NewsCardItem'

function NewsCard({ classes, data }) {
    return (
        <div>
            
            <div className="NewsCardItemBox">
                {
                    data.map((res, index) =>
                        <NewsCardItem key={index} data={res} />
                    )
                }
            </div>
        </div>
    );
}


export default NewsCard;