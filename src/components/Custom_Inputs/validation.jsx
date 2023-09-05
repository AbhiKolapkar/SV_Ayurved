// Personal Details Form Fields Validation
export const Full_Name_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
    pattern: {
      value: /^[A-Za-z]+\s[A-Za-z]+$/,
      message: "Please enter full name",
    },
  },
};

export const Email_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Please enter valid Email ID",
    },
  },
};

export const Phone_Number_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^\d{10}$/,
      message: "Enter valid number",
    },
    maxLength: {
      value: 10,
      message: "Phone number should be 10 digit",
    },
  },
};

export const Message_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    maxLength: {
      value: 200,
      message: "200 characters max",
    },
  },
};

export const Text_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[A-Za-z\s-]+$/,
      message: "Enter valid name",
    },
  },
};

export const SelectField_Validation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
  },
};


