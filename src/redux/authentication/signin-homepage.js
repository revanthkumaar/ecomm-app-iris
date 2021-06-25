import React, {useEffect} from 'react';
import {Link} from 'ract-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function HomePage() {

    const users = useSelector(state => state.users)
    const user = useSelector(state => state.authenticateUserReducer.user)
    const dispatch = useDispatch()    

    useEffect(() => {
        dispatch(userActions.getAll())
    })
}
