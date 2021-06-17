import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => {

return(

<div 
className={'${size} menu=item'}
onClick={()=>history.pushState({r:10},`${match.url}${linkUrl}`)}
>

<div
className='background-image'
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


export default withRouter(MenuItem);