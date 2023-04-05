export default function getRoute() {
  switch (window.location.pathname) {
    case '/auth':
      return { isAuth: true };
    case '/registration':
      return { isReg: true };
    case '/chats':
      return { isChats: true };
    case '/serverError':
      return { isErr: true };
    case '/notFound':
      return { isNotFound: true };
    case '/profile':
      return { isProfile: true };
    case '/profile_edit':
      return { isProfileEdit: true };
    case '/profile_password':
      return { isProfilePass: true };
    default:
      return { isAuth: true };
  }
}
