// Project Type
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public numOfPeople: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
type Listener = (items: Project[]) => void;

class ProjectState {
  private listeners: Listener[] = []; // ??
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListenr(listenerFn: Listener) {
    this.listeners.push(listenerFn); // ??
  }

  // 프로젝트 저장 함수
  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // ??, 사본 전달
    }
  }
}

const projectState = ProjectState.getInstance(); // 전역화

interface Validation {
  value: string | number;
  require?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
}

// 검증 재사용 함수
function validate(obj: Validation): boolean {
  let validValue = true;
  // 입력 했는지
  if (obj.require) {
    validValue = obj.require && !!obj.value;
  }
  // 최대 길이 이하인지
  if (typeof obj.value === 'string' && obj.maxlength) {
    validValue = obj.maxlength >= obj.value.trim().length;
  }
  // 최소 길이 이상인지
  if (typeof obj.value === 'string' && obj.minlength) {
    validValue = obj.minlength <= obj.value.trim().length;
  }
  // 숫자가 최대 이하인지
  if (typeof obj.value === 'number' && obj.max) {
    validValue = obj.max >= obj.value;
  }
  // 숫자가 최소 이상인지
  if (typeof obj.value === 'number' && obj.min) {
    validValue = obj.min <= obj.value;
  }
  return validValue;
}

// ProjectList Class
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement; // HTMLElement 타입은 section 태그 포함

  assignedProjects: Project[]; // ??

  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.assignedProjects = []; // ??

    // section 생성
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListenr((projects: Project[]) => {
      // ??
      // Active / Finished 분류
      const filteredProjects = projects.filter((pjt) => {
        if (this.type === 'active') {
          return pjt.status === ProjectStatus.Active;
        }
        return pjt.status === ProjectStatus.Finished;
      });
      this.assignedProjects = filteredProjects;
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    // ??
    // Project 렌더링
    // npm start -> tsc -w
    const listEl = document.querySelector(`#${this.type}-projects ul`)! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    // 단언
    this.element.querySelector('h2')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    // null 방지, 단언-선언
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // form 생성
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // input 생성 (form 안에서)
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.attach();
    this.configure();
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

  private configure() {
    // bind(this)는 호출하는 this.submiHandler 참조 보장
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    // 부모-자식 삽입 관계
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
