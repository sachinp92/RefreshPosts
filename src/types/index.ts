// Generic types used across the app

import {ThemeState} from '../redux/reducers/types';
import {UserInfoLayout} from './Layout';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DetailItemProps {
  label: string;
  value?: string | number;
  themeValue: ThemeState;
}

export interface IUserInfoProps {
  userId: number;
  layout: UserInfoLayout;
}
