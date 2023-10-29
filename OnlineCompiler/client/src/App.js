import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App(){
    const [code, setCode] = useState();
    const[output, setOutput] = useState();

    //onclicking submit button this button will be called and make post request for backedn
    const handleSubmit = async()=>{
        const payload = {
            language:'cpp',
            code
        };

        try{
            const {data} = await axios.post('http://localhost:5000/run', payload);
            console.log(data);
            setOutput(data.output);
        } catch(error){
            console.log(error.message);
        }
    }

    return(
        <div className="container">
            <h1>CrackCode</h1>
            {/*you can put language select dropdown here */}
            <textarea rows='20' cols='75' className="textarea" 
            value={code} onChange={(e) => { setCode(e.target.value);}}></textarea>
            <br/>
            <button></button>
        </div>
    )
}