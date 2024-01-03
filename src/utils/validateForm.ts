import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("Usuario es requerido."),
    password: yup.string().trim().required("Contraseña es requerida.")
})
