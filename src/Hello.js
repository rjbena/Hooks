import React, { useRef } from 'react'
//import { useCountRenders } from './useCountRenders';

export const Hello = React.memo(({increment}) => {
    // useCountRenders();
    return (
        <div>
           <button onClick={()=>increment(5)}>Hello</button>
        </div>
    )
});
