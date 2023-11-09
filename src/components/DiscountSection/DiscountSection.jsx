import { useForm, FormProvider } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import s from "./DiscountSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountAction } from "../../asyncActions/discount";
import "react-toastify/dist/ReactToastify.css";

export default function DiscountSection() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(getDiscountAction(data));
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
            <form onSubmit={handleSubmit(onSubmit)} className={s.discount_form}>
              <Input
                className={"discount_input"}
                placeholder={"+49"}
                {...register("phoneNumber", {
                  required: "The field must not be empty",
                  pattern: {
                    value: /^\+49\d{10,12}$/,
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
