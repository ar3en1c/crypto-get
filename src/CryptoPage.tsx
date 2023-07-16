import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './cryptopage.scss';
function CryptoPage() {
    let { chi } = useParams();

    const Show = (chi: string | undefined) => {
        const [route , setRoute] = useState("");
        const fetchUsers = async () => {
            const response = await axios.get(`http://localhost:7421/routepic.php?COIN=${chi}`);
            if (response.status === 200) {
                setRoute(response.data);
            }
        };

        useEffect(() => {
            fetchUsers();
        });
        console.log(route);
        
        return (
            <>
                <div className="titr">
                    <span>
                        {chi?.toUpperCase()}
                    </span>
                </div>
                <div className="image">
                    <img src={ route } alt={chi?.toUpperCase()}/>
                </div>
            </>
        )
    }




    return (
        <>
            {Show(chi)}
            <div className="back-p"><Link className="back" to={'/'}>Back</Link></div>
        </>
    )
}

export default CryptoPage;