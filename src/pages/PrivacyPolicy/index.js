import React from "react";
import { Title } from "../../components/Title/Title";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" className="section">
        <Title title={"Privacy Policy"} />
      </Container>

      <section className="section">
        <Container maxWidth="lg">
          <Typography variant="h2" color="text.secondary" mb={4}>
            Privacy Policy for SVAyurved
          </Typography>
          <Box>
            <Typography variant="body1" color="text.tertiary">
              At SVAyurved, we are committed to safeguarding your privacy. This
              Privacy Policy outlines how your personal information is
              collected, used, and protected. By using our website or services,
              you consent to the practices described in this policy.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Information We Collect
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              We may collect personal information such as your name, email
              address, phone number, and medical history when you interact with
              our website or services. This information is used solely for the
              purpose of providing you with the best possible healthcare
              services.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              How We Use Your Information
            </Typography>
            {[
              "To provide you with personalized medical care and treatment plans.",
              "To communicate with you about your appointments, treatment options, and updates.",
              "To improve our services based on your feedback and needs.",
              "To comply with legal requirements and protect our rights.",
            ].map((text, i) => (
              <Typography variant="body1" color="text.tertiary">
                {i+1}. &nbsp;&nbsp; {text}
              </Typography>
            ))}
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Security Measures
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              We take every reasonable precaution to protect your personal
              information. This includes secure storage, encryption, and
              restricted access to your data.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Third-Party Websites and Links
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Your Choices
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              You have the right to access, update, or delete your personal
              information. If you have any concerns about your data, please
              contact us at{" "}
              <a href="">
                <b>vishwavajraayurved@gmail.com</b>
              </a>
              .
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" color="text.secondary" mb={1}>
              Updates to this Privacy Policy
            </Typography>
            <Typography variant="body1" color="text.tertiary">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal reasons. Please review this
              policy periodically for updates.
            </Typography>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
