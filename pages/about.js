import React,{useState} from 'react'

function about() {

    function counter(initial=Number) {
        const [count, setCount]=useState(initial)

        const getCount = ()=>{
            console.log('count',count)
            return count;
        }

        const increase = () =>{
            setCount(count => count+1);
            return count;
        }
        const decrease = () =>{
            setCount(count => count-1);
            console.log(count)
            return count;
        }
        return {getCount,increase,decrease}
    }
    const start0 = counter(0);
    const start5 = counter(5);

   // console.dir(start0);
    //console.dir(start5);
    console.log('실행')
    //console.log('start0',start0.count);
    //console.log('start5',start5.count);

    return (
        <div>
            <h2>자바스크립트 클로저</h2>
            
            <div>
                <button onClick={()=>start0.decrease()}>-</button>
                <span >{start0.getCount()}</span>
                <button onClick={()=>start0.increase()}>+</button>
                
            </div>

            <div>
                <button onClick={()=>start5.decrease()}>-</button>
                <span>{start5.getCount()}</span>
                <button onClick={()=>start5.increase()}>+</button>
            </div>
            
        </div>
    )
}

export default about
