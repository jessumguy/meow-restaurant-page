import { addElementToParent, mainSection, images } from "./common";


const renderAboutPage = () => {
    return {
        render() {
            const aboutContentContainer = addElementToParent('article', mainSection)

            const aboutUsContainer = addElementToParent('div', aboutContentContainer, null, 'about-card')
            addElementToParent('h1', aboutUsContainer, null, 'section-header', null, null, 'About us')
            const aboutUsPara = `Unwind at Meow Meow's Café. Sip on premium coffee and savor delicious desserts brewed and baked by Meow Meow. A purr-fect blend of comfort and charm awaits you here! 🐱☕🍰`
            addElementToParent('p', aboutUsContainer, null, null, null, null, aboutUsPara)

            const contactUsContainer = addElementToParent('div', aboutContentContainer, null, 'about-card')
            addElementToParent('h1', contactUsContainer, null, 'section-header', null, null, 'Contact us')
            const contactUsPara = `Tel: 1234-5678`
            addElementToParent('p', contactUsContainer, null, null, null, null, contactUsPara)

            const addressContainer = addElementToParent('div', aboutContentContainer, null, 'about-card')
            addElementToParent('h1', addressContainer, null, 'section-header', null, null, 'Address')
            const address = `123 Meow Street, Meowtown Highlands, 5777`
            addElementToParent('p', addressContainer, null, null, null, null, address)

            const imageContainer = addElementToParent('div', aboutContentContainer, 'about-card-image', 'about-card')
            addElementToParent('img', imageContainer, 'cat-happy-icon', null, null, images['cat-happy.png'], null)

            console.log('About page rendered')
        },
    }
}

const aboutPage = renderAboutPage();

export { aboutPage };



// 5. About
// - About us
// - Contact
// - Address
// - Image
