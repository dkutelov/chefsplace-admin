import styled from "styled-components";

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 2em;

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5em;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SectionContainer = styled.div`
  flex: 0 0 47.5%;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
