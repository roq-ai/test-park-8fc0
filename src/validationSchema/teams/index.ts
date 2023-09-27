import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  is_active: yup.boolean().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
