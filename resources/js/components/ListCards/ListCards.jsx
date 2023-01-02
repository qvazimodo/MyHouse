import React, {useState} from 'react';
import OutputCards from "./OutputCards";
import FormCards from "./FormCards";


const ListCards = () => {

    const [name, setName] = useState('')
    const handleLenghtChage = (name) =>{
        setName(name)
    }

    return (
        <div>
            <FormCards name={name}/>
            <OutputCards onChange={handleLenghtChage}/>
        </div>
    );
}

export default ListCards;
