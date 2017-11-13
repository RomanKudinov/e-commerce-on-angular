export class NavItem {
    anchor: string;
    content: string;
    link: string;
    section?: ChildElement;
}

export class ChildElement {
    tagName: string;
    class?: string;
    content?: string;
    link?: string;
    children?: ChildElement;
}
