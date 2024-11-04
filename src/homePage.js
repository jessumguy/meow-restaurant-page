import catChefImage from "./images/cat_chef.jpeg"
import { addElementToParent, mainSection } from "./common";

const renderHomePage = () => {
    return {
        render() {
            const contentTop = addElementToParent('section', mainSection, 'content-top', 'container');
            const contentBottom = addElementToParent('section', mainSection, 'content-bottom', 'container');

            addElementToParent('h1', contentTop, null, null, null, null, `Meow Meow's Coffee and Desserts!`);
            const promotionalText = `Nestled in the heart of town, our café is your haven of flavor and freshness. Every cup of our coffee is brewed from the freshest beans, ensuring a rich, aromatic experience with every sip. Indulge in our handmade breads and delectable cakes, crafted daily with love and the finest ingredients. Whether you're in for a quick coffee break or a leisurely afternoon with friends, our welcoming atmosphere and top-notch treats promise to make your visit unforgettable. Come, savor the best in town!`
            addElementToParent('p', contentTop, null, null, null, null, promotionalText);
            addElementToParent('img', contentBottom, 'meow-image', null, null, catChefImage, null); 
            
            console.log('Home page rendered')
        },
    }
}

const homePage = renderHomePage();

export { homePage };