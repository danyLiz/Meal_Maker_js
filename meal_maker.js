
const menu = {
		_courses : {
			appetizers :[],
			mains: [],
			desserts :[],
		},
		
		get appetizers() {
			return this._courses.appetizers;
			},
		get mains() {
			return this._courses.mains;
			},
		get desserts() {
			return this._courses.desserts;
			},
			
		set appetizers(appetizers){
			this._courses.appetizers = appetizers;
			},
		set mains(mains){
			this._courses.mains = mains;
			},
		set desserts(desserts){
			this._courses.desserts = desserts;
			}, 
				
		get courses(){
			return {
				appetizers: this.appetizers,
				mains: this.mains,
				desserts: this.desserts
			};
		},

		addDishToCourse(courseName, dishName, dishPrice){
			const dish = {
				name: dishName,
				price: dishPrice,
			};
			return this._courses[courseName].push(dish);
		},

		getRandomDishFromCourse(courseName){
			const dishes = this._courses[courseName];
			const randomIndex = Math.floor(Math.random()*dishes.length);
			return dishes[randomIndex];
		},

		generateRandomMeal(){
			const appetizer = this.getRandomDishFromCourse('appetizers');
			const main = this.getRandomDishFromCourse('mains');
			const dessert = this.getRandomDishFromCourse('desserts');
			
			const totalPrice = appetizer.price + main.price + dessert.price ;
			
			return `Your meal is ${appetizer.name}, ${main.name},${dessert.name} and the total price is ${totalPrice}`;
		}		
};

menu.addDishToCourse ('appetizers', 'humus', 8.00 );
menu.addDishToCourse ('appetizers', 'canapes and crostini', 9.50 );
menu.addDishToCourse ('appetizers', 'bruschetta', 3.20);
 
menu.addDishToCourse ('mains', 'soup', 11.00 );
menu.addDishToCourse ('mains', 'ribs', 20.00 );
menu.addDishToCourse ('mains', 'vegetables', 11.00 );
 
menu.addDishToCourse ('desserts', 'lava cake', 12.00 );
menu.addDishToCourse ('desserts', 'apple pie', 8.00 );
menu.addDishToCourse ('desserts', 'chocolate icecream', 15.00 );
 

const meal = menu.generateRandomMeal();
console.log(meal);
