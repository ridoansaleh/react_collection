import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { PartOne, PartTwo } from "./appStyle";
import "./App.css";

const schema = yup.object().shape({
  name: yup.string().required(),
  hobby: yup.string().required(),
  address: yup.string().when("name", {
    is: (val) => val !== "",
    then: yup.string().required(),
  }),
  gender: yup.string().required(),
});

function App() {
  const [step, setStep] = useState(1);
  const { trigger, register, errors, getValues, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (step === 1) {
      if (!errors.name && !errors.hobby) {
        setStep(2);
      }
    }
    if (step === 2) {
      console.log(data);
      // setStep((pvStep) => pvStep + 1);
    }
  };

  const onError = (errors, e) => {
    console.log(errors);
    console.log(errors.hobby);
    if (step === 1) {
      if (!errors.name && !errors.hobby) {
        setStep(2);
      }
    }
  };

  const onValueChange = (e) => {
    console.log(e);
  };

  const handleNext = async () => {
    const isForm1Valid = await trigger(["name", "hobby"]);
    console.log("Next");
    // console.log("errs : ", errs);
    // const { name, hobby } = getValues(["name", "hobby"]);
    // console.log("name : ", name);
    // console.log("errors : ", errors);
    if (step === 1) {
      if (isForm1Valid) {
        setStep(2);
      }
    }
  };

  const handlePrev = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <PartOne active={step}>
        <input
          name="name"
          // className="field"
          placeholder="Name"
          ref={register}
        />
        <div className="error">{errors.name?.message}</div>
        <select name="hobby" className="field" ref={register}>
          <option value="swimming">swimming</option>
          <option value="run">run</option>
          <option value="watch">watch</option>
        </select>
      </PartOne>
      <PartTwo active={step}>
        <input
          name="address"
          // className="field"
          placeholder="Address"
          ref={register}
        />
        <div className="error">{errors.address?.message}</div>
        <div className="field">
          <label>
            <input type="radio" name="gender" ref={register} value="Male" />
            Male
          </label>
          <label>
            <input type="radio" value="Female" name="gender" ref={register} />
            Female
          </label>
        </div>
      </PartTwo>
      <input type="button" value="Previous" onClick={handlePrev} />
      {step === 1 ? (
        <input type="button" value="Next" onClick={handleNext} />
      ) : (
        <input type="submit" />
      )}
    </form>
  );
}

export default App;
