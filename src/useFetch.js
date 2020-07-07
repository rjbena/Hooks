import {useEffect, useState, useRef} from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true})
    const isCurrent = useRef(true);
    useEffect(()=>{
       return () => {
          isCurrent.current= false
       }
    },[])

    useEffect(() => {
       //setState({data:null, loading: true})
        fetch(url)
        .then(x => x.text())
        .then(y => {
         if (isCurrent.current) {
         setState({data: y,loading: false});
         }
       });
    }, [url,setState])
    return state
}
