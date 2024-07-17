import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
    tno:0,
    title:'',
    writer:'',
    dueDate:'',
    complete: false

}

function ReadComponent({tno}){

    const [todo, setTodo] = useState(initState);
    
    /* 
        - 어떤 상황이 됐을 때 동작을 할지 설정 할 수 있다.
        - tno 값이 바뀌면 값을 다시 갖고 온다.
        - tno 값이 바뀌지 않으면 다른 데이터가 바뀌어도 호출 하지 않는다.
        - 비동기 통신의 여러번 호출을 막을 수 있다.
    */

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        })
    },[tno]);
    

    return(
        <div>

        </div>
    )
}

export default ReadComponent;


/*
   - 리액트의 컴포넌트는 상태가 변경되면 자동으로 렌더링 된다.
   
   useEffect
   - 함수형 컴포넌트가 상태를 유지하기 위해서 사용
*/