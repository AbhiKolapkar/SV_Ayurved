import React from "react";
import { Title } from "../../components/Title/Title";
import { Box, Container, Typography } from "@mui/material";

const Terms = () => {
  return (
    <>
      <Container maxWidth="lg" className="section">
        <Title title={"Terms and Conditions"} />
      </Container>

      <section className="section">
        <Container maxWidth="lg">
          <Typography variant="h2" color="text.secondary" mb={4}>
            Terms and Conditions for SVAyurved
          </Typography>
          <Box>
            <Typography variant="body1" color="text.tertiary">
              These Terms and Conditions govern your use of the SVAyurved Clinic
              website and services provided by Dr. Jyoti Shinde. By accessing or
              using our website and services, you agree to comply with and be
              bound by these terms and conditions.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Medical Disclaimer
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              The information provided on our website is for informational
              purposes only and should not be considered a substitute for
              professional medical advice. Consult with Dr. Jyoti Shinde or
              another qualified healthcare professional regarding any medical
              concerns.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Use of Website
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              You may use our website for lawful purposes and in a manner
              consistent with these terms and conditions. You agree not to use
              our website for any illegal or unauthorized purpose.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Intellectual Property
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              All content on this website, including text, graphics, logos, and
              images, is the property of SVAyurved Clinic and is protected by
              copyright laws. You may not reproduce, distribute, or display this
              content without our written permission.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Privacy
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              Your use of our website and services is also governed by our
              Privacy Policy, which is incorporated into these terms and
              conditions.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Limitation of Liability
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              SVAyurved Clinic and Dr. Jyoti Shinde are not liable for any
              direct, indirect, incidental, consequential, or punitive damages
              resulting from your use of our website or services.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Governing Law
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              These terms and conditions are governed by and construed in
              accordance with the laws of Maharashtra jurisdiction. Any disputes
              will be subject to the exclusive jurisdiction of the courts in
              Maharashtra jurisdiction.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              If you have any questions or concerns about these terms and
              conditions, please contact us at vishwavajraayurved@gmail.com.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.tertiary">
              Please ensure that you customize these templates to fit your
              specific needs and consult with a legal expert to ensure full
              compliance with applicable laws and regulations.
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Terms;
