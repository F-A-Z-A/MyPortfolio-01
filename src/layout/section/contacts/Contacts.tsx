import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
   return (
      <StyledContact>
         <SectionTitle>Contacts</SectionTitle>
         <StyledForm>
            <Field placeholder={"name"}/>
            <Field placeholder={"subject"}/>
            <Field placeholder={"message"} as={"textarea"}/>
            <Button type={"submit"}>Send message</Button>
         </StyledForm>
      </StyledContact>
   );
};

const StyledContact = styled.section`
    height: 40vh;
    background-color: #fab6b6;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input``