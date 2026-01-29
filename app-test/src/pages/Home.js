import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export const  Home = () => {

    const {data: catData, refetch} = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }
    })

    return (
        <h1>
            {" "}
           Here is a Cat Fact! <p>{catData?.fact}</p>
            <button onClick={refetch}>New Fact</button>
        </h1>
    )
}