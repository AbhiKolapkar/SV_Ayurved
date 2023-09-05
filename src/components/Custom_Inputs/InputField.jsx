import React from 'react'
import { Error } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from './style.module.css'

export const InputField = ({icon, label, name, type, register, errors, validation}) => {
  return (
    <>
      <div className={styles.contactForm}>
        {icon && icon}
        <div className={styles.inputBox}>
          {label && (
            <>
              <input
                type={type}
                id={name}
                placeholder=" "
                className={styles.textbox}
                {...register(name, validation)}
              />
              <label htmlFor={name} className={styles.label}>
                {label}
                <sup>*</sup>
              </label>
            </>
          )}
        </div>
        {errors[name] && <InputError message={errors[name].message} />}
      </div>
    </>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p className={styles.errorMsg} {...framer_error}>
      <Error />
      <span>{message}</span>
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
