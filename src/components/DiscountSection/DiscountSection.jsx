import { useForm, FormProvider } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import s from "./DiscountSection.module.css";

export default function DiscountSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    reset();
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.image_container}>
          <img src="discount_img.png" alt="Discount image" />
        </div>
        <div className={s.content_wrapper}>
          <h2 className={s.first_title}>5% off</h2>
          <h3 className={s.second_title}>on the first order</h3>
          <FormProvider>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                className={"discount_input"}
                placeholder={"+49"}
                {...register("phoneNumber", {
                  required: "The field must not be empty",
                  pattern: {
                    value: /^\+49\s\d{2,5}\s\d{6,12}$/,
                    message: "Please enter a valid international phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className={s.error_message}>{errors.phoneNumber.message}</p>
              )}
              <Button title={"Get a discount"} styleBtn={"discount_btn"} />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
