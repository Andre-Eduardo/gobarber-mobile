import React from 'react';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import {Container, Title, List} from './styles';

const data = [1, 2, 3, 4, 5, 6];

const Dashboard = () => {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({item}) => <Appointment data={data} />}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;