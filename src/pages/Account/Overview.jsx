import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientList } from '../../Api/user';
import { AVATAR, HOST_ULR } from '../../utils/Constant';

export default function AccountOverview() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);

    const getClients = async () => {
        const { response } = await clientList({});
    
        if (response.data.success) {
            setClients(response.data.clients);
        }
    }

    useEffect(() => {
        getClients();
    }, []);
    
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/account-overview")} href="javascript:;">Account</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Overview</h1>
                        </div>
                        {!loggedUser?.clientId && (loggedUser?.role === "ADMIN" || loggedUser?.role === "ACCOUNT ADMIN") &&
                            <div className="col-sm-auto">
                                <a className="btn btn-primary" onClick={() => navigate('/add-client')}>
                                    <i className="bi-person-plus-fill me-1" /> Add client
                                </a>
                            </div>
                        }
                    </div>
                </div>
                <div className="card overflow-hidden">
                    <div className="tab-content" id="leaderboardTabContent">
                        <div className="table-responsive">
                            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="table-text-start">Organization</th>
                                        <th scope="col">Client ID</th>
                                        <th scope="col">Sub Domain</th>
                                        <th scope="col">Admin Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clients?.map((client, index) => (
                                            <tr key={index}>
                                                <td className="table-text-start">
                                                    <a className="d-flex align-items-center" href="javascript:;" onClick={()=>navigate(`/client-profile/${client.clientId}`)}>
                                                        <div className="avatar avatar-circle">
                                                            <img className="avatar-img" src={client?.avatar || AVATAR} alt="Image Description" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <span className="d-block h5 text-inherit mb-0">{client?.organization}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>{client?.clientId}</td>
                                                <td>{client?.clientId}.{HOST_ULR}</td>
                                                <td>{client?.email}</td>
                                            </tr>
                                        ))
                                    }                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
