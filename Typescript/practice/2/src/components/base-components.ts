// Component Base Class ( 재사용 클래스 )
// HTMLElement 부모, HTMLDivElement, HTMLUListElement 자식
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U; // HTMLElement 타입은 section 태그 포함

  constructor(templateId: string, hostId: string, elementId: string, insertAtStart: boolean) {
    // null 방지, 단언-선언
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostId)! as T;

    // section | form 생성
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as U;
    if (elementId) {
      this.element.id = elementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    // 부모-자식 삽입 관계
    this.hostElement.insertAdjacentElement(insertAtStart ? 'beforeend' : 'afterbegin', this.element);
  }
}
