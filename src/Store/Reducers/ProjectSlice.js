import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    client: "",
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
            state.id = action.payload._id;
            state.client = action.payload.client;
            state.projectLogo = action.payload.projectLogo;
            state.projectName = action.payload.projectName;
            state.projectDescription = action.payload.projectDescription;
            state.dueDate = action.payload.dueDate;
            state.attachedFiles = action.payload.attachedFiles;
            state.terms = action.payload.terms;
            state.expectedValue = action.payload.expectedValue;
            state.milestone = action.payload.milestone;
            state.members = action.payload.members;
            state.status = action.payload.status;
            state.tasks = action.payload.tasks;
        },
    },
});

export const { setProject } = ProjectSlice.actions;

export default ProjectSlice.reducer;