const BynDemo01=()=>{
   const handleDoubleCllick=()=>{
    window.open("https://pixy.org/src/477/thumbs350/4774988.jpg","mobile","width=400 height=400")
    }
    return(
        <div className="container-fluid">
            <h2>DoubleClick</h2>
            <img onDoubleClick={handleDoubleCllick} src="https://pixy.org/src/477/thumbs350/4774988.jpg" 
            width={100}
            height={50}
            
            />

        </div>
    )
}
export default BynDemo01