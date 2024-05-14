import { object, string, date, number } from "yup";

export const reservationValidate = object().shape({
  customerEmail: string()
    .trim()
    .email("Địa chỉ email không hợp lệ")
    .required("Email khách hàng là bắt buộc"),

  date: date()
    .required("Ngày là bắt buộc")
    .typeError("Định dạng ngày không hợp lệ"),

  time: string()
    .trim()
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Định dạng thời gian không hợp lệ, phải là HH:MM"
    )
    .required("Thời gian là bắt buộc"),

  price: number()
    .required("Giá là bắt buộc")
    .positive("Giá phải là một số dương")
    .typeError("Giá phải là một số"),

  note: string().trim().max(500, "Ghi chú không thể vượt quá 500 ký tự"),

  status: string()
    .oneOf(["holding", "available", "reserved"], "Trạng thái không hợp lệ")
    .required("Trạng thái là bắt buộc"),
});
