import { DragTarget } from '../modules/drag-drop.js';
import { projectState } from '../modules/project.js';
import { Project, ProjectStatus } from '../state/project-state.js';
import { Component } from './base-components.js';
import { ProjectItem } from './project-item.js';

// ProjectList Class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[];

  constructor(protected type: 'active' | 'finished') {
    super('project-list', 'app', `${type}-projects`, true);
    this.assignedProjects = []; // 생성된 프로젝트 모음

    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    // ??, 입력한 Project 배열 렌더링
    const listEl = document.querySelector(`#${this.type}-projects ul`)! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
  }

  dragOverHandler(event: DragEvent) {
    // 깜박거림 원인
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listEl = this.element.querySelector('ul');
      listEl!.classList.add('droppable');
    }
  }
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
  }
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul');
    listEl!.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler.bind(this));
    this.element.addEventListener('dragleave', this.dragLeaveHandler.bind(this));
    this.element.addEventListener('drop', this.dropHandler.bind(this));
    projectState.addListenr((projects: Project[]) => {
      // ??, Active / Finished 분류
      const filteredProjects = projects.filter((pjt) => {
        if (this.type === 'active') {
          return pjt.status === ProjectStatus.Active;
        }
        return pjt.status === ProjectStatus.Finished;
      });
      this.assignedProjects = filteredProjects;

      this.renderProjects();
    });
  }
  renderContent() {
    const listId = `${this.type}-projects-list`;
    // 단언
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }
}
