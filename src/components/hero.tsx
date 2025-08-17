import React from 'react'

export function Hero({ video = false }: { video?: boolean }) {

    return (
        <section className="house-wrap">
            {video ? (
                <iframe
                    src="https://www.youtube.com/embed/vbsMxqJWuKY?si=wn8nIVe7mYmMTKyh&loop=1"
                    title="Dear You Hero Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : (
                <img src="/assets/2328.jpg" alt="2328" />
            )}
        </section>
    )
}