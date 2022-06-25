import React, { useEffect, useState } from 'react';
import { Route,Navigate } from 'react-router-dom';
import { logout, getToken } from './auth';
import api from './api';

export default function WAuth ({ component: Component, ...rest }){
    const [ navigate, setNavigate ] = useState(false);
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        async function verify(){
            var res = await api.get('/api/usuarios/checktoken', {params:{token:getToken()}});
            if(res.data.status===200){
                setLoading(false);
                setNavigate(false);
            }else{
                logout();
                setLoading(false);
                setNavigate(true);
            }
        }
        // setTimeout(() => verify(),1000);
        verify();
    },[])

    return(
        loading?'Carregando...':<Route 
        render={props => !navigate?(
            <Component {...props } />
        ):<Navigate to={{pathname: "/admin/login",state:{ from: props.location}}} />
        } />
    )
}
