import { useParams } from "react-router-dom";


function ReadPage() {

    const {tno} = useParams();



    return (
        <div className={'text-3xl'}>
          {tno}  Todo Read Page
        </div>
    );
}

export default ReadPage;