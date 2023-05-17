export interface SignInModel {
  login: string;
  password: string;
}

export interface SignUpModel {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface EditProfileModel {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface EditPasswordModel {
  oldPassword: string;
  newPassword: string;
}

export interface EditAvatarModel {
  avatar: FormData;
}
