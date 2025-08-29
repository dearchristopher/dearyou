import React from 'react'

type HeroProps = {
    video?: boolean
    bgImage?: string
    artImage?: string
    title?: string
    ctaHref?: string
    ctaLabel?: string
    youtubeId?: string
}

export function Hero({
    video = false,
    bgImage,
    artImage,
    title,
    ctaHref = '#player',
    ctaLabel = 'Listen Now',
    youtubeId,
}: HeroProps) {
    const [open, setOpen] = React.useState(false)
    return (
        <section
            className="hero"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        >
            <div className="hero__content">
                {video ? (
                    <>
                        {youtubeId ? (
                            <div className="hero__video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                                    title={title ?? 'YouTube player'}
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <video
                                src="/assets/static-glitch-compressed.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                        {title && <h1 className="hero__title special-elite-regular">{title}</h1>}
                        {ctaHref && (
                            <button className="btn btn-primary" type="button" onClick={() => setOpen(true)}>
                                {ctaLabel}
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        {artImage && (
                            <img className="hero__art" src={artImage} alt={title ?? 'art'} />
                        )}
                        {title && <h1 className="hero__title special-elite-regular">{title}</h1>}
                        {ctaHref && (
                            <button className="btn btn-primary" type="button" onClick={() => setOpen(true)}>
                                {ctaLabel}
                            </button>
                        )}
                    </>
                )}
            </div>
            {open && (
                <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
                        <div className="modal__body">
                            <iframe
                                src={ctaHref || ''}
                                title={title ?? 'Media Player'}
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}