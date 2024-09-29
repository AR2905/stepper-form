export const fieldMappings = {
    1: [
      "firstName",
      "middleName",
      "lastName",
      "phoneNumber",
      "email",
      "birthday",
      "age",
      "blood",
      "height",
      "weight",
      "gender",
      "maritalStatus",
    ],
    2: [
      "addressLine1",
      "addressLine2",
      "city",
      "state",
      "country",
      "pinCode",
    ],
  };

  export const validateFields = (data, fieldMappings, newErrors) => {
    // const newErrors = {};
  
    fieldMappings.forEach((fieldName) => {
      const value = data[fieldName];
      if (!value) {
        newErrors[fieldName] = `${fieldName.replace(/([A-Z])/g, " $1").trim()} is required`;
      } else {
        // ===  validations  === //
        if (fieldName === "firstName" || fieldName === "middleName" || fieldName === "lastName") {
          if (value.trim().split("").length < 2) {
            newErrors[fieldName] = `${fieldName.replace(/([A-Z])/g, " $1").trim()} must contain at least 2 letters`;
          }
        }
        if (fieldName === "phoneNumber") {
          const isValidPhone = /^[+]?\d{10,13}$/.test(value);
          if (!isValidPhone) {
            newErrors[fieldName] = "Phone number must be 10 digits or 12/13 digits with country code";
          }
        }
        if (fieldName === "email") {
          const isValidEmail = /^\S+@\S+\.\S+$/.test(value);
          if (!isValidEmail) {
            newErrors[fieldName] = "Email is invalid";
          }
        }
        if (fieldName === "age") {
          if (value < 0 || value > 150) {
            newErrors[fieldName] = "Age must be between 0 and 150";
          }
        }
        if (fieldName === "blood") {
          const validBloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
          
          
          if (!validBloodGroups.includes(String(value).toUpperCase())) {
            newErrors[fieldName] = `Invalid blood group (eg. "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")`;
          }
        }
        if (fieldName === "height") {
          if (value < 0) {
            newErrors[fieldName] = "Height must be a positive number";
          }
          if (value < 60) {
            newErrors[fieldName] = "too short";
          }
        }
        if (fieldName === "weight") {
          if (value <= 10) {
            newErrors[fieldName] = "Weight must be greater than 10";
          }
          if (value >= 650) {
            newErrors[fieldName] = "Too much weight";
          }
        }
        if (fieldName === "pinCode") {
          if (value.length < 6 || value.length > 7) {
            newErrors[fieldName] = "Pin code must be 6 or 7 digits";
          }
        }
  
        if (fieldName === "addressLine1" || fieldName === "addressLine2") {
          if (value.trim().split(" ").length < 2) {
            newErrors[fieldName] = `Invalid ${fieldName.replace(/([A-Z])/g, " $1").trim()}-( It should have at least 2 words )`;
          }
        }
      }
    });
  
    //  === validation for age and birthday ===  //
    const birthday = data["birthday"];
    const age = data["age"];
  
    if (birthday && age) {
      const calculatedAge = calculateAge(birthday);
      if (calculatedAge !== Number(age)) {
        newErrors["age"] = `Age is not matching with Birthday (Should be ${calculatedAge})`;
        newErrors["birthday"] = `Birthday is not matching with Age (Should be year ${new Date().getFullYear() - age} /  ${new Date().getFullYear() - age - 1})`;
      }
    }
    if(age <= 0){
        newErrors["age"] = `Invalid Age (0)`;
    }
  
    return newErrors;
  };
  
  // == calculate Age from Birthday == //
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  