import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import GetRoute from "../../../../Container/server"

export default function Description({current,src,list}) {
  return (
    <>
      <div className='row'>
      <h6 className={styles.navigate}><Link to="/service/salesforce-crm" className={styles.link}><i className='fa fa-arrow-left'></i> Salesforce CRM </Link>/ {current}</h6>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6 p-5'>
          <img className={styles.image} src={GetRoute(src)}></img>
        </div>
        <div className='col-12 col-md-6 d-flex  align-items-center'>
          <ul type="arrow">
            {
              list.map((data,i)=><li className={styles.list} key={i}>{data}</li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}
