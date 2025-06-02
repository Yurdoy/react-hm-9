import React from "react";
import { useForm } from "react-hook-form";
import cls from "../components/DynamicForm.module.css";

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstFieldValue = watch("firstField");

  const onSubmit = (data) => {
    console.log("Data submitted: ", data);
  };
  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.form_firstField}>
        <label htmlFor="firstField">First Field</label>
        <input
          id="firstField"
          {...register("firstField", {
            required: "This field is compulsory",
            pattern: {
              value: /[A-Za-z]+$/i,
              message: "Please use latin letters only",
            },
          })}
        />
        {errors.firstField && <p>{errors.firstField.message}</p>}
      </div>

      {firstFieldValue !== "" && (
        <div className={cls.form_secondField}>
          <label htmlFor="secondField">Second Field</label>
          <input
            id="secondField"
            {...register("secondField", {
              required: "This field is compulsory",
              pattern: {
                value: /[A-Za-z]+$/i,
                message: "Please use latin letters only",
              },
            })}
          />
          {errors.secondField && <p>{errors.secondField.message}</p>}
        </div>
      )}

      <button className={cls.form_btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
