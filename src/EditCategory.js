import React from 'react'
import styled from "styled-components";
import {Button} from "@material-ui/core";  

function EditCategory({categoryId}) {

    const changeName = (e) => {
        e.preventDefault(); 
    }; 
    
     const changeParent = (e) => {
        e.preventDefault(); 
    };
     const changeDescription = (e) => {
        e.preventDefault(); 
    }; 

    return (
        <inputContainer>
            <form>
                <input placeholder = {`Change/Add the name of the category`}/>
                <Button hidden type = 'submit' onClick={changeName}>

                </Button>
            </form>

             <form>
                <input placeholder = {`Change/Add the parent of the category`}/>
                <Button hidden type = 'submit' onClick={changeParent}>

                </Button>
            </form>

             <form>
                <input placeholder = {`Change/Add the description of the category`}/>
                <Button hidden type = 'submit' onClick={changeDescription}>

                </Button>
            </form>
        </inputContainer>
    )
}

export default EditCategory

const inputContainer = styled.div`
`; 