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
    const mealsList=DummyMeals.map(meal=><li>{meal.name}</li>);
    return(
        <section>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}
export default AvailableMeals;