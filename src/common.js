const mainSection = document.querySelector('#content');

const addElement = (type, id, className, dataId) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (className) element.className = className
    if (dataId) element.dataset.id = dataId;
    return element;
}

const addElementToParent = (type, parent, id, className, dataId, src, text) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (className) element.className = className
    if (dataId) element.dataset.id = dataId;
    if (src) element.src = src;
    if (text) element.textContent = text;
    parent.appendChild(element);
    return element;
}

const createMenuCard = (parent, headerText, descriptionText, priceTitle, priceText, imgKeyPrice, imgKey, dataId) => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    card.setAttribute('data-id', dataId);

    const cardSectionLeft = document.createElement('div');
    cardSectionLeft.className = 'menu-card-left';
    card.appendChild(cardSectionLeft);

    const cardSectionRight = document.createElement('div');
    cardSectionRight.className = 'menu-card-right';
    card.appendChild(cardSectionRight);

    const cardHeader = document.createElement('h1');
    cardHeader.className = 'card-header';
    cardHeader.textContent = headerText;
    cardSectionLeft.appendChild(cardHeader);

    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-description';
    cardDescription.innerHTML = descriptionText;
    cardSectionLeft.appendChild(cardDescription);

    const cardPriceContainer = document.createElement('div');
    cardPriceContainer.className = 'card-price-container';
    cardSectionLeft.appendChild(cardPriceContainer);

    const cardPriceTitle = document.createElement('p');
    cardPriceTitle.className = 'card-price-title';
    cardPriceTitle.textContent = priceTitle;
    cardPriceContainer.appendChild(cardPriceTitle);

    const cardPrice = document.createElement('p');
    cardPrice.className = 'card-price';
    cardPrice.textContent = priceText;
    cardPriceContainer.appendChild(cardPrice);

    const cardPriceImage = document.createElement('img');
    cardPriceImage.className = 'card-price-image';
    cardPriceImage.src = images[imgKeyPrice];
    cardPriceContainer.appendChild(cardPriceImage);

    const cardImage = document.createElement('img');
    cardImage.className = 'card-image'
    cardImage.src = images[imgKey];
    cardSectionRight.appendChild(cardImage);

    parent.appendChild(card);
}

const importAllImages = (requireContext) => {
    let images = {};
    requireContext.keys().forEach(item => {
        images[item.replace('./', '')] = requireContext(item);
    });
    return images;
}
const images = importAllImages(require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/));


export { mainSection, addElement, addElementToParent, createMenuCard, images }