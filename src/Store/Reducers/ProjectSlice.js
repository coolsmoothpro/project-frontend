import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    projectLogo: "",
    projectName: "",
    projectDescription: "",
    dueDate: "",
    attachedFiles: [],
    terms: "",
    expectedValue: "",
    milestone: "",
    members: [],
    status: "",
    tasks: []
};

const ProjectSlice = createSlice({
    name: "ProjectSlice",
    initialState,
    reducers: {
        setProject: (state, action) => {
            state.id = action.payload._id || state.id;
            state.projectLogo = action.payload.projectLogo || state.projectLogo;
            state.projectName = action.payload.projectName || state.projectName;
            state.projectDescription = action.payload.projectDescription || state.projectDescription;
            state.dueDate = action.payload.dueDate || state.dueDate;
            state.attachedFiles = action.payload.attachedFiles || state.attachedFiles;
            state.terms = action.payload.terms || state.terms;
            state.expectedValue = action.payload.expectedValue || state.expectedValue;
            state.milestone = action.payload.milestone || state.milestone;
            state.members = action.payload.members || state.members;
            state.status = action.payload.status || state.status;
            state.tasks = action.payload.tasks || state.tasks;
        },
    },
});

export const { setProject } = ProjectSlice.actions;

export default ProjectSlice.reducer;