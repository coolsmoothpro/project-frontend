import React, { useEffect, useState } from 'react';
import Header from './Component/Header';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';
import { DOCS_URL, PDF_URL, GOOGLE_SLIDES_URL, GOOGLE_SHEETS_URL, IMG_URL, OC_BROWSE, LIGHT_OC_BROWSE, DOWNLOAD_ULR } from '../../utils/Constant';
import { toast } from 'react-toastify';
import { uploadProjectFile, getProject, deleteFile, download } from '../../Api/project'; 
import { useDispatch } from 'react-redux';
import { setProject } from '../../Store/Reducers/ProjectSlice'; 

export default function ProjectFiles() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project) || null;
    const projectId = location.pathname.split('/').pop() || project?.id;
    const [files, setFiles] = useState([]);
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [update, setUpdate] = useState(false);

    const onDrop = (acceptedFiles) => {
        const updatedFiles = acceptedFiles.map((file) => ({
            filename: file.name,
            fileurl: file.path,
            filetype: file.type,
            filesize: file.size,
        }));

        setAttachedFiles(updatedFiles);
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*,application/pdf,.doc,.docx',
    });

    const handleUploadFile = async () => {
        const formData = new FormData();
        
        files.forEach((file) => {
            formData.append('files', file);
        });
        formData.append('projectId', projectId);

        const { response } = await uploadProjectFile(formData);

        if (response.data.success) {
            setUpdate(!update);
            toast.success("Project has been created successfully!");
        } else {
            toast.error("Failed!");
            return;
        }
    }

    const getProjectById = async () => {
        const id = projectId;
        const { response } = await getProject({id});

        dispatch(setProject(response.data.project));
    }

    const handleDelete = async (filename) => {
        const { response } = await deleteFile({projectId, filename});

        if (response.data.success) {
            setUpdate(!update);
            toast.success("File has been deleted successfully!");
        } else {
            toast.error("Failed!");
            return;
        }
    }

    const downloadFile = async (fileUrl, fileName) => {
        try {
            const { response } = await download(fileUrl);
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
    
            // Append to the document body and click to trigger download
            document.body.appendChild(link);
            link.click();
    
            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    useEffect(() => {
        getProjectById();
    }, [update]);

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() =>navigate("/projects-overview")} href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" onClick={() => navigate(`/project-overview/${projectId}`)} href="javascript:;">{project?.projectName}</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Files</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Files</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto" aria-label="Button group">
                            {/* Button Group */}
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                    <i className="bi-cloud-arrow-up-fill me-1" /> Upload
                                </button>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" id="uploadGroupDropdown" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="uploadGroupDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder-plus dropdown-item-icon" /> New folder
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi-folder-symlink dropdown-item-icon" /> New shared folder
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                            <i className="bi-file-earmark-arrow-up dropdown-item-icon" /> Upload files
                                        </a>
                                        <a className="dropdown-item" href="javascript:;" data-bs-toggle="modal" data-bs-target="#uploadFilesModal">
                                            <i className="bi-upload dropdown-item-icon" /> Upload folder
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Button Group */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    {/* Nav */}
                    <div className="js-nav-scroller hs-nav-scroller-horizontal">
                        <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
                            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                                <i className="bi-chevron-left" />
                            </a>
                        </span>
                        <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
                            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                                <i className="bi-chevron-right" />
                            </a>
                        </span>
                        <Header />
                    </div>
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* List Group */}
                <ul className="list-group">
                    {project?.attachedFiles?.map((file, index) =>
                        <li key={index} className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img className="avatar avatar-xs avatar-4x3" src={file.mimetype == 'application/pdf' ? PDF_URL : DOCS_URL} alt="Image Description" />
                                </div>
                                <div className="col">
                                    <h5 className="mb-0">
                                        <a className="text-dark" href="#">{file.originalname}</a>
                                    </h5>
                                    <ul className="list-inline list-separator small text-body">
                                        <li className="list-inline-item">{(file.size / 1024).toFixed(0)} kb</li>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-white btn-sm" id="filesListDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="d-none d-sm-inline-block me-1">More</span>
                                            <i className="bi-chevron-down" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="filesListDropdown1" style={{ minWidth: '13rem' }}>
                                            <span className="dropdown-header">Settings</span>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-share dropdown-item-icon" /> Share file
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-folder-plus dropdown-item-icon" /> Move to
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-star dropdown-item-icon" /> Add to stared
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-pencil dropdown-item-icon" /> Rename
                                            </a>
                                            <a className="dropdown-item" onClick={() => downloadFile(`${DOWNLOAD_ULR}/${file?.path}`, file?.originalname)}>
                                                <i className="bi-download dropdown-item-icon" /> Download
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">
                                                <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                            </a>
                                            <a className="dropdown-item" onClick={() => handleDelete(file.filename)}>
                                                <i className="bi-trash dropdown-item-icon" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className="modal fade" id="uploadFilesModal" tabIndex={-1} aria-labelledby="uploadFilesModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="uploadFilesModalLabel">Add files</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Dropzone */}
                            <div {...getRootProps()} id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card">
                                <input {...getInputProps()} />
                                {!attachedFiles.length ? (
                                <div className="dz-message">
                                    <img className="avatar avatar-xl avatar-4x3 mb-3" src={OC_BROWSE} alt="Image Description" data-hs-theme-appearance="default" />
                                    <h5>Drag and drop your file here</h5>
                                    <p className="mb-2">or</p>
                                    <span className="btn btn-white btn-sm">Browse files</span>
                                </div>
                                ) : (
                                    <div className="attached-files">
                                        {attachedFiles.map((file, index) => (
                                            <div key={index} className="attached-file-item">
                                                {file.filename}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* End Dropzone */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button onClick={() => handleUploadFile()} type="button" className="btn btn-primary">Upload</button>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}
