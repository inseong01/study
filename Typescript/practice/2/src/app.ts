import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// npm start -> tsc -w

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
