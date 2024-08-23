import React from 'react'
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
    LinePlot,
    MarkPlot,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';
import { useNavigate } from 'react-router-dom';

const pData1 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels1 = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const pData2 = [1200, 1398, 7000, 6000, 2000, 1000, 3000];
const xLabels2 = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const pData3 = [8000, 6000, 1000, 8000, 12000, 13000, 10000];
const xLabels3 = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const pData4 = [1000, 2000, 6000, 4000, 8000, 12000, 5000];
const xLabels4 = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

function TinyLineChart({ pData, xLabels }) {
    return (
        <ChartContainer
            width={1000}
            height={300}
            series={[{ type: 'line', data: pData }]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                [`& .${lineElementClasses.root}`]: {
                    stroke: '#377dff',
                    strokeWidth: 20,
                },
                [`& .${markElementClasses.root}`]: {
                    stroke: '#377dff',
                    scale: '0.6',
                    fill: '#fff',
                    strokeWidth: 20,
                },
            }}
            disableAxisListener
        >
            <LinePlot />
            <MarkPlot />
        </ChartContainer>
    );
}

export default function Leaderboard() {
    const navigate = useNavigate();
    
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
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/overview")} href="javascript:;">Users</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leaderboard</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Leaderboard</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            {/* Nav */}
                            <ul className="nav nav-segment" id="leaderboardTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="all-time-tab" data-bs-toggle="tab" href="#all-time" role="tab">
                                        All time
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="weekly-tab" data-bs-toggle="tab" href="#weekly" role="tab">
                                        Weekly
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="monthly-tab" data-bs-toggle="tab" href="#monthly" role="tab">
                                        Monthly
                                    </a>
                                </li>
                            </ul>
                            {/* End Nav */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card overflow-hidden">
                    {/* Tab Content */}
                    <div className="tab-content" id="leaderboardTabContent">
                        <div className="tab-pane fade show active" id="all-time" role="tabpanel" aria-labelledby="all-time-tab">
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" style={{ width: '2rem' }}>Rank</th>
                                            <th scope="col" className="table-text-start">Name</th>
                                            <th scope="col">Closed issues</th>
                                            <th scope="col">Completed projects</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col">Efficiency rate</th>
                                            <th scope="col">Hours</th>
                                            <th scope="col">Avg. Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="text-warning" style={{ fontSize: '1.5rem' }}>🥇</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Amanda Harvey</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>20</td>
                                            <td>35</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.5%
                                                </span>
                                            </td>
                                            <td>505</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.97</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-secondary" style={{ fontSize: '1.5rem' }}>🥈</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">David Harrison</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>12</td>
                                            <td>54</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 3.5%
                                                </span>
                                            </td>
                                            <td>467</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.95</td>
                                        </tr>
                                        <tr>
                                            <td><span style={{ fontSize: '1.5rem', color: '#924b18' }}>🥉</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-info avatar-circle">
                                                        <span className="avatar-initials">L</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Lori Hunter</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>62</td>
                                            <td>31</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 2.1%
                                                </span>
                                            </td>
                                            <td>460</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.90</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Linda Bates</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>0</td>
                                            <td>76</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 9.6%
                                                </span>
                                            </td>
                                            <td>414</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.52</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-dark avatar-circle">
                                                        <span className="avatar-initials">B</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Brian Halligan</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>8</td>
                                            <td>25</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.1%
                                                </span>
                                            </td>
                                            <td>372</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.25</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Costa Quinn</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>44</td>
                                            <td>4</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 9.2%
                                                </span>
                                            </td>
                                            <td>399</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.80</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-primary avatar-circle">
                                                        <span className="avatar-initials">M</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Mark Colbert</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>25</td>
                                            <td>43</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 1.5%
                                                </span>
                                            </td>
                                            <td>390</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.80</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Ella Lauda</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>55</td>
                                            <td>15</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 7%
                                                </span>
                                            </td>
                                            <td>204</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.45</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Finch Hoot</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>4</td>
                                            <td>57</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.5%
                                                </span>
                                            </td>
                                            <td>202</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.02</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-danger avatar-circle">
                                                        <span className="avatar-initials">C</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Chris Mathew</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>9</td>
                                            <td>61</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 6.6%
                                                </span>
                                            </td>
                                            <td>159</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 2.92</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* End Table */}
                        </div>
                        <div className="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" style={{ width: '2rem' }}>Rank</th>
                                            <th scope="col" className="table-text-start">Name</th>
                                            <th scope="col">Closed issues</th>
                                            <th scope="col">Projects</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col">Efficiency rate</th>
                                            <th scope="col">Hours</th>
                                            <th scope="col">Avg. Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="text-warning" style={{ fontSize: '1.5rem' }}>🥇</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Amanda Harvey</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>56</td>
                                            <td>35</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 3.9%
                                                </span>
                                            </td>
                                            <td>505</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.80</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-secondary" style={{ fontSize: '1.5rem' }}>🥈</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-info avatar-circle">
                                                        <span className="avatar-initials">L</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Lori Hunter</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>82</td>
                                            <td>31</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                  <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 0.1%
                                                </span>
                                            </td>
                                            <td>460</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.72</td>
                                        </tr>
                                        <tr>
                                            <td><span style={{ fontSize: '1.5rem', color: '#924b18' }}>🥉</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Linda Bates</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>34</td>
                                            <td>76</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 4.5%
                                                </span>
                                            </td>
                                            <td>414</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.22</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-dark avatar-circle">
                                                        <span className="avatar-initials">B</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Brian Halligan</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>84</td>
                                            <td>25</td>
                                            <td>
                                                <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 0.8%
                                                </span>
                                            </td>
                                            <td>372</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.10</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">David Harrison</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>33</td>
                                            <td>54</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 1.9%
                                                </span>
                                            </td>
                                            <td>467</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.5</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Costa Quinn</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>10</td>
                                            <td>4</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 5.6%
                                                </span>
                                            </td>
                                            <td>399</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.80</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Finch Hoot</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>2</td>
                                            <td>57</td>
                                            <td>
                                              <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 6.2%
                                                </span>
                                            </td>
                                            <td>202</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.54</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Ella Lauda</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>5</td>
                                            <td>15</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 0.1%
                                                </span>
                                            </td>
                                            <td>204</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.45</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-primary avatar-circle">
                                                        <span className="avatar-initials">M</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Mark Colbert</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>29</td>
                                            <td>43</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 4.6%
                                                </span>
                                            </td>
                                            <td>390</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.26</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-danger avatar-circle">
                                                        <span className="avatar-initials">C</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Chris Mathew</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>11</td>
                                            <td>61</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 6.6%
                                                </span>
                                            </td>
                                            <td>159</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 2.92</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* End Table */}
                        </div>
                        <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" style={{ width: '2rem' }}>Rank</th>
                                            <th scope="col" className="table-text-start">Name</th>
                                            <th scope="col">Closed issues</th>
                                            <th scope="col">Completed projects</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col">Efficiency rate</th>
                                            <th scope="col">Hours</th>
                                            <th scope="col">Avg. Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="text-warning" style={{ fontSize: '1.5rem' }}>🥇</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-info avatar-circle">
                                                        <span className="avatar-initials">L</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Lori Hunter</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>45</td>
                                            <td>31</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 0.5%
                                                </span>
                                            </td>
                                            <td>460</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.72</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-secondary" style={{ fontSize: '1.5rem' }}>🥈</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Amanda Harvey</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>12</td>
                                            <td>35</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 3.5%
                                                </span>
                                            </td>
                                            <td>505</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.71</td>
                                        </tr>
                                        <tr>
                                            <td><span style={{ fontSize: '1.5rem', color: '#924b18' }}>🥉</span></td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">David Harrison</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>1</td>
                                            <td>54</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 2.1%
                                                </span>
                                            </td>
                                            <td>467</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.65</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Costa Quinn</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>0</td>
                                            <td>4</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 2.7%
                                                </span>
                                            </td>
                                            <td>399</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.30</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-dark avatar-circle">
                                                        <span className="avatar-initials">B</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Brian Halligan</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>10</td>
                                            <td>25</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.1%
                                                </span>
                                            </td>
                                            <td>372</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.25</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Linda Bates</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>39</td>
                                            <td>76</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 1.6%
                                                </span>
                                            </td>
                                            <td>414</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 4.12</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Finch Hoot</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>64</td>
                                            <td>57</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData2} xLabels={xLabels2} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 3.3%
                                                </span>
                                            </td>
                                            <td>202</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.02</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-primary avatar-circle">
                                                        <span className="avatar-initials">M</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Mark Colbert</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>83</td>
                                            <td>43</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData3} xLabels={xLabels3} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 5.2%
                                                </span>
                                            </td>
                                            <td>390</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 3.01</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-soft-danger avatar-circle">
                                                        <span className="avatar-initials">C</span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Chris Mathew</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>30</td>
                                            <td>61</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData4} xLabels={xLabels4} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.4%
                                                </span>
                                            </td>
                                            <td>159</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 2.87</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="table-text-start">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="avatar avatar-circle">
                                                        <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="d-block h5 text-inherit mb-0">Ella Lauda</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>15</td>
                                            <td>15</td>
                                            <td>
                                            <div className="chartjs-custom chartsvg" style={{ height: '2rem', width: '7rem' }}>
                                                <TinyLineChart pData={pData1} xLabels={xLabels1} />
                                              </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 2.1%
                                                </span>
                                            </td>
                                            <td>204</td>
                                            <td><i className="bi-star-fill text-warning me-1" /> 2.67</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* End Table */}
                        </div>
                    </div>
                    {/* End Tab Content */}
                </div>
                {/* End Card */}
            </div>
        </>
    )
}
