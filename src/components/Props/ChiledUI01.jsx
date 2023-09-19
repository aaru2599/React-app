const ChildUI=(props)=>{
    console.log(props);
return (
<div>
<button onClick={props.onToggle}>toggle</button>
</div>
)
}
export default ChildUI