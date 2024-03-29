import ListItems from "./"






const ListItems=()=>{
    const ListItems=[{
        name:"apple",
        type:"fruit",
        isFruit:"true",
        id:3
    }
]
    return(
        <div>
            <ol>
              {
                ListItems.map(()=>{})
              }  
            </ol>
        </div>
    )
}