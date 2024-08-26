import React from 'react'

import styles from './style.module.scss'

export const Stages = () => {

    return (
        <div className={styles.stages}>
            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <h1 className={styles.stage_title}>stages of work /</h1>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <div data-target="target">Research</div>
                    <div>/02</div>
                </div>

                <div>
                    <span>Conducting in-depth research, including competitive and visual analysis, to inform design decisions and establish a solid foundation for the project.</span>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <div data-target="target">Prototyping</div>
                    <div>/03</div>
                </div>

                <div>
                    <span>Creating interactive prototypes, translating design concepts into functional user interfaces, and refining the user experience through iterative development and testing.</span>
                </div>
            </div>

            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <div data-target="target">Briefing</div>
                    <div>/04</div>
                </div>

                <div>
                    <span>Meeting with the client to gather project requirements and expectations.</span>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <div data-target="target">Design</div>
                    <div>/05</div>
                </div>

                <div>
                    <span>Crafting design elegance into interactive interfaces for a seamless and visually engaging user experience.</span>
                </div>
            </div>

            <div className={styles.boxes}>
                <div className={styles.fimini}>
                    <div data-target="target">Finalization</div>
                    <div>/06</div>
                </div>

                <div>
                    <span>Optimizing code, conducting cross-browser testing, and ensuring responsive design for a polished and finished product.</span>
                </div>
            </div>
        </div>
    )
}
