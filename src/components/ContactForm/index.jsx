/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';

import { useState } from 'react';
import { ButtonContainer, Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handelNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((oldState) => [
        ...oldState, { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((oldState) => oldState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  console.log(errors);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handelNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">
            Categoria
          </option>
          <option value="instagram">
            Instagram
          </option>
          <option value="discord">
            Discord
          </option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
export default ContactForm;
