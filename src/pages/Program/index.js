import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RotatingSquare } from "react-loader-spinner";
import { Error } from "@mui/icons-material";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import { InputField } from "../../components/Custom_Inputs/InputField";
import {
  Email_Validation,
  Full_Name_Validation,
  Phone_Number_Validation,
  Text_Validation,
} from "../../components/Custom_Inputs/validation";
import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { PROGRAMS_API_URL } from "../../data/constant";
import styles from "./style.module.css";
import useDocTitle from "../../hooks/useDocTitle";

const Program = () => {
  useDocTitle('Program')
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const { programBanner } = BannerImages_Data;
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const country = watch("country", null);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    };

    fetchCountries();
  }, []);

  const options = countries.map((item) => {
    return item.name;
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      // Append form fields to the FormData object
      for (const key in data) {
        formData.append(key, data[key]); // Append files to the FormData object
      }

      const response = await axios.post(PROGRAMS_API_URL, formData);
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
      });
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }

    reset({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      education: "",
    });
  };

  return (
    <>
      <section className="section">
        {!isMobile ? (
          <Container maxWidth="xxl">
            <div className="imgBox">
              <img src={programBanner} alt="" loading="lazy" />
            </div>
          </Container>
        ) : (
          <div className="imgBox banner">
            <img src={programBanner} alt="" loading="lazy" />
          </div>
        )}
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title={"SV Education Programs"} />
        </Container>

        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6} xs={12} mb={2}>
              <Box
                className={styles.form_box}
                sx={{
                  width: { xs: "100%", md: "calc(100% + 2rem)" },
                  borderRadius: {
                    xs: "1.875rem",
                    md: "1.875rem 0rem 0rem 1.875rem",
                  },
                }}
              >
                <div>
                  <Typography
                    variant="h3"
                    color={"text.secondary"}
                    className={styles.header_text}
                  >
                    Register for the Program
                  </Typography>
                  <Typography
                    fontSize={"0.75rem"}
                    color={"text.tertiary"}
                    fontWeight={400}
                    lineHeight={"174%"}
                  >
                    Register yourself here to discover the secrets of Ayurveda
                  </Typography>
                </div>

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

                    <div className={styles.autocomplete_field}>
                      <span>
                        <LocationIcon />
                      </span>
                      <div className={styles.autocomplete}>
                        <Autocomplete
                          value={country}
                          onChange={(e, newValue) =>
                            setValue("country", newValue)
                          }
                          options={options}
                          getOptionLabel={(option) => option}
                          autoComplete={true}
                          isOptionEqualToValue={(option, value) =>
                            option === value
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Country"
                              {...register("country", {
                                required: "Required",
                              })}
                            />
                          )}
                        />
                      </div>
                      {errors.country && (
                        <p className={styles.errorMsg}>
                          {" "}
                          <Error /> {errors.country.message}
                        </p>
                      )}
                    </div>

                    <InputField
                      type="text"
                      label="City"
                      name="city"
                      register={register}
                      icon={<LocationIcon />}
                      errors={errors}
                      {...Text_Validation}
                    />

                    <InputField
                      type="text"
                      label="Your Education"
                      name="education"
                      register={register}
                      icon={<EducationIcon />}
                      errors={errors}
                      {...Text_Validation}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <RotatingSquare
                        width={40}
                        height={40}
                        color="#eef2d6"
                        ariaLabel="rotating-square-loading"
                        strokeWidth={2}
                      />
                    ) : (
                      <Typography
                        variant="button"
                        color={"text.secondary"}
                        fontWeight={600}
                      >
                        Submit
                      </Typography>
                    )}
                  </button>
                </form>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box className={styles.content_box}>
                <div>
                  <Typography
                    variant="h3"
                    color={"text.secondary"}
                    className={styles.header_text}
                  >
                    Details for the Program
                  </Typography>
                </div>

                <Typography variant="h5" color={"text.quinary"} mb={1}>
                  Student’s program
                </Typography>

                <Box className={styles.detailsBox} pb={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Details of the learning system
                  </Typography>
                  <Grid container justifyContent={"space-between"}>
                    <Grid item lg={6} md={12} sm={6}>
                      <ul>
                        <li>Total duration – 8 months</li>
                        <li>1 month – Observership</li>
                        <li>
                          1.5 months – The billing department and the waiting
                          area for patients
                        </li>
                        <li>1.5 months – Panchakarma department</li>
                      </ul>
                    </Grid>
                    <Grid item lg={6} md={12} sm={6}>
                      <ul>
                        <li>1.5 months – medicine department</li>
                        <li>
                          1.5 months – Patient consultation with a consultant
                        </li>
                        <li>1 month – Assistant doctor role</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>

                <Box className={styles.detailsBox} py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Eligibility criteria
                  </Typography>

                  <ul>
                    <li>BAMS or MD [ayu]</li>
                    <li>Only for Ayurved graduates</li>
                  </ul>
                </Box>

                <Box className={styles.detailsBox} py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Required documents [2 sets of Xerox]
                  </Typography>

                  <ul>
                    <li>BAMS /MD passing</li>
                    <li>Aadhar card</li>
                  </ul>
                </Box>

                <Box py={"2rem"}>
                  <Typography variant="h6" color="text.secondary" mb={1}>
                    Fees
                  </Typography>

                  <ul>
                    <li>
                      Indian Students: <strong>₹16,000/-INR</strong>{" "}
                    </li>
                    <li>
                      Non-Indian Students: <strong>$608/-USD</strong>{" "}
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Program;
