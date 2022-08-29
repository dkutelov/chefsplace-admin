import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input,
  textarea,
  select {
    padding: 0.5em;
  }
`;

export const TableCell = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
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

export const SaveButton = styled.button`
  cursor: pointer;
  padding: 1em;
  color: white;
  background-color: var(--color-primary);
  font-size: 18px;
  margin-bottom: 2em;
`;
