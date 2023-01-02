import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import styles from './Entry.module.scss'

const Entry = () => {
    const { user } = useSelector(state => state.auth)
    if (user) {
        return <Navigate to='/jira' />
    }

    return (
        <div className={styles.wrapper}>
            <h1>WELCOME</h1>
            <h3>Thanks you for visiting my Jira Clone Application</h3>
            <p>If you like, please give me a star</p>
            <Button solid large to='/jira'>Go to Jira App</Button>
        </div>
    )
}

export default Entry