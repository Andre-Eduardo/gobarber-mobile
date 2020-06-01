import React, {useState} from 'react';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import {Container} from './styles';

const SelectDateTime = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
