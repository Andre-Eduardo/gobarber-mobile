import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import {Container, HourList, Hour, Title} from './styles';

const SelectDateTime = ({navigation, route}) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const {provider} = route.params;

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHours(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({item}) => (
            <Hour onPress={() => handleSelectHours()} enabled={item.avaiable}>
              {console.tron.log(item)}
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectDateTime;
