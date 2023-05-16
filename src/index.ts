import Router from './services/Router';
import './style.scss';

import { notFound } from './pages/404';
import { serverError } from './pages/500';
import { auth } from './pages/auth';
import { registration } from './pages/registration';
import { profile } from './pages/profile';
import { profileEdit } from './pages/profile-edit';
import { profilePassword } from './pages/profile-password';
import { chats } from './pages/chats';


export const router = new Router("#root");

router
  .use("/", auth)
  .use("/sign-up", registration)
  .use("/settings", profileEdit)
  .use("/profile", profile)
  .use("/password-change", profilePassword)
  .use("/messenger", chats)
  .use("/server-error", serverError)
  .use("/not-found", notFound)
  .start();
