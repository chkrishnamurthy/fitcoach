import type { ComponentType } from 'react';
import { ROUTES } from '../config/constants';
import { HomePage } from '../features/home';
import { OnlineTrainingPage } from '../features/online-training';
import { TransformationsPage } from '../features/transformations';
import { AboutMePage } from '../features/about-me';
import { ContactPage } from '../features/contact';
import { NotFoundPage } from '../features/misc';

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

export const appRoutes: AppRoute[] = [
  { path: ROUTES.HOME, Component: HomePage },
  { path: ROUTES.ONLINE_TRAINING, Component: OnlineTrainingPage },
  { path: ROUTES.TRANSFORMATIONS, Component: TransformationsPage },
  { path: ROUTES.ABOUT, Component: AboutMePage },
  { path: ROUTES.CONTACT, Component: ContactPage },
  { path: '*', Component: NotFoundPage },
];
