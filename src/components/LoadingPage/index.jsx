import React from 'react'
import { PageLoadingSVG } from '../SVG'

const index = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }}>
            <div style={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            }}>
                <PageLoadingSVG width={60} height={60} />
            </div>
        </div>
    )
}

export default index