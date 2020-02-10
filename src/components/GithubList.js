import React, {useCallback} from 'react';
import {
  VirtualizedList,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from './Icon';

const GithubElement = props => {
  const {data, onPress} = props;
  const selectElement = useCallback(() => {
    onPress(data.item);
  }, [data, onPress]);

  return data.item ? (
    <TouchableOpacity
      onPress={selectElement}
      style={{
        borderBottomColor: '#dde8f0',
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10,
        marginRight: 10,
        marginLeft: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', maxWidth: 200}}>
          {data.item.get('name')}
        </Text>
        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <Icon name="star" width={20} height={20} fill="#FFD300" />
          <Text style={{marginLeft: 5}}>
            {data.item.get('stargazers_count')}
          </Text>
        </View>
      </View>
      <Text>{data.item.get('description')}</Text>
      <Text style={{color: '#2196F3'}}>{data.item.get('html_url')}</Text>
    </TouchableOpacity>
  ) : null;
};

const GithubList = props => {
  const {data} = props;

  const openLink = info => {
    Linking.openURL(info.get('html_url'));
  };

  const getItemCount = useCallback(() => {
    return data ? data.count() : 0;
  }, [data]);

  const getItem = (info, index) => info.get(index);

  const keyExtractor = (info, index) => info.get('node_id');

  const renderItem = info =>  <GithubElement onPress={openLink} data={info} />;

  return (
    <VirtualizedList
      {...props}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
export default GithubList;
