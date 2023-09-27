import * as yup from 'yup';

export const parkingValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  capacity: yup.number().integer().required(),
  is_active: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
