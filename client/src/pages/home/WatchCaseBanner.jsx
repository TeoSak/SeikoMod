import React from 'react'
import { assets } from '../../assets/assets'

export const WatchCaseBanner = () => {
    return (
        <div className="w-full">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={assets.watchCaseBanner}
                />
                <img
                    src={assets.watchCaseBannerMobile}
                    alt="Watch Case Banner"
                    className="w-full h-full"
                />
            </picture>
        </div>
    )
}

