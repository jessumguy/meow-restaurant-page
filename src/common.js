const mainSection = document.querySelector('#content');

const addElement = (id, className, type) => {
    const sectionTag = document.createElement(type);
    if (id) sectionTag.id = id;
    if (className) sectionTag.className = className
    mainSection.appendChild(sectionTag);
    return sectionTag;
}

const addElementToParent = (type, parent, id, src, text) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (src) element.src = src;
    if (text) element.textContent = text;
    parent.appendChild(element);
    return parent;
}

export { mainSection, addElement, addElementToParent }