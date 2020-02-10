import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TextInput} from 'react-native';
import IconButton from '../components/IconButton';
import {FETCH_REPOS} from '../reducers/github.reducer';
import GithubList from '../components/GithubList';

const GithubScreen = () => {
  const [username, setUsername] = useState('');
  const repos = useSelector(state => state.github.get('repos'));

  const dispatch = useDispatch();
  const fetchUsers = useCallback(() => dispatch(FETCH_REPOS({username})), [
    dispatch,
    username,
  ]);
  return (
    <View style={{alignContent: 'center'}}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <TextInput
          text={username}
          onChangeText={setUsername}
          style={{
            borderBottomWidth: 1,
            width: 200,
            marginBottom: 20,
            borderBottomColor: '#2196F3',
          }}
        />
        <IconButton onPress={fetchUsers} text="Search" icon="search" />
      </View>
      <GithubList style={{marginBottom: 110}} data={repos} />
    </View>
  );
};

export default GithubScreen;
