import React from 'react';

const MenuItem = ({title,imageUrl,size}) => {

return(

<div className='${size} menu=item'>

<div
classname='background-image'
style={{
    backgroundImage:`url(${imageUrl})`
}}
>

</div>


<div className="content">
<h1 className="title">{title.toUpperCase()}</h1>

</div>

</div>  

    
)
    
}


export default MenuItem;