
import React, { useEffect, useState } from 'react'
import 'assets/scss/react-hello.scss';
import Logo from 'assets/img/react-logo.png';
import 'assets/scss/react-hello.scss';
import axios from 'axios';
interface Props {
    
}

const App = (props: Props) => {    
    const [Obj, SetObj] = useState({Text : ""});    
    useEffect(() => {
        console.log(process.env.BASE_URL)
        const fetchData = async () => {
          const result = await axios(
            'assets/json/react-hello.json',
          );
          SetObj(result.data);
        };
        fetchData();
    }, []);
    return (         
        <div>
            <img src={Logo} alt="Logo-React" />
            <p>{Obj.Text}</p>
        </div>
    )
}

export default App;