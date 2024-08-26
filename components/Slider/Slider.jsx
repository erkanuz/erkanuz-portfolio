import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButton'
import { useDotButton } from './EmblaCarouselDotButton'

import styles from './style.module.scss'

import { projects } from '@/app/api/data'

const TWEEN_FACTOR_BASE = 0.2

export const Slider = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector(`.${styles.embla__parallax__layer}`)
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenParallax = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const translate = diffToTarget * (-1 * tweenFactor.current) * 100
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `translateX(${translate}%)`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenParallax(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax)
    }, [emblaApi, tweenParallax])

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {projects.map((project, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.embla__parallax}>
                                <div className={styles.embla__parallax__layer}>
                                    <img
                                        className={`${styles.embla__slide__img} ${styles.embla__parallax__img}`}
                                        src={project.src}
                                        alt={`Project ${index}`}
                                    />
                                </div>
                            </div>
                            <div className={styles.embla__slide__info}>
                                <h2 className={styles.embla__slide__title}>{project.name}</h2>
                                <span className={styles.embla__slide__date}>{project.date}</span>
                                <h3 className={styles.embla__slide__descTitle}>{project.desc_title}</h3>
                                <p className={styles.embla__slide__description}>{project.description}</p>
                                <a className={styles.embla__slide__link} href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.embla__controls}>
                <div className={styles.embla__buttons}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}