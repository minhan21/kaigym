import { object, string, number, mixed } from "yup";

export const reservationValidate = object().shape({
  customerEmail: string()
    .trim()
    .email("Địa chỉ email không hợp lệ")
    .required("Email khách hàng là bắt buộc"),
  title: string().trim().required("Tiêu đề là bắt buộc"),
  date: string().required("Ngày là bắt buộc"),
  start: string()
    .trim()
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Định dạng thời gian không hợp lệ, phải là HH:MM"
    )
    .required("Thời gian là bắt buộc"),

  end: string()
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
  color: string().notRequired(),
  status: mixed<"holding" | "available" | "reserved">()
    .oneOf(["holding", "available", "reserved"])
    .required("Trạng thái là bắt buộc"),
});
