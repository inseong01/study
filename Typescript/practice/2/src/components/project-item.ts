import { Draggable } from '../modules/drag-drop.js';
import { Project } from '../state/project-state.js';
import { Component } from './base-components.js';

// ProjectItem Class
export class ProjectItem extends Component<HTMLUListElement, HTMLElement> implements Draggable {
  private project: Project;

  // getter & setter: 입출력 값 통제
  get Persons() {
    if (this.project.people === 1) {
      return '1 Person assigned';
    } else {
      return `${this.project.people} Persons assigned`;
    }
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, project.id, true);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  // 드래그, 데이터 이동
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }
  dragEndHandler(_: DragEvent): void {
    console.log('DragEnd');
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler.bind(this));
    this.element.addEventListener('dragend', this.dragEndHandler.bind(this));
  }
  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.Persons;
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
