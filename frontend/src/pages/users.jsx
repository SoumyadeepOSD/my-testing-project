import React, { useState, useEffect } from 'react';
import Loading from '../loading';

const Users = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/data/collect', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {data.map((user, index) => (
                <div key={index} className='card'>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.section}</h2>
                </div>
            ))}
        </div>
    );
};

export default Users;
