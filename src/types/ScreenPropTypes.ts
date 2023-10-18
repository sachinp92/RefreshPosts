import {
  PostScreenNavigationProp,
  AuthorScreenNavigationProp,
} from './NavigationTypes';

// The types for the navigation prop in each screen

export interface PostScreenProps {
  navigation: PostScreenNavigationProp;
}

export interface AuthorScreenProps {
  navigation: AuthorScreenNavigationProp;
}
