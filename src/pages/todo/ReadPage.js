import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ReadPage() {
    
    
    const navigate = useNavigate();
    const {tno} = useParams();

    const [queryParams] = useSearchParams();

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    //const queryStr = createSearchParams({page:page, size:size}).toString;
    //console.log(queryStr);

    const moveToModify = (tno) => {
        navigate({
                    pathname:`/todo/modify/${tno}`,
                    search:`?page=${page}&size=${size}`
                })
    }

    const moveToList = () => {
        navigate({
                pathname:`/todo/list`,
                search:`?page=${page}&size=${size}`
        })
    }

    return (
        <div className={'text-3xl'}>
           Todo Read Page {tno}
           <div>
                <button onClick={() => moveToModify(tno)}> Test Modify </button>
                <button onClick={moveToList}> Test List </button>
           </div>
        </div>
    );
}

export default ReadPage;