import React, { useEffect, useState } from 'react';
import { BASE_ULR, HOST_ULR } from '../../utils/Constant';
import { useLocation } from 'react-router-dom';
import { acceptInvite } from '../../Api/project';

export default function Welcome() {
    const [hasAccepted, setHasAccepted] = useState(false);
    const [message, setMessage] = useState("Something Wrong!");
    const [url, setUrl] = useState("/");

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const token = queryParams.get('token');

    const clientId = (HOST_ULR !== window.location.host) ? window.location.host.replace(`.${HOST_ULR}`, '') : "";

    const accept = async () => {
        if (!hasAccepted) {
            const { response } = await acceptInvite({ clientId, token });

            setMessage(response.data.message);
            setHasAccepted(true);
        }
    }

    const setGoTo = () => {
        let url;
        clientId ? 
            url = `http://${clientId}.${HOST_ULR}/projects-overview`
            : url = `http://${HOST_ULR}/projects-overview`;

        setUrl(url);
    }

    useEffect(() => {
        accept();
        setGoTo();
    }, []);

    return (
        <>
            <main id="content" role="main" className="main">
                <div className="container">
                    <div className="row justify-content-center align-items-center w-100">
                        <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                            <h2 className="display-1 mb-0">Welcome!</h2>
                            <p className="lead">{message}</p>
                            <a className="btn btn-primary" href={url}>Go to Project</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
