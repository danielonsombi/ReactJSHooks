import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

//Keep track of count value and update the count value on the title

function DocTitleOne() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // },[count])

    // The above can now be replaced by the custom reusable hook:
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count} </button>
        </div>
    )
}

export default DocTitleOne
