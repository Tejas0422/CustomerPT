import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styleindex.css';

function Dashboard(){
    const navigate=useNavigate();
    function logout(){
        localStorage.clear();
        navigate('/login');
    }

    return(
        <>
        <div>
            <div>
            ku re l*nd k aa gya front end ka tamasha dekhne
            </div>
            <div>
                <button type='primary'onClick={logout}>
                    LogOut
                </button>
            </div>
        </div>
        </>
    )
}
export default Dashboard;