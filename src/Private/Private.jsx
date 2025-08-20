import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' replace={true}></Navigate>
    }

    return children
};

export default Private;