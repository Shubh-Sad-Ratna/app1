import Input from "../UI/Input";
const MealsItemForm=(props)=>{
    return (
        <form>
            <Input label="amount" input={{
                id:"amount",
                type:"number",
                min:1,
                max:5,
                step:'1',
                defaultValue:"1"
            }}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealsItemForm;