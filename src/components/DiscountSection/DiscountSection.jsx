import { useForm } from 'react-hook-form';
import s from './DiscountSection.module.css';

export default function DiscountSection(){

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm({ mode: "onChange" });


const onSubmit = () => {
 reset()
}

    return (
      <div>
        <img className={s.discount_img} src="discount_logo.png" />
        <h2 className={s.first_title}>5% off</h2>
        <h3 className={s.second_title}>on the first order</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder={placeholder}
            className={s.input_elem}
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
          <button className={s.form_btn}>{btnTitle}</button>
        </form>
      </div>
    );
}