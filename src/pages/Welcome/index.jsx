import React, { useEffect, useState } from 'react';
import { BASE_ULR } from '../../utils/Constant';
import { useLocation } from 'react-router-dom';
import { acceptInvite } from '../../Api/project';

export default function Welcome() {
    const [hasAccepted, setHasAccepted] = useState(false);
    const [message, setMessage] = useState("Something Wrong!");

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const token = queryParams.get('token');

    const accept = async () => {
        if (!hasAccepted) {
            const { response } = await acceptInvite({ token });

            setMessage(response.data.message);
            setHasAccepted(true);
        }
    }

    useEffect(() => {
        console.log(1)
        accept();
    }, []);

    return (
        <>
            <main id="content" role="main" className="main">
                <div className="container">
                    <div className="row justify-content-center align-items-center w-100">
                        <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                            <h2 className="display-1 mb-0">Welcome!</h2>
                            <p className="lead">{message}</p>
                            <a className="btn btn-primary" href={BASE_ULR + "/projects-overview"}>Go to Project</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
