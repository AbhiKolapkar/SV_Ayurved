import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Title } from "../../components/Title/Title";
import { Contacts_Data } from "../../data/constant";
import logo from "../../assets/icons/SV_Logo.svg";
import { InputField } from "../../components/Custom_Inputs/InputField";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import {
  Email_Validation,
  Full_Name_Validation,
  Message_Validation,
  Phone_Number_Validation,
} from "../../components/Custom_Inputs/validation";
import { CONTACT_API_URL } from "../../data/constant";
import styles from "./style.module.css";
import { RotatingSquare } from "react-loader-spinner";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      // Append form fields to the FormData object
      for (const key in data) {
        formData.append(key, data[key]); // Append files to the FormData object
      }

      const response = await axios.post(CONTACT_API_URL, formData);
      toast.success(response.data.message, {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
      });
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }

    reset();
  };

  return (
    <>
      <section className="section">
        <Title title="Contact Us" />

        <Container maxWidth="xl" className="section">
          <div className={styles.location_map}>
            {/* google-maps iframe generator */}
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%&amp;height=432&amp;hl=en&amp;q=Office%20no.110,%20Pallazo%20building,%20near%20Wisdom%20world%20school,%20Hadapsar,%20Pune-%20411%20028+(SV%20Ayurved)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </Container>

        <Container maxWidth="xl" className="section">
          <Grid container rowGap={4}>
            <Grid item md={6} xs={12}>
              <Box
                className={styles.content_box}
                sx={{
                  width: { xs: "100%", md: "calc(100% + 2.31rem)" },
                  borderRadius: {
                    xs: "1.875rem",
                    md: "1.875rem 0rem 0rem 1.875rem",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  color={"text.secondary"}
                  className={styles.header_text}
                >
                  Get In Touch
                </Typography>

                <div className={styles.contact_info}>
                  {Contacts_Data.map(({ id, icon, text }) => (
                    <div key={id}>
                      <div className="imgBox">
                        <img src={icon} alt="" />
                      </div>
                      <pre>
                        <Typography
                          fontSize={"1.125rem"}
                          color={"text.secondary"}
                          fontWeight={400}
                        >
                          {text}
                        </Typography>
                      </pre>
                    </div>
                  ))}
                </div>

                <div className={styles.logo_box}>
                  <img src={logo} alt="" />
                </div>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box className={styles.form_box}>
                <Typography
                  variant="h3"
                  color={"text.secondary"}
                  className={styles.header_text}
                >
                  Have other Questions?
                </Typography>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  autoComplete="off"
                >
                  <div className={styles.input_fields}>
                    <InputField
                      type="text"
                      label="Full Name"
                      name="name"
                      register={register}
                      icon={<ProfileIcon />}
                      errors={errors}
                      {...Full_Name_Validation}
                    />
                    <InputField
                      type="email"
                      label="Email ID"
                      name="email"
                      register={register}
                      icon={<MailIcon />}
                      errors={errors}
                      {...Email_Validation}
                    />
                    <InputField
                      type="tel"
                      label="Phone Number"
                      name="phone"
                      register={register}
                      icon={<PhoneIcon />}
                      errors={errors}
                      {...Phone_Number_Validation}
                    />
                    <InputField
                      type="text"
                      label="Message"
                      name="message"
                      register={register}
                      icon={<MessageIcon />}
                      errors={errors}
                      {...Message_Validation}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={styles.submitBtn}
                  >
                    {isLoading ? (
                      <RotatingSquare
                        width={40}
                        height={40}
                        color="#eef2d6"
                        strokeWidth={2}
                        ariaLabel="rotating-square-loading"
                      />
                    ) : (
                      <Typography variant="subtitle1" color={"text.primary"}>
                        Send Message
                      </Typography>
                    )}
                  </button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Contact;
