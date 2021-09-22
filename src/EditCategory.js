import React, {useRef} from 'react'
import styled from "styled-components";
import {Button} from "@material-ui/core"; 
import {db} from "./firebase"; 

function EditCategory({categoryId}) {

    const inputRef = useRef(null); 
    const changeName = (e) => {
        e.preventDefault(); 

        if(categoryId){
        return false; 
        }

        db.collection("categories").doc(categoryId).set({name: inputRef.current.value}); 
    }; 
    
     const changeParent = (e) => {
        e.preventDefault(); 

         db.collection("categories").doc(categoryId).update({name: inputRef.current.value}); 
    };
     const changeDescription = (e) => {
        e.preventDefault();
        
         db.collection("categories").doc(categoryId).update({name: inputRef.current.value}); 
    }; 
    

    return (
        <inputContainer>
            <form>
                <input ref = {inputRef} placeholder = {`Change/Add the name of the category`}/>
                <Button hidden type = 'submit' onClick={changeName}>

                </Button>
            </form>

             <form>
                <input ref = {inputRef} placeholder = {`Change/Add the parent of the category`}/>
                <Button hidden type = 'submit' onClick={changeParent}>

                </Button>
            </form>

             <form>
                <input ref = {inputRef} placeholder = {`Change/Add the description of the category`}/>
                <Button hidden type = 'submit' onClick={changeDescription}>

                </Button>
            </form>
        </inputContainer>
    )
}

export default EditCategory

const inputContainer = styled.div`
`; 