import { createMenuCard, addElementToParent, mainSection } from "./common";

const renderMenuPage = () => {
    return {
        render() {
            const setMealSection = addElementToParent('section', mainSection, 'set-meal-section', 'container');
            const setMealSectionHeader = addElementToParent('h1', setMealSection, null, 'section-header', null, null, 'Set Meals');
            createMenuCard(setMealSection, `Meow Meow's Special Set`, `Enjoy a Hearty Meow Meow Set Meal <br> - Coffee of the Day <br> - Dessert of the Day`, 'Price: ','9', 'coin.png','cat-happy.png','meal-01')
            createMenuCard(setMealSection, 'Good Breakfast Set - Coffee and Crossant', 'Freshly brewed Meow coffee paired with a flaky, buttery croissant.', 'Price: ','7', 'coin.png', 'coffee_croissant.png', 'meal-02')

            const dessertSection = addElementToParent('section', mainSection, 'dessert-section', 'container');
            const cakeSectionHeader = addElementToParent('h1', dessertSection, null, 'section-header', null, null, 'Desserts');
            createMenuCard(dessertSection, 'Happy Cheese Cake', 'Made with Grade A Cheese from Meow Highlands', 'Price: ', '3', 'coin.png', 'cheesecake.png', null, 'dessert-01');
            createMenuCard(dessertSection, 'Rich Chocolate Cake', 'Made with the Richest Cocoa from Meow Eastlands', 'Price: ', '2', 'coin.png', 'chocolate-cake.png', null, 'dessert-02');
            createMenuCard(dessertSection, 'Relaxing Carrot Cake', 'Made with the Healthiest Carrots from Australia', 'Price: ', '2', 'coin.png', 'carrot-cake.png', null, 'dessert-03');
            createMenuCard(dessertSection, 'Nutritious Fruit Cake', 'Made with Freshest Fruits from Meow Southlands', 'Price: ', '3', 'coin.png', 'fruit-cake.png', null, 'dessert-04');
            createMenuCard(dessertSection, 'Swiss Roll', 'Made with Best Rolls from the Alps', 'Price: ', '3', 'coin.png', 'roll-cake.png', null, 'dessert-05');
            createMenuCard(dessertSection, 'Mochi', 'Meow-meow style Mochi - Soft, chewy, and sweet texture.', 'Price: ', '3', 'coin.png', 'mochi.png', null, 'dessert-04');

            const drinkSection = addElementToParent('drink-section', mainSection, 'set-meal-section', 'container');
            const drinkSectionHeader = addElementToParent('h1', drinkSection, null, 'section-header', null, null, 'Drinks');
            createMenuCard(drinkSection, 'Coffee', 'Brewed with the highest quality beans', 'Price: ', '1', 'coin.png', 'coffee-cup.png', null, 'drink-01');
            createMenuCard(drinkSection, 'Coffee to go', 'Bring the coffee with you', 'Price: ', '2', 'coin.png', 'coffee.png', null, 'drink-02');

            console.log('Menu page rendered')
        }
    }
}

const menuPage = renderMenuPage();

export { menuPage }; 