import React from 'react'

export function Hero({ video = false }: { video?: boolean }) {

    return (
        <section className="house-wrap">
            {video ? (
                <video 
                    src="/assets/static-glitch-compressed.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
            ) : (
                <img src="/assets/2328.jpg" alt="2328" />
            )}
        </section>
    )
}