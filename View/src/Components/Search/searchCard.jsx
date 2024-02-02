import React from 'react'
import styles from "./style.module.css";

export default function SearchCard({ searchResult,searchText }) {

    return (
        <>
            <div className="row text-center">
                <h2 className={styles.title}>SEARCH RESULTS FOR: {searchText.toUpperCase()}</h2>
            </div>

            <div className='row py-4'>

                {searchResult.length == 0 ? <div className='col-12'>
                <div className={`career-card d-flex align-items-center ${styles.careercard} `}>
                    <div className={`career-card__title ${styles.careerCardTitle}`}>No Match Found!!</div>
                </div>
            </div>
             : searchResult.map((result, index) => {

                return <div className='col-12' key={index}>
                        <div className={`career-card ${styles.careercard}`}>
                            <div className={`career-card__title ${styles.careerCardTitle}`}>{result.title}</div>
                            <a href={result.url} className={`career-card__link ${styles.careeCardLinkJob}`}>Learn More</a>
                        </div>
                    </div>
                })}

            </div>
        </>

    )
}

