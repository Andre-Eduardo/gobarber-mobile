import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {upadateProfileSuccess, upadateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = Object.assign(
      {name, email, avatar_id},
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(upadateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao atualizar!', 'Confira seus dados!');

    yield put(upadateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
