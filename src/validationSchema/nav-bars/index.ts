import * as yup from 'yup';

export const navBarValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  is_active: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
