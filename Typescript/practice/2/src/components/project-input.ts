import { projectState } from '../modules/project.js';
import { validate, Validation } from '../util/validation.js';
import { Component } from './base-components.js';

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', 'user-input', false);

    // input 생성 (form 안에서)
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.renderContent();
  }

  private clearInput() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private getFormData(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidation: Validation = {
      value: enteredTitle,
      require: true,
      maxlength: 10,
      minlength: 1,
    };
    const descriptionValidation: Validation = {
      value: enteredDescription,
      require: true,
      maxlength: 10,
      minlength: 1,
    };
    const peopleValidation: Validation = {
      value: enteredPeople,
      require: true,
      max: 5,
      min: 1,
    };

    // 유효값 검증
    if (!validate(titleValidation) || !validate(descriptionValidation) || !validate(peopleValidation)) {
      alert('Invalid value!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private submitHandler(e: Event) {
    e.preventDefault();
    const formData = this.getFormData();
    if (Array.isArray(formData)) {
      const [title, description, people] = formData;
      // 프로젝트 저장
      projectState.addProject(title, description, people);
      this.clearInput();
    }
  }

  renderContent() {}
  configure() {
    // bind(this)는 호출하는 this.submiHandler 참조 보장
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }
}
