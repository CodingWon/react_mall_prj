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
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makeDiv('Tno',todo.tno)}
            {makeDiv('Writer',todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Due Date',todo.dueDate)}
            {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

        </div>
    )
}

const makeDiv = (title,value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                {value}
            </div>
        </div>
    </div>


export default ReadComponent;


/*
   - 리액트의 컴포넌트는 상태가 변경되면 자동으로 렌더링 된다.
   
   useEffect
   - 함수형 컴포넌트가 상태를 유지하기 위해서 사용
*/