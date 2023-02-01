import ProjectInfo from '/package.json';

const __VERSION__ = ProjectInfo.version;
const __COMMAND_NAME__ = Object.keys(ProjectInfo.bin)[0];

export { __VERSION__, __COMMAND_NAME__ };
