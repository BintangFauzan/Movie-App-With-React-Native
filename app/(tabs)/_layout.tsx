import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import React from 'react';
import ImageBackgroudnBar from '../components/ImageBackgroudnBar';

//Navigation Tabs
const _layout = () => {
SystemUI.setBackgroundColorAsync('transparent');
return (
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarStyle: {
        backgroundColor: '#0F0D23',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        height: 52,
        position: 'absolute',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#0F0D23',
      }
    }}
    >
        <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
             <ImageBackgroudnBar focuse = {focused} imageBg={images.highlight} icons={icons.home}>Home</ImageBackgroudnBar>
            ),}}
        />
        <Tabs.Screen
        name='saved'
        options={{
            title: 'Saved',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <ImageBackgroudnBar  focuse = {focused} imageBg={images.highlight} icons={icons.save}>Saved</ImageBackgroudnBar>
            )
        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <ImageBackgroudnBar  focuse = {focused} imageBg={images.highlight} icons={icons.search}>Search</ImageBackgroudnBar>
            )
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <ImageBackgroudnBar  focuse = {focused} imageBg={images.highlight} icons={icons.person}>Profile</ImageBackgroudnBar>
            )
        }}
        />
    </Tabs>
    </>
  )
}

export default _layout