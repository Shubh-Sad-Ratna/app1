import Cards from "../UI/Card";
import MealItem from "./MealItem";
const DummyMeals=[
    {
        id:1,
        name:"idli",
        description:"soft item",
        price:20
    },
    {
        id:2,
        name:"dosa",
        description:"soft item",
        price:40
    },
    {
        id:3,
        name:"wada",
        description:"soft item",
        price:30
    },
]
const AvailableMeals=()=>{
    const mealsList=DummyMeals.map(meal=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return(
        <section>
            <Cards>
            <ul>
                {mealsList}
            </ul>
            </Cards>
        </section>
    )
}
export default AvailableMeals;