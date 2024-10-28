import catChefImage from "./images/cat_chef.jpeg"
import { mainSection, addElement, addElementToParent } from "./common";

const renderHomePage = () => {
    return {
        addElement,
        addElementToParent,
        render() {
            const contentLeft = this.addElement('content-top', 'container', 'section');
            const contentRight = this.addElement('content-bottom', 'container', 'section');

            this.addElementToParent('h1', contentLeft, null, null, `Meow Meow's Coffee and Desserts!`);
            const promotionalText = `Nestled in the heart of town, our café is your haven of flavor and freshness. Every cup of our coffee is brewed from the freshest beans, ensuring a rich, aromatic experience with every sip. Indulge in our handmade breads and delectable cakes, crafted daily with love and the finest ingredients. Whether you're in for a quick coffee break or a leisurely afternoon with friends, our welcoming atmosphere and top-notch treats promise to make your visit unforgettable. Come, savor the best in town!`
            this.addElementToParent('p', contentLeft, null, null, promotionalText);
            this.addElementToParent('img', contentRight, 'meow-image', catChefImage); 
            
            console.log('Home page rendered')
        },
    }
}

const homePage = renderHomePage();

export { homePage };