import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('token');
        navigate('../auth');
    }, [navigate]);

    return (<div></div>);
};

export default Logout;
;