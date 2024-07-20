import axios from "axios";


export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
    const res = await axios.get(`${prefix}/${tno}`);

    return res.data;
}

export const getList = async (pageParam) => {

    const res = await axios.get(`${prefix}/list`,{params:{...pageParam}});

    // const {page,size} = pageParam;
   // const res = await axios.get(`${prefix}/list`,{params:{page,size}});

   return res.data; // promise 이므로 then 으로 처리해줘야 한다.
}

/* useEffect 
    - 비동기 통신할 때 어떤 조건에서만 호출하는 것
    - 예)
         @ 동기
            - 서버 요청 -> 응답 대기 -> 응답 완료 ->상태 변경 -> 렌더링
                        -> 로직 실행 x    
        @ 비동기
            - 서버 요청 -> 응답 대기 ->                         -> 응답 완료 -> 상태 변경 -> 렌더링 
                        -> 다음 로직 실행  -> 상태 변경 -> 렌더링

*/