import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';


interface PrivateRoutesProps {
    children: React.ReactElement;
}
const PrivateRoutes: FC<PrivateRoutesProps> = ({ children }) => {
    const { user } = useAuth();
    console.log(user)
    if (!user) {
        return <Navigate to="/signup" replace={true} />;
    }
    return children;
};

export default PrivateRoutes;